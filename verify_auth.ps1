$logFile = "verify_log.txt"
"Starting Verification..." | Out-File $logFile -Encoding utf8

$rand = Get-Random -Minimum 1000 -Maximum 9999
$baseUrl = "http://localhost:3000/api"
$email = "testauth$rand@example.com"
$password = "Test@1234"
$mobile = "987654$rand"

"1. Registering User: $email" | Add-Content $logFile
$registerBody = @{
    name = "Test User $rand"
    email = $email
    password = $password
    role = "WORKER"
    mobile = $mobile
    address = @{
        city = "Test City"
        state = "Test State"
        pincode = "123456"
        country = "Test Country"
    }
} | ConvertTo-Json -Depth 3

try {
    $response = Invoke-RestMethod -Uri "$baseUrl/auth/register" -Method Post -Body $registerBody -ContentType "application/json" -ErrorAction Stop
    "Registration Successful" | Add-Content $logFile
} catch {
    $msg = $_
    try {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $msg = $reader.ReadToEnd()
    } catch {}
    "Registration Failed: $msg" | Add-Content $logFile
}

"2. Logging in..." | Add-Content $logFile
$loginBody = @{
    email = $email
    password = $password
} | ConvertTo-Json

try {
    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method Post -Body $loginBody -ContentType "application/json" -ErrorAction Stop
    $token = $loginResponse.data.token
    "Login Successful. Token Length: $($token.Length)" | Add-Content $logFile
} catch {
    "Login Failed: $($_.Exception.Message)" | Add-Content $logFile
    exit 1
}

"3. Testing Protected Route ensure Auth works..." | Add-Content $logFile
try {
    $headers = @{ Authorization = "Bearer $token" }
    $testResponse = Invoke-RestMethod -Uri "http://localhost:3000/test-auth" -Method Get -Headers $headers -ErrorAction Stop
    "Auth Test Successful! User: $($testResponse.user.email)" | Add-Content $logFile
} catch {
    "Auth Test Failed: $($_.Exception.Message)" | Add-Content $logFile
}

"4. Testing Protected Route without Token (should fail)..." | Add-Content $logFile
try {
    Invoke-RestMethod -Uri "http://localhost:3000/test-auth" -Method Get -ErrorAction Stop
    "Auth Test Passed for No Token (Unexpected!)" | Add-Content $logFile
} catch {
    "Auth Test Failed as expected (401): $($_.Exception.Message)" | Add-Content $logFile
}

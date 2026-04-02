import app from "./app";
import dotenv from "dotenv";
import getIPAddress from "./services/getIPAddress";

dotenv.config();

const port = process.env.PORT || 5000;
const ip = getIPAddress();

app.listen(port, () => {
  console.log(`✅ Server is running | http://${ip}:${port} | Status: Active`);
});

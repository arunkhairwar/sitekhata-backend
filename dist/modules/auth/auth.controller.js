"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const auth_schema_1 = require("./auth.schema");
const auth_service_1 = require("./auth.service");
const registerUser = async (req, res) => {
    try {
        const validation = auth_schema_1.registerUserSchema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({ error: validation.error.format() });
            return;
        }
        const user = await auth_service_1.authService.register(validation.data);
        res.status(201).json(user);
    }
    catch (error) {
        if (error.message === "User already exists") {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    try {
        const validation = auth_schema_1.loginUserSchema.safeParse(req.body);
        if (!validation.success) {
            res.status(400).json({ error: validation.error.format() });
            return;
        }
        const result = await auth_service_1.authService.login(validation.data);
        res.status(200).json(result);
    }
    catch (error) {
        if (error.message === "Invalid credentials") {
            res.status(401).json({ error: error.message });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};
exports.loginUser = loginUser;

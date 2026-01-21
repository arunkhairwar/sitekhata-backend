"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.updateUser = updateUser;
const db_1 = require("../../db");
async function getUsers(req, res) {
    const result = await db_1.pool.query("SELECT * FROM users;");
    res.json(result.rows);
}
async function updateUser(req, res) {
    const result = await db_1.pool.query(`SELECT * FROM users where user=${req.body.name};`);
    res.json(result.rows);
}

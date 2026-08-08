"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("./generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const app = (0, express_1.default)();
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL
});
const prismaClient = new client_1.PrismaClient({
    adapter
});
app.use(express_1.default.json());
// GET
app.get('/', async (req, res) => {
    try {
        const data = await prismaClient.user.findMany();
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});
// POST
app.post('/', async (req, res) => {
    try {
        const data = await prismaClient.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});
app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});

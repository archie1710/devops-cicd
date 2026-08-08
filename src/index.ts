import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg as any;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// GET request
app.get('/', async (req, res) => {
    const data = await prisma.user.findMany();

    res.json(data);
});

// POST request
app.post('/', async (req, res) => {
    const data = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });

    res.json(data);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

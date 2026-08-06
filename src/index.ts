import express from 'express';
import prisma from '@prisma/client';
const app = express();
const prismaClient = new prisma.PrismaClient();

app.get('/',async (req, res) => {
     data : {
        username: Math.random().toString(),
        password: Math.random().toString()
    };
    res.json(data);
}

});

app.post('/',async(req,res)=>(

    username = math.random().toString();
    password = math.random().toString();
    res.json('Hello, World!');
    res.json('Response received')
))

app.listen(3000)


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/',(req,res)=>(
    res.send('Response received')
))

const PORT = process.env.PORT || 3000;


const express = require('express');
const app = express();
app.use(express.json());


const todoRouter = require('./routes/todo');
app.use("/todo", todoRouter);

app.listen(8090 , ()=>{
    console.log('listen to pory 8090');
})
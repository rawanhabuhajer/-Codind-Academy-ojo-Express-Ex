
const express = require('express');
const app = express();
app.use(express.json());



const newRouter = require('./routes/public');
app.use('/' , newRouter);

app.listen(8000 , ()=>{
    console.log('listen to port 8000');
})
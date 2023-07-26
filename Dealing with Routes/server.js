const express = require('express');
const fs = require('fs');
const helmet = require("helmet");
var session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();


// Q-1
// app.get('/', (req , res)=>{
//     res.status(200).send('hello world');
// })
// // Q-2
// app.get('/greet/:name', (req , res)=>{
//     const name = req.params.name
//     res.status(200).send(`hello ${name}`);
// })
// // Q-3
// app.get("/echo" ,(req,res)=>{
//     const message = req.query.message;
//     res.send(message);
// })

// // Q-4

//  fs.readFile('data.json' , 'Utf-8' , (err ,data)=>{
//     app.get('/data' , (req, res)=>{
//         res.send(data)
//     })
// })

// // Q-5
// // app.post('/info' , (req , res)=>{

// // })
// // Q-6 need edit
// app.use(session({
//     secret: 'your-secretthisismysecrctekeyfhrgfgrfrty84fwir767-key',
//     resave: false,
//     saveUninitialized: true,
  
//   }));
// app.get('/session' , (req,res)=>{
//     const username = req.session.username;
//     res.send(`hello ${username}`)
// }) 

// // Q-7
// app.use(cookieParser());
// app.get(`/cookies`,(req,res)=>{
//     const username = req.cookies.username
//     res.send(`Hello, ${username}`);
//     console.log(req.cookies.username);
  
// });

// // Q-8
// const { body, validationResult } = require('express-validator');

// app.post('/register', [
//   body('email').notEmpty().escape(),
// ], (req, res) => {
//   const errors = validationResult(req);
//   if (errors.isEmpty()) {
//     return res.send(`Hello!`);
//   }
  
//   res.status(400).json({ errors: errors.array() });
// });

//Q9
// const helmet = require("helmet");
// app.use(helmet())

// app.get('/' , (req , res)=>{
//   res.send('hello')
// })

//q10 
// const cors = require('cors')
// app.use(cors())
// app.get('/' , (req , res)=>{
//   res.send('hello')
// }) 

//q11
// const compression = require('compression');
// app.use(compression())
// app.get('/' , (req , res)=>{
//   res.send('hello')
// }) 

//q12
// const morgan = require('morgan')
// app.use(morgan('dev'));
// app.get('/' , (req , res)=>{
//   res.send('hello')
// }) 

app.listen(8070 , ()=>{
    console.log('listen to port 3001');
})


8//tested in postman

const express = require('express');
const router = express.Router();
const todos = [{id:0}];


router.get ('/get' , (req , res)=>{
    res.status(200).json({todos})
    console.log(req.body);
})
router.get ('/get/:id' , (req , res)=>{
    id = req.params.id* 1;
    const todo = todos.find(el => el.id === id)
    res.status(200).json({todo})
})

router.delete('/delete/:id', (req, res) => {
    id = req.params.id*1;
    const deleteTodo = todos.find(el => el.id === id)
    todos.splice(deleteTodo , 1)
    res.status(201).json({todos})
});

router.post('/post', (req, res) => {
    const newId = todos[todos.length-1].id+1;
    const newTodo = Object.assign({id: newId} , req.body);
    todos.push(newTodo)
    res.status(201).json({todos})
});



router.patch('/patch/:id', (req, res) => {
    const id = req.params.id * 1 ;
    const editId = todos.findIndex(el=> el.id === id);
    const editTodo = {...todos[editId] , ...req.body}
    todos[editId]= editTodo ; 
    res.status(204).json({todos})
});

module.exports = router;
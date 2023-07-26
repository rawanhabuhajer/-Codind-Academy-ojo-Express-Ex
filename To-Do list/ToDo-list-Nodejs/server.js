const fs = require('fs');
const express= require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());
tasks = [
{id:0}]

// const tasks = fs.readFileSync('./data.js' , (err , data)=>{
//     console.log(err);
// })
app.get('/', (req, res) => {
    const filterTask = tasks.filter(task=> task.id !== 0 );
    res.status(200).json(filterTask)
      
  });
  

app.post('/', (req , res)=>{
    const newId = tasks[tasks.length -1].id +1 ; 
    const newTask = Object.assign({id: newId} , req.body);
    
    tasks.push(newTask);
    res.status(201).json({tasks})
    console.log(req.body);
    

})

app.delete('/:id', (req, res) => {
    const id = req.params.id * 1;
    const taskIndex = tasks.findIndex(el => el.id === id);
  
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      res.status(204).json({ tasks });
    } 
  });

  app.patch('/:id', (req, res) => {
  const id = req.params.id * 1;
  const taskIndex = tasks.findIndex(el => el.id === id);

    const updatedTask = { ...tasks[taskIndex], ...req.body };
    tasks[taskIndex] = updatedTask;
    res.status(204).json({ tasks });

});

app.listen(8000 , ()=>{
    console.log('listening to the port');
})


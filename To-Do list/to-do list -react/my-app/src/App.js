import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(null);
  const [editTodo, setEditTodo] = useState(null);

  
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/");
     
        setTodos(res.data);
      } catch (error) {
        console.error( error);
      }
    };

    getTodos();
  }, []);

    const addTodo = async (text)=>{
      const res = await axios.post("http://127.0.0.1:8000/" , {message : text} );
      setTodos(res.data)
    }

   const todoInput = useRef("")
    const onSubmitHandler = (e)=>{
     addTodo(todoInput.current.value)
     addTodo.target.value =''
    }
    
    const deleteTodo = async (id) => {
     await axios.delete(`http://127.0.0.1:8000/${id}`);
     const res = await axios.get("http://127.0.0.1:8000/");
      setTodos(res.data);
      
     }
     const handleEditStart = (id) => {
      setEditTodo(id);
    };
    
    const handleEditChange = (e, id) => {
      // Update the todo message in the local state
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, message: e.target.value };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
    
    const handleEditSave = async (id) => {
      const todoToUpdate = todos.find((todo) => todo.id === id);
  
      await axios.patch(`http://127.0.0.1:8000/${id}`, todoToUpdate);
    
      setEditTodo(null);
      const res = await axios.get("http://127.0.0.1:8000/");
      setTodos(res.data);
    };
    
  return (
    <>
      <div className="container">
        <form onSubmit={onSubmitHandler}>
          <input type="text" ref={todoInput} />
          <input type="submit"/>
        </form>
        {todos ? (
  todos.map((todo) => (
    <div key={todo.id} className="todo-div">
      {editTodo === todo.id ? (
        <input
          type="text"
          value={todo.message}
          onChange={(e) => handleEditChange(e, todo.id)}
        />
      ) : (
        todo.message
      )}
      <div>
        {editTodo === todo.id ? (
          <button onClick={() => handleEditSave(todo.id)}>Save</button>
        ) : (
          <button onClick={() => handleEditStart(todo.id)}>Edit</button>
        )}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  ))
) : (
  <p>Loading todos...</p>
)}

      </div>
    </>
  );
}
export default App;

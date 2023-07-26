import React from 'react'
const Todos = ({ todos }) => {
    return (
      todos.map(todo => (
        <p key={todo.id}>{todo.message}</p>
      ))
    );
  };
  
  export default Todos;




import React from 'react';

const Todo = ({ todo, removeTodo, completeTodos}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
    
      <div>
        <button className='complete' onClick={()=>completeTodos(todo.id)}
         >completa</button>
        <button className='remove' onClick={()=> removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};
export default Todo;

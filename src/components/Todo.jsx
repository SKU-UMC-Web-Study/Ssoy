import React, { useState } from 'react';
import './Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo(event.target.value.trim());
    }
  }

  const addTodo = (todo) => {
    if (todo.trim() !== "") {
      const newTodo = { id: todos.length + 1, content: todo };
      setTodos([...todos, newTodo]);
    }
  };

  const completeTodo = (id) => {
    const completedTodo = todos.find(todo => todo.id === id);
    if (completedTodo) {
      setCompletedTodos([...completedTodos, completedTodo]);
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const deleteTodo = (id) => {
    const updatedCompletedTodos = completedTodos.filter(todo => todo.id !== id);
    setCompletedTodos(updatedCompletedTodos);
  };

  return (
    <div className="Todo">
      <h1 id="Todo">UMC Study Plan</h1>
      <hr></hr>
      <div className="TodoInput">
        <input 
          type="text"
          id="todo-input"
          placeholder="UMC 스터디 계획을 작성해보세요" 
          onKeyPress={onKeyPress}
        ></input>
      </div>
      <div className="task">
        <div className="TodoList">
          <p>해야 할 일</p>
          <div className="TodoList-item">
            {todos.map(todo => (
              <div key={todo.id} className="item">
                <p>{todo.content}</p>
                <button onClick={() => completeTodo(todo.id)}>완료</button>
              </div>
            ))}
          </div>
          </div>
          <div className="completeList">
            <p>해낸 일</p>
            <div className="completeList-item">
              {completedTodos.map(todo => (
                <div key={todo.id} className="item">
                  <p>{todo.content}</p>
                  <button onClick={() => deleteTodo(todo.id)}>삭제</button> 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Todo;

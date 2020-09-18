import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, deleteTodo }) {

  return (
    <div
      style={{ textDecoration: todo.done ? 'line-through' : '' }}
      className="todo">
      <span>{index + 1 + ". "}</span>

      {todo.text}

      <span><button onClick={() => completeTodo(index)}>Complete</button></span>
      <span><button onClick={() => deleteTodo(index)}>X</button></span>
    </div>
  )

}

function TodoForm({ addTodo }) {

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  const [value, setValue] = useState('');
  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeHolder="add text here"
        onChange={e => setValue(e.target.value)}

      ></input>
    </form>
  );
}
function App() {

  const [todos, setTodos] = useState([
    {
      text: "start coding",
      done: false
    },
    {
      text: "drink warm water",
      done: false
    },
    {
      text: "eat brunch",
      done: false
    },
    {
      text: "scedule meeting",
      done: false
    },
    {
      text: "drink coffee",
      done: false
    },
    {
      text: "meet friend",
      done: false
    },
    {
      text: "have snacks",
      done: false
    },
    {
      text: "set alarm",
      done: false
    }


  ]);

  const addTodo = text => {
    const newtodo = [...todos, { text: text, done: false }];
    setTodos(newtodo);
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].done = true;
    setTodos(newTodos);
  }
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <div className="todo-list">
        {
          todos.map((e, i) => (
            <Todo
              key={i}
              index={i}
              todo={e}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            ></Todo>
          ))
        }
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </div>
  );
}

export default App;

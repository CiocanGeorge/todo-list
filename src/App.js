import React, { useState, useEffect } from "react";
import './App.css';
//component
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //use effect
  useEffect(() => {
    filterHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    // eslint-disable-next-line default-case
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      case 'all':
        setFilteredTodos(todos);
        break;
    }

  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
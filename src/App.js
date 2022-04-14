import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(["Todo-1", "Todo-2"]);
  function addTodo() {
    setTodos((todos) => [...todos, `Todo-${todos.length + 1}`]);
  }

  const myTodos = todos.map((todo) => <li key={todo}>{todo}</li>);
  return (
    <div className="App">
      <h1>useState Hook in React</h1>
      <h2>My Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <ul>{myTodos}</ul>
    </div>
  );
}

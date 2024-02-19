//learning how to do API calling in basic and Axios method
import { useState, useEffect } from "react";
import axios from "axios";

interface TodoItem {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}
const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  //using useEffect, so when the component render api call happen, fetch or axios happen;
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res)
  //     .then((e) => e.json())
  //     .then((e) => setTodos(e as TodoItem[]));
  // }, []);

  //now use Axios for fetching the data
  useEffect(() => {
    axios.get<TodoItem[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => setTodos(res.data));
  }, []);
  
  return (
    <div className="main">
      {/* this is for all todo title 
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))} */}

      {/* now this if for todo which are compleded, use filter*/}
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </div>
  );
};
export default App;

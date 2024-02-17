import { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}
export const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };


  const handleClick = () => {
    const newTodo: item = {id : Date.now(), text : input, completed: false};
    setTodos([...todos, newTodo]);
    setInput(" ");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="flex container mx-auto p-4 bg-slate-100 justify-center items-center flex-col rounded-md">
        <h1 className="text-6xl font-bold text-indigo-500 mt-8 mb-8">
          Todo List
        </h1>
        <ul className="list-disc pl-8">
          {todos.map((todo) => (
            <li
              className="mb-2 font-medium text-3xl"
              key={todo.id}
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add Item "
          className="border-2 border-gray-300 p-2 mr-2 focus:outline-none focus:border-indigo-500 mt-10 text-xl"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button
          className="bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline mt-4 mb-8 text-lg" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";

import "./App.css";
import InputField from "./components/InputField/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">To Do</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodo={completedTodo}
        setCompletedTodo={setCompletedTodo}
      />
    </div>
  );
};

export default App;

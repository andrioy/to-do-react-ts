import React from "react";
import { Todo } from "../../model";
import "./todoList.css";
import SingleTodo from "../SingleTodo/SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Todo[];
  setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodo,
  setCompletedTodo,
}: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            )
        )}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.map(
          (todo) =>
            todo.isDone && (
              <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TodoList;

import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = React.createContext({
  todos: [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);

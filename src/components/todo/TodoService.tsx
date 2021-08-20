/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export type Itodo = {
  id: number;
  text: string;
  dueDate: moment.Moment | null;
  done: boolean;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const initNextId = (initialTodos: Itodo[]) => {
    const maxIdTodo = initialTodos.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );
    setNextIdState(maxIdTodo.id + 1);
  };

  const incrementNextId = () => {
    setNextIdState((prevNextIdState) => prevNextIdState + 1);
  };

  const toggleTodo = (id: number) => {
    const newTodoState = todoState.map((todo: Itodo): Itodo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodoState(newTodoState);
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
      })
    );
  };

  const loadData = () => {
    let data = localStorage.getItem('todos');
    if (data === null) data = '[]';
    initialTodos = JSON.parse(data!);
    if (initialTodos && initialTodos.length >= 1) {
      initNextId(initialTodos);
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem('todos', JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};

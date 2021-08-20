import { useTodo } from './TodoService';
import TodoTemplate from './template/TodoTemplate';
import TodoHead from './template/head/TodoHead';
import TodoCreate from './template/create/TodoCreate';
import TodoList from './template/list/TodoList';
import TodoFooter from './template/footer/TodoFooter';

const TodoContainer = () => {
  const {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  } = useTodo();

  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={todoState}
        />
        <TodoFooter todos={todoState} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;

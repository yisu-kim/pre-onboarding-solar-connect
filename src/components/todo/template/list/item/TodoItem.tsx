import {
  CheckOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Itodo } from 'src/components/todo/TodoService';
import React from 'react';
import styled, { css } from 'styled-components';
import { getDateString, getDayString } from 'src/utils/date';
import { Modal } from 'antd';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 3;
  min-width: 300px;
  word-wrap: break-word;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const DueDate = styled.div`
  flex: 2;
  text-align: right;
  margin-right: 20px;
`;

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const done = todo.done;
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const removeConfirm = () => {
    Modal.confirm({
      title: 'Todo 삭제',
      icon: <ExclamationCircleOutlined />,
      content: 'Todo를 삭제하면 복구할 수 없습니다.',
      okText: '삭제',
      cancelText: '취소',
      onOk: () => handleRemove(),
    });
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{todo.text}</Text>
      {todo.dueDate && (
        <DueDate>
          {`${getDayString(todo.dueDate)} ${getDateString(todo.dueDate)}`}
        </DueDate>
      )}
      <Remove onClick={removeConfirm}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

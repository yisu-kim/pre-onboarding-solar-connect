import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { DatePicker } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Itodo } from 'src/components/todo/TodoService';

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [dueDate, setDueDate] = useState<moment.Moment | null>(
    moment(new Date())
  );

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const handleDate = (value: moment.Moment | null) => setDueDate(value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지

    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    createTodo({
      id: nextId,
      text: trimmed,
      dueDate: dueDate,
      done: false,
    });
    incrementNextId(); // nextId 하나 증가

    setValue(''); // input 초기화
    setOpen(false); // open 닫기
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />

          <CustomDatePicker onChange={handleDate} value={dueDate} />
          <CircleButton
            onClick={handleToggle}
            open={open}
            hasValue={!!value.trim()}
          >
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);

const CircleButton = styled.button<{ open: boolean; hasValue: boolean }>`
  background: ${(props) => (props.hasValue ? '#33bb77' : '#a9a9a9')};
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  flex: 3;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  flex: 1;
`;

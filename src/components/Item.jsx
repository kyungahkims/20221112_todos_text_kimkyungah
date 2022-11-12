import { useState } from "react";
import styled, { css } from "styled-components";
import { FaRegCheckSquare, FaCheckSquare } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { TODO, useTodoDispatch } from "../hooks/useTodoReducer";

function Item({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useTodoDispatch();
  const [remove, setRemove] = useState(false);

  const onToggle = () => {
    dispatch({ type: TODO.TOGGLE, id });
  };

  const onRemove = () => {
    setRemove(true);
    dispatch({ type: TODO.REMOVE, id });
  };

  return (
    <Items remove={remove}>
      <Check onClick={onToggle}>
        {done ? <FaCheckSquare /> : <FaRegCheckSquare />}
      </Check>
      <TodoText done={done}>{text}</TodoText>
      <FiTrash onClick={onRemove} cursor="pointer" />
    </Items>
  );
}

const Items = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

const Check = styled.div`
  color: #ccc;
`;

const TodoText = styled.p`
  flex: 1;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
      color: #bbb;
    `}
`;

export default Item;

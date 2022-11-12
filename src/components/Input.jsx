import { useRef, useState } from "react";
import styled from "styled-components";
import { TODO, useTodoDispatch } from "../hooks/useTodoReducer";

function Input() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState("");
  const nextId = useRef(3);
  const Text = (e) => setText(e.target.value);
  const onCreate = () => {
    dispatch({ type: TODO.CREATE, id: nextId.current, text });
    nextId.current++;
    setText("");
  };

  return (
    <Inputs>
      <input type="text" onChange={Text} value={text} />
      <Btn onClick={onCreate}>등록</Btn>
    </Inputs>
  );
}

const Inputs = styled.div`
  padding: 8px;

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    outline: none;
    border: 1px solid #e6e6e6;
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 14px 0;
  background-color: #ed6753;
  color: #fff;
  cursor: pointer;
  border: none;
`;

export default Input;

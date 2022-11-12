import styled, { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./hooks/useTodoReducer";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoProvider>
        <Content>
          <Template>
            <TodoList />
            <Input />
          </Template>
        </Content>
      </TodoProvider>
    </>
  );
}

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ee9f8b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;

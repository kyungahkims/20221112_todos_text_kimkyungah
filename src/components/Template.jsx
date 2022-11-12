import styled from "styled-components";

function Template({ children }) {
  return (
    <Wrapper>
      <Title>투두리스트</Title>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 3px 7px 4px rgba(252, 112, 88, 0.2);
`;

const Title = styled.h3`
  text-align: center;
  padding: 1rem;
`;

export default Template;

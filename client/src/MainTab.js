import React from "react";
import styled from "styled-components";
const MainTab = () => {
  return (
    <Container>
      <div>콘텐츠 헤더</div>
      <div>태그</div>
      <div>콘텐츠 1</div>
      <div>콘텐츠 2</div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 20%;
`;

export default MainTab;

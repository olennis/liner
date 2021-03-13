import React from "react";
import styled from "styled-components";

const RightTab = () => {
  return (
    <Container>
      <div>welcome package</div>
      <div>add liner</div>
      <div>trending keyword</div>
      <div>trending pages</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 100px;
`;

export default RightTab;

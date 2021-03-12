import React from "react";
import styled from "styled-components";
const SideNav = () => {
  return (
    <Container>
      <div>For you</div>
      <div>My Highlights</div>
      <div>more</div>
      <button>Upgrade</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 100px;
  position: fixed;
`;

export default SideNav;

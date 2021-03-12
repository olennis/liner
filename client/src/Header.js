import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Logo>로고</Logo>
      <InputDiv>
        <HeaderForm>
          <HeaderInput type="text" placeholder="Search on LINER"></HeaderInput>
        </HeaderForm>
        <div>돋보기</div>
      </InputDiv>
      <div>
        <span>notification</span>
        <span>pdf</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
`;
const HeaderInput = styled.input`
  width: 90%;
  border: none;
`;
const HeaderForm = styled.form`
  width: 100%;
`;
const InputDiv = styled.div`
  width: 680px;
  border-radius: 8px;
  background-color: #eef1f4;
  font-family: "Roboto", "Noto Sans KR", "Noto Sans JP", "Noto Sans SC",
    sans-serif;
  line-height: 1.2;
  font-size: 16px;
  color: #333;
  padding: 10px 54px 11px 16px;
`;
const Logo = styled.span`
  width: 100px;
`;

export default Header;

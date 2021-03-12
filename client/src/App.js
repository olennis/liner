import Header from "./Header";
import SideNav from "./SideNav";
import MainTab from "./MainTab";
import RightTab from "./RightTab";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header></Header>
      <Container className="App">
        <SideNav></SideNav>
        <MainTab></MainTab>
        <RightTab></RightTab>
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default App;

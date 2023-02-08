import { Outlet } from "react-router";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
const MainDiv = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};
const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
  min-width: 78%;
  margin-left: 36vh;
  margin-top: 10.5vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 15px;
`;
export default MainDiv;

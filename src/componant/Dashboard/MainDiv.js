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
  // background-color:black;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 78%;
  margin-left: 36vh;
  margin-top: 10.5vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-top: 15px;
  padding-left:21px;
`;
export default MainDiv;

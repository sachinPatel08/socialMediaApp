import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Login from "./Login";
import Register from "./register";

const Home = () => {
  const [view, setView] = useState(true);

  return (
    <>
      <Container>
        <div className="main">
          <Row className="px-5 py-3">
            <Col
              className="c-1"
              onClick={() => {
                if (view === false) {
                  setView(!view);
                }
              }}
            >
              Login
            </Col>
            <Col
              className="c-1"
              onClick={() => {
                if (view === true) {
                  setView(!view);
                }
              }}
            >
              Register
            </Col>
          </Row>
          <Row className="px-3">{view ? <Login /> : <Register />}</Row>
        </div>
      </Container>
    </>
  );
};
const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25rem;
  width: 40rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  courser: pointer;

  .c-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    courser: pointer;
  }
`;
export default Home;

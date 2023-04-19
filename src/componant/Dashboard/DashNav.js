import { useContext } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import globalData from "../../context/CreateContext";

const DashNav = () => {
  const token = useContext(globalData);
  return (
    <Main>
      <div>
        <Navbar bg="dark" variant="dark" className="navbar-expand-lg">
          <Container>
            <Navbar.Brand style={{textTransform: "capitalize"}} href="#home">{`Welcome Back ${token[1]},`}</Navbar.Brand>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
            <Nav className="ml-0">
              {/* <Nav.Link href="#home"><i className="fa-solid fa-user-large"></i>{token[1]}</Nav.Link> */}
              <div className="btn-group dropstart drp-menu">
                <button
                  style={{ border: "none", background: "none", color: "white" }}
                  size="sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i  className="fa-solid fa-user-large"> </i>
                  <span style={{textTransform: "capitalize"}}>&nbsp;{token[1]}</span>                 
                </button>
                <ul
                  className="dropdown-menu drp-con"
                  aria-labelledby="navbarDropdown"
                >
                  <NavLink style={{textDecoration: "none"}} to="/Dashboard/myPost">
                    <li className="dropdown-item">My Post</li>
                  </NavLink>
                  <NavLink style={{textDecoration: "none"}} to="/Dashboard">
                    <li className="dropdown-item">Account</li>
                  </NavLink>
                  <NavLink style={{textDecoration: "none"}} to="/Dashboard/Logout">
                    <li className="dropdown-item">Logout</li>
                  </NavLink>
                </ul>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </Main>
  );
};
const Main = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  display: block;
  margin-left: 15rem;
  min-width: 82%;
  
  .drp-menu {
    position: relative;
  }
  .drp-con {
    position: absolute;
  }
  .dropdown-item{
    
  }
  
`;
export default DashNav;

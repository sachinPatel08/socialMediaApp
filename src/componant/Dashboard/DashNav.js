import {useContext} from 'react'
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";

import globalData from '../../context/CreateContext'

const DashNav = ()=>{
  const token = useContext(globalData)
    return(
        <Main>
        
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{`Welcome Back ${token[1]},`}</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-0">
            <Nav.Link href="#home"><i class="fa-solid fa-user-large"></i>{token[1]}</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
         
        </Main>
    )
}
const Main = styled.div`
position:fixed;
top:0;
z-index:999;
display:block;
margin-left:15rem;
min-width:82%;
overflow:hidden;


`
export default DashNav;
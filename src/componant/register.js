import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Form,InputGroup} from 'react-bootstrap';
import { CAlert } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate()
    const [userName,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")

    const url = "http://localhost:5000/user/register"
    const registerUser = (e)=>
    {
      e.preventDefault()
      let data={userName,email,password}
      
      fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        withCredentials: false,    
   
        body:JSON.stringify(data)
      }).then((resp)=>{
        resp.json().then((result)=>{
          console.log("result",result)
        })
      })
  
    }
    
  return (
    <>
     <Form>
     <Form.Group className="mb-4 mx-4 mt-4" controlId="formBasicEmail">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-user"></i></InputGroup.Text>
        <Form.Control name="user" value={userName} onChange={(e)=>{setUser(e.target.value)}}
          placeholder="username "
          aria-label="Username"
          aria-describedby="basic-addon1"
          
        />
      </InputGroup>

      </Form.Group>

      <Form.Group className="mb-4 mx-4 mt-4" controlId="formBasicEmail">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-user"></i></InputGroup.Text>
        <Form.Control
          placeholder="Email"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </InputGroup>

      </Form.Group>

      <Form.Group className="mb-4 mx-4" controlId="formBasicEmail">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-lock"></i></InputGroup.Text>
        <Form.Control
        type='password'
          placeholder="password"
          aria-label="Username"
          name="password"
          value={password}
          aria-describedby="basic-addon1"
          onChange={(e)=>setPass(e.target.value)}
        />
      </InputGroup>

      </Form.Group>
      <Form.Group className="mb-3 mx-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mx-4' variant="primary" type="submit"
      onClick={registerUser}
      >
        Register
      </Button>
    </Form>


    </>
  )
}


export default Register

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Form,InputGroup} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [login,setLogin] = useState(false)

const loginUser = (e)=>{
  e.preventDefault()
   const data = {email,password}
   
   fetch('http://localhost:5000/user/login',{
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
   }).then((resp)=>{
    resp.json()
    .then((result)=>{
      setUser(result)
      console.log(result)
    })
  })
}

const setUser = (result) =>{
   const token = []
   token.push(result.token)
   token.push(result.userName)
  if(result.token){
    localStorage.setItem("token", JSON.stringify(token) );
    // localStorage.setItem("token", token );
  
    navigate("/Dashboard");
  }else{
    alert("invalid username or password")
  }
  
} 

  return (
    <>
      <Form>
      <Form.Group className="mb-4 mx-4 mt-4" controlId="formBasicEmail">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-user"></i></InputGroup.Text>
        <Form.Control
          placeholder="Email"
          aria-label="email"
          aria-describedby="basic-addon1"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputGroup>

      </Form.Group>

      <Form.Group className="mb-4 mx-4" controlId="formBasicEmail">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-lock"></i></InputGroup.Text>
        <Form.Control
        type='password'
          placeholder="password"
          aria-label="password"
          aria-describedby="basic-addon1"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </InputGroup>

      </Form.Group>
      <Form.Group className="mb-3 mx-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mx-4' variant="primary" type="submit"
        onClick={loginUser}
        >
        Submit
      </Button>
    </Form>


   
    </>
  )
}

export default Login

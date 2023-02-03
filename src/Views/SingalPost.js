import React,{useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import globalData from '../context/CreateContext'
import {Card} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

function SingalPost() {
  const{ id }= useParams()
  const token = useContext(globalData)
  const [post,setPost] = useState({})

 

  useEffect(()=>{

    fetch(`http://localhost:5000/user/getSingalPost/${id}`,{
        method: 'GET', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token':token[0],

          },  
    }).then(res => res.json())
    .then(post => setPost(post))
    
   
})



  return (
   <Main>
   <Container>
    <Card className=' post-card' varient="dark" bg="dark">
      <Row>
        <Col className='mx-5 my-5' >
        <Card style={{width:"60vh"}} className="bg-dark text-white">
      <Card.Img src="https://source.unsplash.com/random/200x150" alt="Card image" />
      <Card.Text className='my-3'>
         {post.title}
        </Card.Text>
        <Card.Text className='my-3'>
         {post.content}
        </Card.Text>
    </Card>
        </Col>
        
        <Col>
       
      <Row>
        <Col className='my-5 mx-5'>
        
       
        <Card body className="m-3"><i class="fas fa-thumbs-up"></i> &nbsp; </Card>
        <NavLink style={{color:"black",textDecoration:"none"}} to={`/Dashboard/Comments/${post.id}`}> 
        <Card body className="m-3"><i class="fas fa-comment"></i> &nbsp; </Card>
        </NavLink>
        <Card body className="m-3"><i class="fas fa-share-alt"></i> &nbsp; </Card>
       
        </Col>
      </Row>
        </Col>
      </Row>
      </Card>
      </Container>

      
   </Main>
  )
}
const Main = styled.div`
.post-card{
  margin-left:6rem;
  margin-top:2.7rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
}
`
export default SingalPost
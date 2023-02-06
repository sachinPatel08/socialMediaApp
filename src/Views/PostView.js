import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom'
import Popup from 'reactjs-popup';
import {  ListGroup } from "react-bootstrap"

function PostView({val}) {

    const {id,title,content}=val
    console.log(val.User.id)


  return (
    <Main>
    <div >
    
    <Card className='post-card' style={{ width: '18rem' ,height:"auto",margin:"15px" }}>
      <NavLink style={{color:"black",textDecoration:"none"}} to={`/Dashboard/User/${val.User.id}`}>
      {/* if / use then  open new link otherwise open existing url page */}
    <Card.Header>{val.User.userName}</Card.Header>
    </NavLink>
    <NavLink className="txt" to={`${id}`}>
      <Card.Img variant="top" src="https://source.unsplash.com/random/200x150" />
     </NavLink>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
    
        <Card.Text>
          {content}
        </Card.Text>
        
        <Button  styled={{border:"none"}}  variant="outline-secondary" size="sm"><i class="fas fa-thumbs-up"></i></Button>
        <Button className="m-3" variant="outline-secondary" size="sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-comment"></i></Button>{' '}
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Comment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" style={{border:"none",width:"100%"}}  placeholder="enter text." />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  type="button" class="btn btn-primary">Post</button>
      </div>
    </div>
  </div>
</div>
      </Card.Body>
    </Card>
    </div>
    
    </Main>
  )
}



const Main = styled.div`
.post-card{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.txt{
  color:black;
  text-decoration:none;
}

`;
export default PostView;


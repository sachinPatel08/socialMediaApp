import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom'
import Popup from 'reactjs-popup';

function PostView({val}) {

    const {id,title,content}=val
    console.log(val)
const [open, setOpen] = useState(false);

  return (
    <Main>
    <div >
    
    <Card className='post-card' style={{ width: '18rem' ,height:"auto",margin:"15px" }}>
    <NavLink className="txt" to={`${id}`}>
      <Card.Img variant="top" src="https://source.unsplash.com/random/200x150" />
     </NavLink>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
    
        <Card.Text>
          {content}
        </Card.Text>
        
        <Button  styled={{border:"none"}} variant="outline-dark" size="sm"><i class="fas fa-thumbs-up"></i></Button>
        
        <Popup trigger={<Button className="m-2"  styled={{border:"none"}} variant="outline-dark" size="sm"><i class="fas fa-comment"></i></Button>} position="right center">
    <div className="popup">
      <input type="txt"/>
      <input type="submit"/>
    </div>
  </Popup>
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


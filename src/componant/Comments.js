import react,{useContext,useEffect,useState} from 'react';
import {useParams}  from 'react-router-dom'
import globalData from '../context/CreateContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
const Comments = ()=>{
    const {id} = useParams()
    const token = useContext(globalData)
    const [comment,setComment] = useState([])
    const [text , settext] = useState("");

// fetch data 
useEffect(()=>{
    
    fetch(`http://localhost:5000/user/showCommentByPost/${id}`,{
        method: 'GET', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token':token[0],

          },  
    }).then(res => res.json())
    .then(data => setComment(data.reverse()))
})
// push comments
const addComment = (e)=>{
    e.preventDefault()
 
     const data ={text}
     fetch(`http://localhost:5000/user/comment/${id}`,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token':token[0]
      },
      body:JSON.stringify(data)
     }).then((resp)=>{
      resp.json()
      .then((result)=>{
        console.log(result)
      })
    })
  }
// 
    return(
        <Main>
            <Button className="m-3" variant="outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Comments</Button>{' '}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Comment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" onChange={(e)=>{settext(e.target.value)}} value={text}  style={{border:"none",width:"100%"}} placeholder="enter text." />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={addComment} type="button" class="btn btn-primary">Post</button>
      </div>
    </div>
  </div>
</div>
        {
            comment.map((e,i)=>{
                return(
                    <Card className="" border="dark" style={{width:"40rem","margin":"20px"}}>
      <Card.Header className="header" style={{fontSize:"15px"}}>
        <div>{e.User.userName}</div>
        <div><i class="fas fa-heart"></i></div>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
        {e.text}
          </p>
          <footer className="blockquote-footer">
            {e.createdAt}
          </footer>
        </blockquote>
      </Card.Body>
      </Card>
                )
            })
        }
        </Main>
    )

}
const Main = styled.div`
.blockquote{
    font-size:14px;
}
.blockquote-footer{
    font-size:10px;
}
.header{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

}
`
export default Comments;
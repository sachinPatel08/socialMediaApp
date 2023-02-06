import react, { useEffect, useState ,useContext } from 'react';
import PostView from '../Views/PostView';
import Button from 'react-bootstrap/Button';
import globalData from '../context/CreateContext'
import MyPostView from '../Views/MyPostView';
import styled from 'styled-components';

const Posts = ()=>{

const [allPost , setAllPost] = useState([])
const [title,setTitle] = useState("")
const [content,setContent] = useState("")
const [post , setPost] = useState([])
const [show , setShow] = useState(true)
const token = useContext(globalData)

   useEffect(()=>{

        fetch(`http://localhost:5000/user/allPost`,{
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },  
        }).then(res => res.json())
        .then(data => setAllPost(data))
   })

const PushPost = ()=>{
    const data = {title,content}
    fetch("http://localhost:5000/user/createPost",{
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "token":token[0]
          },  
          body:JSON.stringify(data)
    }).then(res=>res.json()).then(data=>console.log(data))
}
    return(
        <>
        <Div >
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" class="btn btn-dark">Post</button>
        </Div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Post</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Content:</label>
            <textarea class="form-control" value={content} onChange={(e)=>setContent(e.target.value)} id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={PushPost} type="button" class="btn btn-primary">Create Post</button>
      </div>
    </div>
  </div>
</div>
{
    allPost.map((data,i)=>{
        return(
        <PostView val={data}/>
        )
    })
}
   
        </>
    )

}

const Div = styled.div`
position:fixed;
z-index:999;
right:3%;
bottom:3%;
`


export default Posts;
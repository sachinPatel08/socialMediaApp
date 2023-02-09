import react, { useEffect, useState, useContext } from "react";
import PostView from "../Views/PostView";
import Button from "react-bootstrap/Button";
import globalData from "../context/CreateContext";
import MyPostView from "../Views/MyPostView";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const navigate = useNavigate();
  const [allPost, setAllPost] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState([]);
  const [show, setShow] = useState(false);
  const token = useContext(globalData);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    fetch(`http://localhost:5000/user/allPost`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllPost(data.reverse()));
  });

  const PushPost = (e) => {
    e.preventDefault()
    const data = { title, content };
    fetch("http://localhost:5000/user/createPost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setShow(!show);
  };
  return (
    <>
      <Div>
        <button type="button" onClick={handleShow} className="btn btn-dark">
        <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </Div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label for="recipient-name" class="col-form-label">
                Title:
              </label>
              <input 
              type="text" 
              className="form-control" 
              id="recipient-name"
              value={title}
              onChange={(e)=>setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <label for="recipient-name" class="col-form-label">
                Body:
              </label>
              <textarea 
              type="textarea" 
              className="form-control" 
              id="recipient-name"
              value={content}
                  onChange={(e)=>setContent(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={PushPost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
      {allPost.map((data, i) => {
        return <PostView key={data.id} val={data} />;
      })}
    </>
  );
};

const Div = styled.div`
  position: fixed;
  z-index: 999;
  right: 3%;
  bottom: 3%;
`;

export default Posts;

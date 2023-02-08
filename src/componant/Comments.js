import react, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import globalData from "../context/CreateContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';

const Comments = () => {
  const { id } = useParams();
  const token = useContext(globalData);
  const [comment, setComment] = useState([]);
  const [text, settext] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fetch data
  useEffect(() => {
    fetch(`http://localhost:5000/user/showCommentByPost/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => setComment(data.reverse()));
  });
  // push comments
  const addComment = (e) => {
    e.preventDefault();

    const data = { text };
    fetch(`http://localhost:5000/user/comment/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        console.log(result);
      });
    });
    setShow(false)
  };
  //
  return (
    <Main>
      <Button
        className="m-3"
        variant="outline-secondary"
        onClick={handleShow}
      >
        Comments
      </Button>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
        type="text"
        onChange={(e) => {
          settext(e.target.value);
        }}
        value={text}
        style={{ border: "none", width: "100%" }}
        placeholder="enter text."
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={addComment}>Comment</Button>
        </Modal.Footer>
      </Modal>

      {comment.map((e, i) => {
        return (
          <Card
            className=""
            border="dark"
            style={{ width: "40rem", margin: "20px" }}
          >
            <Card.Header className="header" style={{ fontSize: "15px" }}>
              <div>{e.User.userName}</div>
              <div>
                <i className="fas fa-heart"></i>
              </div>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{e.text}</p>
                <footer className="blockquote-footer">{e.createdAt}</footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </Main>
  );
};
const Main = styled.div`
  .blockquote {
    font-size: 14px;
  }
  .blockquote-footer {
    font-size: 10px;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Comments;



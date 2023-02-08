import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import globalData from "../context/CreateContext";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SingalPost() {
  const navigate = useNavigate()
  const { id } = useParams();
  const token = useContext(globalData);
  const [postData, setPostData] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/user/getPost/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getUser`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [postData]);

const deletPost = ()=>{
  const apply = window.confirm("are you sure?")
  if(apply){
    fetch(`http://localhost:5000/user/deletePost/${id}`,{
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: token[0],
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  
    navigate("/Dashboard/Post")
  }
  
}
  return (
    <Main>
      <Container>
        <Card className=" post-card" varient="dark" bg="dark">
          <Row>
            <Col className="mx-5 my-5">
              <Card style={{ width: "60vh" }} className="bg-dark text-white">
                <Card.Img
                  src="https://source.unsplash.com/random/200x150"
                  alt="Card image"
                />
                <Card.Text className="my-3">{postData.title}</Card.Text>
                <Card.Text className="my-3">{postData.content}</Card.Text>
              </Card>
            </Col>

            <Col>
              <Row>
                <Col className="my-5 mx-5">
                  <Card body className="m-3">
                    <i className="fas fa-thumbs-up"></i> &nbsp;{" "}
                  </Card>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to={`/Dashboard/Comments/${postData.id}`}
                  >
                    <Card body className="m-3">
                      <i className="fas fa-comment"></i> &nbsp;{" "}
                    </Card>
                  </NavLink>
                  <Card body className="m-3">
                    <i className="fas fa-share-alt"></i> &nbsp;{" "}
                  </Card>

                  {postData.userId === user.id ? (
                    <>
                    <Card body className="m-3">
                      <i onClick={deletPost} class="fa fa-trash" aria-hidden="true"></i>
                    </Card>
                    <Card body className="m-3">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    </Card>
                    </>
                  ) : (
                    "not"
                  )}
                  {/* <h2>{post.User.id}</h2> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </Main>
  );
}
const Main = styled.div`
  .post-card {
    // margin-left:6rem;
    // margin-top:2.7rem;
    margin: 2.7rem 6rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  }
`;
export default SingalPost;

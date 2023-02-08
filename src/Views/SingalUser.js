import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import globalData from "../context/CreateContext";
import { Card, Button } from "react-bootstrap";
const SingalUser = () => {
  const token = useContext(globalData);
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState([]);
  const [check, setCheck] = useState();
  console.log(check);
  // api call
  useEffect(() => {
    fetch(`http://localhost:5000/user/show/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "token": token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => setUserDetail(data));
  },[]);
  // follow api
  const follow = () => {
    fetch(`http://localhost:5000/user/follow/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  // fetch follower
  useEffect(() => {
    fetch(`http://localhost:5000/user/checkFollower/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => setCheck(data));
  });
  //unfollow
  const unfollow = (followerId) => {
    const Confirm = window.confirm("are you sure?");
    if (Confirm) {
      fetch(`http://localhost:5000/user/unfollow/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: token[0],
        },
      })
        .then((res) => res.json())
        .then((data) => console.log("user deleted.."));
    }
  };
  return (
    <Main>
      <div>
        <div className="image">
          <img
            src="https://source.unsplash.com/random/200x150"
            className="img-thumbnail"
            alt="..."
          ></img>
        </div>
        <Card className="user" border="light" style={{ width: "15.5rem" }}>
          <Card.Header>User Details</Card.Header>
          <Card.Body>
            <Card.Title>
              <div>{userDetail.userName}</div>
              <div className="but">
                {check ? (
                  <Button
                    onClick={unfollow}
                    size="sm"
                    variant="outline-secondary"
                  >
                    Unfollow-
                  </Button>
                ) : (
                  <Button
                    onClick={follow}
                    size="sm"
                    variant="outline-secondary"
                  >
                    follow+
                  </Button>
                )}
              </div>
            </Card.Title>

            <Card.Text>
              <div style={{ color: "#f3da35" }}>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card.Text className="postDetail">
          <div>
            10<br></br>
            <span>Posts</span>
          </div>
          <div>
            100<br></br>
            <span>Follower</span>
          </div>
          <div>
            100<br></br>
            <span>Following</span>
          </div>
        </Card.Text>
        <div>
          <Card className="card-2">
            <Card.Text style={{ display: "flex" }}>
              <div style={{ padding: "10px" }}>
                <p>id:</p>
                <p>Username:</p>
                <p>Email:</p>
                <p>CreatedAt:</p>
              </div>
              <div style={{ padding: "10px" }}>
                <p>{userDetail.id}</p>
                <p style={{ fontWeight: "bold" }}>{userDetail.userName}</p>
                <p style={{ color: "blue" }}>{userDetail.email}</p>
                <p>{userDetail.createdAt}</p>
              </div>
            </Card.Text>
          </Card>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  height: auto;
  display: flex;
  .image img {
    margin: 20px;
    height: 250px;
    width: 250px;
    border: 0px solid red;
  }
  .but {
    margin-top: 7px;
    margin-bottom: 7px;
  }
  .user {
    margin-left: 20px;
  }
  .card-2 {
    margin-top: 100px;
    margin-left: 15px;
    border: none;
  }
  .postDetail {
    display: flex;
    margin-top: 100px;
    padding: 10px;

    div {
      font-weight: bold;
      padding: 10px;
    }
  }
`;
export default SingalUser;

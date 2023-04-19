import react, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import globalData from "../context/CreateContext";
import styled from "styled-components";

const Followers = () => {
  const token = useContext(globalData);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/showFollower`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  });

  const unfollow = (followerId) => {
    const Confirm = window.confirm("are you sure?");
    if (Confirm) {
      fetch(`http://localhost:5000/user/unfollow/${followerId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "token": token[0],
        },
      })
        .then((res) => res.json())
        .then((data) => console.log("user deleted.."));
     
    }
    
  };

  return (
    <>
      {followers.map((e, i) => {
        return (
          <>
            <Div>
              <Card  className="m-3 " body>
                {e.User.userName}
                <Button
                  onClick={() => {
                    unfollow(e.followerId);
                  }}
                  className="ml-0"
                  variant="light"
                >
                  unfollow
                </Button>
              </Card>
             
            </Div>
          </>
        );
      })}
    </>
  );
};
const Div = styled.div`
 

`;

export default Followers;

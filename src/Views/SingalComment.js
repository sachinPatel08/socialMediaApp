import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import globalData from "../context/CreateContext";
import { useNavigate } from "react-router-dom";
function SingalComment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const token = useContext(globalData);
  useEffect(() => {
    fetch(`http://localhost:5000/user/deleteComment/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    }).then((resp) => {
      resp.json().then((result) => {
        console.log(result.postId);
      });
    });

    navigate(-1);
  });
  return <></>;
}

export default SingalComment;

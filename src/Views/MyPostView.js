import React, { useContext, useEffect, useState } from "react";
import globalData from "../context/CreateContext";
import MySingalPost from "./MySingalPost";

function MyPostView() {
  const token = useContext(globalData);
  const [postData , setPostData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/user/showPost`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "token": token[0],
      },
    })
      .then((res) => res.json())
      .then(post => setPostData(post));
  },[]);
  
  return (
    <>
     {
      postData.map((data,i)=>{
        return(
          <>
          <MySingalPost val={data}/>
          </>
        )
      })
     }
      </>
  )
}

export default MyPostView;

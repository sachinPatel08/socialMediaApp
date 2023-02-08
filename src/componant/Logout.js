import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import globalData from "../context/CreateContext";
const Logout = () => {
  const token = useContext(globalData);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    logout();
    fetch("http://localhost:5000/user/logout", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <></>;
};

export default Logout;

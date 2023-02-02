import React from "react";
import styled from "styled-components";
import Post from '../Post'
import Sidebar from "./Sidebar";
import DashNav from "./DashNav";
import MainDiv from './MainDiv';

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Dashboard =()=> {
  return (
    <>
    <RootStyle>
        <Sidebar/>
        <DashNav/>
        <MainDiv/>
    </RootStyle>
    

    </>
  );
}

export default Dashboard;

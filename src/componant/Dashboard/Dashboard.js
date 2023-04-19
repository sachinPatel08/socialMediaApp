import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import DashNav from "./DashNav";
import MainDiv from "./MainDiv";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
});

const Dashboard = () => {
  return (
    <>
      <RootStyle>
        <Sidebar />
        <DashNav />
        <MainDiv />
      </RootStyle>
    </>
  );
};

export default Dashboard;

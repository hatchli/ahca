// import Banner from "../components/Banner";
import React from "react";
import Home from "../components/Home.js";

const index = props => {
  return <Home>{props.children}</Home>;
};

export default index;

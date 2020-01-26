import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  height: 500px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
`;

const Container = props => {
  return <ContainerStyle>{props.children}</ContainerStyle>;
};

export default Container;

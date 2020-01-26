import React from "react";
import styled from "styled-components";

const OuterStyle = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const Outer = props => <OuterStyle>{props.children}</OuterStyle>;

export default Outer;

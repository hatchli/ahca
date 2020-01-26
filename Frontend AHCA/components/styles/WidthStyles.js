import React from "react";
import styled from "styled-components";

const WidthStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export default WidthStyles;

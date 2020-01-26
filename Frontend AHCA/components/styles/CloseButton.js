import styled from "styled-components";

const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 4rem;
  border: 0;
  position: absolute;
  z-index: 2;
  @media (max-width: 700px) {
    right: 40px;
  }
  right: 10px;
`;

export default CloseButton;

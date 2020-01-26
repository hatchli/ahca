import styled from "styled-components";

const FancyButtonStyles = styled.div`
  height: auto;
  padding: 0 0 10vh 0;
  overflow: hidden;
  color: black;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  justify-content: center;

  .fancy-button {
    position: center;
    display: block;
    cursor: pointer;
    perspective: 1800px;
  }
  .fancy-flipper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-style: preserve-3d;
    transform: rotateX(-90deg);
    transition: transform 0.3s ease;
  }
  .fancy-front,
  .fancy-back {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    backface-visibility: hidden;
    svg {
      display: block;
    }
  }
  &:hover {
    .fancy-flipper {
      transform: rotateX(0deg);
    }
  }
  &:active {
    .fancy-flipper {
      transform: rotateX(0deg) scale(0.95);
      transition: transform 0.05s ease;
    }
  }
  .button-text {
    letter-spacing: 0.01em;
    font-family: Futura, "Helvetica Neue", Helvetica, sans-serif;
  }
`;

export default FancyButtonStyles;

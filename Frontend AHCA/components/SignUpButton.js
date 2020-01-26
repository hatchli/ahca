import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import CloseButton from "./styles/CloseButton";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex, Button, Card, Image, Heading, Text } from "rebass";
import styled from "styled-components";

const StyledPopup = styled(({ className, ...props }) => (
  <Popup contentStyle={className} {...props} />
))`
  left: 0;
`;

const PopUpStyle = styled.div`
  .popup-content {
    position: relative;
    background: rgb(255, 255, 255);
    width: 100%;
    @media (max-width: 1000px) {
      width: 80%;
    }
    @media (min-width: 1000px) {
      width: 50%;
    }
    margin: auto;
    border: 1px solid rgb(187, 187, 187);
    padding: 5px;
  }
  .modal {
    width: 100%;
  }

  .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 5px;
    line-height: 20px;
    text-align: center;
    right: -5px;
    top: -10px;
    background: black;
    color: white;
    font-size: 3rem;
    border: 0;
    padding: 5px;
    z-index: 2;
    width: 20px;
    &:before {
      content: "";
      width: 0px;
    }
    &:after {
      content: "";
      width: 0px;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: auto;
      }
      @media (max-width: 700px) {
        width: auto;
      }
    }
  }
  .button a {
    &:before {
      content: "";
      width: 0px;
    }
    &:after {
      content: "";
      width: 0px;
    }
  }
  a {
    &:before {
      content: "";
      width: 0px;
    }
    &:after {
      content: "";
      width: 0px;
    }
  }
`;

const SignUpButton = (props, state) => {
  const [isToggled, setToggled] = useState(false);
  return (
    <Popup
      repositionOnResize={true}
      contentStyle={{ width: "auto" }}
      trigger={<button> {props.children} </button>}
      modal
    >
      {close => (
        <PopUpStyle>
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>

            <div className="content">
              {!isToggled && <SignUp />}
              {isToggled && <SignIn />}
              {!isToggled && (
                <h4>
                  <a onClick={() => setToggled(!isToggled)}>
                    Already have an account?
                  </a>
                </h4>
              )}
              {isToggled && (
                <h4>
                  <a onClick={() => setToggled(!isToggled)}>
                    Signup for an account?
                  </a>
                </h4>
              )}
            </div>
          </div>
        </PopUpStyle>
      )}
    </Popup>
  );
};

export default SignUpButton;

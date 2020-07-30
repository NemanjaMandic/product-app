import React from "react";
import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const Spinner = styled("div")`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #ff6600;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 37%;
  left: 45%;
  animation: ${spin} 0.7s linear infinite;
`;

const Loader = () => {
  return <Spinner></Spinner>;
};

export default Loader;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spiner = () => {
  return <Spiner />;
};

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  position: relative;
  top: 300px;
  left: 50%;

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default Spinner;

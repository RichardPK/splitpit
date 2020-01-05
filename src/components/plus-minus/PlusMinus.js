import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';

const PlusMinusComp = ({ onClick, className, collapsed, hidden }) => {
  return (
    <Wrapper onClick={onClick}>
      <PlusMinus className={className} collapsed={collapsed} hidden={hidden} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.1rem;
  @media ${Devices.mobileL} {
    padding: 1rem;
  }
`;

const PlusMinus = styled.div`
  visibility: ${(props) => (props.hidden ? 'hidden' : 'default')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  top: 8px;
  position: relative;
  width: 15px;
  &:before,
  &:after {
    background: #000;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 0;
    width: 15px;
    transition: transform 500ms ease;
  }
  &:after {
    transform-origin: center;
  }

  ${(props) =>
    props.collapsed
      ? `  &:after {
      transform: rotate(90deg);
    }
    // &:before {
    //   transform: rotate(180deg);
    // }`
      : ``}
`;

export default PlusMinusComp;

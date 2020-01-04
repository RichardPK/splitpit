import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';

const PlusMinusComp = ({ onClick, className, collapsed }) => {
  return <PlusMinus onClick={onClick} className={className} collapsed={collapsed} />;
};

const PlusMinus = styled.div`
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

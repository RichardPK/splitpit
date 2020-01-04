import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Devices from '../../../consts/Devices';
import Colors from '../../../consts/Colors';

const CarouselItem = ({ index, onClick, children, className }) => {
  return (
    <Wrapper className={className} onClick={() => onClick()}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  /* position: relative; */
  border-radius: 10px;
  background-color: ${Colors.black};
  height: 250px;
  width: 100%;
  outline: none;

  @media ${Devices.mobileM} {
    height: 275px;
  }

  @media ${Devices.mobileTall} {
    height: 350px;
  }

  @media ${Devices.laptop} {
    height: 360px;
    transition: all 0.2s ease-out;

    &:hover {
      box-shadow: ${Colors.boxShadow};
    }
  }
`;

const Inner = styled.div`
  display: flex;
  height: 100%;
  padding: 2rem 2rem 3rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${Devices.tablet} {
    padding: 1rem 2rem 2rem 2rem;
  }
`;

export default CarouselItem;

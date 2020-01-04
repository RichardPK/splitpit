import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

const max = 3;

const CarouselDots = ({ items, currentIndex, className, color, onLocation, backgroundColor }) => {
  const [copyItems, setCopyItems] = useState(items);

  return (
    <Wrapper className={className} onLocation={onLocation}>
      <Inner>
        {items.map((item, i) => {
          return (
            <Dot
              key={i}
              color={color}
              backgroundColor={backgroundColor}
              active={i == currentIndex}
              hide={i > currentIndex + max || i < currentIndex - max}
            />
          );
        })}
      </Inner>
    </Wrapper>
  );
};

export default CarouselDots;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;

  span {
    font-size: 12px;
    i {
      font-style: normal;
      font-weight: 500;
      color: #696969;
    }
  }
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 9999em;
  border: 1px solid ${(props) => props.color};
  margin: 0 2px;
  transition: all 0.5s;
  width: ${(props) => (props.hide ? '0px' : '6px')};
  border-width: ${(props) => (props.hide ? '0px' : '1px')};
  margin: ${(props) => (props.hide ? '0px' : '0 2px')};
  opacity: ${(props) => (props.hide ? '0' : '1')};
  background-color: ${(props) => props.backgroundColor}
    ${(props) =>
      props.active
        ? `
            background: ${props.color};
            border-color: ${props.color};
            width: 12px;
        `
        : ``};
`;

import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Body } from '../text-elements/index';
import Colors from '../../consts/Colors';
import StylePrefabs from '../../consts/StylePrefabs';

const WelcomeMessage = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <Inner>
        <BodyComponent>Hello, {children && children.split(' ')[0]}</BodyComponent>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const Inner = styled.div`
  background: ${Colors.grey};
  margin: 0;
  border-radius: 3em;
  box-shadow: ${StylePrefabs.boxShadow};
  padding: 7px 20px;
  display: inline-block;
`;

const BodyComponent = styled(Body)`
  color: ${Colors.white};
`;

export default WelcomeMessage;

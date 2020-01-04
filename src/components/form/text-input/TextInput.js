import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Typography from '../../../consts/typography/Typography';
import StylePrefabs from '../../../consts/StylePrefabs';
import { Body } from '../../text-elements/index';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

const TextInput = ({ type, onInput, value }) => {
  const [focus, setFocus] = useState(false);

  const typeParser = (focus) => {
    if (focus) {
      return '';
    } else {
      switch (type) {
        case 'name':
          return 'Name';
        case 'amount':
          return 'Amount spent';
      }
    }
  };

  const onTextInputChange = (el) => {
    onInput(el.target.value, type);
  };

  return (
    <Wrapper focus={focus} value={value}>
      <Input
        autoComplete="off"
        type={'text'}
        name={type}
        value={value}
        onChange={onTextInputChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {value === '' ? (
        <Placeholder focus={focus}>{typeParser()}</Placeholder>
      ) : (
        <StaticPlaceholder focus={focus}>{typeParser()}</StaticPlaceholder>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 17px 12px 15px 12px;
  overflow: hidden;
  background-color: ${Colors.white};
  box-shadow: ${(props) => (props.focus ? StylePrefabs.boxShadow : null)};
  padding: ${(props) =>
    props.focus || props.value !== '' ? `23px 12px 9px 12px` : '17px 12px 15px 12px'};

  @media ${Devices.laptop} {
    transition: all 0.3s;
  }
`;

const Input = styled.input`
  border-style: none;
  outline: none;
  width: 100%;
  ${Typography.genericStyles.body}
`;

const Placeholder = styled(Body)`
  position: absolute;
  margin-bottom: 5px;
  color: ${Colors.black}80;
  transition: all 0.2s;
  pointer-events: none;

  ${(props) =>
    props.focus
      ? `
  top: 3px; 
  left: 12px;
  font-size: 8px;
  `
      : ``}
`;

const StaticPlaceholder = styled(Body)`
  position: absolute;
  margin-bottom: 5px;
  top: 3px;
  left: 12px;
  color: ${Colors.black}80;
  font-size: 8px;
  pointer-events: none;
`;

export default TextInput;

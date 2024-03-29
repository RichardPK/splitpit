import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Typography from '../../../consts/typography/Typography';
import StylePrefabs from '../../../consts/StylePrefabs';
import { Body } from '../../text-elements/index';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

const TextInput = ({ type, onInput, value, index }) => {
  const [focus, setFocus] = useState(false);

  const typeParser = (focus) => {
    if (focus) {
      return '';
    } else {
      switch (type) {
        case 'name':
          return 'Name';
        case 'amount':
          return '£';
      }
    }
  };

  const onTextInputChange = (el) => {
    onInput(el.target.value, type, index);
  };

  // if (type === 'amount') {
  //   console.log(value);
  //   debugger;
  // }

  return (
    <Wrapper name={type} focus={focus} value={value}>
      <Input
        autoComplete="off"
        type={type === 'name' ? 'text' : 'number'}
        name={type}
        value={value}
        onChange={onTextInputChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {value === '' || value === null ? (
        <Placeholder name={type} focus={focus}>
          {typeParser()}
        </Placeholder>
      ) : (
        <StaticPlaceholder name={type} focus={focus}>
          {typeParser()}
        </StaticPlaceholder>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.name === 'name' ? '100%' : '30%')};
  border-radius: 5px;
  margin: 0 0.25rem;
  @media ${Devices.mobileL} {
    margin: 0 0.75rem;
  }

  padding: 17px 12px 15px 12px;
  overflow: hidden;
  border: 1px solid ${Colors.black};
  background-color: ${(props) => (props.name === 'name' ? Colors.white : Colors.black)};
  color: ${(props) => (props.name === 'name' ? Colors.black : Colors.white)};
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
  background-color: ${(props) => (props.name === 'name' ? Colors.white : Colors.black)};
  color: ${(props) => (props.name === 'name' ? Colors.black : Colors.white)};
  ${Typography.genericStyles.body}
`;

const Placeholder = styled(Body)`
  position: absolute;
  margin-bottom: 5px;
  color: ${(props) => (props.name === 'name' ? Colors.black + `80` : Colors.white + `90`)};
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
  color: ${(props) => (props.name === 'name' ? Colors.black + `80` : Colors.white + `90`)};
  font-size: 8px;
  pointer-events: none;
`;

export default TextInput;

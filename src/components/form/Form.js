import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import TextInput from './text-input/TextInput';
import { PrimaryCta } from '../ctas/index';
import { Error } from '../text-elements/index';

const Form = ({ className }) => {
  const [nameValue, setNameValue] = useState('');
  const [nameValid, setNameValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState([{ name: '', amount: '' }]);

  const onInput = (value, type, index) => {
    const valuesCopy = [...values];
    switch (type) {
      case 'name':
        valuesCopy[index].name = value;
        setValues(valuesCopy);
        break;
      case 'amount':
        valuesCopy[index].amount = value;
        setValues(valuesCopy);
        break;
    }
  };

  useEffect(() => {
    if (nameValid === true) {
      setErrorMessage(null);
      // After doing all the checks for validy entries, you would do something (i.e. move to a new view)
      console.log('All data valid');
    }

    if (nameValid === false) {
      setErrorMessage('Please enter your name');
    }
  }, [nameValid]);

  const renderRows = () => {
    console.log(values);

    return values.map((entry, index) => {
      return (
        <Row key={index}>
          <TextInput type={'name'} onInput={onInput} value={entry.name} index={index} />
          <TextInput type={'amount'} onInput={onInput} value={entry.amount} index={index} />
        </Row>
      );
    });
  };

  const handleSplit = () => {
    if (nameValue === '') {
      setNameValid(false);
    } else if (nameValue !== '') {
      setNameValid(true);
    }
  };

  return (
    <Wrapper className={className}>
      <FormComponent onSubmit={(event) => event.preventDefault()}>{renderRows()}</FormComponent>
      <ErrorComponent>{errorMessage}</ErrorComponent>
      <PrimaryCta onClick={handleSplit}>Split</PrimaryCta>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorComponent = styled(Error)`
  text-align: center;
`;

const FormComponent = styled.form`
  width: 100%;
  max-width: 750px;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
`;

export default Form;

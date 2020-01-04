import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import TextInput from './text-input/TextInput';
import { PrimaryCta } from '../ctas/index';
import { Error } from '../text-elements/index';

const Form = ({ className }) => {
  const [nameValue, setNameValue] = useState('');
  const [nameValid, setNameValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onInput = (value, type) => {
    switch (type) {
      case 'name':
        setNameValue(value);
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

  const validateFields = () => {
    // Email regex if required
    // let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let emailMatch = email.match(emailRegex);

    if (nameValue === '') {
      setNameValid(false);
    } else if (nameValue !== '') {
      setNameValid(true);
    }
  };

  return (
    <Wrapper className={className}>
      <FormComponent onSubmit={(event) => event.preventDefault()}>
        <Row>
          <TextInput type={'name'} onInput={onInput} value={nameValue} />
          <TextInput type={'amount'} onInput={onInput} value={nameValue} />
        </Row>
      </FormComponent>
      <ErrorComponent>{errorMessage}</ErrorComponent>
      <PrimaryCta onClick={validateFields}>Submit</PrimaryCta>
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
  max-width: 900px;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
`;

export default Form;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import TextInput from './text-input/TextInput';
import { PrimaryCta } from '../ctas/index';
import { Error } from '../text-elements/index';
import PlusMinus from '../plus-minus/PlusMinus';

const Form = ({ className }) => {
  const [errorMessage, setErrorMessage] = useState('');

  // const [values, setValues] = useState([{ name: '', amount: '' }]);
  // const [transferAmounts, setTransferAmounts] = useState([]);

  const [values, setValues] = useState([
    { name: 'Richard', amount: '100' },
    { name: 'Smasher', amount: '60' }
  ]);

  const [transferAmounts, setTransferAmounts] = useState([
    { name: 'Richard', amount: '100' },
    { name: 'Smasher', amount: '60' }
  ]);

  useEffect(() => {
    setTransferAmounts(values);
  }, [values]);

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

  const renderRows = () => {
    return values.map((entry, index) => {
      return (
        <>
          <Row>
            <Plus collapsed={true} onClick={() => handlePlusClick(index)} hidden={true} />
            <TextInput type={'name'} onInput={onInput} value={entry.name} index={index} />
            <TextInput type={'amount'} onInput={onInput} value={entry.amount} index={index} />
            {index > 0 ? (
              <Minus onClick={() => handleMinusClick(index)} />
            ) : (
              <Minus hidden={true} />
            )}
          </Row>
          <Row hidden={index + 1 !== values.length}>
            <Plus collapsed={true} onClick={() => handlePlusClick(index)} />
          </Row>
        </>
      );
    });
  };

  const handleSplit = () => {
    const transferAmountsCopy = [...transferAmounts];

    for (let value of transferAmountsCopy) {
      value.amount = parseInt(value.amount);
    }

    transferAmountsCopy.forEach((value) => {
      const currentValueIndex = transferAmountsCopy.indexOf(value);
      const nextValueIndex = currentValueIndex + 1;

      if (transferAmountsCopy[nextValueIndex]) {
        let currentAmount = value.amount;
        let nextAmount = transferAmountsCopy[nextValueIndex].amount;
        if (currentAmount - nextAmount > 0) {
          let difference = currentAmount - nextAmount;
          nextAmount = nextAmount + difference;
          debugger;
        } else if (currentAmount - nextAmount < 0) {
        }
      }
    });

    // debugger;
  };

  const handleMinusClick = (index) => {
    const valuesCopy = [...values];
    valuesCopy.splice(index, 1);
    setValues(valuesCopy);
  };

  const handlePlusClick = (index) => {
    const valuesCopy = [...values];
    valuesCopy.push({ name: '', amount: '' });
    setValues(valuesCopy);
  };

  return (
    <Wrapper className={className}>
      <FormComponent onSubmit={(event) => event.preventDefault()}>{renderRows()}</FormComponent>
      {/* <ErrorComponent>{errorMessage}</ErrorComponent> */}
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
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  margin: 0.5rem;
  min-height: 56px;
`;

const Minus = styled(PlusMinus)`
  margin-left: 1rem;
`;

const Plus = styled(PlusMinus)`
  margin-right: 1rem;
`;

export default Form;

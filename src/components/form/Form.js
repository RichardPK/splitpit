import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import TextInput from './text-input/TextInput';
import { PrimaryCta } from '../ctas/index';
import { Error, Body } from '../text-elements/index';
import PlusMinus from '../plus-minus/PlusMinus';

const Form = ({ className }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const [values, setValues] = useState([
    { name: 'Richard', amount: '100' },
    { name: 'Smasher', amount: '60' },
    { name: 'Nuria', amount: '40' },
    { name: 'Ali', amount: '0' },
    { name: 'Andrew', amount: '0' }
  ]);

  const [mutableValues, setMutableValues] = useState([
    { name: 'Richard', amount: '100' },
    { name: 'Smasher', amount: '60' },
    { name: 'Nuria', amount: '40' },
    { name: 'Ali', amount: '0' },
    { name: 'Andrew', amount: '0' }
  ]);

  const [transferSentences, setTransferSentences] = useState([]);

  useEffect(() => {
    setMutableValues(values);
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
    // console.log(`values: ${values}`);
    // console.log(`mutable: ${mutableValues}`);
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
    const mutableValuesCopy = [...mutableValues];
    const transferAmounts = [];
    let creditors = [];
    let debtors = [];
    let neutrals = [];

    for (let value of mutableValuesCopy) {
      value.amount = parseInt(value.amount);
    }

    let average = calcAverage(mutableValuesCopy);

    for (let value of mutableValuesCopy) {
      if (value.amount === average) {
        neutrals.push(value);
      } else if (value.amount < average) {
        debtors.push(value);
      } else if (value.amount > average) {
        creditors.push(value);
      }
    }

    for (let debtor of debtors) {
      if (debtor.name) {
        for (let creditor of creditors) {
          if (creditor.name) {
            while (debtor.amount < average) {
              let debtorDifference = average - debtor.amount;
              let creditorDifference = creditor.amount - average;
              if (creditor.amount > average) {
                if (creditorDifference > debtorDifference) {
                  debtor.amount += debtorDifference;
                  creditor.amount -= debtorDifference;
                  transferAmounts.push({
                    from: debtor.name,
                    to: creditor.name,
                    amount: debtorDifference
                  });
                } else {
                  debtor.amount += creditorDifference;
                  creditor.amount -= creditorDifference;
                  transferAmounts.push({
                    from: debtor.name,
                    to: creditor.name,
                    amount: creditorDifference
                  });
                }
              } else {
                debtor.amount += debtorDifference;
                creditor.amount -= debtorDifference;
                transferAmounts.push({
                  from: debtor.name,
                  to: creditor.name,
                  amount: debtorDifference
                });
              }
              if (creditor.amount === average) {
                break;
              }
            }
          }
        }
      }
    }
    sentenceGenerator(transferAmounts);
  };

  const calcAverage = (values) => {
    let total = 0;
    let numValues = 0;

    for (let value of values) {
      if (value.amount !== NaN) {
        total += value.amount;
        numValues++;
      }
    }

    return total / numValues;
  };

  const handleMinusClick = (index) => {
    const valuesCopy = [...values];
    valuesCopy.splice(index, 1);
    setValues(valuesCopy);
  };

  const handlePlusClick = (index) => {
    const valuesCopy = [...values];
    valuesCopy.push({ name: '', amount: null });
    setValues(valuesCopy);
  };

  const sentenceGenerator = (transferAmounts) => {
    let sentenceArray = transferAmounts.map((transfer) => {
      return `${transfer.from} sends £${transfer.amount} to ${transfer.to}`;
    });

    setTransferSentences(sentenceArray);
  };

  const renderTransferSentences = () => {
    return transferSentences.map((sentence) => {
      return <TransferSentence>{sentence}</TransferSentence>;
    });
  };

  return (
    <Wrapper className={className}>
      <FormComponent onSubmit={(event) => event.preventDefault()}>{renderRows()}</FormComponent>
      <PrimaryCta onClick={handleSplit}>Split</PrimaryCta>
      {transferSentences.length > 0 ? (
        <SentenceWrapper>{renderTransferSentences()}</SentenceWrapper>
      ) : null}
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

const SentenceWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const TransferSentence = styled(Body)``;

export default Form;

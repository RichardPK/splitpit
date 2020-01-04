import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

storiesOf(`Form`, module)
  .addParameters({
    notes: 'Toggle',
    storybookBackground: 'white'
  })
  .add(`Text Input`, () => {
    function Parent({ children, ...props }) {
      const [nameValue, setNameValue] = useState('');
      return <div>{children(nameValue, setNameValue)}</div>;
    }

    return (
      <Parent>
        {(nameValue, setNameValue) => (
          <TextInput type={'name'} onInput={(e) => setNameValue(e)} value={nameValue} />
        )}
      </Parent>
    );
  });

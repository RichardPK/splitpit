import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Error from './Error';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'Error',
    storybookBackground: 'white'
  })
  .add(`Error`, () => {
    const label = 'Text to display';
    const defaultValue = 'There was a problem fetching your cup of tea';
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Error storybookBackground="white">{value}</Error>;
  });

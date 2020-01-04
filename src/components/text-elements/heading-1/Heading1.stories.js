import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Heading1 from './Heading1';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'H1 element',
    storybookBackground: 'white'
  })
  .add(`H1`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Heading1 storybookBackground="white">{value}</Heading1>;
  });

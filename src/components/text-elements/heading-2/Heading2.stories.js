import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Heading2 from './Heading2';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'H2 element',
    storybookBackground: 'white'
  })
  .add(`H2`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Heading2 storybookBackground="white">{value}</Heading2>;
  });

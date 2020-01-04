import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Heading4 from './Heading4';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'H4 element',
    storybookBackground: 'white'
  })
  .add(`H4`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Heading4 storybookBackground="white">{value}</Heading4>;
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Heading5 from './Heading5';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'H5 element',
    storybookBackground: 'white'
  })
  .add(`H5`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Heading5 storybookBackground="white">{value}</Heading5>;
  });

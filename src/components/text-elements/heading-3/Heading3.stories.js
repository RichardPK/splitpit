import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Heading3 from './Heading3';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'H3 element',
    storybookBackground: 'white'
  })
  .add(`H3`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Heading3 storybookBackground="white">{value}</Heading3>;
  });

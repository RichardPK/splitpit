import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Body from './Body';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'Body element',
    storybookBackground: 'white'
  })
  .add(`Body`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Body storybookBackground="white">{value}</Body>;
  });

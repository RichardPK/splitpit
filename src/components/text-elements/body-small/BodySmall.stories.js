import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import BodySmall from './BodySmall';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'BodySmall element',
    storybookBackground: 'white'
  })
  .add(`BodySmall`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <BodySmall storybookBackground="white">{value}</BodySmall>;
  });

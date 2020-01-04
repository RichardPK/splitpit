import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Cta from './Cta';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'Cta element',
    storybookBackground: 'white'
  })
  .add(`Cta`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Cta storybookBackground="white">{value}</Cta>;
  });

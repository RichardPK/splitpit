import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Caption from './Caption';

storiesOf(`Typography/text-elements`, module)
  .addParameters({
    notes: 'Caption element',
    storybookBackground: 'white'
  })
  .add(`Caption`, () => {
    const label = 'Text to display';
    const defaultValue = "I'm away to make a cup of tea";
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <Caption storybookBackground="white">{value}</Caption>;
  });

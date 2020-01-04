import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import WelcomeMessage from './WelcomeMessage';

storiesOf(`Other`, module)
  .addParameters({
    notes: 'Body element',
    storybookBackground: 'white'
  })
  .add(`Welcome message`, () => {
    const label = 'Text to display';
    const defaultValue = 'Grant Maclennan';
    const groupId = 'Local';

    const value = text(label, defaultValue, groupId);

    return <WelcomeMessage storybookBackground="white">{value}</WelcomeMessage>;
  });

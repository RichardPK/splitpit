import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import StorybookGlobalStyle from '../src/consts/StorybookGlobalStyle';
import { withKnobs, select } from '@storybook/addon-knobs';
import Colors from '../src/consts/Colors';

addDecorator((story, { parameters }) => {
  const label = 'Background color';
  const options = {
    Black: Colors.black,
    White: Colors.white,
    Grey: Colors.grey
  };
  let defaultValue = options.Black;
  const groupId = 'Universal';
  if (parameters.storybookBackground) {
    switch (parameters.storybookBackground) {
      case 'white':
        defaultValue = options.White;
        break;
      case 'black':
        defaultValue = options.Black;
        break;
      case 'grey':
        defaultValue = options.Grey;
        break;
      default:
        break;
    }
  }

  const value = select(label, options, defaultValue, groupId);

  return (
    <>
      <StorybookGlobalStyle htmlColor={value} />
      {story()}
    </>
  );
});

addDecorator(
  withKnobs({
    escapeHTML: false
  })
);

configure(require.context('../src', true, /\.stories\.js$/), module);

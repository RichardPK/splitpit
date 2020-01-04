import React from 'react';
import { storiesOf } from '@storybook/react';
import PrimaryCta from './PrimaryCta';
import { action } from '@storybook/addon-actions';

storiesOf(`CTAs`, module)
  .addParameters({
    notes: 'Primary CTA',
    storybookBackground: 'white'
  })
  .add(`Primary`, () => {
    return (
      <PrimaryCta
        onClick={() => {
          action('Clicked')(``);
        }}
      >
        Submit
      </PrimaryCta>
    );
  });

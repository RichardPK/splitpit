import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CarouselItem from './CarouselItem';
import Colors from '../../../consts/Colors';

storiesOf(`Carousel`, module)
  .addParameters({
    notes: 'Carousel item',
    storybookBackground: 'white'
  })
  .add(`Item`, () => {
    return <CarouselItem />;
  });

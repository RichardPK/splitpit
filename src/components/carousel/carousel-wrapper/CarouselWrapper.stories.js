import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CarouselWrapper from './CarouselWrapper';
import Colors from '../../../consts/Colors';
import StylePrefabs from '../../../consts/StylePrefabs';
import styled from 'styled-components';

const carouselData = [
  {
    heading: 'Employees & members of the public',
    body: 'Have employees and members of the public been moved to a place of safety? '
  },
  {
    heading: 'Equipment',
    body: 'Has all relevant equipment been secured/cordoned off/isolated/shut down?'
  },
  {
    heading: 'Staff Instructions',
    body:
      'Have all staff been instructed: a) Not to liaise with third parties; b) Not to speak to the media; C) Not to post on social media; d) To direct requests for comment to the Press Officer; and e) To restrict internal communication?'
  },
  {
    heading: 'Responsible Person ',
    body:
      'Has a responsible person been apointed to stand watch over equipment and ensure it is not disturbed?'
  },
  {
    heading: 'Responsible Person',
    body:
      'Has a responsible person been appointed to prevent employees or public accessing the area?'
  },
  {
    _heading: 'Site',
    _body: 'Is the site under the control of the emergency services?'
  }
];

storiesOf(`Carousel`, module)
  .addParameters({
    notes: 'Carousel Wrapper',
    storybookBackground: 'white'
  })
  .add(`Wrapper`, () => {
    return <CarouselWrapper carouselData={carouselData} />;
  });

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CarouselDots from './CarouselDots';
import Colors from '../../../consts/Colors';

const carouselItems = [
  {
    src: '/static/media/logo@2x.110a912a.png',
    stage: null,
    header: 'Welcome',
    body:
      'This application is here to help with the management of health and safety at your company'
  },
  {
    src: '/static/media/animated-caro-starting-checklist.595715b1.mp4',
    stage: null,
    header: 'Start a checklist',
    body: 'Our checklists help make sure you have everything under control, when you need it.',
    video: true
  }
];

storiesOf(`Carousel`, module)
  .addParameters({
    notes: 'Toggle',
    storybookBackground: 'white'
  })
  .add(`Dots`, () => {
    function Parent({ children, ...props }) {
      const [currentIndex, setCurrentIndex] = useState(0);

      const label = 'Carousel position';
      const options = {
        One: 0,
        Two: 1
      };
      const defaultValue = 0;
      const groupId = 'Local';
      const value = select(label, options, defaultValue, groupId);
      if (value !== currentIndex) {
        setCurrentIndex(value);
      }

      return <div>{children(currentIndex, setCurrentIndex)}</div>;
    }

    return (
      <Parent>
        {(currentIndex, setCurrentIndex) => (
          <CarouselDots
            items={carouselItems}
            currentIndex={currentIndex}
            color={Colors.black}
            backgroundColor={Colors.white}
          />
        )}
      </Parent>
    );
  });

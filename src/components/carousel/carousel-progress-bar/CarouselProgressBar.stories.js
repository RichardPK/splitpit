import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import CarouselProgressBar from './CarouselProgressBar';
import Colors from '../../../consts/Colors';

const dataArray = [
  'thing',
  'another thing',
  'third thing',
  'fourth thing',
  'fifth thing',
  'sixth thing'
];

storiesOf(`Carousel`, module)
  .addParameters({
    notes: 'Carousel progress bar',
    storybookBackground: 'white'
  })
  .add(`Progress bar`, () => {
    function Parent({ children, ...props }) {
      const [currentIndex, setCurrentIndex] = useState(0);

      const label = 'Carousel position';
      const options = {
        One: 0,
        Two: 1,
        Three: 2,
        Four: 4,
        Five: 5,
        Six: 6
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
          <CarouselProgressBar total={dataArray.length} completed={currentIndex} />
        )}
      </Parent>
    );
  });

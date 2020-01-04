import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Image from './Image';
import src from '../../assets/images/neu.jpg';
import styled from 'styled-components';

storiesOf(`Other`, module)
  .addParameters({
    notes: 'Image',
    storybookBackground: 'white'
  })
  .add(`Image`, () => {
    const defaultWidth = '100%';
    const defaultHeight = '500px';

    const width = text('Width', defaultWidth, 'Local');
    const height = text('Height', defaultHeight, 'Local');

    return (
      <Container style={{ width: width, height: height }}>
        <Image src={src} />
      </Container>
    );
  });

const Container = styled.div``;

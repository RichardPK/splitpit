import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import {
  Body,
  BodySmall,
  Caption,
  Cta,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5
} from './index';

storiesOf(`Typography`, module)
  .addParameters({
    notes: 'All type elements',
    storybookBackground: 'white'
  })
  .add(`index`, () => {
    const defaults = {
      defaultValue: "I'm away to make a cup of tea",
      groupId: 'Local'
    };

    const captionText = {
      label: 'Caption text to display'
    };
    const captionValue = text(captionText.label, defaults.defaultValue, defaults.groupId);

    const bodySmallText = {
      label: 'BodySmall text to display'
    };

    const bodySmallValue = text(bodySmallText.label, defaults.defaultValue, defaults.groupId);

    const bodyText = {
      label: 'Body text to display'
    };

    const bodyValue = text(bodyText.label, defaults.defaultValue, defaults.groupId);

    const ctaText = {
      label: 'Cta text to display'
    };

    const ctaValue = text(ctaText.label, defaults.defaultValue, defaults.groupId);

    const heading5Text = {
      label: 'H5 text to display'
    };

    const heading5Value = text(heading5Text.label, defaults.defaultValue, defaults.groupId);

    const heading4Text = {
      label: 'H4 text to display'
    };

    const heading4Value = text(heading4Text.label, defaults.defaultValue, defaults.groupId);

    const heading3Text = {
      label: 'H3 text to display'
    };

    const heading3Value = text(heading3Text.label, defaults.defaultValue, defaults.groupId);

    const heading2Text = {
      label: 'H2 text to display'
    };

    const heading2Value = text(heading2Text.label, defaults.defaultValue, defaults.groupId);

    const heading1Text = {
      label: 'H1 text to display'
    };

    const heading1Value = text(heading1Text.label, defaults.defaultValue, defaults.groupId);

    return (
      <div storybookBackground="white">
        <div>
          <Heading1>{heading1Value}</Heading1>
        </div>
        <div>
          <Heading2>{heading2Value}</Heading2>
        </div>
        <div>
          <Heading3>{heading3Value}</Heading3>
        </div>
        <div>
          <Heading4>{heading4Value}</Heading4>
        </div>
        <div>
          <Heading5>{heading5Value}</Heading5>
        </div>
        <div>
          <Cta>{ctaValue}</Cta>
        </div>
        <div>
          <Body>{bodyValue}</Body>
        </div>
        <div>
          <BodySmall>{bodySmallValue}</BodySmall>
        </div>
        <div>
          <Caption>{captionValue}</Caption>
        </div>
      </div>
    );
  });

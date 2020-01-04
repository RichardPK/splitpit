import React from 'react';
import { shallow } from '../../enzyme';

import { Body } from './index';

describe('Text-elements testing', () => {
  it('BODY renders and matches snapshot', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper).toMatchSnapshot();
  });
});

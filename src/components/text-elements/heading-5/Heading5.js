import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../../../consts/typography/Typography';

const Heading5 = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.h3`
  ${Typography.heading5}
`;

export default Heading5;

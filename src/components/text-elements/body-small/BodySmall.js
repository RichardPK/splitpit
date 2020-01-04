import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../../../consts/typography/Typography';

const BodySmall = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  ${Typography.bodySmall}
`;

export default BodySmall;

import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../../../consts/typography/Typography';

const Caption = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  ${Typography.caption}
`;

export default Caption;

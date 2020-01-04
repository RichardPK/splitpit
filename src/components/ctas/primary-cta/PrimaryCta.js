import React from 'react';
import { Cta } from '../../text-elements/index';
import Hovers from '../../../consts/Hovers';
import StylePrefabs from '../../../consts/StylePrefabs';
import Colors from '../../../consts/Colors';
import styled from 'styled-components/macro';

const PrimaryCta = ({ onClick, children, disabled, className }) => {
  return (
    <Wrapper onClick={disabled ? null : () => onClick()} className={className}>
      <Inner disabled={disabled}>
        <CtaText disabled={disabled}>{children}</CtaText>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 3em;
  padding: 0.3125rem 1rem;
  background-color: ${(props) => (props.disabled ? Colors.grey : Colors.white)};
 display: inline-block;;
  justify-content: center;
  align-items: center;
  ${Hovers.primaryCta}
  box-shadow: ${StylePrefabs.boxShadow};
  transition: all 0.3s;
`;

const Inner = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CtaText = styled(Cta)`
  opacity: ${(props) => (props.disabled ? 0.5 : 1.0)};
`;

export default PrimaryCta;

import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import StylePrefabs from '../../consts/StylePrefabs';
import Colors from '../../consts/Colors';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Cta,
  Body,
  BodySmall,
  Caption
} from '../../components/text-elements';
import { ReactComponent as HandLogo } from '../../assets/svgs/makers-gonna-make-badge/hand-icon.svg';
import Error from '../../components/text-elements/error/Error';
import Form from '../../components/form/Form';
import Image from '../../components/image/Image';
import Anims from '../../consts/Anims';
import ImagePreloader from '../../utils/image-preloader/ImagePreloader';

function Home() {
  return <HomeWrapper></HomeWrapper>;
}

const HomeWrapper = styled.div`
  ${StylePrefabs.pageWrapper}
  ${StylePrefabs.fullHeightDesktop}
  ${Anims.fadeIn('.5')};
`;

const FormComponent = styled(Form)`
  padding: 2rem 0;
`;

const TypeWrapper = styled.div`
  padding: 2rem 0;
`;

const Heading1TextComp = styled(Heading1)``;

const HandWrapper = styled.div`
  svg {
    width: 4em;
    height: auto;

    path {
      fill: ${Colors.black};
    }
  }
`;

export default Home;

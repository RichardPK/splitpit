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
import Carousel from '../../components/carousel/carousel-wrapper/CarouselWrapper';
import WelcomeMessage from '../../components/welcome-message/WelcomeMessage';
import Image from '../../components/image/Image';
import NeuImageFile from '../../assets/images/neu.jpg';
import Anims from '../../consts/Anims';
import ImagePreloader from '../../utils/image-preloader/ImagePreloader';

function Home() {
  const carouselData = [
    {
      heading: 'Employees & members of the public',
      body: 'Have employees and members of the public been moved to a place of safety? '
    },
    {
      heading: 'Equipment',
      body: 'Has all relevant equipment been secured/cordoned off/isolated/shut down?'
    },
    {
      heading: 'Staff Instructions',
      body:
        'Have all staff been instructed: a) Not to liaise with third parties; b) Not to speak to the media; C) Not to post on social media; d) To direct requests for comment to the Press Officer; and e) To restrict internal communication?'
    },
    {
      heading: 'Responsible Person ',
      body:
        'Has a responsible person been apointed to stand watch over equipment and ensure it is not disturbed?'
    },
    {
      heading: 'Responsible Person',
      body:
        'Has a responsible person been appointed to prevent employees or public accessing the area?'
    }
  ];

  const preloaded = ImagePreloader(NeuImageFile);

  return (
    <HomeWrapper>
      <WelcomeMessageComponent>Grant Maclennan</WelcomeMessageComponent>

      <Image width={preloaded.width} src={NeuImageFile} />

      <CarouselComponent carouselData={carouselData} />

      <FormComponent />

      <TypeWrapper>
        <Heading1TextComp>This is an H1</Heading1TextComp>
        <Heading2>This is an H2</Heading2>
        <Heading3>This is an H3</Heading3>
        <Heading4>This is an H4</Heading4>
        <Heading5>This is an H5</Heading5>
        <Cta>This is a Cta</Cta>
        <Body>This is a Body</Body>
        <BodySmall>This is a BodySmall</BodySmall>
        <Caption>This is a Caption</Caption>
        <Error>This is an error. You done fucked up.</Error>
      </TypeWrapper>

      <HandWrapper>
        <HandLogo />
      </HandWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  ${StylePrefabs.pageWrapper}
  ${StylePrefabs.fullHeightDesktop}
  ${Anims.fadeIn('.5')};
`;

const WelcomeMessageComponent = styled(WelcomeMessage)`
  padding-bottom: 2rem;
`;

const CarouselComponent = styled(Carousel)`
  padding: 2rem 0;
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

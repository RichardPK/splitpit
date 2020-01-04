import React, { useRef, useState } from 'react';
import Anims from '../../consts/Anims';
import styled from 'styled-components/macro';

const Image = ({ src, alt }) => {
  let [loaded, setLoaded] = useState(false);
  return <ImageComponent alt={alt} loaded={loaded} onLoad={() => setLoaded(true)} src={src} />;
};

const ImageComponent = styled.img`
  width: 100%;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

export default Image;

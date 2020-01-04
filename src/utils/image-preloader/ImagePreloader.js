import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';

const ImagePreloader = (src) => {
  const image = new Image();
  image.src = src;
  return image;
};

export default ImagePreloader;

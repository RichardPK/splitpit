import TypographyUtils from './TypographyUtils';

const genericStyles = {
  heading: `
  font-family: 'Roboto', sans-serif;
  letter-spacing: -10%;
  margin: 0;
  `,
  cta: `
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  display: block;
  letter-spacing: -10%;
  `,
  body: `
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  display: block;
  letter-spacing: -10%;
  `,
  caption: `
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  display: block;
  letter-spacing: -10%;
  `
};

const modularScaleDesktop = {
  heading1: {
    fontSize: TypographyUtils.convertPixelToEm(84),
    lineHeight: TypographyUtils.convertPixelToEm(88)
  },
  heading2: {
    fontSize: TypographyUtils.convertPixelToEm(60),
    lineHeight: TypographyUtils.convertPixelToEm(65)
  },
  heading3: {
    fontSize: TypographyUtils.convertPixelToEm(40),
    lineHeight: TypographyUtils.convertPixelToEm(48)
  },
  heading4: {
    fontSize: TypographyUtils.convertPixelToEm(28),
    lineHeight: TypographyUtils.convertPixelToEm(34)
  },
  heading5: {
    fontSize: TypographyUtils.convertPixelToEm(22),
    lineHeight: TypographyUtils.convertPixelToEm(28)
  },
  cta: {
    fontSize: TypographyUtils.convertPixelToEm(18),
    lineHeight: TypographyUtils.convertPixelToEm(24)
  },
  body: {
    fontSize: TypographyUtils.convertPixelToEm(18),
    lineHeight: TypographyUtils.convertPixelToEm(24)
  },
  bodySmall: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(22)
  },
  caption: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(18)
  }
};

const modularScaleMobile = {
  heading1: {
    fontSize: TypographyUtils.convertPixelToEm(52),
    lineHeight: TypographyUtils.convertPixelToEm(58)
  },
  heading2: {
    fontSize: TypographyUtils.convertPixelToEm(35),
    lineHeight: TypographyUtils.convertPixelToEm(42)
  },
  heading3: {
    fontSize: TypographyUtils.convertPixelToEm(24),
    lineHeight: TypographyUtils.convertPixelToEm(30)
  },
  heading4: {
    fontSize: TypographyUtils.convertPixelToEm(20),
    lineHeight: TypographyUtils.convertPixelToEm(28)
  },
  heading5: {
    fontSize: TypographyUtils.convertPixelToEm(18),
    lineHeight: TypographyUtils.convertPixelToEm(26)
  },
  cta: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(22)
  },
  body: {
    fontSize: TypographyUtils.convertPixelToEm(16),
    lineHeight: TypographyUtils.convertPixelToEm(22)
  },
  bodySmall: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(20)
  },
  caption: {
    fontSize: TypographyUtils.convertPixelToEm(14),
    lineHeight: TypographyUtils.convertPixelToEm(18)
  }
};

export default {
  genericStyles: genericStyles,
  heading1: `
  ${genericStyles.heading}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading1.fontSize,
    modularScaleMobile.heading1.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading1.lineHeight,
    modularScaleMobile.heading1.lineHeight
  )};
  `,

  heading2: `
  ${genericStyles.heading}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading2.fontSize,
    modularScaleMobile.heading2.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading2.lineHeight,
    modularScaleMobile.heading2.lineHeight
  )};
  `,

  heading3: `
  ${genericStyles.heading}
  
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading3.fontSize,
    modularScaleMobile.heading3.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading3.lineHeight,
    modularScaleMobile.heading3.lineHeight
  )};
 
  `,

  heading4: `
  ${genericStyles.heading}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading4.fontSize,
    modularScaleMobile.heading4.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading4.lineHeight,
    modularScaleMobile.heading4.lineHeight
  )};
  `,

  heading5: `
  ${genericStyles.heading}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.heading5.fontSize,
    modularScaleMobile.heading5.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.heading5.lineHeight,
    modularScaleMobile.heading5.lineHeight
  )};
  `,

  cta: `
  ${genericStyles.cta}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.cta.fontSize,
    modularScaleMobile.cta.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.cta.lineHeight,
    modularScaleMobile.cta.lineHeight
  )};
  `,

  body: `
  ${genericStyles.body}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.body.fontSize,
    modularScaleMobile.body.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.body.lineHeight,
    modularScaleMobile.body.lineHeight
  )};
  `,

  bodySmall: `
  ${genericStyles.body}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.bodySmall.fontSize,
    modularScaleMobile.bodySmall.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.bodySmall.lineHeight,
    modularScaleMobile.bodySmall.lineHeight
  )};
  `,

  caption: `
  ${genericStyles.caption}
  ${TypographyUtils.fontSizeCalc(
    modularScaleDesktop.caption.fontSize,
    modularScaleMobile.caption.fontSize
  )};
  
  ${TypographyUtils.lineHeightCalc(
    modularScaleDesktop.caption.lineHeight,
    modularScaleMobile.caption.lineHeight
  )};
  `
};

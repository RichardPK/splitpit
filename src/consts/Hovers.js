import Colors from './Colors';
import Devices from './Devices';

export default {
  primaryCta: `  
  @media ${Devices.laptop}{ 
    &:hover {
        background-color: ${Colors.black};
        transition: background-color, color 0.3s;
        color: ${Colors.white};
    
        svg {
          transition: fill 0.3s;
          fill: ${Colors.white};
        }
      }
  }

  `,

  backgroundFontInverse: `  
  @media ${Devices.laptop}{ 
    &:hover {
        background-color: ${Colors.black};
        transition: background-color, color 0.3s;
        color: ${Colors.white};
    
        svg {
          transition: fill 0.3s;
          fill: ${Colors.white};
        }
      }
  }
 
  
  `
};

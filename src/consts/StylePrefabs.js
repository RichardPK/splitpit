import Devices from './Devices';
import Colors from './Colors';

export default {
  boxShadow: 'rgba(0,0,0,0.06) 0px 3px 6px;',

  appWrapper: ` 
  height: 100%;
  width: 100%;
  background-color: ${Colors.white};
  `,

  pageWrapper: `
  @media ${Devices.laptop}{
    padding-top: 4rem;
  }
  padding-top: 1rem;
  position: relative;
`,
  // vh calc - padding - margins
  fullHeight: `
  @media ${Devices.laptop}{
    min-height: calc(var(--vh, 1vh) * 100);
  }
  min-height: calc(var(--vh, 1vh) * 100);
`
};

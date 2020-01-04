import { createGlobalStyle } from 'styled-components';

const StorybookGlobalStyle = createGlobalStyle`
    html {
         background: ${(props) => (props.htmlColor ? props.htmlColor : '#fffff')} !important;
         }
`;

export default StorybookGlobalStyle;

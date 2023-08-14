// TODO - IMPORTS GlOBAL STYLES
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100vh;

        background-color: ${props => props.theme.BlackColors.blackLight};
    }
`;

export default GlobalStyle;
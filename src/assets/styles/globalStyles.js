import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap');

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Releway', sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyle
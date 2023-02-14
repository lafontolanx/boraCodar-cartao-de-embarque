import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        background-color: var(--purple); /* For browsers that do not support gradients */
        background-image: linear-gradient(var(--purple), var(--purple-900));
    }
    :root {
        --white: #fff;
        --black: #000;
        --purple: #8257E5;
        --purple-900: #271A45;
        --gray: #C4C4C4;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }
    
`
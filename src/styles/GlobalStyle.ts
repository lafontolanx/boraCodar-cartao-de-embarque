import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        background-color: var(--purple); /* For browsers that do not support gradients */
    }
    :root {
        --white: #fff;
        --black: #000;
        --purple: #8257E5;
        --purple-300: #633BBC;
        --purple-900: #271A45;
        --gray: #5C5C5C;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;

        h1 {
            font-size: 2.5rem; // 40px
            font-weight: 500;
            color: var(--black);
        }

        h3 {
            font-size: 0.875rem; // 14px
            font-weight: 400;
            color: var(--gray);
        }

        h2 {
            font-size: 1rem; // 16px
            font-weight: 500;
            color: var(--black);
        }

        p {
            font-size: 1rem; // 16px
            font-weight: 400;
            color: var(--black);
        }
    }
    
`
import styled from "styled-components";

export const Container = styled.div`
    background-color: transparent;
    width: 20.438rem; // 327px
    display: flex;
    justify-content: space-between;
    align-items: center;

    .circle1 {
        position: relative;
        left: -0.75rem; // -12px
    }

    .circle2 {
        position: relative;
        left: 0.75rem; // 12px
    }

    .top .circle {
        background-color: #5E3FA6;
    }

    .bottom .circle {
        background-color: #543895;
    }

    @media screen and (max-width: 768px) {
        background-color: var(--white);
        width: 17.438rem; // 278px
        position: relative;
        left: 1.5rem; // 24px
    }
`

export const CircleIcon = styled.div`
    background-color: transparent;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Circle = styled.div`
    width: 1.5rem; // 24px
    height: 1.5rem; // 24px
    border-radius: 50%;
    position: relative;
`
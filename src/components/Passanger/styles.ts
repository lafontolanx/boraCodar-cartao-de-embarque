import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--white);

    padding: .75rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 1.5rem 2rem;
    }

    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        border-radius: 1.5rem; // 24px
    }
`

export const PassangerName = styled.div``

export const PassangerSeat = styled.div`
    text-align: right;
`
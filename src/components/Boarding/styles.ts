import styled from "styled-components";

export const Container = styled.div`
    padding: .75rem 2rem 1.5rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 1.5rem 2rem;
    }

    background-color: var(--white);
    border-radius: 0 0 1.5rem 1.5rem;

    @media screen and (max-width: 768px) {
        border-radius: 1.5rem; // 24px
    }
`

export const BoardingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BoardingFooter = styled.div`
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: .3rem;
`

export const BoardingInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--gray);
    }
`

export const BoardingTime = styled.div`
    .boardingTime {
        background-color: var(--purple-300);
        color: var(--white);
        height: 1.688rem; // 27px
        width: 3.375rem; // 54px
        border-radius: .5rem; // 8px

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const BoardingTerminal = styled.div``

export const BoardingGate = styled.div``

export const BoardingQRCode = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
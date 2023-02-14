import styled from "styled-components";

export const Container = styled.div`
    height: 544px;
    width: 327px;
    display: flex;
    flex-direction: column;
`

export const Flight = styled.div`
    background-color: var(--white);
    border-radius: 24px 24px 0 0;

    @media screen and (max-width: 768px) {
        border-radius: 24px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FlightHeader = styled.div`
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const FlightNumber = styled.div``

export const FlightDate = styled.div`
    text-align: right;
`

export const FlightTime = styled.div`
    padding: 0 2rem 1.5rem 2rem;; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Departure = styled.div`
    position: relative;
`

export const AirplaneIcon = styled.div`
    position: relative;
    left: .6rem;
`

export const Arrival = styled.div`
    position: relative;
    text-align: right;

    .arrivalTime {
        display: flex;
        justify-content: flex-end;
    }

    .arrivalTime p:nth-child(2){
        font-weight: 500;
        font-size: 10px;
    }
`

export const Passanger = styled.div`
    background-color: var(--white);

    padding: 1.5rem 2rem;

    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        border-radius: 24px;
    }
`

export const PassangerName = styled.div``

export const PassangerSeat = styled.div`
    text-align: right;
`

export const Boarding = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--white);
    border-radius: 0 0 24px 24px;

    @media screen and (max-width: 768px) {
        border-radius: 24px;
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
        height: 27px;
        width: 54px;
        border-radius: 8px;

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

export const DividerIcon = styled.div`
    background-color: var(--white);
    width: 279px;
    display: flex;
    justify-content: center;
    left: 24px;
    position: relative;
`

export const Circle = styled.div`
    background-color: var(--purple-300);
    width: 24px;
    height: 24px;
    border-radius: 50%;

    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`














import styled from "styled-components";

export const Container = styled.div`
    @media screen and (max-width: 768px) {
        background-color: var(--white);
        border-radius: 1.5rem; // 24px
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
    padding: 0 2rem .75rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 0 2rem 1.5rem 2rem;
    }

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
        font-size: 0.625rem; // 10px
    }
`
import styled from "styled-components";

export const Container = styled.div`
    height: 544px;
    width: 327px;
    display: flex;
    flex-direction: column;
`;

export const FlightInfo = styled.div`
    background-color: var(--white);
    border-radius: 24px 24px 0 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .flight h3 {
        font-size: 14px;
        font-weight: 400;
        color: var(--gray);
    }

    .flight p {
        font-size: 16px;
        font-weight: 500;
        color: var(--black);
    } 

    .time p {
        font-weight: 400;
    }
`

export const BoardingInfo = styled.div`
    background-color: var(--white);
    border-radius: 0 0 24px 24px;
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

export const PassangerInfo = styled.div`
    border-top: 5px dashed var(--gray);
    border-bottom: 5px dashed var(--gray);
    background-color: var(--white);

    padding: 1.5rem 2rem;

    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 14px;
        font-weight: 400;
        color: var(--gray);
    }

    p {
        font-size: 16px;
        font-weight: 500;
        color: var(--black);
    }
`

export const PassangerName = styled.div``

export const PassangerSeat = styled.div`
    text-align: right;
`








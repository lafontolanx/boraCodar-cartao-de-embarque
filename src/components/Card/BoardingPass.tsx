import React from "react";
import { 
  Container, 
  FlightInfo, 
  PassangerInfo, 
  BoardingInfo, 
  FlightNumber, 
  FlightDate,
  FlightHeader,
  FlightTime,
  Departure, 
  AirplaneIcon,
  Arrival,
  PassangerName,
  PassangerSeat
} from "./styles";
import Airplane from "../../../public/airplane"

export const BoardingPass = () => {
  return (
    <Container>

      <FlightInfo>

        <FlightHeader>
          <FlightNumber className="flight" >
            <h3>Voo</h3>
            <p>RS995</p>
          </FlightNumber>

          <FlightDate className="flight">
            <h3>Data</h3>
            <p>23/05/2023</p>
          </FlightDate>
        </FlightHeader>

        <FlightTime>
          <Departure className="flight time">
            <h3>São Paulo, Brasil</h3>
            <h1>GRU</h1>
            <p>17:00</p>
          </Departure>
          
          <AirplaneIcon>
            <Airplane />
          </AirplaneIcon>

          <Arrival className="flight time">
            <h3>São Francisco, EUA</h3>
            <h1>SFO</h1>
            <div className="arrivalTime">
              <p>04:48</p>
              <p>+1</p>
            </div>
          </Arrival>
        </FlightTime>
        
      </FlightInfo>

      <PassangerInfo>

        <PassangerName>
          <h3>Passageiro</h3>
          <p>Rodrigo Terron</p>
        </PassangerName>

        <PassangerSeat>
          <h3>Assento</h3>
          <p>28A</p>
        </PassangerSeat>

      </PassangerInfo>

      <BoardingInfo>
      </BoardingInfo>

    </Container>
  
  )
};
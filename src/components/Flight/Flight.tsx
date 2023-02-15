import React from "react";
import {
    Container,
    FlightHeader,
    FlightNumber,
    FlightDate,
    FlightTime,
    Departure,
    AirplaneIcon,
    Arrival,
} from "./styles";

import Airplane from "../../../public/airplane"

export const Flight = () => {
    return (
        <Container>

        <FlightHeader>
          <FlightNumber className="flight" >
            <h3>Voo</h3>
            <h2>RS995</h2>
          </FlightNumber>

          <FlightDate className="flight">
            <h3>Data</h3>
            <h2>23/05/2023</h2>
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

          <Arrival>
            <h3>São Francisco, EUA</h3>
            <h1>SFO</h1>
            <div className="arrivalTime">
              <p>04:48</p>
              <p>+1</p>
            </div>
          </Arrival>
        </FlightTime>
        
      </Container>
    );
};

import React from "react";
import { 
  Container, 
  Flight, 
  Passanger, 
  Boarding, 
  FlightNumber, 
  FlightDate,
  FlightHeader,
  FlightTime,
  Departure, 
  AirplaneIcon,
  Arrival,
  PassangerName,
  PassangerSeat,
  BoardingHeader,
  BoardingFooter,
  BoardingInfo,
  BoardingTime,
  BoardingTerminal,
  BoardingGate,
  BoardingQRCode,
  DividerIcon,
  Circle
} from "./styles";
import Airplane from "../../../public/airplane"
import QRcode from "../../../public/qrcode"
import Divider from "../../../public/divider";

export const BoardingPass = () => {
  return (
    <Container>

      <Flight>

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
        
      </Flight>

      <DividerIcon>
        <Circle />
        <Divider />
        <Circle />
      </DividerIcon>

      <Passanger>

        <PassangerName>
          <h3>Passageiro</h3>
          <h2>Rodrigo Terron</h2>
        </PassangerName>

        <PassangerSeat>
          <h3>Assento</h3>
          <h2>28A</h2>
        </PassangerSeat>

      </Passanger>

      <DividerIcon>
        <Divider />
      </DividerIcon>

      <Boarding>

        <BoardingHeader>
          <BoardingInfo>
            <BoardingTime>
              <h3>Embarque</h3>
              <h2 className="boardingTime">16:15</h2>
            </BoardingTime>

            <BoardingTerminal>
              <h3>Terminal</h3>
              <h2>2</h2>
            </BoardingTerminal>

            <BoardingGate>
              <h3>Portão</h3>
              <h2>15</h2>
            </BoardingGate>

          </BoardingInfo>

          <BoardingQRCode>
            <QRcode />
            <h3>Grupo de embarque: 3</h3>
          </BoardingQRCode>
        </BoardingHeader>

        <BoardingFooter>
          <h2>Atenção:</h2>
          <p>O portão fecha 16:45</p>
        </BoardingFooter>

      </Boarding>

    </Container>
  
  )
};
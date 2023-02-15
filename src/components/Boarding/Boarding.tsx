import React from "react";

import {
    Container,
    BoardingHeader,
    BoardingFooter,
    BoardingInfo,
    BoardingTime,
    BoardingTerminal,
    BoardingGate,
    BoardingQRCode
} from "./styles";

import QRcode from "../../../public/qrcode"

export const Boarding = () => {
    return (
        <Container>

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

        </Container>
    )
}
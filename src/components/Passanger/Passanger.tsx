import React from "react";

import {
    Container,
    PassangerName,
    PassangerSeat,
} from "./styles";

export const Passanger = () => {
    return (
        <Container>

            <PassangerName>
                <h3>Passageiro</h3>
                <h2>Rodrigo Terron</h2>
            </PassangerName>

            <PassangerSeat>
                <h3>Assento</h3>
                <h2>28A</h2>
            </PassangerSeat>

        </Container>
    )
}
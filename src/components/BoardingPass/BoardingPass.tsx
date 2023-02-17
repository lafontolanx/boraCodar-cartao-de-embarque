import React from "react";

import { Flight } from "../Flight/Flight";
import { Passanger } from "../Passanger/Passanger";
import { Boarding } from "../Boarding/Boarding";
import { Divider } from "../Divider/Divider";

import { Container } from "./styles";

export const BoardingPass = () => {
  return (
    <Container>
      <Flight />
      <Divider />
      <Passanger />
      <Divider />
      <Boarding />
    </Container>
  
  )
};
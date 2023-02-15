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
      <Divider 
        name="circle1 top"
        name2="circle2 top"
      />
      <Passanger />
      <Divider 
        name=" circle1 bottom"
        name2="circle2 bottom"
      />
      <Boarding />
    </Container>
  
  )
};
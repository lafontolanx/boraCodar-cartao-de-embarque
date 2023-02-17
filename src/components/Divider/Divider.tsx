import React from "react";
import { 
    Container,
    Circle,
    CircleIcon
} from "./styles";

import DividerIcon from "../../../public/divider";

export const Divider = () => {
    return (
        <Container>
            <CircleIcon className="circle1">
                <Circle className="circle"/>
            </CircleIcon>
            
            <DividerIcon />

            <CircleIcon className="circle2">
                <Circle className="circle"/>
            </CircleIcon>
        </Container>
    )
}
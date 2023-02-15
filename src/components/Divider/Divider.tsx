import React from "react";
import { 
    Container,
    Circle,
    CircleIcon
} from "./styles";

import DividerIcon from "../../../public/divider";

interface DividerProps {
    name: string;
    name2: string;
}

export const Divider = ({name, name2}: DividerProps) => {
    return (
        <Container>
            <CircleIcon className={name}>
                <Circle className="circle"/>
            </CircleIcon>
            
            <DividerIcon />

            <CircleIcon className={name2}>
                <Circle className="circle"/>
            </CircleIcon>
        </Container>
    )
}
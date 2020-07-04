import React, { useState } from 'react';
import { Colors, CardValue } from './PredefinedValues';

export interface CardProps {
    value: string;
    isVisible?: boolean;
    color?: Colors;
}

const Card = (props: CardProps) => {
    const [color, setColor] = useState("#aabb44");

    return (
            <div style={{backgroundColor: color, height: "2rem", width: "3rem", margin: "2px"}} onClick={() => {setColor("#3399aa")}}>
                {props.value}
            </div>
    );
}

export default Card;
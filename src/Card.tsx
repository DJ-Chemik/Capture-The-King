import React, { useState } from 'react';
import { Colors, CardValue } from './PredefinedValues';
import { CardWrapper } from './StyledComponents';

export interface CardProps {
    value: string;
    isVisible?: boolean;
    color?: Colors;
}

const Card = (props: CardProps) => {
    const [color, setColor] = useState("#aabb44");

    return (
            <CardWrapper color={color} onClick={() => setColor("#3399aa")}>
                {props.value}
            </CardWrapper>
    );
}

export default Card;
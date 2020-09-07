import React, { useState } from 'react';
import { Colors, CardValue } from './PredefinedValues';
import { CardWrapper } from './StyledComponents';

export interface CardProps {
    id: number;
    value: string;
    isVisible?: boolean;
    onClick?: (id: number) => void;
    color?: Colors;
}

const Card = (props: CardProps) => {
    const [color, setColor] = useState("#aabb44");

    const handleClickCard = () => {
        setColor("#3399aa");
        props.onClick?.(props.id);
    };

    return (
            <CardWrapper color={color} onClick={handleClickCard}>
                {props.isVisible 
                ? props.value
                : '?'}
            </CardWrapper>
    );
}

export default Card;
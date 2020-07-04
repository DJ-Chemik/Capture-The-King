import React from 'react';
import { Colors, CardValue } from './PredefinedValues';

export interface CardProps {
    value: string;
    isVisible?: boolean;
    color?: Colors;
}

const Card = (props: CardProps) => {
  return (
        <div style={{backgroundColor: "#aabb44", height: "2rem", width: "3rem", margin: "2px"}}>
            {props.value}
        </div>
  );
}

export default Card;
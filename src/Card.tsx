import React from 'react';
import { Colors, CardValue } from './PredefinedValues';

export interface CardProps {
    value: string;
    color?: Colors;
}

const Card = (props: CardProps) => {
  return (
        <div style={{backgroundColor: "blue", height: "3rem", width: "3rem"}}>
            {props.value}
        </div>
  );
}

export default Card;
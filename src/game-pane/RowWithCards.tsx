import React, { useEffect, useState } from 'react';
import Card, { CardProps } from '../Card';

export interface RowWithCardsProps {
    cards: CardProps[];
}

const RowWithCards = (props: RowWithCardsProps) => {
    const [row, setRow] = useState<JSX.Element[]>();

    const renderCardsInRow = () => {
        return(
            props.cards.map( (card) => {
                return(
                    <Card
                       value={card.value} 
                    />
                )
            })
        )
    }

    useEffect( () => {
        setRow(renderCardsInRow());
    }, [props.cards])

    return (
            <div style={{display: "flex"}}>
                {row}
            </div>
    );
}

export default RowWithCards;
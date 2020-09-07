import React, { useEffect, useState } from 'react';
import Card, { CardProps } from '../Card';

export interface RowWithCardsProps {
    cards: CardProps[];
}

const RowWithCards = (props: RowWithCardsProps) => {

    const renderCardsInRow = () => {
        return(
            props.cards.map( (card) => {
                return(
                    <Card
                       id={card.id}
                       value={card.value} 
                       isVisible={card.isVisible}
                       onClick={card.onClick}
                       color={card.color}
                    />
                )
            })
        )
    }

    return (
            <div style={{display: "flex"}}>
                {props.cards && renderCardsInRow()}
            </div>
    );
}

export default RowWithCards;
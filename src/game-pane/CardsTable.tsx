import React, { useState, useEffect } from 'react';
import { CardProps } from '../Card';
import RowWithCards from './RowWithCards';

export interface CardsTableProps {
    cards: CardProps[];
}

const CardsTable = ({cards} : CardsTableProps) => {
    const [cardRows, setCardRows] = useState<CardProps[][]>([]);

    const renderCardsInTable = () => {
        const localCardRows = [];
        if(cards){
            for (let i = 0; i < 25; i+=5) {
                const row = []
                row.push(cards[i]);
                row.push(cards[i+1]);
                row.push(cards[i+2]);
                row.push(cards[i+3]);
                row.push(cards[i+4]);
                localCardRows.push(row);
            }
        }
        setCardRows(localCardRows);
    };

    useEffect(() => {
        renderCardsInTable();
    }, [cards])

    return (
        <>
           {cardRows.map( (row) => {
                return(
                    <RowWithCards
                        cards={row}
                    />
                )
            })} 
        </>
    );
}

export default CardsTable;
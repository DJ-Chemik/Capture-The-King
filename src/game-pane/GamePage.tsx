import React, { useState, useEffect } from 'react';
import Card, { CardProps } from '../Card';
import { CardValue } from '../PredefinedValues';
import RowWithCards from './RowWithCards';

const GamePage = () => {
    const [boardCards, setBoardCards] = useState<CardProps[]>();
    const [cardTable, setCardTable] = useState<JSX.Element[]>();
    const [numberOfCardValue1, setNumberOfCardValue1] = useState<number>(7);
    const [numberOfCardValue2, setNumberOfCardValue2] = useState<number>(4);
    const [numberOfCardValue3, setNumberOfCardValue3] = useState<number>(5);
    const [numberOfCardValue4, setNumberOfCardValue4] = useState<number>(5);
    const [numberOfCardValue5, setNumberOfCardValue5] = useState<number>(3);
    const [numberOfCardValueK, setNumberOfCardValueK] = useState<number>(1);

    const drawCardsInBoard = () => {
        const cards: CardProps[] = [];
        for (let i = 0; i < 25; i++) {
            const randomValue = Math.random();
            if (randomValue < 1/6 && numberOfCardValue1 > 0) {
                cards.push({
                    value: CardValue.V1
                });
                setNumberOfCardValue1(numberOfCardValue1-1);
            }else if (randomValue < 2/6 && numberOfCardValue2 > 0) {
                cards.push({
                    value: CardValue.V2
                });
                setNumberOfCardValue2(numberOfCardValue2-1);
            }else if (randomValue < 3/6 && numberOfCardValue3 > 0) {
                cards.push({
                    value: CardValue.V3
                });
                setNumberOfCardValue3(numberOfCardValue3-1);
            }else if (randomValue < 4/6 && numberOfCardValue4 > 0) {
                cards.push({
                    value: CardValue.V4
                });
                setNumberOfCardValue4(numberOfCardValue4-1);
            }else if (randomValue < 5/6 && numberOfCardValue5 > 0) {
                cards.push({
                    value: CardValue.V5
                });
                setNumberOfCardValue5(numberOfCardValue5-1);
            }else if (randomValue < 6/6 && numberOfCardValueK > 0) {
                cards.push({
                    value: CardValue.K
                });
                setNumberOfCardValueK(numberOfCardValueK-1);
            }else{
                i--;
            }
        }
        return cards;
    }

    useEffect(() => {
        setBoardCards(drawCardsInBoard());
    }, [])

    useEffect(() => {
        const tmp = renderCardsInTable();
        if(tmp){
            setCardTable(tmp);
        }
    }, [boardCards])

    const renderCardsInTable = () => {
        const cardRows = [];
        if(boardCards){
            for (let i = 0; i < 25; i+=5) {
                const row = []
                row.push(boardCards[i]);
                row.push(boardCards[i+1]);
                row.push(boardCards[i+2]);
                row.push(boardCards[i+3]);
                row.push(boardCards[i+4]);
                cardRows.push(row);
            }
        }
        
        return(
            cardRows.map( (row) => {
                return(
                    <RowWithCards
                        cards={row}
                    />
                )
            })
        )
    }

    return (
    <div style={{textAlign: "center"}}>
        {cardTable}
    </div>
  );
}

export default GamePage;
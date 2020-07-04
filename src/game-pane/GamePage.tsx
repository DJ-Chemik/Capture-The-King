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
        let numberOf1 = numberOfCardValue1;
        let numberOf2 = numberOfCardValue2;
        let numberOf3 = numberOfCardValue3;
        let numberOf4 = numberOfCardValue4;
        let numberOf5 = numberOfCardValue5;
        let numberOfK = numberOfCardValueK;
        for (let i = 0; i < 25; i++) {
            const randomValue = Math.random();
            if (randomValue < 1/6 && numberOf1 > 0) {
                console.log(i + ": 1");
                cards.push({
                    value: CardValue.V1
                });
                numberOf1--;
            }else if (randomValue < 2/6 && numberOf2 > 0) {
                console.log(i + ": 2");
                cards.push({
                    value: CardValue.V2
                });
                numberOf2--;
            }else if (randomValue < 3/6 && numberOf3 > 0) {
                console.log(i + ": 3");
                cards.push({
                    value: CardValue.V3
                });
                numberOf3--;
            }else if (randomValue < 4/6 && numberOf4 > 0) {
                console.log(i + ": 4");
                cards.push({
                    value: CardValue.V4
                });
                numberOf4--;
            }else if (randomValue < 5/6 && numberOf5 > 0) {
                console.log(i + ": 5");
                cards.push({
                    value: CardValue.V5
                });
                numberOf5--;
            }else if (randomValue < 6/6 && numberOfK > 0) {
                console.log(i + ": K");
                cards.push({
                    value: CardValue.K
                });
                numberOfK--;
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
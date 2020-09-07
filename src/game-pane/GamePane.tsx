import React, { useState, useEffect } from 'react';
import Card, { CardProps } from '../Card';
import { CardValue } from '../PredefinedValues';
import RowWithCards from './RowWithCards';
import { GamePaneWrapper } from '../StyledComponents';
import CardsTable from './CardsTable';

const GamePane = () => {
    const [boardCards, setBoardCards] = useState<CardProps[]>();
    const [numberOfCardValue1, setNumberOfCardValue1] = useState<number>(7);
    const [numberOfCardValue2, setNumberOfCardValue2] = useState<number>(4);
    const [numberOfCardValue3, setNumberOfCardValue3] = useState<number>(5);
    const [numberOfCardValue4, setNumberOfCardValue4] = useState<number>(5);
    const [numberOfCardValue5, setNumberOfCardValue5] = useState<number>(3);
    const [numberOfCardValueK, setNumberOfCardValueK] = useState<number>(1);

    const handleClickCard = (id: number) => {
        //TODO
    };

    const randomCardsValues = () => {
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
                    id: i,
                    value: CardValue.V1,
                    isVisible: false,
                    onClick: handleClickCard,
                });
                numberOf1--;
            }else if (randomValue < 2/6 && numberOf2 > 0) {
                console.log(i + ": 2");
                cards.push({
                    id: i,
                    value: CardValue.V2,
                    isVisible: false,
                    onClick: handleClickCard,
                });
                numberOf2--;
            }else if (randomValue < 3/6 && numberOf3 > 0) {
                console.log(i + ": 3");
                cards.push({
                    id: i,
                    value: CardValue.V3,
                    isVisible: false,
                    onClick: handleClickCard,
                });
                numberOf3--;
            }else if (randomValue < 4/6 && numberOf4 > 0) {
                console.log(i + ": 4");
                cards.push({
                    id: i,
                    value: CardValue.V4,
                    isVisible: false,
                    onClick: handleClickCard,
                });
                numberOf4--;
            }else if (randomValue < 5/6 && numberOf5 > 0) {
                console.log(i + ": 5");
                cards.push({
                    id: i,
                    value: CardValue.V5,
                    isVisible: false,
                    onClick: handleClickCard,
                });
                numberOf5--;
            }else if (randomValue < 6/6 && numberOfK > 0) {
                console.log(i + ": K");
                cards.push({
                    id: i,
                    value: CardValue.K,
                    isVisible: false,
                    onClick: handleClickCard,
                });
                numberOfK--;
            }else{
                i--;
            }
        }
        return cards;
    }

    useEffect(() => {
        setBoardCards(randomCardsValues());
    }, [])


    return (
    <GamePaneWrapper>
        {boardCards && <CardsTable cards={boardCards}/>}
    </GamePaneWrapper>
  );
}

export default GamePane;
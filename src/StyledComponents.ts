import styled from "styled-components";

const borderOutside = 'solid black 3px';
const borderInside = 'solid #111314 1px';

export const AppWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    text-align: center;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: ${borderOutside};
    padding: 5px;
`;

export const GamePaneWrapper = styled.div`
    text-align: center;
    border: ${borderInside};
    padding: 2px;
`;

export const InfoPaneWrapper = styled.div`
    border: ${borderInside};
    padding: 2px;
    width: 16.25rem;
    height: 11.25rem;
`;

export const ResultPaneWrapper = styled.div`
    border: ${borderInside};
    padding: 2px;
    width: 16.25rem;
    height: 11.25rem;
`;

export const UserCardsPaneWrapper = styled.div`
    border: ${borderInside};
    padding: 2px;
    width: 16.25rem;
    height: 11.25rem;
`;

export interface CardWrapperProps {
    color: string;
};

export const CardWrapper = styled.div<CardWrapperProps>`
    background-color: ${props => props.color};
    height: 3.5rem; 
    width: 5rem; 
    margin: 2px;
`;
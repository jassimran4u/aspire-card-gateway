import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getFn } from '../helper/http';

interface Card {
    name: string;
    cardNumber: string;
    validity: string;
    cvv: string;
    cardScheme: string;
    isFreezed: boolean;
}

interface CardContextType {
    cards: Card[] | undefined;
    setCards: React.Dispatch<React.SetStateAction<Card[] | undefined>>;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

const CardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cards, setCards] = useState<Card[] | undefined>([]);

    useEffect(() => {

        const fetchCards = async () => {
            const response = await getFn('getCards');
            setCards(response?.json());
        };

        fetchCards();
    }, []);

    return (
        <CardContext.Provider value={{ cards, setCards }}>
            {children}
        </CardContext.Provider>
    );
};

export { CardContext, CardProvider };

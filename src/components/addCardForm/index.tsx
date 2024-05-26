import React, { useState, useContext } from 'react';
import { CardContext } from '../../context/cardContext';
import './index.css';

const generateRandomCardNumber = () => {
    return Array(16)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10))
        .join('');
};

const generateRandomExpiryDate = () => {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = String(Math.floor(Math.random() * 5) + 20);
    return `${month}/${year}`;
};

type AddCardFormProps = {
    submitHook: () => void;
};


const AddCardForm: React.FC<AddCardFormProps> = ({submitHook}) => {
    let { cards, setCards } = useContext(CardContext) || {};;
    const [cardName, setCardName] = useState('');

    const handleSubmit = () => {
        const newCard = {
            name: cardName,
            cardNumber: generateRandomCardNumber(),
            validity: generateRandomExpiryDate(),
            cvv: '***',
            cardScheme: 'VISA', // Or you can randomize this as well,
            isFreezed: false,
        };
        cards = cards || [];
        setCards && setCards([...cards, newCard]);
        setCardName('');
        submitHook && submitHook();
    };

    return (
        <form className="add-card-form">
            <label>
                Card Name:
                <input
                    type="text"
                    value={cardName}
                    onChange={e => setCardName(e.target.value)}
                    required
                />
            </label>
            <button type="button" onClick={handleSubmit} >Add Card</button>
        </form>
    );
};

export default AddCardForm;

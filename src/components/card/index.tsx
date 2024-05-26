import React from 'react';
import './index.css';
import icons from '../../assets/icons';

interface CardProps {
    name: string;
    cardNumber: string;
    validity: string;
    cvv: string;
    cardScheme: string;
    isFreezed: boolean;
}

const Card: React.FC<CardProps> = ({ name, cardNumber, validity, cvv, cardScheme, isFreezed }) => {
    const maskCardNumber = (number: string) => {
        const lastFourDigits = number.slice(-4);
        const maskedDigits = number.slice(0, -4).split('').map((digit, index) => (
            <div key={index} className="dot"></div>
        ));

        const formattedNumber = [...maskedDigits, ...lastFourDigits.split('')].map((segment, index) => (
            <span key={index} className={(index + 1) % 4 == 0 ? 'card-number-segment' : ''}>
                {segment}
            </span>
        ));

        return formattedNumber;
    };
    return (
        <div className={`card ${isFreezed && 'freezed'}`}>
            <div className="card-header">
                <img src={icons.logoWhite} alt="aspire" />
            </div>
            <div className="card-body">
                <div className="card-details">
                    <div className="card-holder-name">{name}</div>
                    <div className="card-number">{maskCardNumber(cardNumber)}</div>
                    <div className="card-validity-row">
                        <div className="card-validity">Thru: {validity}</div>
                        <div className="card-cvv">
                            <div>CVV: &nbsp;</div>
                        <div className="card-cvv-value">
                        {cvv}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <span className="card-scheme">
                    <img src={cardScheme === 'VISA' ? icons.visaIcon : ''} alt={cardScheme} />
                </span>
            </div>
        </div>
    );
};

export default Card;

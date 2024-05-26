import React from 'react';
import './index.css';
import icons from '../../assets/icons';

type HeaderProps = {
    handleAddNewCard: () => void;
};

const Header: React.FC<HeaderProps> = ({ handleAddNewCard }) => {
    return (
        <div>
            <span className="balance-label">Available balance</span>
            <section className='header'>
                <div className="balance-info">
                    <div className="balance-amount">
                        <span className="currency-symbol">S$</span>
                        <span className="amount">3,000</span>
                    </div>
                </div>
                <div className="right-button-container">
                    <button className="new-card-button">
                        <div className='new-card-button-icon'  >
                            <img src={icons.box} alt="New card" />
                        </div>
                        <div className='new-card-button-text' onClick={handleAddNewCard}>
                            New card
                        </div>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Header;

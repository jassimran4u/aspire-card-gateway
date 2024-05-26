import React from 'react';
import './index.css';

interface CardAction {
    icon: string;
    label: string;
    type: string;
}

interface CardActionsProps {
    actions: CardAction[],
    onActionButtonClick: (action: CardAction) => void;
}

const CardActions: React.FC<CardActionsProps> = ({ actions, onActionButtonClick }) => {
    return (
        <div className="card-actions">
            {actions.map((action, index) => (
                <div key={index} className="card-action-button" onClick={() => { onActionButtonClick(action); }} >
                    <img src={action.icon} alt={action.label} />
                    <span>{action.label}</span>
                </div>
            ))}
        </div>
    );
};

export default CardActions;

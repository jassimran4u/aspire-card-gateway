import React from 'react';
import './index.css';
import icons from '../../assets/icons';

interface Transaction {
    id: number;
    merchant: string;
    date: string;
    amount: string;
    type: string;
    icon: string;
    iconBackground: string;
}

interface RecentTransactionProps {
    transactions: Transaction[];
}

const RecentTransaction: React.FC<RecentTransactionProps> = ({ transactions }) => {
    return (
        <>
        <div className="recent-transactions">
            {transactions.map(transaction => (
                <div key={transaction.id} className="transaction">
                    <div className="transaction-icon" style={{ backgroundColor: transaction.iconBackground }} >
                        <img src={transaction.icon} alt={transaction.type} />
                    </div>
                    <div className="transaction-details">
                        <div className="merchant">{transaction.merchant}</div>
                        <div className="date">{transaction.date}</div>
                        <div className="type">
                            <div className="icon-small-card">
                                <div>
                                    <img src={icons.smallCard} />
                                </div>
                            </div>
                            {transaction.type}</div>
                    </div>
                    <div className={`txn-amount ${transaction.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                        {transaction.amount}

                    </div>
                    <div className="next-icon">
                        <img src={icons.nextIcon} />
                    </div>
                </div>
            ))}
            
        </div>
        <div className="view-all">
        <div>View all card transactions</div>
    </div>
    </>
    );
};

export default RecentTransaction;

import React, { useState } from "react";
import icons from "../../assets/icons";
import Accordion from "../accordian";
import Card from "../card";
import CardActions from "../cardActions";
import Carousel from "../carousel";
import Header from "../header";
import RecentTransaction from "../recentTransaction";
import { Tabs, Tab } from "../tabs";
import './index.css';
// Placeholder components

const cards = [
    { name: 'Mark Henry', cardNumber: '7377466689992020', validity: '12/20', cvv: '***', cardScheme: 'VISA' },
    { name: 'Jane Doe', cardNumber: '1234567812345678', validity: '11/23', cvv: '***', cardScheme: 'MasterCard' },
    { name: 'John Smith', cardNumber: '8765432187654321', validity: '09/21', cvv: '***', cardScheme: 'VISA' },
];

const actions = [
    { icon: icons.freezeCard, label: 'Freeze card', type: 'freeze'},
    { icon: icons.setSpendLimit, label: 'Set spend limit', type: 'spendLimit'},
    { icon: icons.gPay, label: 'Add to GPay', type: 'gPay'},
    { icon: icons.replaceCard, label: 'Replace card', type: 'replace'},
    { icon: icons.deactivateCard, label: 'Cancel card', type: 'cancel'},
];

const transactions = [
    { id: 1, merchant: 'Hamleys', date: '20 May 2020', amount: '+ S$ 150', type: 'Refund on debit card', icon: icons.fileStorage, iconBackground: "#009DFF1A" },
    { id: 2, merchant: 'Hamleys', date: '20 May 2020', amount: '- S$ 150', type: 'Charged to debit card', icon: icons.flights, iconBackground: "#00D6B51A" },
    { id: 3, merchant: 'Hamleys', date: '20 May 2020', amount: '- S$ 150', type: 'Charged to debit card', icon: icons.megaPhone, iconBackground: "#F251951A" },
    { id: 4, merchant: 'Hamleys', date: '20 May 2020', amount: '- S$ 150', type: 'Charged to debit card', icon: icons.fileStorage, iconBackground: "#009DFF1A" },
];

// Main Content Component
export const MainContent: React.FC = () => {
    const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);

    return (
        <div className="main-content">
            <Header />
            <Tabs>
                <Tab label="My debit cards">
                    <div className="debit-card-container">
                        <div className="left-div">
                            <div className="show-card-number-container" ><img src={icons.eyeIcon} alt="show" /> Show card number</div>
                            <Carousel activeIndex={carouselActiveIndex} onChangeIndex={(index) => {
                                setCarouselActiveIndex(index);
                            }} >
                                {
                                    cards.map((card, index) => (
                                        <Card
                                            key={index}
                                            name={card.name}
                                            cardNumber={card.cardNumber}
                                            validity={card.validity}
                                            cvv={card.cvv}
                                            cardScheme={card.cardScheme}
                                        />
                                    ))
                                }

                            </Carousel>
                            <CardActions actions={actions} onActionButtonClick={
                                (action) => {
                                    console.log(`Action: ${action.label}`);
                                }
                            } />
                        </div>
                        <div className="right-div">
                            <Accordion title="Card details" isOpen={false} accordionIcon={icons.cardDetails} >
                                <div></div>
                            </Accordion>
                            <Accordion title="Recent transactions" isOpen accordionIcon={icons.transactions} >
                                <RecentTransaction transactions={transactions} />
                            </Accordion>
                        </div>

                    </div>
                </Tab>
                <Tab label="All company cards">
                    <div>All company cards content</div>
                </Tab>
            </Tabs>
        </div>

    )
}
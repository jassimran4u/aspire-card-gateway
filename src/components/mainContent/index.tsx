import React, { useContext, useState } from "react";
import icons from "../../assets/icons";
import Accordion from "../accordian";
import Card from "../card";
import CardActions from "../cardActions";
import Carousel from "../carousel";
import Header from "../header";
import RecentTransaction from "../recentTransaction";
import { Tabs, Tab } from "../tabs";
import './index.css';
import { CardContext } from "../../context/cardContext";
import { actions, transactions } from "./utils";
import Modal from "../modal";
import AddCardForm from "../addCardForm";



// Main Content Component
export const MainContent: React.FC = () => {
    const { cards, setCards } = useContext(CardContext) || {};
    const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFreezeCard = () => {
        const newCards = JSON.parse(JSON.stringify(cards));
        newCards[carouselActiveIndex].isFreezed = true;
        if (setCards) {
            setCards(newCards);
        }
    }

    const handleAddNewCard = () => {
        setIsModalOpen(true);
    }

    const submitHook = () =>{
        setIsModalOpen(false);
    }

    return (
        <div className="main-content">
            <Header handleAddNewCard={handleAddNewCard} />
            <Tabs>
                <Tab label="My debit cards">
                    <div className="debit-card-container">
                        <div className="left-div">
                            <div className="show-card-number-container" ><img src={icons.eyeIcon} alt="show" /> Show card number</div>
                            <Carousel activeIndex={carouselActiveIndex} onChangeIndex={(index) => {
                                setCarouselActiveIndex(index);
                            }} >
                                {
                                    cards ? cards.map((card, index) => (
                                        <Card
                                            key={index}
                                            name={card.name}
                                            cardNumber={card.cardNumber}
                                            validity={card.validity}
                                            cvv={card.cvv}
                                            cardScheme={card.cardScheme}
                                            isFreezed={card.isFreezed}
                                        />
                                    )) : []
                                }

                            </Carousel>
                            <CardActions actions={actions} onActionButtonClick={
                                (action) => {
                                    if (action.type === 'freeze') {
                                        handleFreezeCard();
                                    }
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
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddCardForm submitHook={submitHook}/>
            </Modal>
        </div>

    )
}
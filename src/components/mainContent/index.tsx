import icons from "../../assets/icons";
import Accordion from "../accordian";
import Card from "../card";
import CardActions from "../cardActions";
import Carousel from "../carousel";
import Header from "../header";
import { Tabs, Tab } from "../tabs";
import './index.css';
// Placeholder components
const CardOverview: React.FC = () => <div>Card Overview Component</div>;
const RecentTransactions: React.FC = () => <div>Recent Transactions Component</div>;

const actions = [
    { icon: icons.freezeCard, label: 'Freeze card' },
    { icon: icons.setSpendLimit, label: 'Set spend limit' },
    { icon: icons.gPay, label: 'Add to GPay' },
    { icon: icons.replaceCard, label: 'Replace card' },
    { icon: icons.deactivateCard, label: 'Cancel card' },
];
// Main Content Component
export const MainContent: React.FC = () => (
    <div className="main-content">
        <Header />

        <Tabs>
            <Tab label="My debit cards">
                <div className="debit-card-container">
                    <div className="left-div">
                        <div className="show-card-number-container" ><img src={icons.eyeIcon} alt="show" /> Show card number</div>
                        <Carousel activeIndex={0} onChangeIndex={(index) => {
                            console.log(`Index changed to: ${index}`);
                        }} >
                            <Card
                                name="Mark Henry"
                                cardNumber="7377466689992020"
                                validity="12/20"
                                cvv="***"
                                cardScheme="VISA"
                            />
                            <Card
                                name="Jane Doe"
                                cardNumber="1234567812345678"
                                validity="11/23"
                                cvv="***"
                                cardScheme="MasterCard"
                            />
                            <Card
                                name="John Smith"
                                cardNumber="8765432187654321"
                                validity="09/21"
                                cvv="***"
                                cardScheme="VISA"
                            />
                        </Carousel>
                        <CardActions actions={actions} onActionButtonClick={
                            (action) => {
                                console.log(`Action: ${action.label}`);
                            }
                        } />
                    </div>
                    <div className="right-div">
                        <Accordion title="Card details" isOpen>
                            <div>Details about the card...</div>
                        </Accordion>
                    </div>

                </div>
            </Tab>
            <Tab label="All company cards">
                <div>All company cards content</div>
            </Tab>
        </Tabs>

    </div>
);
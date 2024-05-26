import icons from "../../assets/icons";

export const actions = [
    { icon: icons.freezeCard, label: 'Freeze card', type: 'freeze' },
    { icon: icons.setSpendLimit, label: 'Set spend limit', type: 'spendLimit' },
    { icon: icons.gPay, label: 'Add to GPay', type: 'gPay' },
    { icon: icons.replaceCard, label: 'Replace card', type: 'replace' },
    { icon: icons.deactivateCard, label: 'Cancel card', type: 'cancel' },
];

export const transactions = [
    { id: 1, merchant: 'Hamleys', date: '20 May 2020', amount: '+ S$ 150', type: 'Refund on debit card', icon: icons.fileStorage, iconBackground: "#009DFF1A" },
    { id: 2, merchant: 'Hamleys', date: '20 May 2020', amount: '- S$ 150', type: 'Charged to debit card', icon: icons.flights, iconBackground: "#00D6B51A" },
    { id: 3, merchant: 'Hamleys', date: '20 May 2020', amount: '- S$ 150', type: 'Charged to debit card', icon: icons.megaPhone, iconBackground: "#F251951A" },
    { id: 4, merchant: 'Hamleys', date: '20 May 2020', amount: '- S$ 150', type: 'Charged to debit card', icon: icons.fileStorage, iconBackground: "#009DFF1A" },
];

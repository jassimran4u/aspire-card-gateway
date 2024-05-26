# Card Management Application

A card management application built with React, TypeScript, and Context API for state management. The application allows users to view and manage their cards through a carousel interface, add new cards, and see recent transactions. 

## Features

- View card details in a carousel
- Add new cards
- See recent transactions
- Responsive design

## Technologies Used

- React
- TypeScript
- Context API for state management
- React Router for routing
- LocalStorage for data persistence (simulating API calls)
- Styled Components for styling

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn

### Installing

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/card-management-app.git
   cd card-management-app
Install dependencies

npm install
Start the development server

npm run dev
Open your browser and navigate to http://localhost:5173

Project Structure
src/
components/
Card.tsx: Component for displaying card details
Carousel.tsx: Component for displaying cards in a carousel
CardActions.tsx: Component for card actions like Freeze, Set spend limit, etc.
AddCardForm.tsx: Form component for adding a new card
Accordion.tsx: Accordion component for card details and recent transactions
contexts/
CardContext.tsx: Context API for managing card state
App.tsx: Main application component
index.tsx: Entry point of the application
Context API for State Management
The application uses Context API to manage the state of cards. The CardContext is defined in contexts/CardContext.tsx.

Example Context API Setup
tsx
Copy code
// CardContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Card {
  name: string;
  cardNumber: string;
  validity: string;
  cvv: string;
  cardScheme: string;
}

interface CardContextType {
  cards: Card[];
  addCard: (card: Card) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    // Fetch initial card data
    const fetchCards = async () => {
      // Simulate an API call
      const response = [
        { name: 'Mark Henry', cardNumber: '7377466689992020', validity: '12/20', cvv: '***', cardScheme: 'VISA' },
        { name: 'Jane Doe', cardNumber: '1234567812345678', validity: '11/23', cvv: '***', cardScheme: 'MasterCard' },
        { name: 'John Smith', cardNumber: '8765432187654321', validity: '09/21', cvv: '***', cardScheme: 'VISA' },
      ];
      setCards(response);
    };
    
    fetchCards();
  }, []);

  const addCard = (card: Card) => {
    setCards(prevCards => [...prevCards, card]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = React.useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
Adding a New Card
To add a new card, open the modal where the user can input the card name. The card number and expiration date are generated randomly.

tsx
Copy code
// AddCardForm.tsx
import React, { useState } from 'react';
import { useCardContext } from '../contexts/CardContext';

const AddCardForm = () => {
  const { addCard } = useCardContext();
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cardNumber = Math.random().toString().slice(2, 18); // Generate a random 16-digit number
    const validity = `${Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0')}/${Math.floor(Math.random() * 5 + 21)}`;
    const newCard = { name, cardNumber, validity, cvv: '***', cardScheme: 'VISA' };
    addCard(newCard);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCardForm;


Author
Jassimran Singh

License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Explanation:

- **Title and Description**: Gives an overview of the project.
- **Features**: Lists the main features of the application.
- **Technologies Used**: Specifies the technologies and libraries used in the project.
- **Getting Started**: Instructions on how to set up the project locally.
- **Project Structure**: Provides a brief overview of the file and folder structure.
- **Context API for State Management**: Explains how the Context API is used to manage state.
- **Adding a New Card**: Describes how to add a new card.
- **Deployment**: Basic instructions on how to deploy the application using Vercel.
- **Author**: Your name.
- **License**: Information about the project's license.

Feel free to adjust the content to better fit your project's specifics.
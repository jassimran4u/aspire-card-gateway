import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure you have appropriate styling
import Sidebar from './components/sideBar';


// Placeholder components
const Header: React.FC = () => <div>Header Component</div>;
const CardOverview: React.FC = () => <div>Card Overview Component</div>;
const RecentTransactions: React.FC = () => <div>Recent Transactions Component</div>;

// Main Content Component
const MainContent: React.FC = () => (
  <div className="main-content">
    <header className="header">
      <Header />
    </header>

    {/* Card Overview Section */}
    <section className="card-overview">
      <CardOverview />
    </section>

    {/* Recent Transactions Section */}
    <section className="recent-transactions">
      <RecentTransactions />
    </section>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <aside>
          <Sidebar />
        </aside>

        {/* Routes for main content */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
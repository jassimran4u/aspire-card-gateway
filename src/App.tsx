import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure you have appropriate styling
import Sidebar from './components/sideBar';
import { MainContent } from './components/mainContent';



const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <aside>
          <Sidebar />
        </aside>
        <Routes>
          <Route path="/cards" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
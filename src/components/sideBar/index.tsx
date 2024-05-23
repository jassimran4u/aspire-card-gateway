import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import { sidebarConfig } from './utils';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>aspire</h1>
      </div>
      <nav className="navigation">
        <ul>
          {sidebarConfig.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

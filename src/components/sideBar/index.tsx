import React from 'react';
import "./index.css";
import { constants, sidebarConfig } from './utils';
import icons from '../../assets/icons/index';
import { NavLink } from 'react-router-dom';

const { Logo } = icons;

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Logo} alt="aspire" />
            </div>
            <div className="subText" >
                {constants.HEADER_SUB_TEXT}
            </div>
            <nav className="navigation">
                <ul>
                    {sidebarConfig.map((item) => (
                        <li key={item.name} className="menu-item">
                            <NavLink to={item.path}
                                className={({ isActive }) => (isActive ? 'active-link' : '')} >
                                <div className="menu-icon">
                                    <img src={item.icon} alt={item.name} /></div>
                                <div className="menu-text">
                                    {item.name}
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

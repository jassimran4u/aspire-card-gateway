import React, { useState } from 'react';
import './index.css';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, children }) => {
  return <div>{children}</div>;
};

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-headers">
        {children.map((tab, index) => (
          <div
            key={index}
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </div>
        ))}
      </div>
      <div className="tab-body">
        {children[activeTab]}
      </div>
    </div>
  );
};

export { Tabs, Tab };

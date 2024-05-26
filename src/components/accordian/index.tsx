import React, { useState } from 'react';
import './index.css';
import icons from '../../assets/icons';

interface AccordionProps {
    title: string;
    isOpen?: boolean;
    children: React.ReactNode;
    accordionIcon: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, isOpen = false, children, accordionIcon }) => {
    const [isExpanded, setIsExpanded] = useState(isOpen);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={handleToggle}>

                <div className="accordion-heading">
                    <div className="accordion-icon" >
                        <img src={accordionIcon} />
                    </div>
                    <div className="accordion-title">{title}</div>
                </div>
                <div className={`accordion-toggle ${isExpanded ? 'expanded' : ''}`}>
                    {
                        isExpanded ?
                            <img src={icons.upArrow} /> :
                            <img src={icons.downArrow} />
                    }
                </div>
            </div>
            {isExpanded && <div className="accordion-body">{children}</div>}
        </div>
    );
};

export default Accordion;

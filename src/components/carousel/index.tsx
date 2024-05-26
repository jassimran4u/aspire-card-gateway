import React, { useState, useEffect } from 'react';
import './index.css';

interface CarouselProps {
    children: React.ReactNode[],
    activeIndex?: number,
    onChangeIndex?: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, activeIndex = 0, onChangeIndex = () => { } }) => {

    const handleIndicatorClick = (index: number) => {
        onChangeIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {children.map((child, index) => (
                    <div className="carousel-item" key={index}>
                        {child}
                    </div>
                ))}
            </div>
            <div className="carousel-indicators">
                {children.map((_, index) => (
                    <span
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleIndicatorClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

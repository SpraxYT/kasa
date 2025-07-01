import React, { useState } from "react";
import arrowUp from '../assets/arrow_up.png';

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-element">
            <button className="collapse-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img 
                    src={arrowUp} 
                    alt="Toggle" 
                    className={`collapse-arrow ${isOpen ? 'open' : ''}`}
                />
            </button>
            <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                <div className="collapse-text">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Collapse;
import React, { useState } from "react";

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    return (
        <div className="slideshow">
            <div className="slideshow__container">
                <img 
                    src={pictures[currentIndex]} 
                    alt={`Slide ${currentIndex + 1}`} 
                    className="slideshow__image"
                />
                {pictures.length > 1 && (
                    <>
                        <button 
                            className="slideshow__button slideshow__button--previous" 
                            onClick={goToPrevious}
                            aria-label="Previous image"
                        >
                            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                            </svg>
                        </button>
                        <button 
                            className="slideshow__button slideshow__button--next" 
                            onClick={goToNext}
                            aria-label="Next image"
                        >
                            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                            </svg>
                        </button>
                        <div className="slideshow__counter">
                            {currentIndex + 1}/{pictures.length}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Slideshow;
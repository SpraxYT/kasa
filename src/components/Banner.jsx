import React from 'react';
import homeBanner from '../assets/home.png';
import aboutBanner from '../assets/about.png';

function Banner({ page, title }) {
    const bannerImage = page === 'about' ? aboutBanner : homeBanner;
    
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" />
            {title && <h1>{title}</h1>}
        </div>
    );
}

export default Banner;
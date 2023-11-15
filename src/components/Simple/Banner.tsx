import React, { FC } from 'react';
import './Banner.scss'; // Import the SASS file

interface BannerProps {
    title: string;
    bgColor: string;
    color: string;
}

const Banner: FC<BannerProps> = ({ title, bgColor, color }) => {
    return (
        <h3 className="banner" style={{ backgroundColor: bgColor, color: color, boxShadow: `3px 4px 8px ${bgColor}` }}>{title}</h3>
    );
}

export default Banner;

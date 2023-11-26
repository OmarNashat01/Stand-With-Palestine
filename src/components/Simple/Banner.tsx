import React, { FC } from 'react';
import './Banner.scss'; // Import the SASS file

interface BannerProps {
    title: string;
    styleObj?: any;
    bgColor?: string;
    color?: string;
}

const Banner: FC<BannerProps> = ({ title, styleObj={}, color='', bgColor='', }) => {
    return (
        <h3 className="banner" style={{ backgroundColor: bgColor, color: color, boxShadow: bgColor!=='' ? `3px 4px 8px ${bgColor}`: '', ...styleObj }}>{title}</h3>
    );
}

export default Banner;

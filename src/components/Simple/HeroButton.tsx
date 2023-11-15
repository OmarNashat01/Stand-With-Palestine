import React, { FC } from 'react';
import './HeroButton.scss'; 

interface HeroButtonProps {
    content: string;
    type: string;
    fontSize?: string;
}

const HeroButton: FC<HeroButtonProps> = ({ content, type, fontSize='1.0rem' }) => {
    return (
        <button className={type==="red" ? "hero-button-red" : "hero-button-blue"} style={{fontSize: fontSize}}>
            {content}
          </button>
    );
}

export default HeroButton;

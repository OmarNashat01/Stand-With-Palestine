import React, { useState, useEffect } from 'react';
import './HeroDigitsSection.scss'; // Import the SASS file
import Link from 'next/link';
import { blurFilter } from '../../utils';

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue((prevValue) => {
        const step = Math.ceil(value / 20); // You can adjust the step value
        return prevValue + step >= value ? value : prevValue + step;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return <h1>{animatedValue}+</h1>;
};

interface HeroDigitsSectionProps {
  imagePath: string;
  numbers: (number | string)[];
  texts: string[];
  onClick: string;
  violent?: boolean;
}

const HeroDigitsSection: React.FC<HeroDigitsSectionProps> = ({ imagePath, numbers, texts, onClick, violent = false }) => {
  return (
    <div className="hero-section" id="nums">
      <div className="hero-content">
        <div className="image-container" style={{ backgroundImage: `url('${imagePath}')`, filter: ((violent) ? blurFilter() : '') }}></div>
        <div className="text-wrapper">
          <div className="text-container">
            {(typeof numbers[0] === "number") ? <AnimatedNumber value={numbers[0]} /> : <h1>{numbers[0]}</h1>}
            <p>{texts[0]}</p>
          </div>
          <div className="text-container">
            {(typeof numbers[1] === "number") ? <AnimatedNumber value={numbers[1]} /> : <h1>{numbers[1]}</h1>}
            <p>{texts[1]}</p>
          </div>
          <div className="text-container">
            {(typeof numbers[2] === "number") ? <AnimatedNumber value={numbers[2]} /> : <h1>{numbers[2]}</h1>}
            <p>{texts[2]}</p>
          </div>
          <div className="text-container">
            {(typeof numbers[3] === "number") ? <AnimatedNumber value={numbers[3]} /> : <h1>{numbers[3]}</h1>}
            <p>People Displaced</p>
          </div>
          <div className='button-container'>
            <Link className='button' href={onClick}>Full Report ▶</Link>
            {/* <button className="button" onClick={()=>navigate(onClick)}>Full Report ▶</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDigitsSection;

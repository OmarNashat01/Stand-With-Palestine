import React, { useState, useEffect } from 'react';
import './HeroDigitsSection.scss'; // Import the SASS file

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
}

const HeroDigitsSection: React.FC<HeroDigitsSectionProps> = ({ imagePath, numbers, texts  }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="image-container" style={{ backgroundImage: `url('${imagePath}')` }}>
        </div>
        <div className="text-wrapper">
          <div className="text-container">
            {(typeof numbers[0]==="number") ? <AnimatedNumber value={numbers[0]} /> : <h1>{numbers[0]}</h1>}
            <p>{texts[0]}</p>
          </div>
          <div className="text-container">
          {(typeof numbers[1]==="number") ? <AnimatedNumber value={numbers[1]} /> : <h1>{numbers[1]}</h1>}
            <p>{texts[1]}</p>
          </div>
          <div className="text-container">
          {(typeof numbers[2]==="number") ? <AnimatedNumber value={numbers[2]} /> : <h1>{numbers[2]}</h1>}
            <p>{texts[2]}</p>
          </div>
          <div className="text-container">
          {(typeof numbers[3]==="number") ? <AnimatedNumber value={numbers[3]} /> : <h1>{numbers[3]}</h1>}
            <p>People Displaced</p>
          </div>
          <div className='button-container'>
            <button className="button">Full Report ▶</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDigitsSection;

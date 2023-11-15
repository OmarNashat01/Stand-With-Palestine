import React from 'react';
import './HeroWideSection.scss';
import HeroButton from '../Simple/HeroButton';

interface HeroWideSectionProps {
  imagePath: string;
  overlayColor: string;
  title: string;
  subTitle: string;
  subTitle2: string;
  buttonText1: string;
  buttonText2: string;
  circular: boolean;
  showDay: boolean;
  minHeight: string;
  blur: string;
}

const HeroWideSection: React.FC<HeroWideSectionProps> = ({
  imagePath,
  overlayColor,
  title,
  subTitle,
  subTitle2,
  buttonText1,
  buttonText2,
  circular,
  showDay,
  minHeight,
  blur,
}) => {

  return (
    <div
      className="hero-wide-section"
      style={{
        backgroundImage: `url(${imagePath})`,
        borderTopLeftRadius: circular ? '6rem' : '0rem',
        borderTopRightRadius: circular ? '6rem' : '0rem',
        minHeight: minHeight,
      }}
    >
      <div className="overlay" style={{ background: overlayColor, backdropFilter: blur }}></div>

      <div className="content" style={{ filter: 'brightness(1.0)' }}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <h3>{subTitle2}</h3>
        {buttonText1 !== '' && <HeroButton type="red" content={buttonText1}  fontSize='1.2rem'/>
}
        {buttonText2 !== '' && (
           <HeroButton type="blue" content={buttonText2} fontSize='1.2rem'/>
        )}
        {showDay && <h3 className="last-h3"> <b>34th Day</b></h3>}
      </div>
    </div>
  );
};

export default HeroWideSection;

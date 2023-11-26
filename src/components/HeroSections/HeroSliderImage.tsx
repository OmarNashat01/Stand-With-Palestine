import React from 'react';

interface HeroSliderImageProps {
  imagePath1: string;
  imagePath2: string;
  title: string;
  subTitle: string;
}

const HeroSliderImage: React.FC<HeroSliderImageProps> = ({ imagePath1, imagePath2, title, subTitle}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ color: 'white', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ color: 'white', marginBottom: '1rem', fontWeight: '400' }}>{subTitle}</p>
      <div>
       {/* @ts-ignore */}
        <img-comparison-slider style={{ maxHeight: '70vh' }}>
          <img slot="first" src={imagePath1} alt="" />
          <img slot="second" src={imagePath2} alt="" />
        {/* @ts-ignore */}
        </img-comparison-slider>
      </div>
    </div>
  );
};

export default HeroSliderImage;

import React from 'react';

interface HeroSliderImageProps {
  imagePath1: string;
  imagePath2: string;
  imagePath1Resp: string;
  imagePath2Resp: string;
  title: string;
  subTitle: string;
}

const HeroSliderImage: React.FC<HeroSliderImageProps> = ({ imagePath1, imagePath2, imagePath1Resp, imagePath2Resp, title, subTitle}) => {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }} className="slider-image">
      <h1 style={{ color: 'white', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ color: 'white', marginBottom: '1rem', fontWeight: '400' }}>{subTitle}</p>
      <div>
       {/* @ts-ignore */}
        <img-comparison-slider >
          <img slot="first" src={imagePath1} alt="" style={{maxHeight: "70vh"}}  />
          <img slot="second" src={imagePath2} alt="" style={{maxHeight: "70vh"}}  />
        {/* @ts-ignore */}
        </img-comparison-slider>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }} className="slider-image-resp">
    <h1 style={{ color: 'white', marginBottom: '1rem' }}>{title}</h1>
    <p style={{ color: 'white', marginBottom: '1rem', fontWeight: '400' }}>{subTitle}</p>
    <div>
     {/* @ts-ignore */}
      <img-comparison-slider >
        <img slot="first" src={imagePath1Resp} alt="" style={{objectFit:"contain"}} />
        <img slot="second" src={imagePath2Resp} alt="" style={{objectFit:"contain"}} />
      {/* @ts-ignore */}
      </img-comparison-slider>
    </div>
  </div>
  </>
  );
};

export default HeroSliderImage;

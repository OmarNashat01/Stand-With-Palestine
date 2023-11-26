import React from 'react';
import './HeroWideSectionExtra.scss';
import HeroButton from '../Simple/HeroButton';

interface HeroWideSectionExtraProps {
  imagePath: string;
  overlayColor: string;
  blur: string;
  extraImagePath: string;
  title: string;
  subTitle: string;
  text: string;
  bulleted: string;
  buttonText1: string;
  buttonText2: string;
  reverse: boolean;
  isLocalVideo: boolean;
  isYouTube: boolean;
}

const HeroWideSectionExtra: React.FC<HeroWideSectionExtraProps> = ({
  imagePath,
  overlayColor,
  blur,
  extraImagePath,
  title,
  subTitle,
  text,
  bulleted,
  buttonText1,
  buttonText2,
  reverse,
  isLocalVideo,
  isYouTube,
}) => {
  const paragraphs = text.split('|').map((paragraph, index) => {
    const modifiedParagraph = paragraph.replace(/#/, '<span>"').replace(/#/, '"</span>');
    return <li key={index} dangerouslySetInnerHTML={{ __html: modifiedParagraph }} />;
  });
  const unorderedList = <ul style={{ listStyleType: 'disc' }}>{paragraphs}</ul>;
  const orderedList = <ol>{paragraphs}</ol>;
  const paragraph = <p>{text}</p>;

  return (
    <div className="hero-section-extra" style={{ backgroundImage: `url(${imagePath})` }}>
      <div className="overlay-effect" style={imagePath ? { background: overlayColor, backdropFilter: blur } : {}}></div>
      <div className="hero-content-extra" style={{ filter: 'brightness(1.0)', flexDirection: reverse ? 'row-reverse' : 'row' }}>
        {!isLocalVideo && !isYouTube && <div className="image-container-extra" style={{ backgroundImage: `url('${extraImagePath}')` }}></div>}
        {isLocalVideo && <video src={extraImagePath} autoPlay loop muted controls className="video-container-extra" />}
        {isYouTube && <iframe className="video-container-extra" title="Video" src={extraImagePath}></iframe>}
        <div className="text-wrapper-extra">
          <div className="text-container-extra">
            <h1>{title}</h1>
            {subTitle !== '' && <h3> {subTitle} </h3>}
            {bulleted === 'unordered' ? unorderedList : bulleted === 'ordered' ? orderedList : paragraph}
          </div>
          <div className="button-container-extra">
            <HeroButton type="red" content={buttonText1} />
            {buttonText2 !== '' && <HeroButton type="red" content={buttonText2} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWideSectionExtra;

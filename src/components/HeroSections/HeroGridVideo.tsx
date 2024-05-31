import React from 'react';
import './HeroGridVideo.scss';
import { blurFilter } from '../../utils';

interface HeroGridVideoProps {
  videoSources: string[];
  violences: boolean[];

}

const gridStyles = [
  {},
  { gridRow: 'span 2', gridColumn: 'span 2' },
  {},
  { gridRow: 'span 2' },
  {},
  {},
  { gridRow: 'span 2' },
]
const HeroGridVideo: React.FC<HeroGridVideoProps> = ({ videoSources, violences }) => {
  return (
    <div className="grid-title-wrapper">
      <div className="wrapper">
        {videoSources.map((source, index) => (
          <div key={index} className={`box`} id={`video${index + 1}`} style={gridStyles[index]}>
            <video loop autoPlay controls muted style={{ filter: ((violences[index]) ? blurFilter() : '') }}>
              <source src={source} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div >
  );
};

export default HeroGridVideo;

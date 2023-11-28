import React from 'react';
import './HeroGridVideo.scss';
import { blurFilter } from '../../utils';

interface HeroGridVideoProps {
  videoSources: string[];
  violences: boolean[];

}

const HeroGridVideo: React.FC<HeroGridVideoProps> = ({ videoSources, violences }) => {
  return (
    <div className="grid-title-wrapper">
      <div className="wrapper">
        <div className="box" id="video1">
          <video loop autoPlay controls muted style={{filter: ((violences[0]) ? blurFilter():'')}}>
            <source src={videoSources[0]} type="video/mp4" />
          </video>
        </div>
        <div className="box" style={{ gridRow: 'span 2', gridColumn: 'span 2' }} id="video2">
          <video loop autoPlay controls muted style={{filter: ((violences[1]) ? blurFilter():'')}}>
            <source src={videoSources[1]} type="video/mp4" />
          </video>
        </div>
        <div className="box" id="video3">
          <video loop autoPlay controls muted style={{filter: ((violences[2]) ? blurFilter():'')}}>
            <source src={videoSources[2]} type="video/mp4" />
          </video>
        </div>
        <div className="box" id="video4" style={{ gridRow: 'span 2' }}>
          <video loop autoPlay controls muted style={{filter: ((violences[3]) ? blurFilter():'')}}>
            <source src={videoSources[3]} type="video/mp4" />
          </video>
        </div>

        <div className="box" id="video6">
          <video loop autoPlay controls muted style={{filter: ((violences[4]) ? blurFilter():'')}}>
            <source src={videoSources[4]} type="video/mp4" />
          </video>
        </div>
        <div className="box" id="video7">
          <video loop autoPlay controls muted style={{filter: ((violences[5]) ? blurFilter():'')}}>
            <source src={videoSources[5]} type="video/mp4" />
          </video>
        </div>
        <div className="box" style={{ gridRow: 'span 2' }} id="video8">
          <video loop autoPlay controls muted style={{filter: ((violences[6]) ? blurFilter():'')}}>
            <source src={videoSources[6]} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroGridVideo;

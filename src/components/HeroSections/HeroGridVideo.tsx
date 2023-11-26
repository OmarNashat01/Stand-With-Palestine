import React from 'react';
import './HeroGridVideo.scss';

interface HeroGridVideoProps {
  videoSources: string[];
}

const HeroGridVideo: React.FC<HeroGridVideoProps> = ({ videoSources }) => {
  return (
    <div className="grid-title-wrapper">
      <div className="wrapper">
        <div className="box" id="video1">
          <video loop autoPlay controls muted>
            <source src={videoSources[0]} type="video/mp4" />
          </video>
        </div>
        <div className="box" style={{ gridRow: 'span 2', gridColumn: 'span 2' }} id="video2">
          <video loop autoPlay controls muted>
            <source src={videoSources[1]} type="video/mp4" />
          </video>
        </div>
        <div className="box" id="video3">
          <video loop autoPlay controls muted>
            <source src={videoSources[2]} type="video/mp4" />
          </video>
        </div>
        <div className="box" id="video4" style={{ gridRow: 'span 2' }}>
          <video loop autoPlay controls muted>
            <source src={videoSources[3]} type="video/mp4" />
          </video>
        </div>

        <div className="box" id="video6">
          <video loop autoPlay controls muted>
            <source src={videoSources[4]} type="video/mp4" />
          </video>
        </div>
        <div className="box" id="video7">
          <video loop autoPlay controls muted>
            <source src={videoSources[5]} type="video/mp4" />
          </video>
        </div>
        <div className="box" style={{ gridRow: 'span 2' }} id="video8">
          <video loop autoPlay controls muted>
            <source src={videoSources[6]} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroGridVideo;

import React, { useEffect } from "react";
import { blurFilter } from "../../utils";

interface MediaInputProps {
    mode: string;
    path: string;
    violence: boolean;
    crop: boolean;
    autoplay?: boolean;
  }
  
  const MediaInput: React.FC<MediaInputProps> = ({ mode, path, violence, crop, autoplay=true }) => {
    return (
      <>
        {mode === "img" && (
          <img
            className="image-container-extra"
            style={{  filter: ((violence) ? blurFilter():''), objectFit: ((crop) ? 'cover' : 'contain')}}
            src={`${path}`}
          />
        )}
        {mode === "video" && (
          <video
            src={path}
            controls
            autoPlay={autoplay}
            muted={autoplay}
            className="video-container-extra"
            style={{filter: ((violence) ? blurFilter():''), objectFit: ((crop) ? 'cover' : 'contain')}}
          />
        )}
        {mode === "iframe" && (
          <iframe
            className="video-container-extra"
            title="Video"
            src={path}
            style={{filter: ((violence) ? blurFilter():''), objectFit: ((crop) ? 'cover' : 'contain')}}
          ></iframe>
        )}
      </>
    );
  };


export default MediaInput;
import React, { useEffect } from "react";
import { blurFilter } from "../../utils";

interface MediaInputProps {
    mode: string;
    path: string;
    violence: boolean;
  }
  
  const MediaInput: React.FC<MediaInputProps> = ({ mode, path, violence }) => {
    return (
      <>
        {mode === "img" && (
          <img
            className="image-container-extra"
            style={{ backgroundImage: `url('${path}')`, filter: ((violence) ? blurFilter():'') }}
          />
        )}
        {mode === "video" && (
          <video
            src={path}
            controls
            autoPlay
            muted
            className="video-container-extra"
            style={{filter: ((violence) ? blurFilter():'')}}
          />
        )}
        {mode === "iframe" && (
          <iframe
            className="video-container-extra"
            title="Video"
            src={path}
          ></iframe>
        )}
      </>
    );
  };


export default MediaInput;
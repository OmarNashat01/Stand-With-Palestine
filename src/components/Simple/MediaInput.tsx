import React, { useEffect } from "react";

interface MediaInputProps {
    mode: string;
    path: string;
  }
  
  const MediaInput: React.FC<MediaInputProps> = ({ mode, path }) => {
    return (
      <>
        {mode === "img" && (
          <img
            className="image-container-extra"
            style={{ backgroundImage: `url('${path}')` }}
          />
        )}
        {mode === "video" && (
          <video
            src={path}
            controls
            autoPlay
            muted
            className="video-container-extra"
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
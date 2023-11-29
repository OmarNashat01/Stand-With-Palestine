import React from "react";
import MediaInput from "../../components/Simple/MediaInput";
import './FinalNote.scss'

interface FinalNoteProps {
  videoPath: string;
  text1: string;
  text2: string;
}

const FinalNote: React.FC<FinalNoteProps> = ({ videoPath, text1, text2 }) => {
  return (
    <div className="final-note">
      <p className="final-note-text">{text1}</p>
      <div className="media-input-container">
        <MediaInput mode="video" path={videoPath} violence={false} crop={false} autoplay={false} />
      </div>
      <p className="final-note-text" style={{fontWeight: "normal"}}>
        {text2}
    </p>
    </div>
  );
};

export default FinalNote;

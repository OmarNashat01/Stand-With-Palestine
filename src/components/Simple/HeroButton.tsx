import React, { FC } from 'react';
import './HeroButton.scss';

interface HeroButtonProps {
  content: string;
  type: string;
  fontSize?: string;
  styleObj?: React.CSSProperties;
  onClickFunc?: () => void;
  respClass?:boolean;
}
 
const HeroButton: FC<HeroButtonProps> = ({
  content,
  type,
  fontSize = '1.0rem',
  styleObj = {},
  onClickFunc = () => null,
  respClass=false
}) => {
  return (
    <button
      className={(type === 'red' ? 'hero-button-red' : 'hero-button-blue') + (respClass ? ' hero-button-resp' : '')}
      style={{ fontSize, ...styleObj }}
      onClick={onClickFunc}
    >
      {content}
    </button>
  );
};

export default HeroButton;

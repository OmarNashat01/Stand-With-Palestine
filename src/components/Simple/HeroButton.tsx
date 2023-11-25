import React, { FC } from 'react';
import './HeroButton.scss';

interface HeroButtonProps {
  content: string;
  type: string;
  fontSize?: string;
  styleObj?: React.CSSProperties;
  onClickFunc?: () => void;
}

const HeroButton: FC<HeroButtonProps> = ({
  content,
  type,
  fontSize = '1.0rem',
  styleObj = {},
  onClickFunc = () => null,
}) => {
  return (
    <button
      className={type === 'red' ? 'hero-button-red' : 'hero-button-blue'}
      style={{ fontSize, ...styleObj }}
      onClick={onClickFunc}
    >
      {content}
    </button>
  );
};

export default HeroButton;

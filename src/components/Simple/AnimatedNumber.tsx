import React, { useState, useEffect } from "react";

interface AnimatedNumberProps {
    value: number;
    className: string;
    atLeast?: boolean;
    isMillion?: boolean;
    isBillion?: boolean;
    denominator?: string;
    isApprox?: boolean;
  }
  
  const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
    value,
    className,
    atLeast = true,
    isMillion = false,
    isBillion = false,
    denominator = "",
    isApprox = false,
  }) => {
    const [animatedValue, setAnimatedValue] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setAnimatedValue((prevValue) => {
          const step = Math.ceil(value / 4);
          return prevValue + step >= value ? value : prevValue + step;
        });
      }, 50);
  
      return () => clearInterval(interval);
    }, [value]);
  
    return !denominator ? (
      <h1 className={className}>
        {isApprox && "~"}
        {animatedValue}
        {isMillion && "M"}
        {isBillion && "B"}
        {atLeast && "+"}
      </h1>
    ) : (
      <h1 className={className}>
        {animatedValue}/{denominator}
      </h1>
    );
  };
  
export default AnimatedNumber;
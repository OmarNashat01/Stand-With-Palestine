import "./GradientHero.scss";
import React, { useEffect } from "react";

interface GradientHeroProps {
    title: string;
    subTitle1:string;
    subTitle2:string;
    fontSize?:string;
    bloody?:boolean;
    circular?:boolean;
    special?:boolean;
  }
  
  const CrimeHero: React.FC<GradientHeroProps>  = ({title, subTitle1, subTitle2, bloody=false, fontSize='4rem', circular=false, special=false}) => {

    return (
      <div
      className="war-intro"
      style={{
        background: "radial-gradient(#272727, #141414)",
        padding: "2rem",
        textAlign: "center",
        borderTopLeftRadius: (circular) ? "4rem" : "0rem",
        borderTopRightRadius: (circular) ? "4rem" : "0rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: fontSize,
          paddingBottom: "0.5rem",
        }}
        className={(bloody)?"dead-dude":(special) ? "special-dude":"dude"}
      >
        {title}
      </h1>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          paddingBottom: "0.5rem",
          color: "white",
        }}
      >
        {subTitle1}
      </h2>
      <h3
        style={{
          textAlign: "center",
          paddingBottom: "0.5rem",
          fontWeight: "1rem",
        }}
      >
        {subTitle2}
      </h3>
    </div>
    )
  }

  export default CrimeHero;
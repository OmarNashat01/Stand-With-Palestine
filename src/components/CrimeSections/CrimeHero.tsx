import "./CrimeHero.scss";
import React, { useEffect } from "react";

interface CrimeHeroProps {
    crimeHeroDict: any;
  }
  
  const CrimeHero: React.FC<CrimeHeroProps>  = ({crimeHeroDict}) => {
    return (
      <div
      className="war-intro"
      style={{
        background: "radial-gradient(#272727, #141414)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "4rem",
          paddingBottom: "0.5rem",
        }}
        className="dead-dude"
      >
        {crimeHeroDict["title"]}
      </h1>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          paddingBottom: "0.5rem",
          color: "white",
        }}
      >
        {crimeHeroDict["subTitle1"]}
      </h2>
      <h3
        style={{
          textAlign: "center",
          paddingBottom: "0.5rem",
          fontWeight: "1rem",
        }}
      >
        {crimeHeroDict["subTitle2"]}
      </h3>
    </div>
    )
  }

  export default CrimeHero;
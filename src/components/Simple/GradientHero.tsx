import "./GradientHero.scss";
import React, { useEffect } from "react";

interface GradientHeroProps {
    title: string;
    subTitle1:string;
    subTitle2:string;
    subTitle3?:string;
    fontSize?:string;
    bloody?:boolean;
    circular?:boolean;
    special?:boolean;
    blog?:boolean;
  }
  
  const CrimeHero: React.FC<GradientHeroProps>  = ({title, subTitle1, subTitle2, subTitle3='', bloody=false, fontSize='4rem', circular=false, special=false, blog=false}) => {

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

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
        className={(bloody)?"dead-dude":(special) ? "special-dude":"dude"}
        style={{
          textAlign: "center",
          fontSize: fontSize,
          paddingBottom: "0.5rem",
          lineHeight: (screenWidth<800 && blog)? '1' : ''
        }}
      >
        <span style={{fontSize: (screenWidth<800 && blog)? '1.6rem' : '',
      }}>{title}</span>
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
      <h4
       style={{
        textAlign: "center",
        paddingBottom: "0.5rem",
        fontWeight: "0.8rem",
      }}
      >{subTitle3}</h4>
    </div>
    )
  }

  export default CrimeHero;
import React, { useEffect } from "react";
import HeroButton from "../../components/Simple/HeroButton";
import { Fade } from "react-swift-reveal";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import MediaInput from "../Simple/MediaInput";
import "./CrimesList.scss";

interface CrimesListProps {
    crimesDict: any;
  }
  const CrimesList: React.FC<CrimesListProps>  = ({crimesDict}) => {
    const navigate = useNavigate();
    return (
      <div className="crimes-content">
      {crimesDict.map((crime:any, index:any) => (
        <Fade key={index}>
          <div className="pairs-container">
            <div className="article-item">
              <h1>{crime.title}</h1>
              {crime.quotes.map((quote:any, quoteIndex:any) => (
                <blockquote key={quoteIndex}>
                  {quote.quote.split("<br/><br/>").map((line:any, index:any) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                  <span>{quote.quote_ref}</span>
                </blockquote>
              ))}
              <p>{crime.paragraphLeft}</p>
            </div>
            <div className="splitter"></div>
            <div className="crime-item">
              <h1>{crime.title}</h1>
              <Carousel
                interval={50000}
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
              >
                {crime.media.map((media:any, mediaIndex:any) => (
                  <MediaInput
                    key={mediaIndex}
                    path={media.path}
                    mode={media.mode}
                  />
                ))}
              </Carousel>
              <p>{crime.paragraphRight}</p>
              <HeroButton
                type="red"
                content={"Consequences and Instances ▶"}
                styleObj={{
                  marginLeft: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.2rem",
                }}
                onClickFunc={() => navigate(crime.onClickFunc)}
              />
            </div>
          </div>
        </Fade>
      ))}
    </div>
    )
  }

export default CrimesList;
import React from "react";
import HeroButton from "../../components/Simple/HeroButton";
import { Fade } from "react-swift-reveal";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import MediaInput from "../Simple/MediaInput";
import "./CrimesList.scss";
import { Link } from "react-router-dom";

interface CrimesListProps {
    crimesDict: any;
}
const CrimesList: React.FC<CrimesListProps> = ({ crimesDict }) => {
    if (crimesDict.length === 0) {
        return (
            <div
                className="crimes-content"
                style={{ color: "rgb(170, 169, 169)", textAlign: "center" }}
            >
                No crimes match this search criteria...
            </div>
        );
    }

    return (
        <div className="crimes-content">
            {crimesDict.map((crime: any, index: any) => (
                <Fade key={index}>
                    <div className="pairs-container">
                        <div className="article-item">
                            <h1>{crime.title}</h1>
                            {crime.quotes.map((quote: any, quoteIndex: any) => (
                                <blockquote key={quoteIndex}>
                                    {quote.quote
                                        .split("<br/><br/>")
                                        .map((line: any, index: any) => (
                                            <div
                                                key={index}
                                                dangerouslySetInnerHTML={{
                                                    __html: line,
                                                }}
                                            />
                                        ))}
                                    <span>{quote.quote_ref}</span>
                                </blockquote>
                            ))}
                            <p>{crime.paragraphLeft}</p>
                        </div>
                        <div className="splitter"></div>
                        <div className="crime-item">
                            <Link to={`/blogs/articles/${crime.onClickFunc}`}>
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
                                    respClass={true}
                                />
                            </Link>
                            <p>
                                {crime.paragraphRight
                                    .split("<br/><br/>")
                                    .map((line: any, index: any) => (
                                        <div
                                            key={index}
                                            dangerouslySetInnerHTML={{
                                                __html: line,
                                            }}
                                        />
                                    ))}
                            </p>
                            <Carousel
                                interval={50000}
                                autoPlay
                                infiniteLoop
                                showStatus={false}
                                showThumbs={false}
                                dynamicHeight={true}
                                swipeable={false}
                            >
                                {crime.media.map(
                                    (media: any, mediaIndex: any) => (
                                        <MediaInput
                                            key={mediaIndex}
                                            path={media.path}
                                            mode={media.mode}
                                            violence={media.violence}
                                            crop={media.crop}
                                        />
                                    )
                                )}
                            </Carousel>
                            <h1>{crime.title}</h1>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    );
};

export default CrimesList;

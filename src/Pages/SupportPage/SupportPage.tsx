import React, { useRef, useEffect } from "react";
import { supportPageData, supportActionData } from '../../PagesData/SupportPageData'
import OrgCard from "../../components/donations/orgCard";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

import HeroButton from "../../components/Simple/HeroButton";
import GradientHero from "../../components/Simple/GradientHero";
import Banner from "../../components/Simple/Banner";
import HeroWideSection from "../../components/HeroSections/HeroWideSection";

import "react-multi-carousel/lib/styles.css";
import './SupportPage.scss'

const SupportPage: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = React.useState(4);
  const [selectedOption, setSelectedOption] = React.useState(1);

  const orgCardsRef = useRef(null);
  useEffect(() => {
    if (orgCardsRef.current) {
      // Calculate 50% of the scroll width
      //@ts-ignore
      let scrollPosition = orgCardsRef.current.scrollWidth * 0.235;
      if (window.innerWidth < 700) {
        //@ts-ignore
        scrollPosition = orgCardsRef.current.scrollWidth * 0.345;
      }

      // Set the scrollLeft property to the calculated value
      //@ts-ignore
      orgCardsRef.current.scrollLeft = scrollPosition;
    }
  }, []);

  return (
    <div
      style={{
        flex: 1,
        borderTopLeftRadius: "4rem",
        borderTopRightRadius: "4rem",
        backgroundColor: "#101010",
      }}
    >
      <GradientHero title={"SUPPORT PALESTINE"} subTitle1="They Need Your Help" subTitle2="There Are Many Ways We Can Help Make Things Better" special={true} />
      <Banner title={"You Could Help Prevent Someone From Dying in the Hospital or From Starving to Death"} styleObj={{ color: 'white', backgroundColor: 'transparent', boxShadow: 'none' }} />
      <div style={{ paddingBottom: "2%", paddingTop: "2%" }} className="org-cards" ref={orgCardsRef}>
        {supportPageData.map((item, index) => {
          return (
            <div className="card-item">
              <OrgCard
                // key={index}
                title={item.organization}
                description={item.description}
                selected={index === selectedOrg}
                onClick={() => setSelectedOrg(index)}
              />
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="first-child">
          <ResponsiveCarousel swipeable={false} className="carousel" showThumbs={false} dynamicHeight={false} showStatus={false} showIndicators={true} showArrows={true} autoPlay={false} infiniteLoop={true} interval={3000} stopOnHover={true}>
            {supportPageData[selectedOrg].trucksImages.map((item, index) => (
              <div key={index} className="image-container">
                <img src={item} alt={`Truck ${index + 1}`} />
              </div>
            ))}
          </ResponsiveCarousel>
        </div>

        {/* Second Child */}
        <div className="second-child">
          {/* Inner Container */}
          <div className="inner-container">
            <div className="inner-child">
              <h1>{supportPageData[selectedOrg].organization}</h1>
              <p>{supportPageData[selectedOrg].description}{supportPageData[selectedOrg].humanitarian_aid_status}</p>
              {/* Buttons */}
              <div className="buttons">
                <HeroButton type="blue" content="More Info" fontSize="1.0rem" styleObj={{ borderRadius: '2rem' }} onClickFunc={() => window.open(supportPageData[selectedOrg].learnMoreLink, "_blank")} />
                <HeroButton type="blue" content="Support ♥" fontSize="1.0rem" styleObj={{ borderRadius: '2rem' }} onClickFunc={() => window.open(supportPageData[selectedOrg].donationLink, "_blank")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner title={"Or You Could Help End This Massacre Altogether"} styleObj={{ color: 'white', backgroundColor: 'transparent', boxShadow: 'none' }} />
      <div className="org-cards-s" style={{ justifyContent: 'center', overflow: 'hidden' }} >
        {supportActionData.map((item, index) => {
          return (
            <div className="card-item" >
              <OrgCard
                small={true}
                title={item.organization}
                description={item.description}
                selected={index === selectedOption}
                onClick={() => setSelectedOption(index)}
              />
            </div>
          );
        })}
      </div>
      <div className="container" style={{ maxWidth: '100%', margin: 'auto', flexDirection: 'row-reverse' }}>
        <div className="first-child" style={{ flexBasis: '60%' }}>
          <ResponsiveCarousel swipeable={false} className="carousel" showThumbs={false} dynamicHeight={false} showStatus={false} showIndicators={true} showArrows={true} autoPlay={false} infiniteLoop={true} interval={3000} stopOnHover={true}>
            {supportActionData[selectedOption].trucksImages.map((item, index) => (
              <div key={index} className="image-container"  >
                <img src={item} alt={`Truck ${index + 1}`} />
              </div>
            ))}
          </ResponsiveCarousel>
        </div>
        <div className="second-child" style={{ flexBasis: '60%' }}>
          <div className="inner-container">
            <div className="inner-child" style={{ minWidth: '70px' }}>
              <h1>{supportActionData[selectedOption].organization}</h1>
              <p>{supportActionData[selectedOption].description}</p>
              <div className="buttons">
                <HeroButton type="blue" content="Act Now ♥" fontSize="1.0rem" styleObj={{ borderRadius: '2rem' }} onClickFunc={() => window.open(supportActionData[selectedOption].link, '_blank')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SupportPage;

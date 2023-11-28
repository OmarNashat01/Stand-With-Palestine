import React from "react";
import Card from "../../components/Simple/Card";
import { supportPageData } from '../../PagesData/SupportPageData'
import OrgCard from "../../components/donations/orgCard";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";

import HeroButton from "../../components/Simple/HeroButton";
import Banner from "../../components/Simple/Banner";

import "react-multi-carousel/lib/styles.css";

const SupportPage: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = React.useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };



  return (
    <div
      style={{
        flex: 1,
        borderTopLeftRadius: "4rem",
        borderTopRightRadius: "4rem",
        backgroundColor: "#101010",
      }}
    >
      <Banner title="Stand With Palestine" />

      <div style={{ paddingBottom: "2%", paddingTop: "2%" }}>
        {/* Horizontal Grid Section */}
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px" >
          {supportPageData.map((item, index) => {
            return (
              <OrgCard
                // key={index}
                title={item.organization}
                description={item.description}
                selected={index === selectedOrg}
                onClick={() => setSelectedOrg(index)}
              />
            );
          })}
        </Carousel>
      </div>

      {/* Selected Org Detailes Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "revert",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "1rem",
            maxWidth: "60%"
          }}
        >
          <ResponsiveCarousel showThumbs={false} showStatus={false} showIndicators={true} showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} stopOnHover={true} >
            {supportPageData[selectedOrg].trucksImages.map((item, index) => {
              return (
                <div key={index} style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                  <img
                    src={item}
                    style={{ width: "100%", height: "30rem" }}

                  />
                </div>
              )
            })}
          </ResponsiveCarousel>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            gap: "1rem",
            alignItems: "start",
            flexWrap: "wrap",
            padding: "1rem",
            maxWidth: "40%"
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem", flexWrap: "wrap" }}>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "bold",
                }}
              >
                {supportPageData[selectedOrg].organization}
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {supportPageData[selectedOrg].description}{`So far they sent ${supportPageData[selectedOrg].trucksNumber} trucks`}
              </p>
              {/* Hero Button */}
              <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <HeroButton
                  type="blue"
                  content="Support ♥"
                  fontSize=".8rem"
                  onClickFunc={() => window.open(supportPageData[selectedOrg].donationLink, "_blank")}
                />
                <HeroButton
                  type="red"
                  content="Learn More"
                  fontSize=".8rem"
                  onClickFunc={() => window.open(supportPageData[selectedOrg].learnMoreLink, "_blank")}
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div >
  );
};

export default SupportPage;

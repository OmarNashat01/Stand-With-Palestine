import React from "react";
import Card from "../../components/Simple/Card";
import { supportPageData } from '../../PagesData/SupportPageData'
import OrgCard from "../../components/donations/orgCard";
import { Carousel } from "react-responsive-carousel";
import HeroButton from "../../components/Simple/HeroButton";
import Banner from "../../components/Simple/Banner";

const SupportPage: React.FC = () => {
  const [selectedOrg, setSelectedOrg] = React.useState(0);
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
      <div
        style={{
          marginTop: "2rem",
          paddingTop: "2rem",
          paddingBottom: "3rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* Horizontal Grid Section */}
        {supportPageData.map((item, index) => {
          return (
            <OrgCard
              key={index}
              title={item.organization}
              link={item.learnMoreLink}
              selected={selectedOrg === index}
              onClick={() => setSelectedOrg(index)}
            />
          );
        }
        )}

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
          }}
        >
          <Carousel showThumbs={false} showStatus={false} showIndicators={true} showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} stopOnHover={true} >
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
          </Carousel>
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
              <img
                src={supportPageData[selectedOrg].logo}
                style={{ width: "10rem", height: "10rem" }}
              />
              <p
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {supportPageData[selectedOrg].organization}
              </p>

              {/* Hero Button */}
              <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <HeroButton
                  type="blue"
                  content="Support ♥"
                  fontSize="1.2rem"
                  onClickFunc={() => window.open(supportPageData[selectedOrg].donationLink, "_blank")}
                />
                <HeroButton
                  type="red"
                  content="Learn More"
                  fontSize="1.2rem"
                  onClickFunc={() => window.open(supportPageData[selectedOrg].learnMoreLink, "_blank")}
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SupportPage;

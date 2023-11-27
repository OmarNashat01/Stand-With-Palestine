import React from "react";
import Card from "../../components/Simple/Card";
import { supportPageData } from '../../PagesData/SupportPageData'
import OrgCard from "../../components/donations/orgCard";
import { Carousel } from "react-responsive-carousel";

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

    </div>
  );
};

export default SupportPage;

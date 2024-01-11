import React from "react";
// @ts-ignore
import GradientHero from "../../components/Simple/GradientHero";
import "./IntentsGrid.scss";
import SearchInput from "../../components/Simple/SearchInput";
import TabComponent from "../../components/Simple/TabComponenet";
import { intents, weakIntents, faqData } from "../../PagesData/IntentsPageData";
import { IntentCard } from "../../components/IntentSections/IntentCard";
// @ts-ignore
import Faq from "react-faq-component";
import Banner from "../../components/Simple/Banner";

const IntentsPage: React.FC = () => {
  // Array of intents

  const [filteredIntents, setFilteredIntents] = React.useState(intents);
  const [filteredWeakIntents, setFilteredWeakIntents] =
    React.useState(weakIntents);

  const tabs = [
    "Elites With Command Responsibility",
    "Elites Without Command Responsibility",
  ];
  const [activeTab, setActiveTab] = React.useState(
    "Elites With Command Responsibility"
  );

  const handleSearchIntents = (filteredIntents: any) => {
    setFilteredIntents(filteredIntents);
  };
  const handleSearchWeakIntents = (filteredWeakIntents: any) => {
    setFilteredWeakIntents(filteredWeakIntents);
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
      <GradientHero
        title={"Genocidal Intent"}
        subTitle1={"The Definition of Genocide is Rooted in Intention"}
        subTitle2={
          "Over 70% of Gaza Bombed...Over 70% of Those Murdered are Women and Children"
        }
        bloody
      />
      <SearchInput
        listItems={activeTab === tabs[0] ? intents : weakIntents}
        onSearch={
          activeTab === tabs[0] ? handleSearchIntents : handleSearchWeakIntents
        }
        placeHolder="Search for genocidal intents..."
      />
      <TabComponent
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
        }}
        tabs={tabs}
      />
      {((filteredIntents.length === 0 && activeTab === tabs[0]) || (filteredWeakIntents.length === 0 && activeTab === tabs[1])) && <div
        className="crimes-content"
        style={{ color: "rgb(170, 169, 169)", textAlign: "center" }}
      >
        No intents match this search criteria...
      </div>}
      {/* Mapping through the intents array to render IntentCard components */}
      <div className="intents-container">
        {(activeTab === tabs[0] ? filteredIntents : filteredWeakIntents).map(
          (intent: any, index: any) => (
            <>
                <IntentCard
                  key={index}
                  quote={intent.quote}
                  note={intent.note}
                  author={intent.author}
                  role={intent.role}
                  date={intent.date}
                  link={intent.link}
                />
            </>
          )
        )}
      </div>
      <Banner
        title="Frequently Asked Questions"
        styleObj={{ color: "white" }}
      />
      <Faq data={faqData} />
    </div>
  );
};

export default IntentsPage;

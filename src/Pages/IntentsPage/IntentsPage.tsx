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
import Head from "../../components/Simple/Head";

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
  const [activeAuthorTab, setActiveAuthorTab] = React.useState("All");

  const handleSearchIntents = (filteredIntents: any) => {
    setFilteredIntents(filteredIntents);
  };
  const handleSearchWeakIntents = (filteredWeakIntents: any) => {
    setFilteredWeakIntents(filteredWeakIntents);
  };

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
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


  const [defSearch, setDefSearch] = React.useState("");
  const [key, setKey] = React.useState(0);
  const [execludeList, setExecludeList] = React.useState<string[]>([]);
  React.useEffect(() => {
    if (activeAuthorTab !== "All" && activeAuthorTab !== "Others") {
      setDefSearch(activeAuthorTab)
    }
    else {
      setDefSearch("")
    }
    setExecludeList((activeAuthorTab === "Others") ? ["Benjamin Netanyahu", "Isaac Herzog", "Yoav Gallant", "Itmar Ben-Gvir", "Bezalel Smotrich", "Nissim Vaturi"] : [])

    setKey(key + 1);

  }, [activeAuthorTab])

  return (
    <div
      style={{
        flex: 1,
        borderTopLeftRadius: "4rem",
        borderTopRightRadius: "4rem",
        backgroundColor: "#101010",
      }}
    >
      <Head
        title="Genocidal Intents"
        description="The Definition of intent is rooted in intention. Here are some of the genocidal intents of the Israeli government and military."
        keywords="Genocidal Intents, Genocidal Intent, Genocidal Intentions, Genocidal Intentions of the Israeli government, Genocidal Intentions of the Israeli military, Genocidal Intentions of the IDF, Genocidal Intentions of the Israeli Defense Forces, Genocidal Intentions of Elites with command responsibility, Genocidal Intentions of Elites without command responsibility"
        image=""
        url=""
      />

      <GradientHero
        title={"Genocidal Intent"}
        subTitle1={"The Definition of Genocide is Rooted in Intention"}
        subTitle2={
          "Over 70% of Gaza Bombed...Over 70% of Those Murdered are Women and Children"
        }
        bloody
      />
      <SearchInput
        key={key}
        listItems={activeTab === tabs[0] ? intents : weakIntents}
        onSearch={
          activeTab === tabs[0] ? handleSearchIntents : handleSearchWeakIntents
        }
        placeHolder="Search for genocidal intents..."
        defaultSearchTerm={defSearch}
        excludeList={execludeList}
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

      <div style={{ backgroundColor: '#151515', paddingTop: '1rem' }}>
        {activeTab === tabs[0] && <TabComponent
          activeTab={activeAuthorTab}
          setActiveTab={(tab) => {
            setActiveAuthorTab(tab);
          }}
          tabUI={false}
          tabs={["All", "Benjamin Netanyahu", "Isaac Herzog", "Yoav Gallant", "Itmar Ben-Gvir", "Bezalel Smotrich", "Nissim Vaturi", "Others"]}
          redSelected={true}
          smallGap={true}
        />}
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
        <p style={{ textAlign: 'center', padding: '1.6rem', fontSize: '0.9rem', color: '#555555' }}>
          Credits go to <a href="https://twitter.com/KintsugiMuslim/status/1746292969404076180">@KintsugiMuslim</a> on Twitter for collecting these instances.
        </p>

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

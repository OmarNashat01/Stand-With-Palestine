import React, { useState, useEffect } from "react";
import { init } from "../../utils";
// @ts-ignore
import Faq from 'react-faq-component';
import GazaStatusSection from "../../components/StatusSections/GazaStatusSection";
import WestBankStatusSection from "../../components/StatusSections/WestBankStatusSection";
import Banner from "../../components/Simple/Banner";
import InfraStatusSection from "../../components/StatusSections/InfrasStatusSection";
import StatisticsSection from "../../components/StatusSections/StatisticsSection";
import {
  historyData,
  recentData,
  readPcbsData,
  faqData
} from "../../PagesData/StatusPageData";
import "../../components/StatusSections/FAQSection.scss";
import Head from "../../components/Simple/Head";



interface StatusPageProps {}

const StatusPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(init("region", "Gaza"));
  const [isSelectedToday, setIsSelectedToday] = useState(
    init("isSelectedToday", false)
  );

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
      const fetchData = async() => {
	setData(await readPcbsData());
      }

      fetchData();
  }, []);

  if(data.length == 0) {
    return (<div> Loading... </div>);
  }

  const [
      gazaDict,
      gazaDictToday,
      westBankDict,
      westBankDictToday,
      infraDict,
      deathRatiosData,
      homeData,
      lastUpdated
  ] = data!;

  return (
    <div> 
    {
	(gazaDict != undefined) && 
	<div
	  style={{
	    flex: 1,
	    borderTopLeftRadius: "4rem",
	    borderTopRightRadius: "4rem",
	    backgroundColor: "#101010",
	  }}
	>
	  <Head
		title="Status Updates!"
		description="Get the latest updates on the ongoing status of the conflict and statistics of the Martyrs and injuried."
		keywords="Status Updates, Conflict Status, Palestinian-Isreali Conflict, Isreali-Palestinian Conflict, Isreali-Palestinian War, Palestinian Martyrs, Palestinian Injuried, Palestinian Casualties, Palestinian Deaths, Palestinian Injuries, Palestinian Wounded, Palestinian Killed, Palestinian Dead, Palestinian Murdered"
		image=""
		url=""
	  />
	  <Banner
	    title="Israeli Onslaught on Palestine in Numbers Since 7th Oct. 2023"
	    styleObj={{ color: "white" }}
	  />
	<Banner
	    title={`Last Updated on the ${lastUpdated}`}
	    color={"grey"}
	    bgColor={"transparent"}
	    styleObj={{ fontSize: "1rem" }}
	  />
	  {selectedRegion == "Gaza" && (
	    <GazaStatusSection
	      gazaDict={gazaDict}
	      gazaDictToday={gazaDictToday}
	      selectedRegion={selectedRegion}
	      setSelectedRegion={setSelectedRegion}
	      isSelectedToday={isSelectedToday}
	      setIsSelectedToday={setIsSelectedToday}
	    />
	  )}
	  {selectedRegion == "West Bank" && (
	    <WestBankStatusSection
	      westBankDict={westBankDict}
	      westBankDictToday={westBankDictToday}
	      selectedRegion={selectedRegion}
	      setSelectedRegion={setSelectedRegion}
	      isSelectedToday={isSelectedToday}
	      setIsSelectedToday={setIsSelectedToday}
	    />
	  )}
	  <Banner
	    title="The Crisis is Beyond Humanatirian. Gaza is Being Demolished."
	    color={"white"}
	    bgColor={"transparent"}
	    styleObj={{ fontSize: "1rem" }}
	  />
	  <InfraStatusSection infraDict={infraDict} />
	  <Banner
	    title="More Grieving Statistics"
	    color={"white"}
	    bgColor={"transparent"}
	    styleObj={{ fontSize: "1rem" }}
	  />
	  <StatisticsSection deathRatiosData={deathRatiosData}
			     homeData={homeData}
			     historyData={historyData}
			     recentData={recentData} />

	  <Banner
	    title="Frequently Asked Questions"
	    styleObj={{ color: "white" }}
	  />
	  <Faq data={faqData}/>
	</div>
    }
    </div>
  );
};

export default StatusPage;

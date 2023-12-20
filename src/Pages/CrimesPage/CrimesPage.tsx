import React, { useEffect, useState } from "react";
import Banner from "../../components/Simple/Banner";
// @ts-ignore
import Faq from 'react-faq-component';
import {crimesDict, crimeHeroDict, finaleText, finaleVideoPath, faqData, oldCrimesDict} from '../../PagesData/CrimesPageData'
import CrimesList from "../../components/CrimeSections/CrimesList";
import GradientHero from "../../components/Simple/GradientHero";
import FinalNote from "../../components/CrimeSections/FinalNote";
import ItemGrid from "../../components/Simple/ItemGrid";
import TabComponent from "../../components/Simple/TabComponenet";
import { saveSet, init } from "../../utils";


const CrimesPage: React.FC = () => {
  const [filteredCrimes, setFilteredCrimes] = useState(crimesDict);
  const [filteredOldCrimes, setFilteredOldCrimes] = useState(oldCrimesDict);

  const handleSearch = (filteredCrimes: any) => {
    setFilteredCrimes(filteredCrimes);
  };

  const tabs = ['Conflict', '2020+', '2018+', '2000+', 'Massacres'];
  const [activeTab, setActiveTab] = useState(init('CrimeTab','Conflict'));

  useEffect(()=>{
  if(activeTab === '2020+') {
    setFilteredOldCrimes(oldCrimesDict.filter(crime => parseInt(crime.date.split('-')[0]) >= 2020).reverse())
  }
  else if (activeTab === '2018+') {
    setFilteredOldCrimes(oldCrimesDict.filter(crime => parseInt(crime.date.split('-')[0]) >= 2018 && parseInt(crime.date.split('-')[0]) < 2020).reverse())
  }
  else if (activeTab === '2000+') {
    setFilteredOldCrimes(oldCrimesDict.filter(crime => parseInt(crime.date.split('-')[0]) >= 2000 && parseInt(crime.date.split('-')[0]) < 2018).reverse())
  }
  else if (activeTab === 'Massacres') {
    // less than 2000
    setFilteredOldCrimes(oldCrimesDict.filter(crime => crime.type==="massacre"))
  }

  },[activeTab])

  return (
    <div
      style={{
        flex: 1,
        borderTopLeftRadius: '4rem',
        borderTopRightRadius: '4rem',
        backgroundColor: '#101010',
      }}
    >
      {/* Assuming CrimeHero and Banner components are imported */}
      <GradientHero title={crimeHeroDict["title"]} subTitle1={crimeHeroDict["subTitle1"]} subTitle2={crimeHeroDict["subTitle2"]} bloody/>
      <TabComponent activeTab={activeTab} setActiveTab={(tab)=>{saveSet(setActiveTab, "CrimeTab",tab)}} tabs={tabs} />
      {/* <SearchInput listItems={crimesDict} onSearch={handleSearch} placeHolder="Search by article or crime instance..."/> */}

      {activeTab !== 'Conflict'&&<ItemGrid dictData={filteredOldCrimes} crime massacre={activeTab==='Massacres'} />}
      {activeTab==='Conflict' && <CrimesList crimesDict={filteredCrimes} />}
      {activeTab==='Conflict' &&<div style={{ height: '80px', backgroundColor: '#141414' }} className="crime-empty"></div>}
      <FinalNote text1={finaleText[0]} text2={finaleText[1]} videoPath={finaleVideoPath}/>
      <Banner title="Frequently Asked Questions" styleObj={{ color: 'white' }} />
      {/* Assuming Faq component is imported */}
      <Faq data={faqData} />
    </div>
  );
};



export default CrimesPage;

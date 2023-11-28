import React, { useEffect, useState } from "react";
import Banner from "../../components/Simple/Banner";
// @ts-ignore
import Faq from 'react-faq-component';
import {crimesDict, crimeHeroDict, faqData} from '../../PagesData/CrimesPageData'
import CrimesList from "../../components/CrimeSections/CrimesList";
import GradientHero from "../../components/Simple/GradientHero";
import SearchInput from "../../components/Simple/SearchInput";

const CrimesPage: React.FC = () => {
  const [filteredCrimes, setFilteredCrimes] = useState(crimesDict);

  const handleSearch = (filteredCrimes: any) => {
    setFilteredCrimes(filteredCrimes);
  };

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
      <SearchInput listItems={crimesDict} onSearch={handleSearch} placeHolder="Search by article or crime instance..."/>
      <CrimesList crimesDict={filteredCrimes} />
      <div style={{ height: '80px', backgroundColor: '#141414' }} className="crime-empty"></div>
      <Banner title="Frequently Asked Questions" styleObj={{ color: 'white' }} />
      {/* Assuming Faq component is imported */}
      <Faq data={faqData} />
    </div>
  );
};




export default CrimesPage;

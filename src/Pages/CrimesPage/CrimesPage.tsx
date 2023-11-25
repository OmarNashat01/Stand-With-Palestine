import React, { useEffect } from "react";
import Banner from "../../components/Simple/Banner";
// @ts-ignore
import Faq from 'react-faq-component';
import {crimesDict, crimeHeroDict, faqData} from './CrimesPageData'
import SearchInput from "../../components/Simple/SearchInput";
import CrimesList from "../../components/CrimeSections/CrimesList";
import CrimeHero from "../../components/CrimeSections/CrimeHero";

const CrimesPage: React.FC = () => {
  return (
    <div
      style={{
        flex: 1,
        borderTopLeftRadius: "4rem",
        borderTopRightRadius: "4rem",
        backgroundColor: "#101010",
      }}
    >
      <CrimeHero crimeHeroDict={crimeHeroDict}/>
      <SearchInput />
      <CrimesList crimesDict={crimesDict} />
      <div style={{height:"80px", backgroundColor: '#141414'}}></div>
      <Banner
        title="Frequently Asked Questions"
        styleObj={{ color: "white" }}
      />
      <Faq data={faqData}/>
    </div>
  );
};


export default CrimesPage;

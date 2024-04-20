import React, { useEffect, useState } from "react";
// @ts-ignore
import GradientHero from "../../components/Simple/GradientHero";
import SearchInput from "../../components/Simple/SearchInput";
import LiesList from "../../components/Simple/ItemGrid";
import { liesData, faqData } from "../../PagesData/LiesPageData";
// @ts-ignore
import Faq from 'react-faq-component';
import Banner from "../../components/Simple/Banner";
import Head from "../../components/Simple/Head";

const LiesPage: React.FC = () => {
  const [filteredLies, setFilteredLies] = useState([]);

  const handleSearch = (filteredLies: any) => {
    setFilteredLies(filteredLies);
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
      <Head
        title="Lies Radar!"
        description="Read about the lies and deceit that have been spread about the ongoing conflict in different media outlets."
        keywords="Isreali Lies, Isreali Deceit, Isreali Propaganda, Isreali Media, Isreali Media Lies, Isreali Media Deceit, Isreali Media Propaganda, Isreali Media Propaganda Lies"
        image=""
        url=""
      />
      <GradientHero
        title={"Misinformation"}
        subTitle1={"Numerous Lives in Gaza Have Been Lost due to Deceit"}
        subTitle2={
          "This includes numerous facts shared by Israel and western media that have possibly been proved to be false."
        }
        bloody
      />
      <SearchInput
        listItems={liesData}
        onSearch={handleSearch}
        placeHolder="Search by lie or related information..."
      />
      <LiesList dictData={filteredLies} />
      <Banner title="Frequently Asked Questions" styleObj={{ color: 'white' }} />
      <Faq data={faqData} />
    </div>
  );
};


export default LiesPage;

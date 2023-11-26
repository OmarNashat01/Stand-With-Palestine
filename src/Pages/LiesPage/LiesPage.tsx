import React, { useEffect, useState } from "react";
// @ts-ignore
import GradientHero from "../../components/Simple/GradientHero";
import SearchInput from "../../components/Simple/SearchInput";
import LiesList from "../../components/LieSections/LiesList";
import { liesData } from "./LiesPageData";

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
      <GradientHero
        title={"Conflict Misinformation"}
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
    <LiesList liesData={filteredLies}/>
    </div>
  );
};


export default LiesPage;

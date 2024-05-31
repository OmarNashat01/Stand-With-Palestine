"use client";


import React, { useEffect, useState } from "react";
import Banner from "@/components/Simple/Banner";
// @ts-ignore
import Faq from "react-faq-component";
import "@/components/StatusSections/FAQSection.scss";
import {
  crimesDict,
  crimeHeroDict,
  finaleText,
  finaleVideoPath,
  faqData,
  oldCrimesDict,
} from "@/PagesData/CrimesPageData";
import CrimesList from "@/components/CrimeSections/CrimesList";
import GradientHero from "@/components/Simple/GradientHero";
import FinalNote from "@/components/CrimeSections/FinalNote";
import ItemGrid from "@/components/Simple/ItemGrid";
import TabComponent from "@/components/Simple/TabComponenet";
import Modal from "@/components/Simple/Modal";
import { saveSet, init } from "@/utils";
import { IoSearchCircle } from "react-icons/io5";
import SearchInput from "@/components/Simple/SearchInput";
import Head from "@/components/Simple/Head";

const CrimesPage: React.FC = () => {
  const [filteredCrimes, setFilteredCrimes] = useState(crimesDict);
  const [chosenOldCrimes, setChosenOldCrimes] = useState(oldCrimesDict);
  const [filteredChosenOldCrimes, setFilteredChosenOldCrimes] =
    useState(chosenOldCrimes);
  useEffect(() => {
    setFilteredChosenOldCrimes(chosenOldCrimes);
  }, [chosenOldCrimes]);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (filteredCrimes: any) => {
    setFilteredCrimes(filteredCrimes);
  };
  const handleSearchOld = (filteredChosenOldCrimes: any) => {
    setFilteredChosenOldCrimes(filteredChosenOldCrimes);
  };

  const tabs = ["Ongoing", "2020+", "2018+", "2000+", "Massacres"];
  const [activeTab, setActiveTab] = useState("Ongoing");

  useEffect(() => {
    if (typeof window === "undefined") return;
    setActiveTab(init("CrimeTab", "Ongoing"));
  }, []);

  useEffect(() => {
    if (activeTab === "2020+") {
      setChosenOldCrimes(
        oldCrimesDict
          .filter((crime) => parseInt(crime.date.split("-")[0]) >= 2020)
          .reverse()
      );
    } else if (activeTab === "2018+") {
      setChosenOldCrimes(
        oldCrimesDict
          .filter(
            (crime) =>
              parseInt(crime.date.split("-")[0]) >= 2018 &&
              parseInt(crime.date.split("-")[0]) < 2020
          )
          .reverse()
      );
    } else if (activeTab === "2000+") {
      setChosenOldCrimes(
        oldCrimesDict
          .filter(
            (crime) =>
              parseInt(crime.date.split("-")[0]) >= 2000 &&
              parseInt(crime.date.split("-")[0]) < 2018
          )
          .reverse()
      );
    } else if (activeTab === "Massacres") {
      // less than 2000
      setChosenOldCrimes(
        oldCrimesDict.filter((crime) => crime.type === "massacre")
      );
    }
  }, [activeTab]);

  return (
    <div
      style={{
        flex: 1,
        borderTopLeftRadius: "4rem",
        borderTopRightRadius: "4rem",
        backgroundColor: "#101010",
      }}
    >
      {/* Assuming CrimeHero and Banner components are imported */}
      <Head
        title="Crimes Radar!"
        description="Read about the ongoing crimes against Palestinians."
        keywords="Crimes, Isreali Crimes, IDF crimes, Isreali crimes against Palestinians, Isreali crimes against Palestinian children, Isreali crimes against women"
        image=""
        url=""
      />

      <GradientHero
        title={crimeHeroDict["title"]}
        subTitle1={crimeHeroDict["subTitle1"]}
        subTitle2={crimeHeroDict["subTitle2"]}
        bloody
      />
      <TabComponent
        activeTab={activeTab}
        setActiveTab={(tab) => {
          saveSet(setActiveTab, "CrimeTab", tab);
        }}
        tabs={tabs}
      />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: "999",
        }}
        onClick={() => setShowModal(!showModal)}
      >
        <IoSearchCircle size={45} color="#ff0000" />
      </div>
      <Modal
        searchMode={true}
        showModal={showModal}
        setShowModal={setShowModal}
        Component={SearchInput}
        ComponentProps={{
          listItems: activeTab === "Ongoing" ? crimesDict : chosenOldCrimes,
          onSearch: activeTab === "Ongoing" ? handleSearch : handleSearchOld,
          showList: true,
          modifiedList: activeTab === "Ongoing" ? filteredCrimes : filteredChosenOldCrimes,
          placeHolder: "Search by article or crime instance...",
          onClickFunc: () => setShowModal(false),
        }}
        title={""}
        textContent={""}
        listTextItems={[]}
        buttonText={""}
      />
      {activeTab !== "Ongoing" && (
        <ItemGrid
          dictData={chosenOldCrimes}
          crime
          massacre={activeTab === "Massacres"}
          background="rgb(21, 21, 21)"
        />
      )}
      {activeTab === "Ongoing" && <CrimesList crimesDict={crimesDict} />}
      {activeTab === "Ongoing" && (
        <div
          style={{ height: "80px", backgroundColor: "#141414" }}
          className="crime-empty"
        ></div>
      )}
      <FinalNote
        text1={finaleText[0]}
        text2={finaleText[1]}
        videoPath={finaleVideoPath}
      />
      <Banner
        title="Frequently Asked Questions"
        styleObj={{ color: "white" }}
      />
      {/* Assuming Faq component is imported */}
      <Faq data={faqData} />
    </div>
  );
};

export default CrimesPage;

import React from "react";
import { FaUserInjured } from "react-icons/fa";
import { GiPrisoner } from "react-icons/gi";
import { LiaUserInjuredSolid } from "react-icons/lia";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { GiGunshot } from "react-icons/gi";
import AnimatedNumber from "../Simple/AnimatedNumber";
import MapSection from "./MapSection";
import { saveSet } from "../../utils";

import "./WestBankStatus.scss";


interface WestBankStatusSectionProps {
  westBankDict: any;
  westBankDictToday: any;
  selectedRegion: string;
  setSelectedRegion: any;
  isSelectedToday: boolean;
  setIsSelectedToday: any;
}

const WestBankStatusSection: React.FC<WestBankStatusSectionProps> = ({
  westBankDict,
  westBankDictToday,
  selectedRegion,
  setSelectedRegion,
  isSelectedToday,
  setIsSelectedToday,
}) => {
  if (isSelectedToday) {
    westBankDict = westBankDictToday;
  }
  return (
    <div className="westbank-parent grid-item map-group">
      <MapSection selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}
        isSelectedToday={isSelectedToday} setIsSelectedToday={setIsSelectedToday}
      />
      <div className="killed killed-group grid-item">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <GiGunshot className="icon" />
          <h1 className="normal-h1">Killed</h1>
        </div>
        <AnimatedNumber value={westBankDict["killed"]} className="number-h1" />
      </div>
      <div className="injured injured-group grid-item">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaUserInjured className="icon" style={{ fontSize: "2.3rem" }} />
          <h1 className="normal-h1">Injured</h1>
        </div>
        <AnimatedNumber value={westBankDict["injured"]} className="number-h1" />
      </div>
      <div className="killed-kids killed-group grid-item">
        <img src="./StatusPage/Mat_Kids.svg" className="icon" alt="" style={{ maxWidth: "110px" }} />
        <h1 className="mini-h1">Children</h1>
        <AnimatedNumber
          value={westBankDict["killedKids"]}
          className="number-h1-mini"
        />
      </div>
      <div className="killed-adults killed-group grid-item">
        <img src="./StatusPage/Mat_elder.svg" className="icon" alt="" style={{ maxWidth: "110px" }} />
        <h1 className="mini-h1">Adults</h1>
        <AnimatedNumber
          value={westBankDict["killedAdults"]}
          className="number-h1-mini"
        />
      </div>
      <div className="injured-kids injured-group grid-item">
        <LiaUserInjuredSolid
          className="icon-color"
          style={{ fontSize: "4.5rem" }}
        />
        <h1 className="mini-h1">Children</h1>
        <AnimatedNumber
          value={westBankDict["injuredKids"]}
          className="number-h1-mini"
        />
      </div>
      <div className="injured-adults injured-group grid-item">
        <MdOutlinePersonalInjury
          className="icon-color"
          style={{ fontSize: "4.5rem" }}
        />
        <h1 className="mini-h1">Adults</h1>
        <AnimatedNumber
          value={westBankDict["injuredAdults"]}
          className="number-h1-mini"
        />
      </div>
      <div className="detained misc-group grid-item">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <GiPrisoner className="icon" />
          <h1 className="normal-h1">Detained</h1>
        </div>
        <AnimatedNumber
          value={westBankDict["detained"]}
          className="number-h1"
        />
      </div>
    </div>
  );
};

export default WestBankStatusSection;

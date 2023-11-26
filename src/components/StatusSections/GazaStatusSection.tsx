import React from "react";
import { TbUserQuestion } from "react-icons/tb";
import { GiFallingBomb } from "react-icons/gi";
import { FaUserInjured } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { MdOutlineWifi } from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaUserInjuredSolid } from "react-icons/lia";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import AnimatedNumber from "../Simple/AnimatedNumber";
import MapSection from "./MapSection";
import "./GazaStatus.scss";

interface GazaStatusSectionProps {
    gazaDict: any;
    gazaDictToday: any;
    selectedRegion: string;
    setSelectedRegion: any;
    isSelectedToday: boolean;
    setIsSelectedToday: any;
  }
  
  const GazaStatusSection: React.FC<GazaStatusSectionProps> = ({
    gazaDict,
    gazaDictToday,
    selectedRegion,
    setSelectedRegion,
    isSelectedToday,
    setIsSelectedToday,
  }) => {
    if (isSelectedToday) {
      gazaDict = gazaDictToday;
    }
    return (
      <div className="gaza-parent">
        <MapSection selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}
                    isSelectedToday={isSelectedToday} setIsSelectedToday={setIsSelectedToday}
        />
        <div className="killed grid-item killed-group">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <GiFallingBomb className="icon" />
            <h1 className="normal-h1">Brutally Killed</h1>
          </div>
          <AnimatedNumber value={gazaDict["killed"]} className="number-h1" />
        </div>
        <div className="kids-killed grid-item killed-group">
          <img src="./StatusPage/Mat_Kids.svg" className="icon" />
          <h1 className="mini-h1">Children</h1>
          <AnimatedNumber
            value={gazaDict["killedKids"]}
            className="number-h1-mini"
          />
        </div>
        <div className="killed-medical grid-item killed-group">
          <FaUserDoctor className="icon-color" />
          <h1 className="mini-h1">Clinical</h1>
          <AnimatedNumber
            value={gazaDict["killedMedical"]}
            className="number-h1-mini"
            atLeast={false}
          />
        </div>
        <div className="women-killed grid-item killed-group">
          <img src="./StatusPage/Mat_female.svg" className="icon" />
          <h1 className="mini-h1">Women</h1>
          <AnimatedNumber
            value={gazaDict["killedWomen"]}
            className="number-h1-mini"
          />
        </div>
        <div className="killed-un grid-item killed-group">
          <img src="./StatusPage/UN.svg" className="icon" style={{ width: "3.5rem" }} />
          <h1 className="mini-h1">UN Staff</h1>
          <AnimatedNumber
            value={gazaDict["killedUN"]}
            className="number-h1-mini"
            atLeast={false}
          />
        </div>
        <div className="elderly-killed grid-item killed-group">
          <img src="./StatusPage/Mat_elder.svg" className="icon" />
          <h1 className="mini-h1">Elderly</h1>
          <AnimatedNumber
            value={gazaDict["killedElder"]}
            className="number-h1-mini"
          />
        </div>
        <div className="killed-edu grid-item killed-group">
          <FaUserGraduate className="icon-color" />
          <h1 className="mini-h1">Academic</h1>
          <AnimatedNumber
            value={gazaDict["killedEdu"]}
            className="number-h1-mini"
            atLeast={false}
          />
        </div>
        <div className="men-killed grid-item killed-group">
          <img
            src="./StatusPage/chalk-outline-murder.svg"
            style={{ width: "3.8rem" }}
            className="icon"
          />
          <h1 className="mini-h1">Men</h1>
          <AnimatedNumber
            value={gazaDict["killedMen"]}
            className="number-h1-mini"
          />
        </div>
        <div className="killed-press grid-item killed-group">
          <MdOutlineSupportAgent className="icon-color" />
          <h1 className="mini-h1">Press</h1>
          <AnimatedNumber
            value={gazaDict["killedPress"]}
            className="number-h1-mini"
            atLeast={false}
          />
        </div>
        <div className="injured grid-item injured-group">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaUserInjured className="icon" style={{ fontSize: "2.3rem" }} />
            <h1 className="normal-h1">Injured</h1>
          </div>
          <AnimatedNumber value={gazaDict["injured"]} className="number-h1" />
        </div>
        <div className="kids-injured grid-item injured-group">
          <LiaUserInjuredSolid
            className="icon-color"
            style={{ fontSize: "4.5rem" }}
          />
          <h1 className="mini-h1">Children</h1>
          <AnimatedNumber
            value={gazaDict["injuredKids"]}
            className="number-h1-mini"
          />
        </div>
        <div className="others-injured grid-item injured-group">
          <MdOutlinePersonalInjury
            className="icon-color"
            style={{ fontSize: "4.5rem" }}
          />
          <h1 className="mini-h1">Adults</h1>
          <AnimatedNumber
            value={gazaDict["injuredAdults"]}
            className="number-h1-mini"
          />
        </div>
        <div className="missing grid-item missing-group">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <TbUserQuestion className="icon" />
            <h1 className="normal-h1">Missing</h1>
          </div>
          <AnimatedNumber value={gazaDict["missing"]} className="number-h1" />
        </div>
        <div className="kids-missing grid-item missing-group">
          <img
            src="./StatusPage/missing-kids.svg"
            className="icon"
            style={{ maxWidth: "100px" }}
          />
          <h1 className="mini-h1">Children</h1>
          <AnimatedNumber
            value={gazaDict["missingKids"]}
            className="number-h1-mini"
          />
        </div>
        <div className="others-missing grid-item missing-group">
          <img
            src="./StatusPage/missing-adult.svg"
            className="icon"
            style={{ maxWidth: "100px" }}
          />
          <h1 className="mini-h1">Adults</h1>
          <AnimatedNumber
            value={gazaDict["missingAdults"]}
            className="number-h1-mini"
          />
        </div>
        <div className="hospitals grid-item injured-group">
          <AnimatedNumber
            value={gazaDict["hospitalsDown"]}
            className="number-h1"
            denominator="35"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <h1 className="normal-h1" style={{ fontSize: "1.6rem" }}>
              Hospitals Down
            </h1>
          </div>
        </div>
        <div className="funds grid-item misc-group">
          <AnimatedNumber
            value={gazaDict["funds"]}
            className="number-h1"
            isBillion
            atLeast={false}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <h1 className="normal-h1" style={{ fontSize: "1.6rem" }}>
              U.S. Aid to Israel
            </h1>
          </div>
        </div>
        <div className="displaced grid-item misc-group">
          <AnimatedNumber
            value={gazaDict["displaced"]}
            className="number-h1"
            isMillion
            isApprox={true}
            atLeast={false}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <h1 className="normal-h1">Displaced From Home</h1>
            <FaPersonWalkingLuggage className="icon" />
          </div>
        </div>
        <div className="electricity grid-item status-group">
          <FaHandHoldingWater className="icon" />
          <h1 className="number-h1-mini">{gazaDict["water"]}</h1>
        </div>
        <div className="water grid-item status-group">
          <MdElectricBolt className="icon" />
          <h1 className="number-h1-mini">{gazaDict["electricity"]}</h1>
        </div>
        <div className="fuel grid-item status-group">
          <BsFillFuelPumpFill className="icon" />
          <h1 className="number-h1-mini">{gazaDict["fuel"]}</h1>
        </div>
        <div className="internet grid-item status-group">
          <MdOutlineWifi className="icon" />
          <h1 className="number-h1-mini">{gazaDict["internet"]}</h1>
        </div>
      </div>
    );
  };
  
export default GazaStatusSection;
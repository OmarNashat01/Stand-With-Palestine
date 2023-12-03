import React from "react";
import { FaMosque } from "react-icons/fa6";
import { FaChurch } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { FaSchoolCircleExclamation } from "react-icons/fa6";
import { FaSchoolCircleXmark } from "react-icons/fa6";
import { GiGroundbreaker } from "react-icons/gi";
import { FaHouseDamage } from "react-icons/fa";

import AnimatedNumber from "../Simple/AnimatedNumber";
import "./Infra.scss";

interface GazaStatusSectionProps {
  infraDict: any;
}

const GazaStatusSection: React.FC<GazaStatusSectionProps> = ({ infraDict }) => {
  return (
    <div className="infra-parent">
      <div className="homes-destroyed grid-item">
        <FaHouseDamage className="icon-color" />
        <h1 className="mini-h1">Damaged Homes</h1>
        <AnimatedNumber
          value={infraDict["damagedHomes"]}
          className="number-h1-mini"
        />
      </div>
      <div className="homes-destroyed grid-item">
        <GiGroundbreaker className="icon-color" />
        <h1 className="mini-h1">Destroyed Homes</h1>
        <AnimatedNumber
          value={infraDict["destroyedHomes"]}
          className="number-h1-mini"
        />
      </div>
      <div className="homes-destroyed grid-item">
        <FaHospitalAlt className="icon-color" />
        <h1 className="mini-h1">Damaged Hospitals</h1>
        <AnimatedNumber
          value={infraDict["damagedHospitals"]}
          className="number-h1-mini"
          atLeast={false}
        />
      </div>
      <div className="homes-destroyed grid-item">
        <FaAmbulance className="icon-color" />
        <h1 className="mini-h1">Destroyed Ambulances</h1>
        <AnimatedNumber
          value={infraDict["destroyedAmbulances"]}
          className="number-h1-mini"
          atLeast={false}
        />
      </div>
      <div className="homes-destroyed grid-item">
        <FaSchoolCircleExclamation className="icon-color" />
        <h1 className="mini-h1">Damaged Schools</h1>
        <AnimatedNumber
          value={infraDict["damagedSchools"]}
          className="number-h1-mini"
          atLeast={false}
        />
      </div>
      <div className="homes-destroyed grid-item">
        <FaSchoolCircleXmark className="icon-color" />
        <h1 className="mini-h1">Destroyed Schools</h1>
        <AnimatedNumber
          value={infraDict["destroyedSchools"]}
          className="number-h1-mini"
          atLeast={false}
        />
      </div>
      <div className="homes-destroyed grid-item">
        <FaChurch className="icon-color" />
        <h1 className="mini-h1">Destroyed Churches</h1>
        <AnimatedNumber
          value={infraDict["destroyedChurches"]}
          className="number-h1-mini"
          atLeast={false}
        />
      </div>
      <div className="homes-destroyed grid-item">
        <FaMosque className="icon-color" />
        <h1 className="mini-h1">Destroyed Mosques</h1>
        <AnimatedNumber
          value={infraDict["destroyedMosques"]}
          className="number-h1-mini"
          atLeast={false}
        />
      </div>
    </div>
  );
};

export default GazaStatusSection;

import React from "react";
import { saveSet } from "../../utils";
import Image from "next/image";

interface MapSectionProps {
  selectedRegion: string | null;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string | null>>;
  isSelectedToday: boolean;
  setIsSelectedToday: any;
}

const MapSection: React.FC<MapSectionProps> = ({
  selectedRegion,
  setSelectedRegion,
  isSelectedToday,
  setIsSelectedToday,
}) => {
  const handleMapClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const x = event.nativeEvent.offsetX / event.currentTarget.width;
    if (x < 0.5) {
      setSelectedRegion("Gaza");
    } else {
      setSelectedRegion("West Bank");
    }
  };

  return (
    <>
      <div className="map map-group" style={{ padding: "2.4rem" }}>
        <Image
          src={
            selectedRegion === "Gaza"
              ? "./StatusPage/gazaselect.svg"
              : "./StatusPage/westbankselect.svg"
          }
          alt="Map"
          width={200}
          height={500}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          onClick={handleMapClick}
        />
      </div>
      <div className="map-text-wrapper grid-item map-group">
        <div className="region-buttons-wrapper">
          <button
            className={selectedRegion === "Gaza" ? "selected" : "greyed"}
            onClick={() => saveSet(setSelectedRegion, "region", "Gaza")}
          >
            Gaza
          </button>
          <button
            className={selectedRegion === "West Bank" ? "selected" : "greyed"}
            onClick={() => saveSet(setSelectedRegion, "region", "West Bank")}
          >
            West Bank
          </button>
        </div>
        <div className="today-only">
          <button
            className={"today-only " + (isSelectedToday ? "selected" : "greyed")}
            onClick={() => saveSet(setIsSelectedToday, "isSelectedToday", !isSelectedToday)}
          >
            Recent Only
          </button>
        </div>
      </div>
    </>
  );
};

export default MapSection;

import React from "react";
import HistoricTimelineSection from "../../components/HistoricTimelineSection/HistoricTimelineSection";
const RecentTimelinePage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <HistoricTimelineSection direction="left" />
      <HistoricTimelineSection direction="right" />
      <HistoricTimelineSection direction="left" />
    </div>
  );
};

export default RecentTimelinePage;

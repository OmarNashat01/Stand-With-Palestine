import React from "react";
import TimelineSection from "../../components/TimelineSection/TimelineSection";
const RecentTimelinePage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TimelineSection direction="left" />
      <TimelineSection direction="right" />
      <TimelineSection direction="left" />
    </div>
  );
};

export default RecentTimelinePage;

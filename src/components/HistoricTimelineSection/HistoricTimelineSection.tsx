import React from "react";
import "./HistoricTimelineSection.scss";
interface TimelineInterface {
  direction: string;
}
const HistoricTimelineSection: React.FC<TimelineInterface> = ({
  direction,
}) => {
  return (
    <div
      className="section-container"
      style={{
        flexDirection: direction === "right" ? "row-reverse" : "row",
      }}
    >
      {/* scrollbar */}
      <div className="scrollbar">
        <div className="vertical-line" />
        <div className="horizontal-line" />
        <div className="day">17 Oct</div>
        <div className="year">2023</div>
      </div>
      {/* scrollbar */}
      {/* image */}
      <div className="images">
        <img
          className="img1"
          src="/hospital-bombing.jpeg"
          alt="hospital-bombing"
        />
        <img
          className="img2"
          src="/hospital-children.png"
          alt="hospital-children"
        />
      </div>
      {/* content */}
      <div className="content-section">
        <div className="horizontal-line" />
        {/* title */}
        <h1 className="section-title">
          Bombing Al-Muamadani
          <br />
          <span className="blood-text">
            Hospital
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
          </span>{" "}
          at Khan-Yunis
        </h1>
        {/* title */}
        {/* summary */}
        <p className="section-summary">
          The Israeli Occupation bombards the Anglican Hospital in the middle of
          Gaza City, targeting its doctors, patients, and the hundreds of
          displaced Palestinians taking shelter inside.
        </p>
        {/* summary */}
        {/* numbers */}
        <div className="important-facts">
          <div className="fact">
            <h1>500+</h1>
            <p className="bolded">Civilians Were killed</p>
            <p className="normal">
              Most of them were children, doctors and patients
            </p>
          </div>
          <div className="fact">
            <h1>1000+</h1>
            <p className="bolded">Civilians Were Injured</p>
            <p className="normal">
              Most of them were children, doctors and patients
            </p>
          </div>
        </div>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default HistoricTimelineSection;

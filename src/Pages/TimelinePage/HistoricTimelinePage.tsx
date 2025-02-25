import React from 'react';
import GradientHero from "../../components/Simple/GradientHero";

const HistoricTimelinePage: React.FC = () => {
  return (
     // <div
    //   className="section-container"
    //   style={{
    //     flexDirection: direction === "right" ? "row-reverse" : "row",
    //   }}
    // >
    //   {/* scrollbar */}
    //   <div className="scrollbar">
    //     <div className="vertical-line" />
    //     <div className="horizontal-line" />
    //     <div className="day">17 Oct</div>
    //     <div className="year">2023</div>
    //   </div>
    //   {/* scrollbar */}
    //   {/* image */}
    //   <div className="images">
    //     <img
    //       className="img1"
    //       src="/hospital-bombing.jpeg"
    //       alt="hospital-bombing"
    //     />
    //     <img
    //       className="img2"
    //       src="/hospital-children.png"
    //       alt="hospital-children"
    //     />
    //   </div>
    //   {/* content */}
    //   <div className="content-section">
    //     <div className="horizontal-line" />
    //     {/* title */}
    //     <h1 className="section-title">
    //       Bombing Al-Muamadani
    //       <br />
    //       <span className="blood-text">
    //         Hospital
    //         <span className="drop"></span>
    //         <span className="drop"></span>
    //         <span className="drop"></span>
    //         <span className="drop"></span>
    //         <span className="drop"></span>
    //       </span>{" "}
    //       at Khan-Yunis
    //     </h1>
    //     {/* title */}
    //     {/* summary */}
    //     <p className="section-summary">
    //       The Israeli Occupation bombards the Anglican Hospital in the middle of
    //       Gaza City, targeting its doctors, patients, and the hundreds of
    //       displaced Palestinians taking shelter inside.
    //     </p>
    //     {/* summary */}
    //     {/* numbers */}
    //     <div className="important-facts">
    //       <div className="fact">
    //         <h1>500+</h1>
    //         <p className="bolded">Civilians Were killed</p>
    //         <p className="normal">
    //           Most of them were children, doctors and patients
    //         </p>
    //       </div>
    //       <div className="fact">
    //         <h1>1000+</h1>
    //         <p className="bolded">Civilians Were Injured</p>
    //         <p className="normal">
    //           Most of them were children, doctors and patients
    //         </p>
    //       </div>
    //     </div>
    //     <button className="read-more-btn">Read More</button>
    //   </div>
    // </div>
    <div style={{ flex: 1, borderTopLeftRadius: '4rem', borderTopRightRadius: '4rem', backgroundColor: '#101010' }}>
      <GradientHero title={"COMING SOON"} subTitle1="This Page is Under Construction" subTitle2="We Are Working Hard To Get This Up Quickly!" />
      <p style={{textAlign: 'center',color: 'white', fontSize: '0.9rem', padding: '0.5rem'}}>For know you can read about the history of the conflict <a style={{color:'red'}} href="https://www.aljazeera.com/news/2023/11/27/palestine-and-israel-brief-history-maps-and-charts">here</a>.</p>
    </div>
  );
};

export default HistoricTimelinePage;

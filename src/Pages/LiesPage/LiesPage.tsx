import React, { useEffect, useState } from "react";
import Banner from "../../components/Simple/Banner";
// @ts-ignore
import GradientHero from "../../components/Simple/GradientHero";
import SearchInput from "../../components/Simple/SearchInput";
import Modal from "../../components/Simple/Modal";
import "./LiesPage.scss";

const LiesPage: React.FC = () => {
  const [filteredLies, setFilteredLies] = useState([]);

  const handleSearch = (filteredLies: any) => {
    setFilteredLies(filteredLies);
  };

  const liesData = [
    { 
      special: false,
      source: 'IDF & U.S.', 
      title: 'Hamas Beheaded Forty Israeli Babies', 
      modalContent: "", 
      modalTextItems: ["The Israeli Prime Minister's office said that <a href='https://edition.cnn.com/middleeast/live-news/israel-hamas-war-gaza-10-11-23/h_a63b0fd57f2df717147ea8e26a2f758c'>40 babeis were beheaded </a>",
                       "Even the US president confirmed 40 and said that he saw this in person", 
                       "It turned out that Israel can’t verify those claims."] },
    { 
      special: false,
      source: 'IDF', 
      title: 'Safe Route to South Gaza', 
      modalContent: "", 
      modalTextItems: ["On October 13, a civilian convoy fleeing Gaza City as ordered by the Israeli military on a road identified as a “safe route” by Israel, was hit by an Israeli airstrike, killing 70 people and wounding at least 200. The Israeli military <a href='https://www.timesofisrael.com/liveblog_entry/idf-strongly-denies-claim-that-israel-struck-evacuating-convoy-in-gaza-hamas-spreading-manipulative-fake-information/'> denied </href>attacking the convoy.",
                       "<a href='https://twitter.com/amnesty/status/1713631257005830164?s=20'> Amnesty International </a> verified videos of the attack and concluded it was the result of an airstrike.", ]},
    { 
      special: false,
      source: 'IDF', 
      title: 'Murder of Shereen Abu Akleh', 
      modalContent: "", 
      modalTextItems: ["<a href=''> well met </a>",
                       "It has been shown", 
                       "Well Played"] },
    { 
      special: false,
      source: 'IDF', 
      title: 'Terrorist Names in Hospital', 
      modalContent: "", 
      modalTextItems: ["<a href=''> well met </a>",
                       "It has been shown", 
                       "Well Played"] },
    { 
      special: false,
      source: 'IDF', 
      title: 'Use of White Phosphourous', 
      modalContent: "", 
      modalTextItems: ["<a href=''> well met </a>",
                       "It has been shown", 
                       "Well Played"] },
    { 
      special: true,
      source: 'IDF', 
      title: 'Hamas Command Center Under the Al-Shifa Hospital', 
      modalContent: "", 
      modalTextItems: ["<a href=''> well met </a>",
                       "It has been shown", 
                       "Well Played"] },
    { 
      special: false,
      source: 'IDF & U.S.', 
    title: 'Hamas Beheaded Forty Israeli Babies', 
    modalContent: "", 
    modalTextItems: ["The Israeli Prime Minister's office said that <a href='https://edition.cnn.com/middleeast/live-news/israel-hamas-war-gaza-10-11-23/h_a63b0fd57f2df717147ea8e26a2f758c'>40 babeis were beheaded </a>",
                    "Even the US president confirmed 40 and said that he saw this in person", 
                    "It turned out that Israel can’t verify those claims."] },
  { 
    special: false,
    source: 'IDF', 
    title: 'Safe Route to South Gaza', 
    modalContent: "", 
    modalTextItems: ["On October 13, a civilian convoy fleeing Gaza City as ordered by the Israeli military on a road identified as a “safe route” by Israel, was hit by an Israeli airstrike, killing 70 people and wounding at least 200. The Israeli military <a href='https://www.timesofisrael.com/liveblog_entry/idf-strongly-denies-claim-that-israel-struck-evacuating-convoy-in-gaza-hamas-spreading-manipulative-fake-information/'> denied </href>attacking the convoy.",
                    "<a href='https://twitter.com/amnesty/status/1713631257005830164?s=20'> Amnesty International </a> verified videos of the attack and concluded it was the result of an airstrike.", ]},
  { 
    special: false,
    source: 'IDF', 
    title: 'Terrorist Names in Hospital', 
    modalContent: "", 
    modalTextItems: ["<a href=''> well met </a>",
                    "It has been shown", 
                    "Well Played"] },

  ];
  
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

interface  LiesListProps{
  liesData: any;
}


const LiesList: React.FC<LiesListProps> = ({liesData}) => {

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle ]= useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalTextItems, setModalTextItems] = useState(["done"]);
  
  const chunkSize = 6; // Set the batch size
  if (liesData.length === 0) {
    return <div className="crimes-content" style={{color: 'rgb(170, 169, 169)', textAlign:'center', paddingBottom:"2rem"}}>No lies match this search criteria...</div>;
  }

  return (
    <div className="wrapper-lies">
      <div className="">
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title={modalTitle}
          textContent={modalContent}
          listTextItems={modalTextItems}
          buttonText={"Back"}
        />
        {[...Array(Math.ceil(liesData.length / chunkSize))].map((_, batchIndex) => (
          <div key={batchIndex} className="batch cards">
            {liesData.slice(batchIndex * chunkSize, (batchIndex + 1) * chunkSize).map((item:any, index:number) => (
              <article
                key={batchIndex * chunkSize + index}
                className={` ${(item.special)? "special" : ""} card card--overlay ${[0, 5, 6, 11, 12, 17].includes(batchIndex * chunkSize + index) ? 'card--overlay--wide' : ''} post-${index + 1}`}
              >
                <div className="card__content" onClick={() => { setModalTitle(item.title); setModalContent(item.modalContent); setModalTextItems(item.modalTextItems); setShowModal(true); }}>
                  <header className="card__header">
                    <div className="card__topic">{item.source}</div>
                    <h4 className="card__title">{item.title}</h4>
                  </header>
                  <footer className="card__footer">
                    <button className="btn btn--white">Read More</button>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


export default LiesPage;

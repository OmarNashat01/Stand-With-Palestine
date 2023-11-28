import React, { useEffect, useState } from "react";
import Modal from "../../components/Simple/Modal";

import "./LiesList.scss";

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

export default LiesList;
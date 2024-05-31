import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Fade } from "react-swift-reveal";
import { HiArrowCircleRight } from "react-icons/hi";

import "./ItemGrid.scss";

interface ItemGridProps {
  dictData: any;
  crime?: boolean;
  massacre?: boolean;
  background?: string;
}


const ItemGrid: React.FC<ItemGridProps> = ({ dictData, crime = false, massacre = false, background = 'transparent' }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalTextItems, setModalTextItems] = useState(["done"]);
  const [modalVideos, setModalVideos] = useState([]);
  const chunkSize = 6; // Set the batch size
  const longDivs = [0, 5, 6, 11, 12, 17, 18, 23, 24, 29, 30, 35, 36, 41, 42, 47, 48, 53, 54, 59, 60, 65, 66, 71, 72, 77, 78, 83, 84, 89, 90, 95, 96, 101, 102, 107];
  const [itemData, setItemData] = useState(dictData);
  useEffect(() => {
    setItemData(dictData);
  }, [crime, dictData])

  if (dictData.length === 0) {
    return <div className="crimes-content" style={{ color: 'rgb(170, 169, 169)', textAlign: 'center', paddingBottom: "2rem" }}>No {crime ? "crimes" : "lies"} match this search criteria...</div>;
  }

  const modalLogic = (item: any) => {
    setModalTitle(item.title); setModalContent(item.modalContent); setModalTextItems(item.modalTextItems); setShowModal(true);
    setModalVideos(item.videos);
  }

  return (
    <div className="wrapper-lies" style={{ background: background }}>
      <div className="">
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title={modalTitle}
          textContent={modalContent}
          listTextItems={modalTextItems}
          buttonText={"Back"}
          videos={modalVideos !== undefined ? modalVideos : []}
        />
        {[...Array(Math.ceil(itemData.length / chunkSize))].map((_, batchIndex) => (
          <Fade key={batchIndex}>
            <div key={batchIndex} className="batch cards">
              {itemData.slice(batchIndex * chunkSize, (batchIndex + 1) * chunkSize).map((item: any, index: number) => (
                <article
                  id={`${item.title.replace(/\s+/g, "-")}`}
                  key={batchIndex * chunkSize + index}
                  className={` ${(item.special) ? "special" : ""} card ${crime && !massacre ? "card-crime" : ""} card--overlay ${longDivs.includes(batchIndex * chunkSize + index) ? 'card--overlay--wide' : ''} ${longDivs.includes(batchIndex * chunkSize + index) && crime && !massacre ? 'card--overlay--wide-crime' : ''} post-${index + 1}`}
                >
                  <div className="card__content" onClick={() => { (!crime || massacre) ? modalLogic(item) : (typeof window !== "undefined") ? window.open(item.links[0], '_blank') : null }} >
                    <header className="card__header">
                      <div className="card__topic">{(crime) ? item.sources[0] : item.source}</div>
                      <h4 className="card__title">{item.title}</h4>
                    </header>
                    <footer className={(crime) ? "card__footer_right" : "card__footer"}>
                      {!crime && <button className="btn btn--white">Proof</button>}
                      {crime && <HiArrowCircleRight style={{ fontSize: '1.5rem' }} />}
                    </footer>
                    {item.date !== undefined && <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(214, 10, 10, 0.0)', padding: '0.2rem 0.4rem', borderRadius: '10px', fontSize: '0.8rem' }}>
                      <b>{item.date}</b>
                    </div>}
                  </div>
                </article>
              ))}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;
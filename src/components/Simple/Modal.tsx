import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import "rc-slider/assets/index.css";
import HeroButton from "./HeroButton";
import "./Modal.scss";
import "rc-slider/assets/index.css";
import Markdown from "../Simple/Markdown";
import { RxCross2 } from "react-icons/rx";
import TabComponent from "../../components/Simple/TabComponenet";

interface ModalProps {
  searchMode?: boolean;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  Component?: any;
  ComponentProps?: any;
  title: string;
  textContent: string;
  videos?: string[];
  listTextItems?: any[];
  buttonText?: string;
}

const Modal: FC<ModalProps> = ({
  searchMode=false,
  showModal,
  setShowModal,
  Component = "",
  ComponentProps = {},
  title,
  textContent,
  videos = [],
  listTextItems = [],
  buttonText = "",
}) => {
  const tabs = videos.length > 0 ? ["Written", "Videos"] : ["Written"];
  const [activeTab, setActiveTab] = useState("Written");

  const modalRef = useRef(null);

  const handleCloseModal = useCallback(
    (event: MouseEvent) => {
      //@ts-ignore
      if (
        modalRef.current &&
        //@ts-ignore
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [showModal, handleCloseModal]);

  useEffect(
    ()=> {

      if (videos.length === 0) {
        setActiveTab("Written");
      }

    }
    , [videos])

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal_content" ref={modalRef}>
            {!buttonText && (
              <div
                className="exit-icon"
                onClick={() => setShowModal(false)}
                style={{
                  position: "relative",
                  top: "5px",
                  left: "5px",
                  cursor: "pointer",
                  maxWidth: "30px",
                }}
              >
                <RxCross2 size={18} />
              </div>
            )}
            {title && <h1>{title}</h1>}
            {!searchMode && <TabComponent
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
              }}
              tabs={tabs}
              tabUI={true}
              smallGap={true}
              leftAlign={true}
              manyTabs={false}
            />}
            {Component !== "" && <Component {...ComponentProps} />}
            {activeTab === "Written" && (
              <>
                {textContent !== "" && (
                  <Markdown
                    className="markdown-crime"
                    style={{ fontSize: "0.9rem", backgroundColor: (!searchMode) ? 'rgb(21, 21, 21)' : 'transparent', borderRadius: '15px' }}
                    markdownText={textContent}
                  />
                )}
                {listTextItems.length !== 0 && (
                  <ul
                  style={{ backgroundColor: (!searchMode) ? "rgb(21, 21, 21)" : 'transparent'}}
                  >
                    {listTextItems.map((item, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                )}
              </>
            )}

            {activeTab === "Videos" && (
              <div
                style={{
                  backgroundColor: (!searchMode) ? "rgb(21, 21, 21)" : 'transparent',
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                {videos.map((video:any, index:any) => (
                  <iframe
                    key={index} // Ensure unique keys for each iframe
                    className="iframe"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ margin: "0rem 1rem 1rem 1rem" }}
                  ></iframe>
                ))}
              </div>
            )}

            {buttonText && (
              <HeroButton
                type="red"
                content={buttonText}
                styleObj={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  margin: "2rem auto",
                  minWidth: "30%",
                }}
                onClickFunc={() => setShowModal(false)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

import React, { FC, useCallback, useEffect, useRef } from "react";
import "rc-slider/assets/index.css";
import HeroButton from "./HeroButton";
import "./Modal.scss";
import "rc-slider/assets/index.css";
import Markdown from "../Simple/Markdown";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  Component?: any;
  ComponentProps?: any;
  title: string;
  textContent: string;
  listTextItems?: any[];
  buttonText?: string;
}

const Modal: FC<ModalProps> = ({
  showModal,
  setShowModal,
  Component="",
  ComponentProps={},
  title,
  textContent,
  listTextItems = [],
  buttonText = "",
}) => {
  const modalRef = useRef(null);

  const handleCloseModal = useCallback((event: MouseEvent) => {
    //@ts-ignore
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  }, [setShowModal]);

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


  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal_content" ref={modalRef}>
            {
        !buttonText && <div
          className="exit-icon"
          onClick={() => setShowModal(false)}
          style={{
            position: "relative",
            top: "5px",
            left: "5px",
            cursor: "pointer",
            maxWidth: "30px"
          }}
        >
          <RxCross2 size={18} />
        </div>
            } 
            {title && <h1>{title}</h1>}
            {Component!=="" && <Component {...ComponentProps} />}
            {textContent !== "" && (
              <Markdown
                className="markdown-crime"
                style={{ fontSize: "0.9rem" }}
                markdownText={textContent}
              />
            )}
            {listTextItems.length!==0 && <ul>
              {listTextItems.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>}
            {buttonText && <HeroButton
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
        />}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
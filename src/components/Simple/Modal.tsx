import React, { FC, useCallback, useEffect, useRef } from "react";
import "rc-slider/assets/index.css";
import HeroButton from "./HeroButton";
import "./Modal.scss";
import "rc-slider/assets/index.css";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  title: string;
  textContent: string;
  listTextItems?: any[];
  buttonText: string;
}

const Modal: FC<ModalProps> = ({
  showModal,
  setShowModal,
  title,
  textContent,
  listTextItems=[],
  buttonText,
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
      document.addEventListener('mousedown', handleCloseModal);
    } else {
      document.removeEventListener('mousedown', handleCloseModal);
    }

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [showModal, handleCloseModal]);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal_content" ref={modalRef}>
            <h1>{title}</h1>
            {textContent!="" && <p>{textContent}</p>}
            <ul>
              {listTextItems.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <HeroButton
              type="red"
              content={buttonText}
              styleObj={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.2rem",
                margin: "2rem auto",
                minWidth: "30%"
              }}
              onClickFunc={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

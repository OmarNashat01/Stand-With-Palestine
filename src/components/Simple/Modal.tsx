import React, { FC } from 'react';
import { FaEye } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import HeroButton from './HeroButton';
import "./Modal.scss";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <h1>PEOPLE IN GAZA ARE DYING RIGHT NOW</h1>
            <p>
              You get to choose whether to remotely see and hear a small glimpse of what people in Gaza are suffering from. They do not get to choose whether or not to experience it firsthand.
            </p>
            <div className="flex-container">
              <div className="control-container">
                <p>
                  <FaEye style={{ marginBottom: '-2px', marginRight: '0.3rem' }} />
                  Control Blur
                </p>
                <Slider />
              </div>
              <div className="control-container">
                <p>
                  <AiFillSound style={{ marginBottom: '-2px', marginRight: '0.3rem' }} />
                  Control Sound
                </p>
                <Slider />
              </div>
            </div>
            <HeroButton
              type="red"
              content="CLOSE WINDOW"
              styleObj={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.2rem',
                margin: '2rem auto',
              }}
              onClickFunc={() => setShowModal(false)}
            />
          </div>
        </div>)}
    </>
  );
};

export default Modal;

import React, { FC, useCallback, useRef, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import HeroButton from '../Simple/HeroButton';
import "./ModalEye.scss";
import 'rc-slider/assets/index.css';
import { saveSet } from '../../utils';

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  volume: number;
  setVolume: any;
  blur: number;
  setBlur: any;
}

const ModalEye: FC<ModalProps> = ({ showModal, setShowModal, volume, setVolume, blur, setBlur }) => {
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
        <div className="modal-eye">
          <div className="modal_content" ref={modalRef}>
            <h1>PEOPLE IN GAZA ARE DYING RIGHT NOW</h1>
            <p>
              You get to choose whether to remotely see and hear a small glimpse of what people in Gaza are suffering from. They do not get to choose whether or not to experience it firsthand.
            </p>
            <div className="flex-container">
              <div className="control-container">
                <p>
                  <FaEye style={{ marginBottom: '-2px', marginRight: '0.3rem' }} />
                  Violence Blur
                </p>
                <Slider max={26} step={1} value={blur}  defaultValue={blur} onChange={(value)=>saveSet(setBlur, 'blur', value)}/>
              </div>
              <div className="control-container">
                <p>
                  <AiFillSound style={{ marginBottom: '-2px', marginRight: '0.3rem' }} />
                  Shelling Volume
                </p>

                <Slider max={1.0} step={0.001} value={volume} defaultValue={volume} onChange={(value)=>saveSet(setVolume, 'volume', value)} />
              </div>
            </div>
            <HeroButton
              type="red"
              content="ACKNOWLEDGE"
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

export default ModalEye;

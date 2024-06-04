"use client"
import { init, saveSet } from "@/utils";
import React, { FC, useCallback, useRef, useEffect, useState } from 'react';
import Image from "next/image";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import HeroButton from "../Simple/HeroButton";
import Slider from "rc-slider";

import { FaEye } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import 'rc-slider/assets/index.css';
import "./Eye.scss";

interface EyeProps {
    isBouncing: boolean;
    setIsBouncing: CallableFunction;
    blur: number;
    setBlur: CallableFunction;
}

const Eye: React.FC<EyeProps> = ({ isBouncing, setIsBouncing, blur, setBlur }: EyeProps) => {
    const [showEyeButton, setShowEyeButton] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { load, setVolume, volume } = useGlobalAudioPlayer();

    const modalRef = useRef(null);

    useEffect(() => {
        load("./shells.mp3", {
            autoplay: true,
            initialVolume: init("volume", 0.001),
        });
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (isBouncing) {
                setShowModal(true);
                saveSet(setIsBouncing, "isBouncing", false);
            }
        }, 10000);

        return () => {
            // Clear the timeout if the component is unmounted before 7 seconds
            clearTimeout(timeoutId);
        };
    }, [isBouncing]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage =
                (window.scrollY /
                    (document.documentElement.scrollHeight -
                        window.innerHeight)) *
                100;

            // Set showEyeButton to true if scrolled through 0.5% of the page
            setShowEyeButton(scrollPercentage >= 0.5);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    const handleCloseModal = useCallback((event: MouseEvent) => {
        if (modalRef.current && !(modalRef.current as HTMLDivElement).contains(event.target as Node)) {
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
            <div
                className={`eye-button ${isBouncing ? "bounce" : ""}`}
                data-show={showEyeButton}
                onClick={() => {
                    setShowModal(!showModal);
                    saveSet(setIsBouncing, "isBouncing", false);
                }}
            >
                <Image src="/eye.png"
                    alt="eye"
                    width={50}
                    height={30}
                />
            </div>
            <div className="modal-eye" data-show={showModal}>
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
                            <Slider max={26} step={1} value={blur} defaultValue={blur} onChange={(value) => saveSet(setBlur, 'blur', value)} />
                        </div>
                        <div className="control-container">
                            <p>
                                <AiFillSound style={{ marginBottom: '-2px', marginRight: '0.3rem' }} />
                                Shelling Volume
                            </p>

                            <Slider max={1.0} step={0.001} value={volume} defaultValue={volume} onChange={(value) => saveSet(setVolume, 'volume', value)} />
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
            </div>

        </>
    )
}

export default Eye;
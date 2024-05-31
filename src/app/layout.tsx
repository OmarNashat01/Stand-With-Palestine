"use client";
import type { Metadata } from "next";
import "../index.scss";


import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ModalEye from "@/components/NavigationBar/ModalEye";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import Footer from "@/components/Footer/Footer";
import { init, saveSet } from "@/utils";
import { usePathname } from "next/navigation";


// export const metadata: Metadata = {
//   title: "Stand With Palestine!",
//   description: "Learn more about the latest news, the status of Gaza, Israeli war crimes, and misinformation about the ongoing massacre in Gaza. Support Palestine!",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [showModal, setShowModal] = useState(false); // eye modal
    const { load } = useGlobalAudioPlayer();
    const [isBouncing, setIsBouncing] = useState(true);
    const [showMobNav, setShowMobNav] = useState(false);
    const [showEyeButton, setShowEyeButton] = useState(false);
    const { setVolume, volume } = useGlobalAudioPlayer();
    const [blur, setBlur] = useState(0);

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
        if (typeof window === "undefined") return;
        setIsBouncing(init("isBouncing", true));
        setBlur(init("blur", 0));
        const storedVolume = window.localStorage.getItem("volume");
        if (storedVolume) {
            setVolume(parseFloat(storedVolume));
        }
    }, [setVolume]);

    useEffect(() => {
        load("./shells.mp3", {
            autoplay: true,
            initialVolume: init("volume", 0.001),
        });
    }, []);

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
    return (
        <html lang="en">
            <body>
                <NavigationBar
                    showMobNav={showMobNav}
                    setShowMobNav={setShowMobNav}
                />
                {showEyeButton && (
                    <div
                        className={`eye-button ${isBouncing ? "bounce" : ""}`}
                        onClick={() => {
                            setShowModal(!showModal);
                            saveSet(setIsBouncing, "isBouncing", false);
                        }}
                    >
                        <img src="\eye.png" />
                    </div>
                )}
                <ModalEye
                    showModal={showModal}
                    setShowModal={setShowModal}
                    volume={volume}
                    setVolume={setVolume}
                    blur={blur}
                    setBlur={setBlur}
                />
                {children}
                <Footer
                    title="Stand with Palestine"
                    subTitle="A Joint Collaborative Effort by a Group of Graduates from Egypt"
                    boldSubTitle="Share on Social Networks"
                />
                <ScrollToTop />
            </body>
        </html>
    );
}
function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

"use client";
import "../index.scss";


import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import ModalEye from "@/components/NavigationBar/ModalEye";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import Footer from "@/components/Footer/Footer";
import { init, saveSet } from "@/utils";
import { usePathname } from "next/navigation";
import Eye from "@/components/Global/Eye";


// export const metadata: Metadata = {
//   title: "Stand With Palestine!",
//   description: "Learn more about the latest news, the status of Gaza, Israeli war crimes, and misinformation about the ongoing massacre in Gaza. Support Palestine!",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isBouncing, setIsBouncing] = useState(true);
    const [showMobNav, setShowMobNav] = useState(false);
    const { setVolume } = useGlobalAudioPlayer();
    const [blur, setBlur] = useState(0);


    useEffect(() => {
        if (typeof window === "undefined") return;
        setIsBouncing(init("isBouncing", true));
        setBlur(init("blur", 0));
        const storedVolume = window.localStorage.getItem("volume");
        if (storedVolume) {
            setVolume(parseFloat(storedVolume));
        }
    }, [setVolume]);

    return (
        <html lang="en">
            <body>
                <NavigationBar
                    showMobNav={showMobNav}
                    setShowMobNav={setShowMobNav}
                />
                <Eye
                    blur={blur}
                    setBlur={setBlur}
                    isBouncing={isBouncing}
                    setIsBouncing={setIsBouncing}
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

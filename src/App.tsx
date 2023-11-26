import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./Pages/HomePage/HomePage";
import BlogsListPage from "./Pages/BlogsPage/BlogsListPage";
import BlogPage from "./Pages/BlogsPage/BlogPage";
import CrimesPage from "./Pages/CrimesPage/CrimesPage";
import LiesPage from "./Pages/LiesPage/LiesPage";
import StatusPage from "./Pages/StatusPage/StatusPage";
import SupportPage from "./Pages/SupportPage/SupportPage";
import HistoricTimelinePage from "./Pages/TimelinePage/HistoricTimelinePage";
import RecentTimelinePage from "./Pages/TimelinePage/RecentTimelinePage";
import ModalEye from "./components/NavigationBar/ModalEye";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import NotFoundPage from "./components/NotFound/NotFound";

function App() {
  const [showModal, setShowModal] = useState(false); // eye modal
  const { load } = useGlobalAudioPlayer();
  const [isBouncing, setIsBouncing] = useState(true);
  const [showMobNav, setShowMobNav] = useState(false);
  const [showEyeButton, setShowEyeButton] = useState(false);

  const { setVolume, volume } = useGlobalAudioPlayer();
  useEffect(() => {
    load("./shells.mp3", {
      autoplay: true,
      initialVolume: 0.0,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
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
    <>
      <NavigationBar showMobNav={showMobNav} setShowMobNav={setShowMobNav} />
      {showEyeButton && (
        <div
          className={`eye-button ${isBouncing ? "bounce" : ""}`}
          onClick={() => {
            setShowModal(!showModal);
            setIsBouncing(false);
          }}
        >
          <img src="./eye.png" />
        </div>
      )}
      <ModalEye
        showModal={showModal}
        setShowModal={setShowModal}
        volume={volume}
        setVolume={setVolume}
      />
      {!showMobNav && (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsListPage />} />
            <Route path="/blogs/:id" element={<BlogPage />} />
            <Route path="/crimes" element={<CrimesPage />} />
            <Route path="/lies" element={<LiesPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route
              path="/timeline/historic"
              element={<HistoricTimelinePage />}
            />
            <Route path="/timeline/recent" element={<RecentTimelinePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer
            title="Stand with Palestine"
            subTitle="A Joint Collaborative Effort by a Group of Students from Egypt"
            boldSubTitle="Share on Social Networks"
          />
        </>
      )}

      <ScrollToTop />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;

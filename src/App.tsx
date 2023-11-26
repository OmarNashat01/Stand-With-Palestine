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

function App() {
  const [showModal, setShowModal] = useState(false);
  const { load } = useGlobalAudioPlayer();
  const [isBouncing, setIsBouncing] = useState(true);

  const { setVolume, volume } = useGlobalAudioPlayer();
  useEffect(() => {
    load("./shells.mp3", {
      autoplay: true,
      initialVolume: 0.0,
    });
  }, []);
  return (
    <>
      <NavigationBar />
      <div
        className={`eye-button ${isBouncing ? "bounce" : ""}`}
        onClick={() => {
          setShowModal(!showModal);
          setIsBouncing(false);
        }}
      >
        <img src="./eye.png" />
      </div>
      <ModalEye
        showModal={showModal}
        setShowModal={setShowModal}
        volume={volume}
        setVolume={setVolume}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsListPage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/crimes" element={<CrimesPage />} />
        <Route path="/lies" element={<LiesPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/timeline/historic" element={<HistoricTimelinePage />} />
        <Route path="/timeline/recent" element={<RecentTimelinePage />} />
      </Routes>
      <Footer 
        title = "Stand with Palestine"
        subTitle = "A Joint Collaborative Effort by a Group of Students from Egypt"
        boldSubTitle = "Share on Social Networks"
      />
    </>
  );
}

export default App;

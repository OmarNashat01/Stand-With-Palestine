import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./Pages/HomePage/HomePage";
import BlogsListPage from "./Pages/BlogsPage/BlogsListPage";
import CrimesPage from "./Pages/CrimesPage/CrimesPage";
import LiesPage from "./Pages/LiesPage/LiesPage";
import StatusPage from "./Pages/StatusPage/StatusPage";
import SupportPage from "./Pages/SupportPage/SupportPage";
import HistoricTimelinePage from "./Pages/TimelinePage/HistoricTimelinePage";
import RecentTimelinePage from "./Pages/TimelinePage/RecentTimelinePage";
import Modal from "./components/Simple/Modal"
import { useGlobalAudioPlayer } from 'react-use-audio-player';


function App() {
  const [showModal, setShowModal] = useState(false);
  const { load } = useGlobalAudioPlayer();

 
  const { setVolume, volume } = useGlobalAudioPlayer()
  useEffect (()=>{
    load('./shells.mp3', {
      autoplay: true,
      initialVolume: 0.02
    });
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="options-button" onClick={()=>setShowModal(!showModal)}>
        <img src="./eye.png"/>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} volume={volume} setVolume={setVolume}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsListPage />} />
        <Route path="/crimes" element={<CrimesPage />} />
        <Route path="/lies" element={<LiesPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/timeline/historic" element={<HistoricTimelinePage />} />
        <Route path="/timeline/recent" element={<RecentTimelinePage />} />
      </Routes>
    </>
  );
}

export default App;

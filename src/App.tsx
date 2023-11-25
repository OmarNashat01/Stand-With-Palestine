import React from "react";
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

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <NavigationBar />
    
      <div className="options-button" onClick={()=>setShowModal(!showModal)}>
        <img src="./eye.png"/>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
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

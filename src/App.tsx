import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./Pages/HomePage/HomePage";
import BlogsListPage from "./Pages/BlogsPage/BlogsListPage";
import CrimesPage from "./Pages/CrimesPage/CrimesPage";
import LiesPage from "./Pages/LiesPage/LiesPage";
import StatusPage from "./Pages/StatusPage/StatusPage";
import SupportPage from "./Pages/SupportPage/SupportPage";
// import HistoricTimelinePage from "./Pages/TimelinePage/HistoricTimelinePage";
import RecentTimelinePage from "./Pages/TimelinePage/RecentTimelinePage";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsListPage />} />
        <Route path="/crimes" element={<CrimesPage />} />
        <Route path="/lies" element={<LiesPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/support" element={<SupportPage />} />
        {/* <Route path="/timeline/historic" element={<HistoricTimelinePage/>} /> */}
        <Route path="/timeline/recent" element={<RecentTimelinePage />} />
      </Routes>
    </>
  );
}

export default App;

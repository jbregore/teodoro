import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MasterList from "./components/MasterList/MasterList";
import Forms from "./components/Forms/Forms";
import Accounts from "./components/Accounts/Accounts";
import About from "./components/About/About";
import { PDFViewer } from '@react-pdf/renderer';
import SF1PDf from "./components/Forms/SF-1/SF1PDF";
import SF3PDf from "./components/Forms/SF-3/SF3PDF";
import SF9PDf from "./components/Forms/SF-9/SF9PDF";
import RankingPDF from "./components/Forms/SF-9/RankingPDF";
import QuarterlyReport from "./components/Forms/SF-9/QuarterlyReport";
import SF10PDf from "./components/Forms/SF-10/SF10PDF";
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  

  return (
    <>
      {/* <PDFViewer /> */}

      <BrowserRouter>
        <Routes>

          {/* <Route
            path="*"
            element={<Navigate to="/" replace />}
          /> */}
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Home />} />
            <Route path="masterlist" element={<MasterList />} />
            <Route path="masterlist/students" element={<MasterList />} />
            <Route path="forms" element={<Forms />} />
            <Route path="forms/students" element={<Forms />} />
            <Route path="account" element={<Accounts />} />
            <Route path="account/faculty" element={<Accounts />} />
            <Route path="sf1pdf" element={<SF1PDf />} />
            <Route path="sf3pdf" element={<SF3PDf />} />
            <Route path="sf9pdf" element={<SF9PDf />} />
            <Route path="rankingpdf" element={<RankingPDF />} />
            <Route path="about" element={<About />} />
            <Route path="quarterlyreport" element={<QuarterlyReport />} />
            <Route path="sf10pdf" element={<SF10PDf />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

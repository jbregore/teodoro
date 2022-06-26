import React, { useState, useEffect } from "react";
import { PDFViewer, Document } from "@react-pdf/renderer";
import FormContent1 from "./components/FormContent1";
import FormContent2 from "./components/FormContent2";
import RankingHeader from "./components/RankingHeader";
import QuarterlyBody from "./components/QuarterlyBody";

import { useDispatch, useSelector } from "react-redux";
// import { setStudentSF9Info } from "../../../actions/grades";
// import { getCurrentHead } from "../../../actions/faculty";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RankingPDF = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const { studentQuarterly } = useSelector((state) => state.grades);

  
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
            <QuarterlyBody data={studentQuarterly ? studentQuarterly : null}/>
        </Document>
      </PDFViewer>
    </>
  );
};

export default RankingPDF;

import React, { useState, useEffect } from "react";
import { PDFViewer, Document } from "@react-pdf/renderer";
import FormContent1 from "./components/FormContent1";
import FormContent2 from "./components/FormContent2";
import RankingHeader from "./components/RankingHeader";

import { useDispatch, useSelector } from "react-redux";
// import { setStudentSF9Info } from "../../../actions/grades";
// import { getCurrentHead } from "../../../actions/faculty";

import { useLocation } from "react-router-dom";
import { getStudentRanking } from "../../../actions/grades";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RankingPDF = () => {
  const dispatch = useDispatch();
  const query = useQuery();

  const studentLRN = query.get("studentLRN");
  const { headInfo } = useSelector((state) => state.faculty);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { studentRanking, quarter } = useSelector((state) => state.grades);
  const [studentRank, setStudentRank] = useState([]);

  
  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <RankingHeader data={studentRanking ? studentRanking : null} 
          quarter={quarter ? quarter : "1"}/>
          {/* <FormContent1 data={grades ? grades : null}/>

          <FormContent2 data={studentSF9? studentSF9[0] : null}
          headInfo={headInfo ? headInfo : null}/> */}
        </Document>
      </PDFViewer>
    </>
  );
};

export default RankingPDF;

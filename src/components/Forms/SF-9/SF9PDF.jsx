import React, {useState, useEffect} from "react";
import { PDFViewer, Document } from "@react-pdf/renderer";
import FormContent1 from "./components/FormContent1";
import FormContent2 from "./components/FormContent2";
import { useDispatch, useSelector } from "react-redux";
import { setStudentSF9Info} from "../../../actions/grades";
import { getCurrentHead } from "../../../actions/faculty";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SF9PDF = () => {
  const dispatch = useDispatch();
  const query = useQuery();

  const studentLRN = query.get("studentLRN");
  const { grades, studentSF9 } = useSelector((state) => state.grades);
  const { headInfo } = useSelector((state) => state.faculty);
  const profile = JSON.parse(localStorage.getItem("profile"));
  
  // console.log(grades);
  // console.log(studentSF9);
  // console.log(headInfo);

  useEffect(() => {
    dispatch(setStudentSF9Info(studentLRN));
    dispatch(getCurrentHead(profile.facultySchoolYear));
  }, [grades])


  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <FormContent1 data={grades ? grades : null}/>

          <FormContent2 data={studentSF9? studentSF9[0] : null}
          headInfo={headInfo ? headInfo : null}/>
        </Document>
      </PDFViewer>
    </>
  );
};

export default SF9PDF;

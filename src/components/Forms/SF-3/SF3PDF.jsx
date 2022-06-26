import React, { useEffect } from "react";
import { PDFViewer, Document } from "@react-pdf/renderer";
import FormHeader from "./components/FormHeader";
import FormHeader2 from "./components/FormHeader2";
import { useDispatch, useSelector } from "react-redux";
// import FormBody from "./components/FormBody";

import { getBookHeader } from "../../../actions/book";

const SF3PDF = () => {
  // const dispatch = useDispatch();
  // const profile = JSON.parse(localStorage.getItem("profile"));
  const { sf3StudentsHeader, books } = useSelector((state) => state.book);
  // useEffect(() => {
  //   dispatch(getBookHeader(profile.facultyGrade));
  // },[])
  // console.log(sf3StudentsHeader);
  // console.log(books);

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <FormHeader data={sf3StudentsHeader ? sf3StudentsHeader[0] : null}
          books={books ? books : null}/>
          {/* <FormHeader2 /> */}
        </Document>
      </PDFViewer>
    </>
  );
};

export default SF3PDF;

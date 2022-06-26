import React, { useEffect } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import FormHeader from "./components/FormHeader";

// import FormBody from "./components/FormBody";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getSF1Students } from "../../../actions/students";
import { getCurrentHead } from "../../../actions/faculty";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SF1PDF = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const { students, sectionAdviser, headInfo } = useSelector((state) => state.students);
  // const { headInfo } = useSelector((state) => state.faculty);
  // const { sectionAdviser } = useSelector((state) => state.faculty);

  const schoolYear = query.get("schoolYear");
  const section = query.get("section");
  const grade = query.get("grade");
  const adviser = query.get("adviser");
  // const profile = JSON.parse(localStorage.getItem("profile"));
  // console.log(headInfo);

  useEffect(() => {
    const formData = {
      studentSchoolYear: schoolYear,
      studentGrade: grade,
      studentSection: section,
    };

    dispatch(getSF1Students(formData));
    // dispatch(getCurrentHead(profile.facultySchoolYear));
    // console.log(page);
  }, [students?.length]);

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <FormHeader schoolYear={schoolYear} grade={grade} 
        section={section} students={students} adviser={sectionAdviser}
        headInfo={headInfo}/>
      </PDFViewer>
    </>
  );
};

export default SF1PDF;

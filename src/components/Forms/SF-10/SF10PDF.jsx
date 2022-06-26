import React, { useEffect, useState } from "react";
import { PDFViewer, Document } from "@react-pdf/renderer";
import FormHeader from "./components/FormHeader";
import { useSelector } from "react-redux";
// import FormBody from "./components/FormBody";

const SF1PDF = () => {
  const { studentSF10 } = useSelector((state) => state.students);
  
  const [grade7Data, setGrade7Data] = useState([]);
  const [grade8Data, setGrade8Data] = useState([]);
  const [grade9Data, setGrade9Data] = useState([]);
  const [grade10Data, setGrade10Data] = useState([]);

  useEffect(() => {
    let grade7 = [];
    let grade8 = [];
    let grade9 = [];
    let grade10 = [];
    for(let i = 0; i < studentSF10.length; i++){
      if(studentSF10[i].studentGrade === "7"){
        grade7.push(studentSF10[i]);
      }else if(studentSF10[i].studentGrade === "8"){
        grade8.push(studentSF10[i]);
      }
      else if(studentSF10[i].studentGrade === "9"){
        grade9.push(studentSF10[i]);
      }
      else if(studentSF10[i].studentGrade === "10"){
        grade10.push(studentSF10[i]);
      }
    }
    // grade7.push(studentSF10[0]);
    // grade7.push(studentSF10[1]);
    // grade7.push(studentSF10[2]);
    // grade7.push(studentSF10[3]);
    setGrade7Data(grade7);

    // grade8.push(studentSF10[4]);
    // grade8.push(studentSF10[5]);
    // grade8.push(studentSF10[6]);
    // grade8.push(studentSF10[7]);
    setGrade8Data(grade8);

    // let grade9 = [];
    // grade9.push(studentSF10[8]);
    // grade9.push(studentSF10[9]);
    // grade9.push(studentSF10[10]);
    // grade9.push(studentSF10[11]);
    setGrade9Data(grade9);

    // let grade10 = [];
    // grade10.push(studentSF10[12]);
    // grade10.push(studentSF10[13]);
    // grade10.push(studentSF10[14]);
    // grade10.push(studentSF10[15]);
    setGrade10Data(grade10);
  }, [studentSF10]);

  // console.log(studentSF10);


  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <FormHeader data={studentSF10 ? studentSF10 : null} 
        grade7Data={grade7Data}
        grade8Data={grade8Data}
        grade9Data={grade9Data}
        grade10Data={grade10Data}
        />
      </PDFViewer>
    </>
  );
};

export default SF1PDF;

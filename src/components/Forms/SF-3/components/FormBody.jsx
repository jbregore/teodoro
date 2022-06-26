import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import roboto from "../fonts/roboto.ttf";
import arialItalic from "../fonts/arial-italic.ttf";
import robotoBold from "../fonts/roboto-bold.ttf";
import FormFooter from "./FormFooter";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },

  headText: {
    fontSize: 7.5,
    fontFamily: "Roboto-Flex",
  },

  headTextt: {
    fontSize: 6.5,
    fontFamily: "Roboto-Flex",
  },

  subjectAreaText: {
    fontSize: 7.5,
    fontFamily: "Arial-Italic",
  },

  headText2: {
    fontSize: 7.5,
    fontFamily: "Roboto-Flex",
  },

  headText3: {
    fontSize: 7.5,
    fontFamily: "Roboto Bold",
  },

  tableStyle: {
    borderRight: "1px solid #555",
    borderTop: "1px solid #555",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1px solid #555",
  },

  head1: {
    width: 35,
    borderLeft: "1px solid #555",
  },

  head2: {
    width: 150,
  },

  head3: {
    // width: 8ss0,
    flex: 1,
  },

  head4: {
    width: 60,
  },

  address1: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderRight: "1px solid #555",
    width: 50,
  },

  address2: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderRight: "1px solid #555",
    width: 60,
  },

  address3: {
    justifyContent: "center",
    textAlign: "center",
    borderRight: "1px solid #555",
    width: 50,
  },

  address4: {
    flex: 1,
    justifyContent: "center",
  },

  parents1: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderRight: "1px solid #555",
    flex: 1,
  },

  parents2: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
  },

  borderBody: {
    borderRight: "1px solid #555",
    borderBottom: "1px solid #555",
  },

  flexCenter: {
    textAlign: "center",
    justifyContent: "center",
  },
});

const SF3PDF = ({ data, books }) => {
  Font.register({
    family: "Roboto-Flex",
    format: "truetype",
    src: roboto,
  });

  Font.register({
    family: "Arial-Italic",
    format: "truetype",
    src: arialItalic,
  });

  Font.register({
    family: "Roboto Bold",
    format: "truetype",
    src: robotoBold,
  });

  const profile = JSON.parse(localStorage.getItem("profile"));

  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
  ];

  const subjects = [1, 2, 3, 4, 5, 6, 7, 8];

  const subjectTitle = [
    {
      subjectArea: `Science ${profile.facultyGrade}`,
      title: data ? data.scienceTitle : " ",
    },
    {
      subjectArea: `Math ${profile.facultyGrade}`,
      title: data ? data.mathTitle : " ",
    },
    {
      subjectArea: `AP ${profile.facultyGrade}`,
      title: data ? data.apTitle : " ",
    },
    {
      subjectArea: `EsP ${profile.facultyGrade}`,
      title: data ? data.espTitle : " ",
    },
    {
      subjectArea: `MAPEH ${profile.facultyGrade}`,
      title: data ? data.mapehTitle : " ",
    },
    {
      subjectArea: `English ${profile.facultyGrade}`,
      title: data ? data.englishTitle : " ",
    },
    {
      subjectArea: `Filipino ${profile.facultyGrade}`,
      title: data ? data.filipinoTitle : " ",
    },
    {
      subjectArea: `TLE ${profile.facultyGrade}`,
      title: data ? data.tleTitle : " ",
    },
  ];

  const [totalMale, setTotalMale] = useState(0);
  const [totalFemale, setTotalFemale] = useState(0);
  const [combined, setCombined] = useState(0);
  const [male, setMale] = useState([]);
  const [female, setFemale] = useState([]);

  useEffect(() => {
    //async
    let male = 0;
    let female = 0;
    let maleStudents = [];
    let femaleStudents = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].studentGender === "male") {
        male++;
        maleStudents.push(books[i]);
      } else {
        female++;
        femaleStudents.push(books[i]);
      }
    }
    setTotalMale(male);
    setTotalFemale(female);
    setCombined(male + female);
    setMale(maleStudents);
    setFemale(femaleStudents);
  }, [books]);

  return (
    <>
      {/* table title */}
      <View style={styles.container}>
        {/* number */}
        <View style={{ ...styles.tableStyle, ...styles.head1 }}>
          <Text style={styles.headText}>NO.</Text>
        </View>

        {/* Learners name */}
        <View style={{ ...styles.tableStyle, ...styles.head2 }}>
          <Text style={styles.headText}>LEARNER'S NAME</Text>
          <Text style={styles.headText}>
            (Last Name, First Name, Middle Name)
          </Text>
        </View>

        {subjectTitle.map((item, index) => (
          <View style={{ ...styles.tableStyle, ...styles.head3 }}>
            <View>
              <View
                style={{ paddingBottom: 5, borderBottom: "1px solid #555" }}
              >
                <Text style={{ ...styles.subjectAreaText }}>
                  {item.subjectArea}
                </Text>
                <Text style={{ ...styles.headTextt, marginTop: 3 }}>
                  {item.title}
                </Text>
              </View>
              <View
                style={{
                  paddingTop: 3,
                  paddingBottom: 3,
                  borderBottom: "1px solid #555",
                }}
              >
                <Text style={{ ...styles.headText }}>Date</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ flex: 1, borderRight: "1px solid #555", padding: 3 }}
                >
                  <Text style={{ ...styles.headText }}>Issued</Text>
                </View>
                <View style={{ flex: 1, padding: 3 }}>
                  <Text style={{ ...styles.headText }}>Returned</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* remarks */}
        <View style={{ ...styles.tableStyle, ...styles.head4 }}>
          <Text style={styles.headText}>REMARKS/ACTION TAKEN</Text>
          <Text style={styles.headText}>
            (Please refet to the legend on last page)
          </Text>
        </View>
      </View>

      {male?.map((item, index) => (
        <View style={{ ...styles.container, height: 20 }}>
          <View
            style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
          >
            <Text style={styles.headText2}>{index + 1}</Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head2,
              borderTop: "none",
              textAlign: "left",
              paddingLeft: 3,
            }}
          >
            <Text style={styles.headText2}>
              {`${item.studentLName.toUpperCase()}, ${item.studentFName.toUpperCase()}, ${item.studentMName.toUpperCase()} ${
                item.studentSuffix
              }`}
            </Text>
          </View>

          {/* science  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.scienceIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.scienceReturned}
              </Text>
            </View>
          </View>

          {/* math  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mathIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mathReturned}
              </Text>
            </View>
          </View>

          {/* ap  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.apIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.apReturned}
              </Text>
            </View>
          </View>

          {/* esp  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.espIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.espReturned}
              </Text>
            </View>
          </View>

          {/* mapeh  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mapehIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mapehReturned}
              </Text>
            </View>
          </View>

          {/* english  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.englishIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.englishReturned}
              </Text>
            </View>
          </View>

          {/* filipino  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.filipinoIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.filipinoReturned}
              </Text>
            </View>
          </View>

          {/* tle */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.tleIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.tleReturned}
              </Text>
            </View>
          </View>

          {/* remarks */}
          <View
            style={{ ...styles.tableStyle, ...styles.head4, borderTop: "none" }}
          >
            <Text style={{ ...styles.headText2 }}>
              {item.scienceReturned === "FM" ||
              item.mathReturned === "FM" ||
              item.apReturned === "FM" ||
              item.espReturned === "FM" ||
              item.mapehReturned === "FM" ||
              item.englishReturned === "FM" ||
              item.filipinoReturned === "FM" ||
              item.tleReturned === "FM"
                ? "LLTR"
                : item.scienceReturned === "TDO" ||
                  item.mathReturned === "TDO" ||
                  item.apReturned === "TDO" ||
                  item.espReturned === "TDO" ||
                  item.mapehReturned === "TDO" ||
                  item.englishReturned === "TDO" ||
                  item.filipinoReturned === "TDO" ||
                  item.tleReturned === "TDO"
                ? "TLTR"
                : item.scienceReturned === "NEG" ||
                  item.mathReturned === "NEG" ||
                  item.apReturned === "NEG" ||
                  item.espReturned === "NEG" ||
                  item.mapehReturned === "NEG" ||
                  item.englishReturned === "NEG" ||
                  item.filipinoReturned === "NEG" ||
                  item.tleReturned === "NEG"
                ? "PTL"
                : " "}
            </Text>
          </View>
        </View>
      ))}

      <View style={{ ...styles.container, height: 20 }}>
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
        >
          <Text style={styles.headText3}>{totalMale}</Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 3,
          }}
        >
          <Text style={styles.headText3}> {`<= TOTAL FOR MALE | TOTAL COPIES`}</Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{ ...styles.tableStyle, ...styles.head4, borderTop: "none" }}
        >
          <Text style={{ ...styles.headText2 }}></Text>
        </View>
      </View>

      {female?.map((item, index) => (
        <View style={{ ...styles.container, height: 20 }}>
          <View
            style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
          >
            <Text style={styles.headText2}>{index + 1}</Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head2,
              borderTop: "none",
              textAlign: "left",
              paddingLeft: 3,
            }}
          >
            <Text style={styles.headText2}>
              {`${item.studentLName.toUpperCase()}, ${item.studentFName.toUpperCase()}, ${item.studentMName.toUpperCase()} ${
                item.studentSuffix
              }`}
            </Text>
          </View>

          {/* science  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.scienceIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.scienceReturned}
              </Text>
            </View>
          </View>

          {/* math  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mathIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mathReturned}
              </Text>
            </View>
          </View>

          {/* ap  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.apIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.apReturned}
              </Text>
            </View>
          </View>

          {/* esp  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.espIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.espReturned}
              </Text>
            </View>
          </View>

          {/* mapeh  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mapehIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.mapehReturned}
              </Text>
            </View>
          </View>

          {/* english  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.englishIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.englishReturned}
              </Text>
            </View>
          </View>

          {/* filipino  */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.filipinoIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.filipinoReturned}
              </Text>
            </View>
          </View>

          {/* tle */}
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              borderTop: "none",
              textAlign: "left",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid #555",
                paddingTop: 3,
                paddingBottom: 1,
              }}
            >
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.tleIssued}
              </Text>
            </View>
            <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
              <Text style={{ ...styles.headText, paddingLeft: 2 }}>
                {item.tleReturned}
              </Text>
            </View>
          </View>

          {/* remarks */}
          <View
            style={{ ...styles.tableStyle, ...styles.head4, borderTop: "none" }}
          >
            <Text style={{ ...styles.headText2 }}>
              {item.scienceReturned === "FM" ||
              item.mathReturned === "FM" ||
              item.apReturned === "FM" ||
              item.espReturned === "FM" ||
              item.mapehReturned === "FM" ||
              item.englishReturned === "FM" ||
              item.filipinoReturned === "FM" ||
              item.tleReturned === "FM"
                ? "LLTR"
                : item.scienceReturned === "TDO" ||
                  item.mathReturned === "TDO" ||
                  item.apReturned === "TDO" ||
                  item.espReturned === "TDO" ||
                  item.mapehReturned === "TDO" ||
                  item.englishReturned === "TDO" ||
                  item.filipinoReturned === "TDO" ||
                  item.tleReturned === "TDO"
                ? "TLTR"
                : item.scienceReturned === "NEG" ||
                  item.mathReturned === "NEG" ||
                  item.apReturned === "NEG" ||
                  item.espReturned === "NEG" ||
                  item.mapehReturned === "NEG" ||
                  item.englishReturned === "NEG" ||
                  item.filipinoReturned === "NEG" ||
                  item.tleReturned === "NEG"
                ? "PTL"
                : " "}
            </Text>
          </View>
        </View>
      ))}

      <View style={{ ...styles.container, height: 20 }}>
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
        >
          <Text style={styles.headText3}>{totalFemale}</Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 3,
          }}
        >
          <Text style={styles.headText3}> {`<= TOTAL FOR FEMALE | TOTAL COPIES`}</Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{ ...styles.tableStyle, ...styles.head4, borderTop: "none" }}
        >
          <Text style={{ ...styles.headText2 }}></Text>
        </View>
      </View>

      <View style={{ ...styles.container, height: 20 }}>
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
        >
          <Text style={styles.headText3}>{combined}</Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 3,
          }}
        >
          <Text style={styles.headText3}> {`<= TOTAL LEARNERS | TOTAL COPIES`}</Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            borderTop: "none",
            textAlign: "left",
          }}
        >
          <View
            style={{
              flex: 1,
              borderRight: "1px solid #555",
              paddingTop: 3,
              paddingBottom: 1,
            }}
          >
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 1 }}>
            <Text style={{ ...styles.headText, paddingLeft: 2 }}></Text>
          </View>
        </View>

        <View
          style={{ ...styles.tableStyle, ...styles.head4, borderTop: "none" }}
        >
          <Text style={{ ...styles.headText2 }}></Text>
        </View>
      </View>

      <FormFooter />


    </>
  );
};

export default SF3PDF;

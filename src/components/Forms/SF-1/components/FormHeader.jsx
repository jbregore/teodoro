import React, {useEffect, useState} from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
// import "./SF1.css";
import arial from "../fonts/arial.ttf";
import arialBold from "../fonts/arial-bold.ttf";
import arialItalic from "../fonts/arial-italic.ttf";
import roboto from "../fonts/roboto.ttf";
import headLogo from "../logo.jpg";
import FormBody from "./FormBody";
import FormFooter from "./FormFooter";
import VaccineBody from "./VaccineBody";

// import { useDispatch, useSelector } from "react-redux";
// import { getSF1Students } from "../../../../actions/students";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingRight: 30,
    paddingLeft: 30,
  },
  section: {
    margin: "10px 10px 0 10px",
    padding: "10px 10px 5px 10px",
    textAlign: "center",
  },
  title: {
    fontSize: 9,
    fontFamily: "Arial-Bold",
  },
  titleItalic: {
    marginTop: 1,
    fontSize: 5,
    fontFamily: "Arial-Italic",
  },

  // header
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },

  head1: {
    flex: 0.4,
    // backgroundColor: "green",
    marginTop: -16,
  },

  head2: {
    flex: 0.9,
    // backgroundColor: "gray",
    height: 60,
  },

  head3: {
    flex: 0.7,
    // backgroundColor: "yellow",
    height: 60,
  },

  head4: {
    flex: 1,
    // backgroundColor: "pink",
    height: 60,
  },

  headText: {
    fontSize: 11,
    fontFamily: "Roboto-Flex",
  },

  containerr: {
    width: 50,
    paddingLeft: 3,
    height: 25,
    justifyContent: "center",
    // backgroundColor: "#fff",
    borderWidth: 1,
  },
});

const SF1PDF = ({ schoolYear, grade, section, students, adviser, headInfo }) => {
  Font.register({
    family: "Arial",
    format: "truetype",
    src: arial,
  });

  Font.register({
    family: "Arial-Bold",
    format: "truetype",
    src: arialBold,
  });

  Font.register({
    family: "Arial-Italic",
    format: "truetype",
    src: arialItalic,
  });

  Font.register({
    family: "Roboto-Flex",
    format: "truetype",
    src: roboto,
  });

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const formData = {
  //     schoolYear: schoolYear,
  //     grade: grade,
  //     section: section,
  //   };

  //   dispatch(getSF1Students(formData));
  //   // console.log(page);
  // }, []);

  return (
    <Document>
      <Page size="legal" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            School Form 1 (SF 1) School Register{" "}
          </Text>
          <Text style={styles.titleItalic}>
            (This replaces Form 1, Master List & STS Form 2-Family Background
            and Profile)
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.head1}>
            <Image src={headLogo} style={{ width: 75, marginLeft: 10 }} />
          </View>

          <View style={styles.head2}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 7,
                marginLeft: 14,
              }}
            >
              <View
                style={{
                  ...styles.headText,
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ flexGrow: 0 }}>School ID </Text>
                <View style={{ ...styles.containerr }}>
                  <View style={styles.inner}>
                    <Text>306717</Text>
                  </View>
                </View>
              </View>
              <Text style={{ ...styles.headText, flex: 1, marginTop: 4 }}>
                Region III
              </Text>
            </View>

            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ flexGrow: 0 }}>School Name </Text>
              <View style={{ ...styles.containerr, width: "100%", flex: 1 }}>
                <View>
                  <Text>Teodoro Evangelista Memorial High School</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.head3}>
            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ flexGrow: 0, marginLeft: 15 }}>Division </Text>
              <View style={{ ...styles.containerr, width: "100%", flex: 1 }}>
                <View>
                  <Text>Bulacan</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ flexGrow: 0 }}>School Year </Text>
              <View style={{ ...styles.containerr, width: 100 }}>
                <View>
                  <Text>{schoolYear}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.head4}>
            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 23,
              }}
            >
              <Text style={{ flexGrow: 0, marginLeft: 15 }}>District </Text>
              <View style={{ ...styles.containerr, width: "50%" }}>
                <View>
                  <Text>II</Text>
                </View>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  ...styles.headText,
                  flex: 0.5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ flexGrow: 0, marginLeft: 15 }}>
                  Grade Level{" "}
                </Text>
                <View style={{ ...styles.containerr, width: 30 }}>
                  <View>
                    <Text>{grade}</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  ...styles.headText,
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ flexGrow: 0, marginLeft: 15 }}>Section </Text>
                <View style={{ ...styles.containerr, width: "60%" }}>
                  <View>
                    <Text>{section}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <FormBody students={students} adviser={adviser} headInfo={headInfo}/>
        {/* <FormFooter /> */}
      </Page>

      <Page size="legal" orientation="landscape" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            School Form 1 (SF 1) School Register{" "}
          </Text>
          <Text style={styles.titleItalic}>
            (This replaces Form 1, Master List & STS Form 2-Family Background
            and Profile)
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.head1}>
            <Image src={headLogo} style={{ width: 75, marginLeft: 10 }} />
          </View>

          <View style={styles.head2}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 7,
                marginLeft: 14,
              }}
            >
              <View
                style={{
                  ...styles.headText,
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ flexGrow: 0 }}>School ID </Text>
                <View style={{ ...styles.containerr }}>
                  <View style={styles.inner}>
                    <Text>306717</Text>
                  </View>
                </View>
              </View>
              <Text style={{ ...styles.headText, flex: 1, marginTop: 4 }}>
                Region III
              </Text>
            </View>

            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ flexGrow: 0 }}>School Name </Text>
              <View style={{ ...styles.containerr, width: "100%", flex: 1 }}>
                <View>
                  <Text>Teodoro Evangelista Memorial High School</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.head3}>
            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ flexGrow: 0, marginLeft: 15 }}>Division </Text>
              <View style={{ ...styles.containerr, width: "100%", flex: 1 }}>
                <View>
                  <Text>Bulacan</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ flexGrow: 0 }}>School Year </Text>
              <View style={{ ...styles.containerr, width: 100 }}>
                <View>
                  <Text>{schoolYear}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.head4}>
            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 23,
              }}
            >
              <Text style={{ flexGrow: 0, marginLeft: 15 }}>District </Text>
              <View style={{ ...styles.containerr, width: "50%" }}>
                <View>
                  <Text>II</Text>
                </View>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View
                style={{
                  ...styles.headText,
                  flex: 0.5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ flexGrow: 0, marginLeft: 15 }}>
                  Grade Level{" "}
                </Text>
                <View style={{ ...styles.containerr, width: 30 }}>
                  <View>
                    <Text>{grade}</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  ...styles.headText,
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ flexGrow: 0, marginLeft: 15 }}>Section </Text>
                <View style={{ ...styles.containerr, width: "60%" }}>
                  <View>
                    <Text>{section}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        <VaccineBody students={students}/>

        {/* <FormBody students={students} adviser={adviser} headInfo={headInfo}/> */}
        {/* <FormFooter /> */}
      </Page>

    </Document>
  );
};

export default SF1PDF;

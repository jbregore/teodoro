import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import arial from "../fonts/arial.ttf";
import arialBold from "../fonts/arial-bold.ttf";
import arialItalic from "../fonts/arial-italic.ttf";
import roboto from "../fonts/roboto.ttf";
import headLogo from "../logo.jpg";
import FormBody from "./FormBody";
// import FormFooter from "./FormFooter";

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
    flex: 1.3,
    // backgroundColor: "gray",
    height: 60,
  },

  head3: {
    flex: 0.7,
    height: 60,
    marginLeft: 50,
  },

  head4: {
    flex: 1,
    // backgroundColor: "pink",
    height: 60,
    justifyContent: "flex-start",
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

  containerrr: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },

  headTextt: {
    fontSize: 6.5,
    fontFamily: "Roboto-Flex",
  },

  tableStylee: {
    borderRight: "1px solid #555",
    borderTop: "1px solid #555",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1px solid #555",
  },

  head11: {
    width: 35,
    borderLeft: "1px solid #555",
  },

  head12: {
    width: 150,
  },

  head13: {
    // width: 8ss0,
    flex: 1,
  },

  head14: {
    width: 120,
  },

});

const SF3PDF = ({data, books}) => {
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

  const subjects = [1, 2, 3, 4, 5, 6, 7, 8];
  const profile = JSON.parse(localStorage.getItem("profile"));

  return (
    <Page size="legal" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>
          School Form 3 (SF 3) Books Issued and Returned{" "}
        </Text>
        <Text style={styles.titleItalic}>
          (This replaces Form 1 & Inventory of Textbookss)
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
            <Text style={{ flexGrow: 0 }}>School Year </Text>
            <View style={{ ...styles.containerr, width: "70%" }}>
              <View>
                <Text>{profile.facultySchoolYear}</Text>
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
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ flexGrow: 0 }}>Grade Level </Text>
            <View style={{ ...styles.containerr, width: 30 }}>
              <View>
                <Text>{profile.facultyGrade}</Text>
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
          ></View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                ...styles.headText,
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={{ flexGrow: 0, marginLeft: 15 }}>Section </Text>
              <View style={{ ...styles.containerr, width: "60%" }}>
                <View>
                  <Text>{profile.facultySection}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <FormBody data={data} books={books}/>
              

    </Page>
  );
};

export default SF3PDF;

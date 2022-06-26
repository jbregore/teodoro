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
import headLogo from "../logo.jpg";
import deped from "../deped.png";
import aparaj from "../fonts/aparaj.ttf";
import calibri from "../fonts/calibri-regular.ttf";
import calibrib from "../fonts/calibri-bold.ttf";
import calibrii from "../fonts/calibri-italic.ttf";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 37,
  },

  container: {
    width: "100%",
    flexDirection: "row",
  },

  aparaj12: {
    fontSize: 12,
    fontFamily: "Aparajita",
  },

  header1_1: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  header1_2: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  header1_3: {
    flex: 0.3,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },

  calibri8: {
    fontSize: 8,
    fontFamily: "Calibri",
  },

  calibri10: {
    fontSize: 10,
    fontFamily: "Calibri",
  },

  calibrib10: {
    fontSize: 10,
    fontFamily: "Calibri Bold",
  },

  calibrib12: {
    fontSize: 12,
    fontFamily: "Calibri Bold",
  },

  calibrii8: {
    fontSize: 8,
    fontFamily: "Calibri Italic",
  },

  tableStyle: {
    borderRight: "1px solid #000",
    borderTop: "1px solid #000",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1px solid #000",
  },

  body1: {
    width: 50,
    height: 20,
  },

  body2: {
    width: 100,
    textAlign: "left",
    paddingLeft: 10,
  },

  body3: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 10,
  },

  body4: {
    width: 70,
  },
});

const Header1 = ({quarter}) => {

  const profile = JSON.parse(localStorage.getItem("profile"));

  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.header1_1 }}>
        <Image src={headLogo} style={{ width: 55 }} />
      </View>
      <View style={{ ...styles.header1_2 }}>
        <Text style={{ ...styles.calibrib12 }}>
          TEODORO EVANGELISTA MEMORIAL HIGH SCHOOL
        </Text>
        <Text style={{ ...styles.calibri10 }}>
          GRADE {profile.facultyGrade}-{profile.facultySection} SCHOOLYEAR {profile.facultySchoolYear}
        </Text>
        <Text style={{ ...styles.calibri10 }}>
          Quarterly Ranking {quarter === "Final" ? quarter : `(Quarter ${quarter})`}  
        </Text>
        <Text style={{ ...styles.calibri10 }}>Prepared by: {profile.facultyName}</Text>
      </View>
      <View style={{ ...styles.header1_3 }}>
        <Image src={deped} style={{ width: 65 }} />
      </View>
    </View>
  );
};

const RankingBody = ({ data }) => {
  const testArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 5, 6, 8, 8, 2, 2, 2, 3, 4, 1, 2, 4,
    5, 6, 7, 8, 9, 0, 0, 1, 2, 4, 5, 6, 7, 8, 9, 0, 0,
  ];
  return (
    <>
      <View style={{ ...styles.container, marginTop: 20 }}>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.body1,
            borderLeft: "1px solid #000",
          }}
        >
          <Text
            style={{
              ...styles.calibrib10,
              marginBottom: -5,
            }}
          >
            Rank
          </Text>
        </View>
        <View style={{ ...styles.tableStyle, ...styles.body2 }}>
          <Text style={{ ...styles.calibrib10, marginBottom: -5 }}>
            Student LRN
          </Text>
        </View>
        <View style={{ ...styles.tableStyle, ...styles.body3 }}>
          <Text style={{ ...styles.calibrib10, marginBottom: -5 }}>
            Student Name
          </Text>
        </View>
        <View style={{ ...styles.tableStyle, ...styles.body4 }}>
          <Text style={{ ...styles.calibrib10, marginBottom: -5 }}>
            Average
          </Text>
        </View>
      </View>

      {data.map((item, index) => (
        <View style={{ ...styles.container }} key={index}>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.body1,
              borderLeft: "1px solid #000",
              borderTop: "none",
            }}
          >
            <Text
              style={{
                ...styles.calibri10,
                marginBottom: -5,
              }}
            >
              {index + 1}
            </Text>
          </View>
          <View
            style={{ ...styles.tableStyle, ...styles.body2, borderTop: "none" }}
          >
            <Text style={{ ...styles.calibri10, marginBottom: -5 }}>
              {item.studentLRN}
            </Text>
          </View>
          <View
            style={{ ...styles.tableStyle, ...styles.body3, borderTop: "none" }}
          >
            <Text style={{ ...styles.calibri10, marginBottom: -5 }}>
              {`${item.studentLName}, ${item.studentFName}, ${item.studentMName}. ${item.studentSuffix}`}
            </Text>
          </View>
          <View
            style={{ ...styles.tableStyle, ...styles.body4, borderTop: "none" }}
          >
            <Text style={{ ...styles.calibri10, marginBottom: -5 }}>
            {parseFloat(item.gradeAve).toFixed(3)}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

const RankingHeader = ({ data, quarter }) => {
  Font.register({
    family: "Aparajita",
    format: "truetype",
    src: aparaj,
  });

  Font.register({
    family: "Calibri",
    format: "truetype",
    src: calibri,
  });

  Font.register({
    family: "Calibri Bold",
    format: "truetype",
    src: calibrib,
  });

  Font.register({
    family: "Calibri Italic",
    format: "truetype",
    src: calibrii,
  });

  // console.log(data);
  return (
    <Page size="LETTER" style={styles.page}>
      <Header1 quarter={quarter}/>
      <RankingBody data={data} />
    </Page>
  );
};

export default RankingHeader;

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
import logot from "../logot.png";
import deped from "../deped.png";
import aparaj from "../fonts/aparaj.ttf";
import calibri from "../fonts/calibri-regular.ttf";
import calibrib from "../fonts/calibri-bold.ttf";
import calibrii from "../fonts/calibri-italic.ttf";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingBottom: 30,
    // paddingLeft: 30,
    // paddingRight: 30,
    // paddingTop: 20,
    // paddingBottom: 20,
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
    textAlign: "left",
    justifyContent: "center",
    borderBottom: "1px solid #000",
    padding: 2,
    paddingLeft: 3,
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

  head: {
    flex: 1,
  },

  row: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  col2: {
    flexBasis: "50%",
    // width: 470,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const QuarterlyData = ({ data }) => {
  const subject = [
    {
      title: "Filipino",
      grade: Math.round(data?.gradeFilipino)
    },
    {
      title: "English",
      grade: Math.round(data?.gradeEnglish)
    },
    {
      title: "Mathematics",
      grade: Math.round(data?.gradeMath)
    },
    {
      title: "Science",
      grade: Math.round(data?.gradeScience)
    },

    {
      title: "A.P",
      grade: Math.round(data?.gradeAP)
    },
    {
      title: "EsP",
      grade: Math.round(data?.gradeEsP)
    },
    {
      title: "T.L.E",
      grade: Math.round(data?.gradeTLE)
    },
    {
      title: "MAPEH",
      grade: Math.round(data?.gradeMapeh)
    },
  ];

  const mapeh = [
    {
      title: "Music",
      grade: Math.round(data?.gradeMusic)
    },
    {
      title: "Arts",
      grade: Math.round(data?.gradeArt)
    },
    {
      title: "PE",
      grade: Math.round(data?.gradePE)
    },
    {
      title: "Health",
      grade: Math.round(data?.gradeHealth)
    },
  ];

  return (
    <>
      <View style={{
        border: "1px solid #000", padding: 2, paddingBottom: 0,
        display: 'flex', flexDirection: 'row'
      }}>
        <View>
          <Text
            style={{
              ...styles.calibrib10,
            }}
          >
            Name :{" "}
            {`${data.studentLName.toUpperCase()}, ${data.studentFName.toUpperCase()}, ${data.studentMName.toUpperCase()} ${data.studentSuffix}`}
          </Text>
          <Text
            style={{
              ...styles.calibrib10,
            }}
          >
            Section : {`${data.studentGrade}-${data.studentSection}`}
            {" "}{" "}{" "}{" "}{" "}{" "}School Year : {data.studentSchoolYear}
          </Text>
          <Text
            style={{
              ...styles.calibrib10,
            }}
          >
            Quarter : {data.gradeQuarter}
          </Text>
        </View>
        <View style={{marginLeft: 40}}>
          <Image src={logot} style={{ width: 30, 
            marginRight: 10, marginTop: 3 }} />
        </View>
      </View>
      <View style={{ ...styles.container, height: 21 }}>
        <View
          style={{
            ...styles.head,
            ...styles.tableStyle,
            borderTop: "none",
            borderLeft: "1px solid #000",
          }}
        >
          <Text style={{ ...styles.calibri10 }}>Subject</Text>
        </View>
        <View
          style={{
            ...styles.head,
            ...styles.tableStyle,
            borderTop: "none",
            textAlign: "center",
          }}
        >
          <Text style={{ ...styles.calibri10 }}>Grade</Text>
        </View>
      </View>
      {subject.map((item, index) => (
        <View style={{ ...styles.container, height: 21 }} key={index}>
          <View
            style={{
              ...styles.head,
              ...styles.tableStyle,
              borderTop: "none",
              borderLeft: "1px solid #000",
            }}
          >
            <Text style={{ ...styles.calibri10 }}>{item.title}</Text>
          </View>
          <View
            style={{
              ...styles.head,
              ...styles.tableStyle,
              borderTop: "none",
              textAlign: "center",
            }}
          >
            <Text style={{ ...styles.calibri10 }}>{Math.round(item.grade)}</Text>
          </View>
        </View>
      ))}
      {mapeh.map((item, index) => (
        <View style={{ ...styles.container, height: 21 }} key={index}>
          <View
            style={{
              ...styles.head,
              ...styles.tableStyle,
              borderTop: "none",
              borderLeft: "1px solid #000",
            }}
          >
            <Text style={{ ...styles.calibri10, paddingLeft: 25 }}>{item.title}</Text>
          </View>
          <View
            style={{
              ...styles.head,
              ...styles.tableStyle,
              borderTop: "none",
              textAlign: "center",
            }}
          >
            <Text style={{ ...styles.calibri10 }}>{Math.round(item.grade)}</Text>
          </View>
        </View>
      ))}
      <View style={{ ...styles.container, height: 21 }}>
        <View
          style={{
            ...styles.head,
            ...styles.tableStyle,
            borderTop: "none",
            borderLeft: "1px solid #000",
          }}
        >
          <Text style={{ ...styles.calibrib10 }}>Average</Text>
        </View>
        <View
          style={{
            ...styles.head,
            ...styles.tableStyle,
            borderTop: "none",
            textAlign: "center",
          }}
        >
          <Text style={{ ...styles.calibrib10 }}>{Math.round(data.gradeFinal)}</Text>
        </View>
      </View>
    </>
  );
};

const RankingHeader = ({ data }) => {
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
  const myArr = [1, 2, 3, 4, 5];
  return (
    <Page size="LETTER" style={styles.page}>
      <View style={{ ...styles.row }}>
        {data?.map((item, index) => (
          <View
            style={{
              ...styles.col2,
              height: 370,
            }}
            key={index}
          >
            <QuarterlyData data={item} />
          </View>
        ))}
      </View>
    </Page>
  );
};

export default RankingHeader;

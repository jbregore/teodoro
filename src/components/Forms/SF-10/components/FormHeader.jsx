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
import FormBody from "./FormBody";
import checkPng from "./check.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
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

  learners_row1_1: {
    flex: 0.8,
  },

  learners_row1_2: {
    flex: 1,
  },

  learners_row1_3: {
    flex: 0.7,
  },

  learners_row1_4: {
    flex: 0.8,
  },

  learners_row2_1: {
    flex: 1.3,
  },

  learners_row2_2: {
    flex: 1,
  },

  learners_row2_3: {
    flex: 0.4,
  },

  titleBackground: {
    backgroundColor: "#DDD9C4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    marginBottom: 2,
  },

  eligibility_row1_1: {
    flex: 1,
  },

  eligibility_row1_2: {
    flex: 1,
  },

  eligibility_row1_3: {
    flex: 1.4,
  },

  checkbox: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    paddingBottom: 3,
    border: "1.5px solid #000",
    width: 8,
    marginRight: 8,
  },
});

const Header1 = () => {
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.header1_1, marginTop: -10 }}>
        <Text style={{ ...styles.calibri8 }}>SF-10 JHS</Text>
        <Image src={headLogo} style={{ width: 35 }} />
      </View>
      <View style={{ ...styles.header1_2 }}>
        <Text style={{ ...styles.calibri10 }}>Republic of the Philippines</Text>
        <Text style={{ ...styles.calibri10 }}>Department of Education </Text>
        <Text style={{ ...styles.calibrib12 }}>
          Learner's Permanent Academic Record for Junior High School (SF10-JHS)
        </Text>
        <Text style={{ ...styles.calibrii8 }}>(Formerly Form 137) </Text>
      </View>
      <View style={{ ...styles.header1_3 }}>
        <Image src={deped} style={{ width: 55 }} />
      </View>
    </View>
  );
};

const LearnersRow1 = ({ title, value }) => {
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <View style={{ justifyContent: "flex-end" }}>
        <Text
          style={{
            ...styles.calibri10,
            textAlign: "center",
            marginBottom: -3,
          }}
        >
          {title}:{" "}
        </Text>
      </View>
      <View
        style={{
          borderBottom: "0.6px solid #000",
          flex: 1,
        }}
      >
        <Text
          style={{
            ...styles.calibri10,
            textAlign: "left",
            paddingLeft: 5,
            marginBottom: -3,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

const LearnersRow2 = ({ title, value }) => {
  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <View style={{ justifyContent: "flex-end" }}>
        <Text
          style={{
            ...styles.calibri10,
            textAlign: "center",
            marginBottom: -3,
          }}
        >
          {title}:{" "}
        </Text>
      </View>
      <View
        style={{
          borderBottom: "0.6px solid #000",
          flex: 1,
        }}
      >
        <Text
          style={{
            ...styles.calibri10,
            textAlign: "left",
            paddingLeft: 5,
            marginBottom: -3,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

const capitalizeLetter = (name) => {
  const arr = name.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const str2 = arr.join(" ");
  return str2;
};

const LearnersInfo = ({ data }) => {
  return (
    <View>
      <View style={{ ...styles.titleBackground }}>
        <Text style={{ ...styles.calibrib10, textAlign: "center" }}>
          LEARNER'S INFORMATION
        </Text>
      </View>
      <View style={{ ...styles.container }}>
        <View style={{ ...styles.learners_row1_1 }}>
          <LearnersRow1
            title="LAST NAME"
            value={data.studentLName.toUpperCase()}
          />
        </View>
        <View style={{ ...styles.learners_row1_2 }}>
          <LearnersRow1
            title="FIRST NAME"
            value={data.studentFName.toUpperCase()}
          />
        </View>
        <View style={{ ...styles.learners_row1_3 }}>
          <LearnersRow1
            title="NAME EXTN. (Jr, I, II)"
            value={data.studentSuffix}
          />
        </View>
        <View style={{ ...styles.learners_row1_4 }}>
          <LearnersRow1
            title="MIDDLE NAME"
            value={data.studentMName.toUpperCase()}
          />
        </View>
      </View>

      <View style={{ ...styles.container, marginTop: 5 }}>
        <View style={{ ...styles.learners_row2_1 }}>
          <LearnersRow2
            title="Learner Reference Number (LRN)"
            value={data.studentLRN}
          />
        </View>
        <View style={{ ...styles.learners_row2_2 }}>
          <LearnersRow2
            title="Birthdate (mm/dd/yyyy)"
            value={data.studentBirthday}
          />
        </View>
        <View style={{ ...styles.learners_row2_3 }}>
          <LearnersRow2
            title="Sex"
            value={capitalizeLetter(data.studentGender)}
          />
        </View>
      </View>
    </View>
  );
};

const EligibilityRow2 = ({ title, value }) => {
  return (
    <View
      style={{
        ...styles.container,
        height: 12,
        justifyContent: "flex-start",
        flex: 1,
        // width: 70
      }}
    >
      <View>
        <Text
          style={{
            ...styles.calibri10,
            textAlign: "right",
            marginBottom: -3,
          }}
        >
          {title}:{" "}
        </Text>
      </View>
      <View
        style={{
          borderBottom: "0.6px solid #000",
          flex: 1,
          justifyContent: "flex-start",
          marginRight: 15
        }}
      >
        <Text
          style={{
            ...styles.calibri10,
            textAlign: "left",
            paddingLeft: 5,
            marginBottom: -3,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

const Eligibility = ({ data }) => {
  return (
    <View style={{ marginTop: 6 }}>
      <View style={{ ...styles.titleBackground }}>
        <Text style={{ ...styles.calibrib10, textAlign: "center" }}>
          ELIGIBILITY FOR JHS ENROLLMENT
        </Text>
      </View>

      <View style={{ padding: 4, border: "1px solid #000", marginBottom: 4 }}>
        <View style={{ ...styles.container }}>
          <View style={{ ...styles.container, ...styles.eligibility_row1_1 }}>
            <View
              style={{ ...styles.checkbox, marginTop: -3, maxHeight: 15 }}
            ></View>
            <Image
              src={checkPng}
              style={{ width: 15, height: 25, marginLeft: -22, marginTop: -10 }}
            />
            <Text style={{ ...styles.calibri10 }}>
              Elementary School Completer
            </Text>
          </View>
          <View style={{ ...styles.eligibility_row1_2 }}>
            <LearnersRow2 title="General Average" value={data.jhsAverage} />
          </View>
          <View style={{ ...styles.eligibility_row1_3 }}>
            <LearnersRow2 title="Citation: (If Any)" value={data.jhsCitation} />
          </View>
        </View>

        <View style={{ ...styles.container }}>
          <View style={{ ...styles.container, ...styles.eligibility_row1_1 }}>
            <LearnersRow2
              title="Name of Elementary School"
              value={data.jhsSchool}
            />
          </View>
          <View style={{ ...styles.eligibility_row1_2, flex: 0.4 }}>
            <LearnersRow2 title="School ID" value={data.jhsSchoolID} />
          </View>
          <View style={{ ...styles.eligibility_row1_3, flex: 0.7 }}>
            <LearnersRow2 title="Address of School" value={data.jhsAddress} />
          </View>
        </View>
      </View>

      <Text style={{ ...styles.calibri10, textAlign: "left", marginBottom: 2 }}>
        Other Credential Presented
      </Text>

      <View style={{ ...styles.container }}>
        <View
          style={{
            ...styles.container,
            ...styles.eligibility_row1_1,
            flex: 0.7,
          }}
        >
          <View
            style={{ ...styles.checkbox, marginTop: -3, height: 15 }}
          ></View>
          {data.peptRating !== "" ? (
            <Image
              src={checkPng}
              style={{ width: 15, height: 25, marginLeft: -22, marginTop: -10 }}
            />
          ) : (
            <></>
          )}

          <Text style={{ ...styles.calibri10, marginRight: 5 }}>
            PEPT Passer
          </Text>
          <EligibilityRow2 title="Rating" value={data.peptRating} />
        </View>
        <View
          style={{
            ...styles.container,
            ...styles.eligibility_row1_2,
            flex: 0.8,
          }}
        >
          <View
            style={{ ...styles.checkbox, marginTop: -3, height: 15 }}
          ></View>
          {data.alsRating !== "" ? (
            <Image
              src={checkPng}
              style={{ width: 15, height: 25, marginLeft: -22, marginTop: -10 }}
            />
          ) : (
            <></>
          )}
          <Text style={{ ...styles.calibri10, marginRight: 5 }}>
            ALS A & E Passer
          </Text>
          <EligibilityRow2 title="Rating" value={data.alsRating} />
        </View>
        <View
          style={{
            ...styles.container,
            ...styles.eligibility_row1_3,
            flex: 0.9,
          }}
        >
          <View
            style={{ ...styles.checkbox, marginTop: -3, height: 15 }}
          ></View>
          {data.othersSpecify !== "" ? (
            <Image
              src={checkPng}
              style={{ width: 15, height: 25, marginLeft: -22, marginTop: -10 }}
            />
          ) : (
            <></>
          )}
          <EligibilityRow2
            title="Others (Pls. Specify)"
            value={data.othersSpecify}
          />
        </View>
      </View>

      <View style={{ ...styles.container, marginTop: 2 }}>
        <View style={{ flex: 1 }}>
          <LearnersRow2
            title="Date of Examination/Assessment (mm/dd/yyyy)"
            value={data.othersDateAssesment}
          />
        </View>
        <View style={{ flex: 1 }}>
          <LearnersRow2
            title=" Name and Address of Testing Center"
            value={data.othersTestingCenter}
          />
        </View>
      </View>

      <View style={{ ...styles.titleBackground, marginTop: 4 }}>
        <Text style={{ ...styles.calibrib10, textAlign: "center" }}>
          SCHOLASTIC RECORD
        </Text>
      </View>
    </View>
  );
};

const FormHeader = ({
  data,
  grade7Data,
  grade8Data,
  grade9Data,
  grade10Data,
}) => {
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

  // console.log(data?[0])
  // console.log(grade8Data)

  return (
    <Document>
      <Page size="FOLIO" orientation="portrait" style={styles.page}>
        <Header1 />
        <LearnersInfo data={data ? data[0] : null} />
        <Eligibility data={data ? data[0] : null} />
        <FormBody
          page={1}
          data={data ? data : null}
          grade7Data={grade7Data ? grade7Data : null}
          grade8Data={grade8Data ? grade8Data : null}
        />
      </Page>

      <Page size="FOLIO" orientation="portrait" style={styles.page}>
        {/* <FormBody page={2}/> */}
        <FormBody
          page={2}
          data={data ? data : null}
          grade9Data={grade9Data ? grade9Data : null}
          grade10Data={grade10Data ? grade10Data : null}
        />
      </Page>
    </Document>
  );
};

export default FormHeader;

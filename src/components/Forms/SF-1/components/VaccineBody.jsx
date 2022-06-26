import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import roboto from "../fonts/roboto.ttf";
import robotoBold from "../fonts/roboto-bold.ttf";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },

  headText: {
    fontSize: 6.5,
    fontFamily: "Roboto-Flex",
  },

  tableStyle: {
    borderRight: "1px solid #555",
    borderTop: "1px solid #555",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1px solid #555",
  },

  head1: {
    width: 60,
    borderLeft: "1px solid #555",
    padding: 5,
  },

  head2: {
    width: 150,
    padding: 5,
  },

  head3: {
    width: 60,
    padding: 5,
  },

  head4: {
    flex: 1,
  },

  head5: {
    width: 100,
    padding: 5,
  },

  vaccine1: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderLeft: "1px solid #555",
    borderBottom: "1px solid #555",
    padding: 5,
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
    padding: 5,
  },

  flexCenter: {
    textAlign: "center",
    justifyContent: "center",
  },
});

const VaccineBody = ({ students }) => {
  const [male, setMale] = useState([]);
  const [female, setFemale] = useState([]);
  const [totalMale, setTotalMale] = useState(0);
  const [totalFemale, setTotalFemale] = useState(0);

  Font.register({
    family: "Roboto-Flex",
    format: "truetype",
    src: roboto,
  });

  Font.register({
    family: "Roboto Bold",
    format: "truetype",
    src: robotoBold,
  });

  useEffect(() => {
    let male = 0;
    let female = 0;
    let maleStudents = [];
    let femaleStudents = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].studentGender === "male") {
        male++;
        maleStudents.push(students[i]);
      } else {
        female++;
        femaleStudents.push(students[i]);
      }
    }
    setTotalMale(male);
    setTotalFemale(female);
    setMale(maleStudents);
    setFemale(femaleStudents);
  }, [students]);

  return (
    <>
      {/* table title */}
      <View style={styles.container}>
        {/* LRN */}
        <View style={{ ...styles.tableStyle, ...styles.head1 }}>
          <Text style={styles.headText}>LRN</Text>
        </View>

        {/* name */}
        <View style={{ ...styles.tableStyle, ...styles.head2 }}>
          <Text style={styles.headText}>NAME</Text>
          <Text style={styles.headText}>
            (Last Name, First Name, Middle Name)
          </Text>
        </View>

        {/* sex */}
        <View style={{ ...styles.tableStyle, ...styles.head3 }}>
          <Text style={styles.headText}>Sex</Text>
          <Text style={styles.headText}>(M/F)</Text>
        </View>

        {/* Vaccination Status */}
        <View style={{ ...styles.tableStyle, ...styles.head4 }}>
          <Text
            style={{
              ...styles.headText,
              marginTop: 10,
              borderBottom: "1px solid #555",
              paddingBottom: 5,
            }}
          >
            Vaccination Status
          </Text>
          <View style={{ ...styles.container }}>
            <View
              style={{
                ...styles.vaccine1,
                height: 35,
                borderLeft: "none",
                borderBottom: "none",
              }}
            >
              <Text style={styles.headText}>First Dose Brand</Text>
            </View>

            <View
              style={{ ...styles.vaccine1, height: 35, borderBottom: "none" }}
            >
              <Text style={styles.headText}>First Dose Date</Text>
            </View>

            <View
              style={{ ...styles.vaccine1, height: 35, borderBottom: "none" }}
            >
              <Text style={styles.headText}>Second Dose Brand</Text>
            </View>

            <View
              style={{ ...styles.vaccine1, height: 35, borderBottom: "none" }}
            >
              <Text style={styles.headText}>Second Dose Date</Text>
            </View>

            <View
              style={{ ...styles.vaccine1, height: 35, borderBottom: "none" }}
            >
              <Text style={styles.headText}>Booster Brand</Text>
            </View>

            <View
              style={{ ...styles.vaccine1, height: 35, borderBottom: "none" }}
            >
              <Text style={styles.headText}>Booster Date</Text>
            </View>

            <View
              style={{ ...styles.vaccine1, height: 35, borderBottom: "none" }}
            >
              <Text style={styles.headText}>Second Booster Brand</Text>
            </View>

            <View
              style={{ ...styles.vaccine1, height: 35, borderBottom: "none" }}
            >
              <Text style={styles.headText}>Second Booster Date</Text>
            </View>
          </View>
        </View>

        {/* learning modality */}
        <View style={{ ...styles.tableStyle, ...styles.head5 }}>
          <Text style={styles.headText}>Learning Modality</Text>
        </View>
      </View>

      {male?.map((item, index) => (
        <View style={styles.container} key={index}>
          {/* LRN */}
          <View
            style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
          >
            <Text style={styles.headText}> {item.studentLRN} </Text>
          </View>

          {/* name */}
          <View
            style={{ ...styles.tableStyle, ...styles.head2, borderTop: "none" }}
          >
            <Text
              style={styles.headText}
            >{`${item.studentLName.toUpperCase()}, ${item.studentFName.toUpperCase()},
       ${item.studentMName.toUpperCase()} ${item.studentSuffix.toUpperCase()}`}</Text>
          </View>

          {/* sex */}
          <View
            style={{ ...styles.tableStyle, ...styles.head3, borderTop: "none" }}
          >
            <Text style={styles.headText}>
              {`${item.studentGender.toUpperCase().charAt(0)}`}{" "}
            </Text>
          </View>

          {/* Vaccination Status */}
          <View
            style={{
              ...styles.vaccine1,
              borderLeft: "none",
              borderTop: "none",
            }}
          >
            <Text style={styles.headText}>{item.firstDoseBrand}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.firstDoseDate}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.secondDoseBrand}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.secondDoseDate}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.boosterBrand}</Text>
          </View>

          <View
            style={{
              ...styles.vaccine1,
              borderTop: "none",
            }}
          >
            <Text style={styles.headText}>{item.boosterDate}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.booster2Brand}</Text>
          </View>

          <View
            style={{
              ...styles.vaccine1,
              borderRight: "1px solid #555",
              borderTop: "none",
            }}
          >
            <Text style={styles.headText}>{item.booster2Date}</Text>
          </View>

          {/* learning modality */}
          <View
            style={{ ...styles.tableStyle, ...styles.head5, borderTop: "none" }}
          >
            <Text style={styles.headText}>Modular (Print)</Text>
          </View>
        </View>
      ))}

      <View style={styles.container}>
        {/* LRN */}
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none",textAlign: "right",
          paddingRight: 10, }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {" "}
            {totalMale}{" "}
          </Text>
        </View>

        {/* name */}
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            paddingLeft: 10,
            textAlign: 'left'
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >{`<== TOTAL MALE`}</Text>
        </View>

        {/* sex */}
        <View
          style={{ ...styles.tableStyle, ...styles.head3, borderTop: "none" }}
        >
          <Text style={styles.headText}></Text>
        </View>

        {/* Vaccination Status */}
        <View
          style={{
            ...styles.vaccine1,
            borderLeft: "none",
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.vaccine1,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.vaccine1,
            borderRight: "1px solid #555",
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        {/* learning modality */}
        <View
          style={{ ...styles.tableStyle, ...styles.head5, borderTop: "none" }}
        >
          <Text style={styles.headText}></Text>
        </View>
      </View>

      {female?.map((item, index) => (
        <View style={styles.container} key={index}>
          {/* LRN */}
          <View
            style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
          >
            <Text style={styles.headText}> {item.studentLRN} </Text>
          </View>

          {/* name */}
          <View
            style={{ ...styles.tableStyle, ...styles.head2, borderTop: "none" }}
          >
            <Text
              style={styles.headText}
            >{`${item.studentLName.toUpperCase()}, ${item.studentFName.toUpperCase()},
       ${item.studentMName.toUpperCase()} ${item.studentSuffix.toUpperCase()}`}</Text>
          </View>

          {/* sex */}
          <View
            style={{ ...styles.tableStyle, ...styles.head3, borderTop: "none" }}
          >
            <Text style={styles.headText}>
              {`${item.studentGender.toUpperCase().charAt(0)}`}{" "}
            </Text>
          </View>

          {/* Vaccination Status */}
          <View
            style={{
              ...styles.vaccine1,
              borderLeft: "none",
              borderTop: "none",
            }}
          >
            <Text style={styles.headText}>{item.firstDoseBrand}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.firstDoseDate}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.secondDoseBrand}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.secondDoseDate}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.boosterBrand}</Text>
          </View>

          <View
            style={{
              ...styles.vaccine1,
              borderTop: "none",
            }}
          >
            <Text style={styles.headText}>{item.boosterDate}</Text>
          </View>

          <View style={{ ...styles.vaccine1, borderTop: "none" }}>
            <Text style={styles.headText}>{item.booster2Brand}</Text>
          </View>

          <View
            style={{
              ...styles.vaccine1,
              borderRight: "1px solid #555",
              borderTop: "none",
            }}
          >
            <Text style={styles.headText}>{item.booster2Date}</Text>
          </View>

          {/* learning modality */}
          <View
            style={{ ...styles.tableStyle, ...styles.head5, borderTop: "none" }}
          >
            <Text style={styles.headText}>Modular (Print)</Text>
          </View>
        </View>
      ))}

      <View style={styles.container}>
        {/* LRN */}
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none",textAlign: "right",
          paddingRight: 10, }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {" "}
            {totalFemale}{" "}
          </Text>
        </View>

        {/* name */}
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            paddingLeft: 10,
            textAlign: 'left'
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >{`<== TOTAL FEMALE`}</Text>
        </View>

        {/* sex */}
        <View
          style={{ ...styles.tableStyle, ...styles.head3, borderTop: "none" }}
        >
          <Text style={styles.headText}></Text>
        </View>

        {/* Vaccination Status */}
        <View
          style={{
            ...styles.vaccine1,
            borderLeft: "none",
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.vaccine1,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.vaccine1,
            borderRight: "1px solid #555",
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        {/* learning modality */}
        <View
          style={{ ...styles.tableStyle, ...styles.head5, borderTop: "none" }}
        >
          <Text style={styles.headText}></Text>
        </View>
      </View>

      <View style={styles.container}>
        {/* LRN */}
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none",textAlign: "right",
          paddingRight: 10, }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {" "}
            {totalMale + totalFemale}{" "}
          </Text>
        </View>

        {/* name */}
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            paddingLeft: 10,
            textAlign: 'left'
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >{`<== COMBINED`}</Text>
        </View>

        {/* sex */}
        <View
          style={{ ...styles.tableStyle, ...styles.head3, borderTop: "none" }}
        >
          <Text style={styles.headText}></Text>
        </View>

        {/* Vaccination Status */}
        <View
          style={{
            ...styles.vaccine1,
            borderLeft: "none",
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.vaccine1,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.vaccine1, borderTop: "none" }}>
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.vaccine1,
            borderRight: "1px solid #555",
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        {/* learning modality */}
        <View
          style={{ ...styles.tableStyle, ...styles.head5, borderTop: "none" }}
        >
          <Text style={styles.headText}></Text>
        </View>
      </View>
    </>
  );
};

export default VaccineBody;

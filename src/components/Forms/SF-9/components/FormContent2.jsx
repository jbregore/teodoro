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
import aparajb from "../fonts/aparajb.ttf";
import calibri from "../fonts/calibri-regular.ttf";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
  },

  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },

  aparaj14: {
    fontSize: 14,
    fontFamily: "Aparajita",
  },

  aparaj13: {
    fontSize: 13,
    fontFamily: "Aparajita",
  },

  aparaj12: {
    fontSize: 12,
    fontFamily: "Aparajita",
  },

  aparajb12: {
    fontSize: 12,
    fontFamily: "Aparajita Bold",
  },

  headText: {
    fontSize: 14,
    fontFamily: "Aparajita Bold",
    // webkitTransform: [{ rotate: '90deg' }]
  },

  headText2: {
    fontSize: 10,
    fontFamily: "Aparajita",
    transform: "rotate(-90deg)",
    width: 60,
    // writing-mode: vertical-rl;
    // writingMode: "vertical-rl",
  },

  tableStyle: {
    borderRight: "1.5px solid #000",
    borderTop: "1.5px solid #000",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1.5px solid #000",
  },

  head1: {
    width: 40,
  },

  head2: {
    flex: 1,
    marginLeft: -15,
  },

  attendanceTitle: {
    fontSize: 8.5,
    fontFamily: "Aparajita",
  },
});

const SF9PDF = ({data, headInfo}) => {
  // console.log(data);
  Font.register({
    family: "Aparajita",
    format: "truetype",
    src: aparaj,
  });

  Font.register({
    family: "Aparajita Bold",
    format: "truetype",
    src: aparajb,
  });

  Font.register({
    family: "Calibri",
    format: "truetype",
    src: calibri,
  });

  const profile = JSON.parse(localStorage.getItem("profile"));

  const month = [
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "TOTAL",
  ];

  const attendanceOption = [
    "No. of School Days",
    "No. of Days Present",
    "No. of Days Absent",
  ];

  return (
    <Page size="LETTER" orientation="landscape" style={styles.page}>
      <View style={styles.container}>
        <View style={{ flex: 1, marginRight: 20, marginTop: 55 }}>
          <Text style={{ ...styles.aparaj14, textAlign: "center" }}>
            ATTENDANCE RECORD
          </Text>

          <View style={{ ...styles.container, height: 55, marginBottom: 0 }}>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head1,
                borderLeft: "1.5px solid #000",
              }}
            ></View>

            {month.map((item, index) => (
              <View
                style={{ ...styles.tableStyle, ...styles.head2 }}
                key={index}
              >
                <Text
                  style={{
                    ...styles.headText2,
                    fontFamily: "Calibri",
                    fontSize: 8.5,
                  }}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>

          {attendanceOption.map((item, index) => (
            <View style={{ ...styles.container, height: 30, marginBottom: 0 }}>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head1,
                  borderLeft: "1.5px solid #000",
                  borderTop: "none",
                }}
              >
                <Text style={{ ...styles.attendanceTitle }}>{item}</Text>
              </View>

              {month.map((item, index) => (
                <View
                  style={{
                    ...styles.tableStyle,
                    ...styles.head2,
                    borderTop: "none",
                  }}
                  key={index}
                ></View>
              ))}
            </View>
          ))}

          <View>
            <Text
              style={{
                ...styles.aparaj14,
                textAlign: "center",
                marginTop: 30,
                // fontSize: 12,
              }}
            >
              PARENT / GUARDIAN’S SIGNATURE
            </Text>

            <Text
              style={{
                ...styles.aparaj14,
                textAlign: "center",
                marginTop: 10,
                width: '100%'
              }}
            >
              1st Quarter ______________________________________________
            </Text>

            <Text
              style={{
                ...styles.aparaj14,
                textAlign: "center",
                marginTop: 15,
                width: '100%'
              }}
            >
              2nd Quarter ______________________________________________
            </Text>

            <Text
              style={{
                ...styles.aparaj14,
                textAlign: "center",
                marginTop: 15,
                width: '100%'
              }}
            >
              3rd Quarter ______________________________________________
            </Text>

            <Text
              style={{
                ...styles.aparaj14,
                textAlign: "center",
                marginTop: 15,
                width: '100%'
              }}
            >
              4th Quarter ______________________________________________
            </Text>

          </View>
        </View>

        <View style={{ flex: 1, marginLeft: 20, marginTop: -20 }}>
          <Text style={{ ...styles.aparaj12, textAlign: "left", marginTop: -8 }}>
            SF 9 - JHS
          </Text>

          <View
            style={{
              ...styles.container,
              marginBottom: 0,
            }}
          >
            <View>
              <Image src={headLogo} style={{ width: 55, marginLeft: 10, marginTop: -3 }} />
            </View>

            <View>
              <View style={{ width: 250 }}>
                <Text style={{ ...styles.aparaj12, textAlign: "center" }}>
                  Republic of the Phlippines
                </Text>
                <Text style={{ ...styles.aparaj12, textAlign: "center" }}>
                  DEPARTMENT OF EDUCATION
                </Text>
                <Text style={{ ...styles.aparaj12, textAlign: "center" }}>
                  Region III
                </Text>

                <View
                  style={{
                    ...styles.container,
                    marginBottom: 0,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      ...styles.aparaj12,
                      textAlign: "center",
                    }}
                  >
                    SCHOOL DIVISION OF BULACAN
                  </Text>
                </View>
              </View>

              <View
                style={{
                  // flex: 0.7,
                  // justifyContent: "flex-end",
                  marginBottom: 3,
                  marginLeft: -20,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...styles.headText,
                    textAlign: "center",
                    // paddingLeft: 5,
                    // marginBottom: -3,
                  }}
                >
                  TEODORO EVANGELISTA MEMORIAL HIGH SCHOOL
                </Text>

                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginTop: -3,
                  }}
                >
                  A. Mabini St., Tibag, Baliwag Bulacan
                </Text>
              </View>
            </View>

            <View>
              <Image src={deped} style={{ width: 75,}} />
            </View>
          </View>

          <Text
            style={{
              ...styles.aparaj14,
              textAlign: "center",
            }}
          >
            LEARNER'S PROGRESS REPORT CARD
          </Text>

          <View
            style={{
              marginRight: 15,
              marginLeft: 15,
            }}
          >
            <View
              style={{
                ...styles.container,
                marginBottom: -8,
                justifyContent: "flex-end",
                height: 25,
              }}
            >
              <View style={{ justifyContent: "flex-end" }}>
                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginBottom: -3,
                  }}
                >
                  Name:{" "}
                </Text>
              </View>
              <View
                style={{
                  borderBottom: "0.6px solid #000",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    ...styles.aparajb12,
                    textAlign: "left",
                    paddingLeft: 10,
                    marginBottom: -3,
                  }}
                >
                  {data?.studentLName.toUpperCase()},{" "}{data?.studentFName.toUpperCase()},{" "}
                  {data?.studentMName.toUpperCase()}{" "}{data?.studentSuffix}
                </Text>
              </View>
            </View>

            <View
              style={{
                ...styles.container,
                marginBottom: -8,
                justifyContent: "flex-end",
                // alignItems: 'flex-start',
                height: 25,
              }}
            >
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flex: 0.25,
                }}
              >
                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginBottom: -3,
                  }}
                >
                  Age:{" "}
                </Text>
              </View>
              <View
                style={{
                  borderBottom: "0.6px solid #000",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    ...styles.aparajb12,
                    textAlign: "left",
                    paddingLeft: 10,
                    marginBottom: -3,
                  }}
                >
                  {data?.studentAge}
                </Text>
              </View>

              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flex: 0.3,
                }}
              >
                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginBottom: -3,
                    marginLeft: 10,
                  }}
                >
                  Sex:{" "}
                </Text>
              </View>
              <View
                style={{
                  borderBottom: "0.6px solid #000",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    ...styles.aparajb12,
                    textAlign: "left",
                    paddingLeft: 10,
                    marginBottom: -3,
                  }}
                >
                  {data?.studentGender.toUpperCase()}
                </Text>
              </View>
            </View>

            <View
              style={{
                ...styles.container,
                marginBottom: -8,
                justifyContent: "flex-end",
                // alignItems: 'flex-start',
                height: 25,
              }}
            >
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flex: 0.25,
                }}
              >
                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginBottom: -3,
                  }}
                >
                  Grade:{" "}
                </Text>
              </View>
              <View
                style={{
                  borderBottom: "0.6px solid #000",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    ...styles.aparajb12,
                    textAlign: "left",
                    paddingLeft: 10,
                    marginBottom: -3,
                  }}
                >
                  {data?.studentGrade}
                </Text>
              </View>

              <View
                style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
              >
                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginBottom: -3,
                    marginLeft: 10,
                  }}
                >
                  Section:{" "}
                </Text>
              </View>
              <View
                style={{
                  borderBottom: "0.6px solid #000",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    ...styles.aparajb12,
                    textAlign: "left",
                    paddingLeft: 10,
                    marginBottom: -3,
                  }}
                >
                  {data?.studentSection.toUpperCase()}
                </Text>
              </View>
            </View>

            <View
              style={{
                ...styles.container,
                marginBottom: -8,
                justifyContent: "flex-end",
                // alignItems: 'flex-start',
                height: 25,
              }}
            >
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flex: 0.5,
                }}
              >
                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginBottom: -3,
                  }}
                >
                  School Year:{" "}
                </Text>
              </View>
              <View
                style={{
                  borderBottom: "0.6px solid #000",
                  flex: 0.8,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    ...styles.aparajb12,
                    textAlign: "left",
                    paddingLeft: 10,
                    marginBottom: -3,
                  }}
                >
                  {data?.studentSchoolYear}
                </Text>
              </View>

              <View
                style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
              >
                <Text
                  style={{
                    ...styles.aparaj12,
                    textAlign: "center",
                    marginBottom: -3,
                    marginLeft: 10,
                  }}
                >
                  LRN:{" "}
                </Text>
              </View>
              <View
                style={{
                  borderBottom: "0.6px solid #000",
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{
                    ...styles.aparajb12,
                    textAlign: "left",
                    paddingLeft: 10,
                    marginBottom: -3,
                  }}
                >
                  {data?.studentLRN}
                </Text>
              </View>
            </View>

            <Text
              style={{
                ...styles.aparaj13,
                textAlign: "left",
                marginTop: 20,
              }}
            >
              Dear Parent,
            </Text>

            <Text
              style={{
                ...styles.aparaj13,
                textAlign: "left",
                marginLeft: 22,
              }}
            >
              This report card shows the ability and progress your child has
              made in
            </Text>

            <Text
              style={{
                ...styles.aparaj13,
                textAlign: "left",
              }}
            >
              different learning areas as well as his/her core values.
            </Text>

            <Text
              style={{
                ...styles.aparaj13,
                textAlign: "left",
                marginLeft: 22,
              }}
            >
              The school welcomes you should you desire to know more about
            </Text>

            <Text
              style={{
                ...styles.aparaj13,
                textAlign: "left",
                marginBottom: 10,
              }}
            >
              your childs progress. Thank You!
            </Text>

            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...styles.aparajb12,
                  textAlign: "center",
                  marginTop: 3,
                  fontSize: 12,
                  width: 150,
                  borderBottom: "0.6px solid #000",
                }}
              >
                {headInfo?.facultyName.toUpperCase()}
              </Text>
              <Text
                style={{
                  ...styles.aparajb12,
                  textAlign: "center",
                  marginTop: 3,
                  fontSize: 12,
                  width: 150,
                  borderBottom: "0.6px solid #000",
                }}
              >
                {profile?.facultyName.toUpperCase()}
              </Text>
            </View>

            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...styles.aparaj12,
                  textAlign: "left",
                  marginTop: -8,
                  fontSize: 12,
                  marginLeft: 35,
                }}
              >
                Head Teacher / OIC
              </Text>
              <Text
                style={{
                  ...styles.aparaj12,
                  textAlign: "left",
                  fontSize: 12,
                  marginTop: -8,
                  marginRight: 55,
                }}
              >
                Adviser
              </Text>
            </View>
          </View>

          <Text
            style={{
              ...styles.aparaj14,
              textAlign: "center",
            }}
          >
            CERTIFICATE OF TRANSFER
          </Text>

          <View style={{paddingLeft: 10}}>
            <Text
              style={{
                ...styles.aparaj12,
                textAlign: "left",
                marginTop: 10,
                fontSize: 12,
              }}
            >
              Admitted to Grade: _______________ Section:
              ________________________
            </Text>

            <Text
              style={{
                ...styles.aparaj12,
                textAlign: "left",
                marginTop: 10,
                fontSize: 12,
              }}
            >
              Eligibility for Admission to
              Grade:___________________________________
            </Text>

            <Text
              style={{
                ...styles.aparaj12,
                textAlign: "left",
                marginTop: 10,
                fontSize: 12,
              }}
            >
              Approved:
            </Text>

            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
                paddingRight: 30,
              }}
            >
              <Text
                style={{
                  ...styles.headText,
                  textAlign: "left",
                  marginTop: 3,
                  fontSize: 12,
                }}
              >
                _____________________________
              </Text>
              <Text
                style={{
                  ...styles.headText,
                  textAlign: "left",
                  marginTop: 3,
                  fontSize: 12,
                }}
              >
                ____________________________
              </Text>
            </View>

            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
                paddingRight: 30,
              }}
            >
              <Text
                style={{
                  ...styles.aparaj12,
                  textAlign: "left",
                  marginTop: -10,
                  fontSize: 12,
                  marginLeft: 55,
                }}
              >
                Principal
              </Text>
              <Text
                style={{
                  ...styles.aparaj12,
                  textAlign: "left",
                  fontSize: 12,
                  marginTop: -10,
                  marginRight: 55,
                }}
              >
                Adviser
              </Text>
            </View>

            <Text
              style={{
                ...styles.aparaj14,
                textAlign: "center",
              }}
            >
              CANCELLATION OF ELIGIBILITY TO TRANSFER
            </Text>

            <Text
              style={{
                ...styles.aparaj12,
                textAlign: "left",
                marginTop: 5,
                fontSize: 12,
              }}
            >
              Admitted in: _____________________
            </Text>

            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
                paddingRight: 25,
              }}
            >
              <Text
                style={{
                  ...styles.aparaj12,
                  textAlign: "left",
                  marginTop: 10,
                  fontSize: 12,
                }}
              >
                Date: ___________________________
              </Text>
              <Text
                style={{
                  ...styles.headText,
                  textAlign: "left",
                  marginTop: 10,
                  fontSize: 12,
                }}
              >
                ______________________________
              </Text>
            </View>

            <Text
              style={{
                ...styles.aparaj12,
                textAlign: "right",
                marginTop: -10,
                fontSize: 12,
                marginRight: 75,
              }}
            >
              {" "}
              Principal
            </Text>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default SF9PDF;

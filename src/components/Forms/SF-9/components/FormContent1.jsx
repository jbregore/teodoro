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
import aparaj from "../fonts/aparaj.ttf";
import aparajb from "../fonts/aparajb.ttf";

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

  headText: {
    fontSize: 14,
    fontFamily: "Aparajita Bold",
  },

  headText2: {
    fontSize: 12,
    fontFamily: "Aparajita",
  },

  tableStyle: {
    borderRight: "1.5px solid #000",
    borderTop: "1.5px solid #000",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1.5px solid #000",
  },

  head1: {
    flex: 1,
  },

  head2: {
    flex: 0.8,
  },

  head3: {
    flex: 0.3,
  },

  head4: {
    flex: 0.3,
  },

  quarter: {
    flex: 1,
    borderRight: "1.5px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ohead1: {
    flex: 0.5,
  },

  ohead2: {
    flex: 0.9,
    paddingLeft: 3,
    paddingRight: 3,
  },

  ohead3: {
    flex: 1.3,
  },
});

const SF9PDF = ({ data }) => {
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

  const finalFilipino =
    (Number(data[0].gradeFilipino) +
      Number(data[1].gradeFilipino) +
      Number(data[2].gradeFilipino) +
      Number(data[3].gradeFilipino)) /
    4;
  const remarksFilipino = finalFilipino < 75 ? "Failed" : "Passed";

  const finalEnglish =
    (Number(data[0].gradeEnglish) +
      Number(data[1].gradeEnglish) +
      Number(data[2].gradeEnglish) +
      Number(data[3].gradeEnglish)) /
    4;
  const remarksEnglish = finalEnglish < 75 ? "Failed" : "Passed";

  const finalMath =
    (Number(data[0].gradeMath) +
      Number(data[1].gradeMath) +
      Number(data[2].gradeMath) +
      Number(data[3].gradeMath)) /
    4;
  const remarksMath = finalMath < 75 ? "Failed" : "Passed";

  const finalScience =
    (Number(data[0].gradeScience) +
      Number(data[1].gradeScience) +
      Number(data[2].gradeScience) +
      Number(data[3].gradeScience)) /
    4;
  const remarksScience = finalScience < 75 ? "Failed" : "Passed";

  const finalAP =
    (Number(data[0].gradeAP) +
      Number(data[1].gradeAP) +
      Number(data[2].gradeAP) +
      Number(data[3].gradeAP)) /
    4;
  const remarksAP = finalAP < 75 ? "Failed" : "Passed";

  const subject = [
    {
      subject: "Filipino",
      q1: data[0].gradeFilipino ? Math.round(data[0].gradeFilipino) : " ",
      q2: data[1].gradeFilipino ? Math.round(data[1].gradeFilipino) : " ",
      q3: data[2].gradeFilipino ? Math.round(data[2].gradeFilipino) : " ",
      q4: data[3].gradeFilipino ? Math.round(data[3].gradeFilipino) : " ",
      final: data[3].gradeFilipino ? Math.round(finalFilipino) : " ",
      remarks: data[3].gradeFilipino ? remarksFilipino : " ",
    },
    {
      subject: "English",
      q1: data[0].gradeEnglish ? Math.round(data[0].gradeEnglish) : " ",
      q2: data[1].gradeEnglish ? Math.round(data[1].gradeEnglish) : " ",
      q3: data[2].gradeEnglish ? Math.round(data[2].gradeEnglish) : " ",
      q4: data[3].gradeEnglish ? Math.round(data[3].gradeEnglish) : " ",
      final: data[3].gradeEnglish ? Math.round(finalEnglish) : " ",
      remarks: data[3].gradeEnglish ? remarksEnglish : " ",
    },
    {
      subject: "Mathematics",
      q1: data[0].gradeMath ? Math.round(data[0].gradeMath) : " ",
      q2: data[1].gradeMath ? Math.round(data[1].gradeMath) : " ",
      q3: data[2].gradeMath ? Math.round(data[2].gradeMath) : " ",
      q4: data[3].gradeMath ? Math.round(data[3].gradeMath) : " ",
      final: data[3].gradeMath ? Math.round(finalMath) : " ",
      remarks: data[3].gradeMath ? remarksMath : " ",
    },
    {
      subject: "Science",
      q1: data[0].gradeScience ? Math.round(data[0].gradeScience) : " ",
      q2: data[1].gradeScience ? Math.round(data[1].gradeScience) : " ",
      q3: data[2].gradeScience ? Math.round(data[2].gradeScience) : " ",
      q4: data[3].gradeScience ? Math.round(data[3].gradeScience) : " ",
      final: data[3].gradeScience ? Math.round(finalScience) : " ",
      remarks: data[3].gradeScience ? remarksScience : " ",
    },
    {
      subject: "Araling Panlipunan (AP)",
      q1: data[0].gradeAP ? Math.round(data[0].gradeAP) : " ",
      q2: data[1].gradeAP ? Math.round(data[1].gradeAP) : " ",
      q3: data[2].gradeAP ? Math.round(data[2].gradeAP) : " ",
      q4: data[3].gradeAP ? Math.round(data[3].gradeAP) : " ",
      final: data[3].gradeAP ? Math.round(finalAP) : " ",
      remarks: data[3].gradeAP ? remarksAP : " ",
    },
  ];

  const finalEsP =
    (Number(data[0].gradeEsP) +
      Number(data[1].gradeEsP) +
      Number(data[2].gradeEsP) +
      Number(data[3].gradeEsP)) /
    4;
  const remarksEsp = finalEsP < 75 ? "Failed" : "Passed";

  const finalTLE =
    (Number(data[0].gradeTLE) +
      Number(data[1].gradeTLE) +
      Number(data[2].gradeTLE) +
      Number(data[3].gradeTLE)) /
    4;
  const remarksTLE = finalTLE < 75 ? "Failed" : "Passed";

  const subjectWide = [
    {
      subject: "Edukasyon sa Pagpapakatao \n (EsP)",
      q1: data[0].gradeEsP ? Math.round(data[0].gradeEsP) : " ",
      q2: data[1].gradeEsP ? Math.round(data[1].gradeEsP) : " ",
      q3: data[2].gradeEsP ? Math.round(data[2].gradeEsP) : " ",
      q4: data[3].gradeEsP ? Math.round(data[3].gradeEsP) : " ",
      final: data[3].gradeEsP ? Math.round(finalEsP) : " ",
      remarks: data[3].gradeEsP ? remarksEsp : " ",
    },
    {
      subject: "Technology Livelihood Education (TLE)",
      q1: data[0].gradeTLE ? Math.round(data[0].gradeTLE) : " ",
      q2: data[1].gradeTLE ? Math.round(data[1].gradeTLE) : " ",
      q3: data[2].gradeTLE ? Math.round(data[2].gradeTLE) : " ",
      q4: data[3].gradeTLE ? Math.round(data[3].gradeTLE) : " ",
      final: data[3].gradeTLE ? Math.round(finalTLE) : " ",
      remarks: data[3].gradeTLE ? remarksTLE : " ",
    },
  ];

  const finalMapeh =
    (Number(data[0].gradeMapeh) +
      Number(data[1].gradeMapeh) +
      Number(data[2].gradeMapeh) +
      Number(data[3].gradeMapeh)) /
    4;
  const remarksMapeh = finalMapeh < 75 ? "Failed" : "Passed";

  const MAPEH = {
    subject: "MAPEH",
    q1: data[0].gradeMapeh ? Math.round(data[0].gradeMapeh) : " ",
    q2: data[1].gradeMapeh ? Math.round(data[1].gradeMapeh) : " ",
    q3: data[2].gradeMapeh ? Math.round(data[2].gradeMapeh) : " ",
    q4: data[3].gradeMapeh ? Math.round(data[3].gradeMapeh) : " ",
    final: data[3].gradeMapeh ? Math.round(finalMapeh) : " ",
    remarks: data[3].gradeMapeh ? remarksMapeh : " ",
  };

  const finalMusic =
    (Number(data[0].gradeMusic) +
      Number(data[1].gradeMusic) +
      Number(data[2].gradeMusic) +
      Number(data[3].gradeMusic)) /
    4;
  const remarksMusic = finalMusic < 75 ? "Failed" : "Passed";

  const finalArt =
    (Number(data[0].gradeArt) +
      Number(data[1].gradeArt) +
      Number(data[2].gradeArt) +
      Number(data[3].gradeArt)) /
    4;
  const remarksArt = finalArt < 75 ? "Failed" : "Passed";

  const finalPE =
    (Number(data[0].gradePE) +
      Number(data[1].gradePE) +
      Number(data[2].gradePE) +
      Number(data[3].gradePE)) /
    4;
  const remarksPE = finalPE < 75 ? "Failed" : "Passed";

  const finalHealth =
    (Number(data[0].gradeHealth) +
      Number(data[1].gradeHealth) +
      Number(data[2].gradeHealth) +
      Number(data[3].gradeHealth)) /
    4;
  const remarksHealth = finalHealth < 75 ? "Failed" : "Passed";

  const mapehList = [
    {
      subject: "Music",
      q1: data[0].gradeMusic ? Math.round(data[0].gradeMusic) : " ",
      q2: data[1].gradeMusic ? Math.round(data[1].gradeMusic) : " ",
      q3: data[2].gradeMusic ? Math.round(data[2].gradeMusic) : " ",
      q4: data[3].gradeMusic ? Math.round(data[3].gradeMusic) : " ",
      final: data[3].gradeMusic ? Math.round(finalMusic) : " ",
      remarks: data[3].gradeMusic ? remarksMusic : " ",
    },
    {
      subject: "Arts",
      q1: data[0].gradeArt ? Math.round(data[0].gradeArt) : " ",
      q2: data[1].gradeArt ? Math.round(data[1].gradeArt) : " ",
      q3: data[2].gradeArt ? Math.round(data[2].gradeArt) : " ",
      q4: data[3].gradeArt ? Math.round(data[3].gradeArt) : " ",
      final: data[3].gradeArt ? Math.round(finalArt) : " ",
      remarks: data[3].gradeArt ? remarksArt : " ",
    },
    {
      subject: "Physical Education",
      q1: data[0].gradePE ? Math.round(data[0].gradePE) : " ",
      q2: data[1].gradePE ? Math.round(data[1].gradePE) : " ",
      q3: data[2].gradePE ? Math.round(data[2].gradePE) : " ",
      q4: data[3].gradePE ? Math.round(data[3].gradePE) : " ",
      final: data[3].gradePE ? Math.round(finalPE) : " ",
      remarks: data[3].gradePE ? remarksPE : " ",
    },
    {
      subject: "Health",
      q1: data[0].gradeHealth ? Math.round(data[0].gradeHealth) : " ",
      q2: data[1].gradeHealth ? Math.round(data[1].gradeHealth) : " ",
      q3: data[2].gradeHealth ? Math.round(data[2].gradeHealth) : " ",
      q4: data[3].gradeHealth ? Math.round(data[3].gradeHealth) : " ",
      final: data[3].gradeHealth ? Math.round(finalHealth) : " ",
      remarks: data[3].gradeHealth ? remarksHealth : " ",
    },
    // "Music", "Arts", "Physical Education", "Health"
  ];

  const generalAve =
    (finalFilipino +
      finalEnglish +
      finalMath +
      finalScience +
      finalAP +
      finalEsP +
      finalTLE +
      finalMapeh) /
    8;

  const generalRemarks = generalAve < 75 ? "Failed" : "Promoted";

  return (
    <Page size="LETTER" orientation="landscape" style={styles.page}>
      <View style={styles.container}>
        <View style={{ flex: 1, marginRight: 20, marginTop: -20 }}>
          <Text style={{ ...styles.headText, textAlign: "center" }}>
            REPORT ON LEARNING PROGRESS AND ACHIEVEMENT
          </Text>

           <View
            style={{
              ...styles.container,
              marginTop: 15,
              marginBottom: 0,
              borderLeft: "1.5px solid #000s",
            }}
          >
            <View style={{ ...styles.tableStyle, ...styles.head1 }}>
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Learning Areas
              </Text>
            </View>
            <View style={{ ...styles.tableStyle, ...styles.head2 }}>
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Quarter
              </Text>
              <View
                style={{
                  ...styles.container,
                  marginTop: 5,
                  marginBottom: 0,
                  borderTop: "1.5px solid #000",
                  height: 20,
                }}
              >
                <View style={{ ...styles.quarter }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    1
                  </Text>
                </View>
                <View style={{ ...styles.quarter }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    2
                  </Text>
                </View>
                <View style={{ ...styles.quarter }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    3
                  </Text>
                </View>
                <View style={{ ...styles.quarter, borderRight: "none" }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    4
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ ...styles.tableStyle, ...styles.head3 }}>
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Final
              </Text>
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Rating
              </Text>
            </View>
            <View style={{ ...styles.tableStyle, ...styles.head4 }}>
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Remarks
              </Text>
            </View>
          </View>

          {subject.map((item, index) => (
            <View
              style={{
                ...styles.container,
                borderLeft: "1.5px solid #000",
                marginBottom: 0,
              }}
              key={index}
            >
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head1,
                  borderTop: "none",
                  alignItems: "flex-start",
                }}
              >
                <Text style={{ ...styles.headText2, marginLeft: 2 }}>
                  {item.subject}
                </Text>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head2,
                  borderTop: "none",
                }}
              >
                <View
                  style={{
                    ...styles.container,
                    marginBottom: 0,
                    height: 20,
                  }}
                >
                  <View style={{ ...styles.quarter }}>
                    <Text style={{ ...styles.headText2 }}>{item.q1}</Text>
                  </View>
                  <View style={{ ...styles.quarter }}>
                    <Text style={{ ...styles.headText2 }}>{item.q2}</Text>
                  </View>
                  <View style={{ ...styles.quarter }}>
                    <Text style={{ ...styles.headText2 }}>{item.q3}</Text>
                  </View>
                  <View style={{ ...styles.quarter, borderRight: "none" }}>
                    <Text style={{ ...styles.headText2 }}>{item.q4}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head3,
                  borderTop: "none",
                }}
              >
                <Text style={{ ...styles.headText2 }}>{item.final}</Text>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head4,
                  borderTop: "none",
                }}
              >
                <Text style={{ ...styles.headText2 }}>{item.remarks}</Text>
              </View>
            </View>
          ))}

          {subjectWide.map((item, index) => (
            <View
              style={{
                ...styles.container,
                borderLeft: "1.5px solid #000",
                marginBottom: 0,
              }}
              key={index}
            >
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head1,
                  borderTop: "none",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    ...styles.headText2,
                    marginLeft: 2,
                    textAlign: "left",
                  }}
                >
                  {item.subject}
                </Text>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head2,
                  borderTop: "none",
                }}
              >
                <View
                  style={{
                    ...styles.container,
                    marginBottom: 0,
                    height: 35,
                  }}
                >
                  <View style={{ ...styles.quarter }}>
                    <Text style={{ ...styles.headText2 }}>{item.q1}</Text>
                  </View>
                  <View style={{ ...styles.quarter }}>
                    <Text style={{ ...styles.headText2 }}>{item.q2}</Text>
                  </View>
                  <View style={{ ...styles.quarter }}>
                    <Text style={{ ...styles.headText2 }}>{item.q3}</Text>
                  </View>
                  <View style={{ ...styles.quarter, borderRight: "none" }}>
                    <Text style={{ ...styles.headText2 }}>{item.q4}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head3,
                  borderTop: "none",
                }}
              >
                <Text style={{ ...styles.headText2 }}>{item.final}</Text>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head4,
                  borderTop: "none",
                }}
              >
                <Text style={{ ...styles.headText2 }}>{item.remarks}</Text>
              </View>
            </View>
          ))}

          <View
            style={{
              ...styles.container,
              borderLeft: "1.5px solid #000",
              marginBottom: 0,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head1,
                borderTop: "none",
                alignItems: "flex-start",
                borderBottom: "none",
              }}
            >
              <Text style={{ ...styles.headText2, marginLeft: 2 }}>
                {MAPEH.subject}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head2,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 20,
                }}
              >
                <View style={{ ...styles.quarter }}>
                  <Text style={{ ...styles.headText2 }}>{MAPEH.q1}</Text>
                </View>
                <View style={{ ...styles.quarter }}>
                  <Text style={{ ...styles.headText2 }}>{MAPEH.q2}</Text>
                </View>
                <View style={{ ...styles.quarter }}>
                  <Text style={{ ...styles.headText2 }}>{MAPEH.q3}</Text>
                </View>
                <View style={{ ...styles.quarter, borderRight: "none" }}>
                  <Text style={{ ...styles.headText2 }}>{MAPEH.q4}</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                ...styles.head3,
                borderTop: "none",
              }}
            >
              <Text style={{ ...styles.headText2 }}>{MAPEH.final}</Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head4,
                borderTop: "none",
              }}
            >
              <Text style={{ ...styles.headText2 }}>{MAPEH.remarks}</Text>
            </View>
          </View>

          {mapehList.map((item, index) => (
            <View
              style={{
                ...styles.container,
                borderLeft: "1.5px solid #000",
                marginBottom: 0,
              }}
              key={index}
            >
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head1,
                  borderTop: "none",
                  alignItems: "flex-start",
                  borderBottom: index === 3 ? "1.5px solid #000" : "none",
                }}
              >
                <Text style={{ ...styles.headText2, marginLeft: 20 }}>
                  {item.subject}
                </Text>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head2,
                  borderTop: "none",
                }}
              >
                <View
                  style={{
                    ...styles.container,
                    marginBottom: 0,
                    height: 20,
                  }}
                >
                  <View style={{ ...styles.quarter, justifyContent: 'flex-start',
              alignItems: 'flex-start' }}>
                    <Text style={{ ...styles.headText2, marginLeft: 4 }}>{item.q1}</Text>
                  </View>
                  <View style={{ ...styles.quarter,justifyContent: 'flex-start',
              alignItems: 'flex-start' }}>
                    <Text style={{ ...styles.headText2, marginLeft: 4 }}>{item.q2}</Text>
                  </View>
                  <View style={{ ...styles.quarter,justifyContent: 'flex-start',
              alignItems: 'flex-start' }}>
                    <Text style={{ ...styles.headText2, marginLeft: 4 }}>{item.q3}</Text>
                  </View>
                  <View style={{ ...styles.quarter, justifyContent: 'flex-start',
              alignItems: 'flex-start', borderRight: "none" }}>
                    <Text style={{ ...styles.headText2, marginLeft: 4 }}>{item.q4}</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head3,
                  borderTop: "none",
                  borderBottom: "1.5px solid #000",
                  justifyContent: 'flex-start',
              alignItems: 'flex-start'
                }}
              >
                <Text style={{ ...styles.headText2,
                marginLeft: 4}}>{item.final}</Text>
              </View>
              <View
                style={{
                  ...styles.tableStyle,
                  ...styles.head4,
                  borderTop: "none",
                }}
              >
                <Text style={{ ...styles.headText2 }}>{item.remarks}</Text>
              </View>
            </View>
          ))}

          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              height: 20,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head1,
                borderTop: "none",
                borderBottom: "none",
                alignItems: "flex-start",
              }}
            ></View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  fontFamily: "Aparajita Bold",
                  marginLeft: 2,
                }}
              >
                General Average
              </Text>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                ...styles.head3,
                borderTop: "none",
              }}
            >
              <Text style={{ ...styles.headText2 }}>
                {MAPEH.final !== " " ? Math.round(generalAve) : " "}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head4,
                borderTop: "none",
              }}
            >
              <Text style={{ ...styles.headText2 }}>
                {MAPEH.final !== " " ? generalRemarks : " "}
              </Text>
            </View>
          </View> 

          <View
            style={{
              ...styles.container,
              width: 280,
              marginBottom: 0,
              marginTop: 5,
              height: 20,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                // ...styles.head1,
                flex: 2.3,
                borderTop: "1.5px solid #000",
                borderLeft: '1.5px solid #000',
                borderBottom: 'none',
                justifyContent: "flex-end",
                alignItems: 'center',
                marginBottom: -10
              }}
            >
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Learning Modality
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "1.5px solid #000",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Q1
              </Text>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "1.5px solid #000",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Q2
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "1.5px solid #000",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Q3
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "1.5px solid #000",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Q4
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.container,
              width: 280,
              marginBottom: 10,
              height: 25,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                // ...styles.head1,
                flex: 2.3,
                borderTop: "none",
                borderLeft: '1.5px solid #000',
                justifyContent: "flex-end",
                alignItems: 'center'
              }}
            >
            </View>
            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "none",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontSize: 9}}
              >
                {`Modular \n (Print)`}
              </Text>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "none",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontSize: 9}}
              >
                {`Modular \n (Print)`}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "none",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontSize: 9 }}
              >
                {`Modular \n (Print)`}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                flex: 1,
                borderTop: "none",
              }}
            >
              <Text
                style={{ ...styles.headText2, fontSize: 9}}
              >
                {`Modular \n (Print)`}
              </Text>
            </View>
          </View>

          <View
            style={{
              ...styles.container,
              marginBottom: 0,
            }}
          >
            <View style={{ flex: 1.3 }}>
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: 5,
                  fontFamily: "Aparajita Bold",
                }}
              >
                Descriptors
              </Text>
              <Text style={{ ...styles.headText2 }}>Outstanding</Text>
              <Text style={{ ...styles.headText2 }}>Very Satisfactory</Text>
              <Text style={{ ...styles.headText2 }}>Satisfactory </Text>
              <Text style={{ ...styles.headText2 }}>Fairly Satisfactory</Text>
              <Text style={{ ...styles.headText2 }}>
                Did Not Meet Expectations
              </Text>
            </View>
            <View style={{ flex: 0.8, textAlign: "center" }}>
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: 5,
                  fontFamily: "Aparajita Bold",
                }}
              >
                Grading Scale
              </Text>
              <Text style={{ ...styles.headText2 }}>90-100</Text>
              <Text style={{ ...styles.headText2 }}>85-89</Text>
              <Text style={{ ...styles.headText2 }}>80-84</Text>
              <Text style={{ ...styles.headText2 }}>75-79</Text>
              <Text style={{ ...styles.headText2 }}>Below 75</Text>
            </View>
            <View style={{ flex: 0.7, textAlign: "center" }}>
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: 5,
                  fontFamily: "Aparajita Bold",
                }}
              >
                Remarks
              </Text>
              <Text style={{ ...styles.headText2 }}>Passed</Text>
              <Text style={{ ...styles.headText2 }}>Passed</Text>
              <Text style={{ ...styles.headText2 }}>Passed </Text>
              <Text style={{ ...styles.headText2 }}>Passed</Text>
              <Text style={{ ...styles.headText2 }}>Failed</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={{ ...styles.headText, textAlign: "center" }}>
            REPORT ON LEARNER'S OBSERVES VALUES
          </Text>

          <View
            style={{
              ...styles.container,
              marginTop: 15,
              marginBottom: 0,
              borderLeft: "1.5px solid #000s",
            }}
          >
            <View style={{ ...styles.tableStyle, ...styles.ohead1 }}>
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Core Values
              </Text>
            </View>
            <View style={{ ...styles.tableStyle, ...styles.ohead2 }}>
              <Text
                style={{ ...styles.headText2, fontFamily: "Aparajita Bold" }}
              >
                Behavior Statements
              </Text>
            </View>
            <View style={{ ...styles.tableStyle, ...styles.ohead3 }}>
              <Text
                style={{
                  ...styles.headText2,
                  marginTop: 2,
                  fontFamily: "Aparajita Bold",
                }}
              >
                Quarter
              </Text>
              <View
                style={{
                  ...styles.container,
                  marginTop: 5,
                  marginBottom: 0,
                  borderTop: "1.5px solid #000",
                  height: 20,
                }}
              >
                <View style={{ ...styles.quarter }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    1
                  </Text>
                </View>
                <View style={{ ...styles.quarter }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    2
                  </Text>
                </View>
                <View style={{ ...styles.quarter }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    3
                  </Text>
                </View>
                <View style={{ ...styles.quarter, borderRight: "none" }}>
                  <Text
                    style={{
                      ...styles.headText2,
                      fontFamily: "Aparajita Bold",
                    }}
                  >
                    4
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* makadiyos */}
          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderLeft: "1.5px solid #000",
              height: 40,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead1,
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: -30,
                  fontFamily: "Aparajita Bold",
                  fontSize: 14,
                }}
              >
                1. MakaDiyos
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  textAlign: "left",
                  fontSize: 10,
                  marginLeft: 3,
                }}
              >
                Expresses one’s spiritual beliefs while respecting the spiritual
                beliefs of others.
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead3,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 40,
                }}
              >
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter, borderRight: "none" }}></View>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderLeft: "1.5px solid #000",
              height: 40,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead1,
                borderTop: "none",
              }}
            ></View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  textAlign: "left",
                  fontSize: 10,
                  marginLeft: 3,
                }}
              >
                Shows adherence to ethical principles by upholding truth in all
                undertakings.
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead3,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 40,
                }}
              >
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter, borderRight: "none" }}></View>
              </View>
            </View>
          </View>

          {/* makatao */}
          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderLeft: "1.5px solid #000",
              height: 40,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead1,
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: -30,
                  fontFamily: "Aparajita Bold",
                  fontSize: 14,
                }}
              >
                2.Makatao
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  textAlign: "left",
                  fontSize: 10,
                  marginLeft: 3,
                }}
              >
                In sensitive to individual, social, and cultural diffrences;
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead3,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 40,
                }}
              >
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter, borderRight: "none" }}></View>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderLeft: "1.5px solid #000",
              height: 40,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead1,
                borderTop: "none",
              }}
            ></View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  textAlign: "left",
                  fontSize: 10,
                  marginLeft: 3,
                }}
              >
                Demonstrates contributions towards solidarity.
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead3,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 40,
                }}
              >
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter, borderRight: "none" }}></View>
              </View>
            </View>
          </View>

          {/* makakalikasan */}
          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderLeft: "1.5px solid #000",
              height: 40,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead1,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  fontFamily: "Aparajita Bold",
                  fontSize: 14,
                }}
              >
                3. MakaKalikasan
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  textAlign: "left",
                  fontSize: 10,
                  marginLeft: 3,
                }}
              >
                Cares for environment and utilizes resources wisely, judiciosly
                and economically.
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead3,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 40,
                }}
              >
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter, borderRight: "none" }}></View>
              </View>
            </View>
          </View>

          {/* makabansa */}
          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderLeft: "1.5px solid #000",
              height: 40,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead1,
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: -30,
                  fontFamily: "Aparajita Bold",
                  fontSize: 14,
                }}
              >
                4. MakaBansa
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  textAlign: "left",
                  fontSize: 10,
                  marginLeft: 3,
                }}
              >
                Demonstrates pride in being a Filipino;exercises the rights and
                responsibilities of a Filipino citizen.
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead3,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 40,
                }}
              >
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter, borderRight: "none" }}></View>
              </View>
            </View>
          </View>

          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderLeft: "1.5px solid #000",
              height: 40,
            }}
          >
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead1,
                borderTop: "none",
              }}
            ></View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead2,
                borderTop: "none",
              }}
            >
              <Text
                style={{
                  ...styles.headText2,
                  textAlign: "left",
                  fontSize: 10,
                  marginLeft: 3,
                }}
              >
                Demonstrate appropriate behavior in carrying out activities in
                school, community and country
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.ohead3,
                borderTop: "none",
              }}
            >
              <View
                style={{
                  ...styles.container,
                  marginBottom: 0,
                  height: 40,
                }}
              >
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter }}></View>
                <View style={{ ...styles.quarter, borderRight: "none" }}></View>
              </View>
            </View>
          </View>

          <View style={{ ...styles.container, marginTop: 40 }}>
            <View style={{ flex: 0.87, textAlign: "center" }}>
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: 5,
                  fontFamily: "Aparajita Bold",
                }}
              >
                Marking
              </Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>AO</Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>SO</Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>RO</Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>NO</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  ...styles.headText2,
                  marginBottom: 5,
                  fontFamily: "Aparajita Bold",
                }}
              >
                Non- Numerical Rating
              </Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>
                Always Observed
              </Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>
                Sometimes Observed
              </Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>
                Rarely Observed
              </Text>
              <Text style={{ ...styles.headText2, marginBottom: 5 }}>
                Not Observed
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default SF9PDF;

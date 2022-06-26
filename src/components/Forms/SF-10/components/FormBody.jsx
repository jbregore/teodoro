import React, { useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import calibri from "../fonts/calibri-regular.ttf";
import calibrib from "../fonts/calibri-bold.ttf";
import calibrii from "../fonts/calibri-italic.ttf";

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

  calibrib8: {
    fontSize: 8,
    fontFamily: "Calibri Bold",
  },

  calibri10: {
    fontSize: 10,
    fontFamily: "Calibri",
  },

  calibrii10: {
    fontSize: 10,
    fontFamily: "Calibri Italic",
  },

  calibrib10: {
    fontSize: 8.5,
    fontFamily: "Calibri Bold",
  },

  tableStyle: {
    borderRight: "1px solid #000",
    borderTop: "1px solid #000",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1px solid #000",
  },

  head1: {
    flex: 1,
  },

  head2: {
    flex: 0.9,
  },

  head3: {
    flex: 0.3,
  },

  head4: {
    flex: 0.3,
  },

  quarter: {
    flex: 1,
    borderRight: "1px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ScholasticRow = ({ title, value }) => {
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

const CertificationRow = ({ title }) => {
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
          {title}{" "}
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
            ...styles.calibrib10,
            textAlign: "left",
            paddingLeft: 5,
            marginBottom: -3,
          }}
        ></Text>
      </View>
    </View>
  );
};

const Scholastic = ({ data }) => {
  return (
    <View>

      {data ? (
        <View style={{ ...styles.container }}>
        <View style={{ flex: 1 }}>
          <ScholasticRow
            title="School"
            value="TEODORO EVANGELISTA MEMORIAL HIGH SCHOOL"
          />
        </View>
        <View style={{ flex: 0.4 }}>
          <ScholasticRow title="School ID" value="306717" />
        </View>
        <View style={{ flex: 0.24 }}>
          <ScholasticRow title="District" value="II" />
        </View>
        <View style={{ flex: 0.35 }}>
          <ScholasticRow title="Division" value="BULACAN" />
        </View>
        <View style={{ flex: 0.24 }}>
          <ScholasticRow title="Region" value="III" />
        </View>
      </View>
      ) : (
        <View style={{ ...styles.container }}>
        <View style={{ flex: 1 }}>
          <ScholasticRow
            title="School"
          />
        </View>
        <View style={{ flex: 0.4 }}>
          <ScholasticRow title="School ID"  />
        </View>
        <View style={{ flex: 0.24 }}>
          <ScholasticRow title="District" />
        </View>
        <View style={{ flex: 0.35 }}>
          <ScholasticRow title="Division"  />
        </View>
        <View style={{ flex: 0.24 }}>
          <ScholasticRow title="Region"  />
        </View>
      </View>
      )}
      



      <View style={{ ...styles.container, marginTop: 4 }}>
        <View style={{ flex: 0.3 }}>
          <ScholasticRow title="Grade" value={data?.studentGrade ? data?.studentGrade : " " } />
        </View>
        <View style={{ flex: 0.5 }}>
          <ScholasticRow title="Section" value={data?.studentSection ? data?.studentSection.toUpperCase() : " "} />
        </View>
        <View style={{ flex: 0.5 }}>
          <ScholasticRow title="School Year" value={data?.studentSchoolYear ? data?.studentSchoolYear : " "} />
        </View>
        <View style={{ flex: 0.8 }}>
          <ScholasticRow title="Adviser" value={data?.facultyName ? data?.facultyName.toUpperCase() : " "}/>
        </View>
        <View style={{ flex: 0.5 }}>
          <ScholasticRow title="Signature" />
        </View>
      </View>
    </View>
  );
};

const Grade = ({ data }) => {
  // console.log(data);
  const finalFilipino =
    (Number(data[0]?.gradeFilipino) +
      Number(data[1]?.gradeFilipino) +
      Number(data[2]?.gradeFilipino) +
      Number(data[3]?.gradeFilipino)) /
    4;
  const remarksFilipino = finalFilipino < 75 ? "Failed" : "Passed";

  const finalEnglish =
    (Number(data[0]?.gradeEnglish) +
      Number(data[1]?.gradeEnglish) +
      Number(data[2]?.gradeEnglish) +
      Number(data[3]?.gradeEnglish)) /
    4;
  const remarksEnglish = finalEnglish < 75 ? "Failed" : "Passed";

  const finalMath =
    (Number(data[0]?.gradeMath) +
      Number(data[1]?.gradeMath) +
      Number(data[2]?.gradeMath) +
      Number(data[3]?.gradeMath)) /
    4;
  const remarksMath = finalMath < 75 ? "Failed" : "Passed";

  const finalScience =
    (Number(data[0]?.gradeScience) +
      Number(data[1]?.gradeScience) +
      Number(data[2]?.gradeScience) +
      Number(data[3]?.gradeScience)) /
    4;
  const remarksScience = finalScience < 75 ? "Failed" : "Passed";

  const finalAP =
    (Number(data[0]?.gradeAP) +
      Number(data[1]?.gradeAP) +
      Number(data[2]?.gradeAP) +
      Number(data[3]?.gradeAP)) /
    4;
  const remarksAP = finalAP < 75 ? "Failed" : "Passed";

  const finalEsP =
    (Number(data[0]?.gradeEsP) +
      Number(data[1]?.gradeEsP) +
      Number(data[2]?.gradeEsP) +
      Number(data[3]?.gradeEsP)) /
    4;
  const remarksEsp = finalEsP < 75 ? "Failed" : "Passed";

  const finalTLE =
    (Number(data[0]?.gradeTLE) +
      Number(data[1]?.gradeTLE) +
      Number(data[2]?.gradeTLE) +
      Number(data[3]?.gradeTLE)) /
    4;
  const remarksTLE = finalTLE < 75 ? "Failed" : "Passed";

  const finalMapeh =
    (Number(data[0]?.gradeMapeh) +
      Number(data[1]?.gradeMapeh) +
      Number(data[2]?.gradeMapeh) +
      Number(data[3]?.gradeMapeh)) /
    4;
  const remarksMapeh = finalMapeh < 75 ? "Failed" : "Passed";

  const subject = [
    {
      subject: "Filipino",
      q1: data[0]?.gradeFilipino ? Math.round(data[0]?.gradeFilipino) : " ",
      q2: data[1]?.gradeFilipino ? Math.round(data[1]?.gradeFilipino) : " ",
      q3: data[2]?.gradeFilipino ? Math.round(data[2]?.gradeFilipino) : " ",
      q4: data[3]?.gradeFilipino ? Math.round(data[3]?.gradeFilipino) : " ",
      final: data[3]?.gradeFilipino ? Math.round(finalFilipino) : " ",
      remarks: data[3]?.gradeFilipino ? remarksFilipino : " ",
    },
    {
      subject: "English",
      q1: data[0]?.gradeEnglish ? Math.round(data[0]?.gradeEnglish) : " ",
      q2: data[1]?.gradeEnglish ? Math.round(data[1]?.gradeEnglish) : " ",
      q3: data[2]?.gradeEnglish ? Math.round(data[2]?.gradeEnglish) : " ",
      q4: data[3]?.gradeEnglish ? Math.round(data[3]?.gradeEnglish) : " ",
      final: data[3]?.gradeEnglish ? Math.round(finalEnglish) : " ",
      remarks: data[3]?.gradeEnglish ? remarksEnglish : " ",
    },
    {
      subject: "Mathematics",
      q1: data[0]?.gradeMath ? Math.round(data[0]?.gradeMath) : " ",
      q2: data[1]?.gradeMath ? Math.round(data[1]?.gradeMath) : " ",
      q3: data[2]?.gradeMath ? Math.round(data[2]?.gradeMath) : " ",
      q4: data[3]?.gradeMath ? Math.round(data[3]?.gradeMath) : " ",
      final: data[3]?.gradeMath ? Math.round(finalMath) : " ",
      remarks: data[3]?.gradeMath ? remarksMath : " ",
    },
    {
      subject: "Science",
      q1: data[0]?.gradeScience ? Math.round(data[0]?.gradeScience) : " ",
      q2: data[1]?.gradeScience ? Math.round(data[1]?.gradeScience) : " ",
      q3: data[2]?.gradeScience ? Math.round(data[2]?.gradeScience) : " ",
      q4: data[3]?.gradeScience ? Math.round(data[3]?.gradeScience) : " ",
      final: data[3]?.gradeScience ? Math.round(finalScience) : " ",
      remarks: data[3]?.gradeScience ? remarksScience : " ",
    },
    {
      subject: "Araling Panlipunan (AP)",
      q1: data[0]?.gradeAP ? Math.round(data[0]?.gradeAP) : " ",
      q2: data[1]?.gradeAP ? Math.round(data[1]?.gradeAP) : " ",
      q3: data[2]?.gradeAP ? Math.round(data[2]?.gradeAP) : " ",
      q4: data[3]?.gradeAP ? Math.round(data[3]?.gradeAP) : " ",
      final: data[3]?.gradeAP ? Math.round(finalAP) : " ",
      remarks: data[3]?.gradeAP ? remarksAP : " ",
    },
    {
      subject: "Edukasyon sa Pagpapakatao (EsP)",
      q1: data[0]?.gradeEsP ? Math.round(data[0]?.gradeEsP) : " ",
      q2: data[1]?.gradeEsP ? Math.round(data[1]?.gradeEsP) : " ",
      q3: data[2]?.gradeEsP ? Math.round(data[2]?.gradeEsP) : " ",
      q4: data[3]?.gradeEsP ? Math.round(data[3]?.gradeEsP) : " ",
      final: data[3]?.gradeEsP ? Math.round(finalEsP) : " ",
      remarks: data[3]?.gradeEsP ? remarksEsp : " ",
    },
    {
      subject: "Technology Livelihood Education (TLE)",
      q1: data[0]?.gradeTLE ? Math.round(data[0]?.gradeTLE) : " ",
      q2: data[1]?.gradeTLE ? Math.round(data[1]?.gradeTLE) : " ",
      q3: data[2]?.gradeTLE ? Math.round(data[2]?.gradeTLE) : " ",
      q4: data[3]?.gradeTLE ? Math.round(data[3]?.gradeTLE) : " ",
      final: data[3]?.gradeTLE ? Math.round(finalTLE) : " ",
      remarks: data[3]?.gradeTLE ? remarksTLE : " ",
    },
    {
      subject: "MAPEH",
      q1: data[0]?.gradeMapeh ? Math.round(data[0]?.gradeMapeh) : " ",
      q2: data[1]?.gradeMapeh ? Math.round(data[1]?.gradeMapeh) : " ",
      q3: data[2]?.gradeMapeh ? Math.round(data[2]?.gradeMapeh) : " ",
      q4: data[3]?.gradeMapeh ? Math.round(data[3]?.gradeMapeh) : " ",
      final: data[3]?.gradeMapeh ? Math.round(finalMapeh) : " ",
      remarks: data[3]?.gradeMapeh ? remarksMapeh : " ",
    },
  ];

  const finalMusic =
    (Number(data[0]?.gradeMusic) +
      Number(data[1]?.gradeMusic) +
      Number(data[2]?.gradeMusic) +
      Number(data[3]?.gradeMusic)) /
    4;
  const remarksMusic = finalMusic < 75 ? "Failed" : "Passed";

  const finalArt =
    (Number(data[0]?.gradeArt) +
      Number(data[1]?.gradeArt) +
      Number(data[2]?.gradeArt) +
      Number(data[3]?.gradeArt)) /
    4;
  const remarksArt = finalArt < 75 ? "Failed" : "Passed";

  const finalPE =
    (Number(data[0]?.gradePE) +
      Number(data[1]?.gradePE) +
      Number(data[2]?.gradePE) +
      Number(data[3]?.gradePE)) /
    4;
  const remarksPE = finalPE < 75 ? "Failed" : "Passed";

  const finalHealth =
    (Number(data[0]?.gradeHealth) +
      Number(data[1]?.gradeHealth) +
      Number(data[2]?.gradeHealth) +
      Number(data[3]?.gradeHealth)) /
    4;
  const remarksHealth = finalHealth < 75 ? "Failed" : "Passed";

  const mapehList = [
    {
      subject: "Music",
      q1: data[0]?.gradeMusic ? Math.round(data[0]?.gradeMusic) : " ",
      q2: data[1]?.gradeMusic ? Math.round(data[1]?.gradeMusic) : " ",
      q3: data[2]?.gradeMusic ? Math.round(data[2]?.gradeMusic) : " ",
      q4: data[3]?.gradeMusic ? Math.round(data[3]?.gradeMusic) : " ",
      final: data[3]?.gradeMusic ? Math.round(finalMusic) : " ",
      remarks: data[3]?.gradeMusic ? remarksMusic : " ",
    },
    {
      subject: "Arts",
      q1: data[0]?.gradeArt ? Math.round(data[0]?.gradeArt) : " ",
      q2: data[1]?.gradeArt ? Math.round(data[1]?.gradeArt) : " ",
      q3: data[2]?.gradeArt ? Math.round(data[2]?.gradeArt) : " ",
      q4: data[3]?.gradeArt ? Math.round(data[3]?.gradeArt) : " ",
      final: data[3]?.gradeArt ? Math.round(finalArt) : " ",
      remarks: data[3]?.gradeArt ? remarksArt : " ",
    },
    {
      subject: "Physical Education",
      q1: data[0]?.gradePE ? Math.round(data[0]?.gradePE) : " ",
      q2: data[1]?.gradePE ? Math.round(data[1]?.gradePE) : " ",
      q3: data[2]?.gradePE ? Math.round(data[2]?.gradePE) : " ",
      q4: data[3]?.gradePE ? Math.round(data[3]?.gradePE) : " ",
      final: data[3]?.gradePE ? Math.round(finalPE) : " ",
      remarks: data[3]?.gradePE ? remarksPE : " ",
    },
    {
      subject: "Health",
      q1: data[0]?.gradeHealth ? Math.round(data[0]?.gradeHealth) : " ",
      q2: data[1]?.gradeHealth ? Math.round(data[1]?.gradeHealth) : " ",
      q3: data[2]?.gradeHealth ? Math.round(data[2]?.gradeHealth) : " ",
      q4: data[3]?.gradeHealth ? Math.round(data[3]?.gradeHealth) : " ",
      final: data[3]?.gradeHealth ? Math.round(finalHealth) : " ",
      remarks: data[3]?.gradeHealth ? remarksHealth : " ",
    },
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
    <View style={{ borderTop: "1px solid #000", marginTop: 4, paddingTop: 2 }}>
      <View
        style={{
          ...styles.container,
          marginBottom: 0,
        }}
      >
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
        >
          <Text style={{ ...styles.calibrib10 }}>Learning Areas</Text>
        </View>
        <View
          style={{ ...styles.tableStyle, ...styles.head2, borderTop: "none" }}
        >
          <Text style={{ ...styles.calibrib10 }}>Quarter</Text>
          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderTop: "1px solid #000",
              height: 15,
            }}
          >
            <View style={{ ...styles.quarter }}>
              <Text style={{ ...styles.calibrib10 }}>1</Text>
            </View>
            <View style={{ ...styles.quarter }}>
              <Text style={{ ...styles.calibrib10 }}>2</Text>
            </View>
            <View style={{ ...styles.quarter }}>
              <Text style={{ ...styles.calibrib10 }}>3</Text>
            </View>
            <View style={{ ...styles.quarter, borderRight: "none" }}>
              <Text style={{ ...styles.calibrib10 }}>4</Text>
            </View>
          </View>
        </View>
        <View
          style={{ ...styles.tableStyle, ...styles.head3, borderTop: "none" }}
        >
          <Text style={{ ...styles.calibrib10 }}>Final</Text>
          <Text style={{ ...styles.calibrib10 }}>Rating</Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head4,
            borderTop: "none",
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib10 }}>Remarks</Text>
        </View>
      </View>

      {subject.map((item, index) => (
        <View
          style={{
            ...styles.container,
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
              justifyContent: "center",
            }}
          >
            <Text
              style={{ ...styles.calibrib10, marginLeft: 2, marginBottom: -5 }}
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
                height: 12,
              }}
            >
              <View style={{ ...styles.quarter }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginLeft: 2,
                    marginBottom: -5,
                  }}
                >
                  {item.q1}
                </Text>
              </View>
              <View style={{ ...styles.quarter }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginLeft: 2,
                    marginBottom: -5,
                  }}
                >
                  {item.q2}
                </Text>
              </View>
              <View style={{ ...styles.quarter }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginLeft: 2,
                    marginBottom: -5,
                  }}
                >
                  {item.q3}
                </Text>
              </View>
              <View style={{ ...styles.quarter, borderRight: "none" }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginLeft: 2,
                    marginBottom: -5,
                  }}
                >
                  {item.q4}
                </Text>
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
            <Text
              style={{
                ...styles.calibri10,
                marginLeft: 2,
                marginBottom: -5,
              }}
            >
              {item.final}
            </Text>
          </View>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head4,
              borderTop: "none",
              borderRight: "none",
            }}
          >
            <Text
              style={{
                ...styles.calibri10,
                marginLeft: 2,
                marginBottom: -5,
              }}
            >
              {item.remarks}
            </Text>
          </View>
        </View>
      ))}

      {mapehList.map((item, index) => (
        <View
          style={{
            ...styles.container,
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
              justifyContent: "center",
            }}
          >
            <Text
              style={{ ...styles.calibrib10, marginLeft: 10, marginBottom: -5 }}
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
                height: 12,
              }}
            >
              <View style={{ ...styles.quarter,justifyContent: 'flex-start',
              alignItems: 'flex-start' }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginBottom: -5,
                    marginLeft: 5
                  }}
                >
                  {item.q1}
                </Text>
              </View>
              <View style={{ ...styles.quarter,justifyContent: 'flex-start',
              alignItems: 'flex-start' }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginBottom: -5,
                    marginLeft: 5
                  }}
                >
                  {item.q2}
                </Text>
              </View>
              <View style={{ ...styles.quarter,justifyContent: 'flex-start',
              alignItems: 'flex-start' }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginBottom: -5,
                    marginLeft: 5
                  }}
                >
                  {item.q3}
                </Text>
              </View>
              <View style={{ ...styles.quarter, borderRight: "none",
            justifyContent: 'flex-start',
            alignItems: 'flex-start' }}>
                <Text
                  style={{
                    ...styles.calibri10,
                    marginBottom: -5,
                    marginLeft: 5
                  }}
                >
                  {item.q4}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              borderTop: "none",
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              
            }}
          >
            <Text
              style={{
                ...styles.calibri10,
                marginBottom: -5,
                marginLeft: 5
              }}
            >
              {item.final}
            </Text>
          </View>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head4,
              borderTop: "none",
              borderRight: "none",
            }}
          >
            <Text
              style={{
                ...styles.calibri10,
                marginBottom: -5,
              }}
            >
              {item.remarks}
            </Text>
          </View>
        </View>
      ))}

      <View
        style={{
          ...styles.container,
          marginBottom: 0,
        }}
      >
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head1,
            borderTop: "none",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ ...styles.calibrib10, marginLeft: 10, marginBottom: -5 }}
          >
            {" "}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            height: 12,
          }}
        >
          <Text style={{ ...styles.calibrib10, marginBottom: -5 }}>
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
          <Text style={{ ...styles.calibri10, marginBottom: -5 }}>
            {generalAve ? Math.round(generalAve) : " "}
          </Text>
          {/* generalAve
generalRemarks */}
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head4,
            borderTop: "none",
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibri10, marginBottom: -5 }}>
            {generalAve ? generalRemarks : " "}
          </Text>
        </View>
      </View>

      <View
        style={{
          ...styles.container,
          height: 5,
          backgroundColor: "#DDD9C4",
        }}
      ></View>

      <View style={{ ...styles.container, height: 11 }}>
        <View
          style={{
            flex: 0.61,
            ...styles.tableStyle,
          }}
        >
          <Text style={{ ...styles.calibrib8, marginBottom: -3 }}>
            Remedial Classes
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            ...styles.tableStyle,
            textAlign: "left",
            paddingLeft: 4,
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib8, marginBottom: -3 }}>
            Conducted from (mm/dd/yyyy)
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            ...styles.tableStyle,
            textAlign: "left",
            borderLeft: "none",
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib8, marginBottom: -3 }}>
            to (mm/dd/yyyy)
          </Text>
        </View>
      </View>

      <View style={{ ...styles.container }}>
        <View style={{ ...styles.tableStyle, flex: 1, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Learning Areas</Text>
        </View>
        <View style={{ ...styles.tableStyle, width: 91, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Final Rating</Text>
        </View>
        <View style={{ ...styles.tableStyle, width: 100, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Remedial Class Mark</Text>
        </View>
        <View style={{ ...styles.tableStyle, width: 100, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Recomputed Final</Text>
          <Text style={{ ...styles.calibrib10 }}>Grade</Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            width: 130,
            borderTop: "none",
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib10 }}>Remarks</Text>
        </View>
      </View>

      <View style={{ ...styles.container, height: 11 }}>
        <View
          style={{ ...styles.tableStyle, flex: 1, borderTop: "none" }}
        ></View>
        <View
          style={{ ...styles.tableStyle, width: 91, borderTop: "none" }}
        ></View>
        <View
          style={{ ...styles.tableStyle, width: 100, borderTop: "none" }}
        ></View>
        <View
          style={{ ...styles.tableStyle, width: 100, borderTop: "none" }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 130,
            borderTop: "none",
            borderRight: "none",
          }}
        ></View>
      </View>

      <View style={{ ...styles.container, height: 11 }}>
        <View
          style={{
            ...styles.tableStyle,
            flex: 1,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 91,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 100,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 100,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 130,
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",
          }}
        ></View>
      </View>
    </View>
  );
};

const GradeNull = () => {
  const subject = [
    "Filipino",
    "English",
    "Mathematics",
    "Science",
    "Araling Panlipunan (AP)",
    "Edukasyon sa Pagpapakatao (EsP)",
    "Technology and Livelihood Education (TLE)",
    "MAPEH",
  ];

  const mapeh = ["Music", "Arts", "Physical Education", "Health"];

  return (
    <View style={{ border: "1px solid #000", marginTop: 4, marginBottom: 4 }}>
      <View
        style={{
          ...styles.container,
          marginBottom: 0,
        }}
      >
        <View
          style={{ ...styles.tableStyle, ...styles.head1, borderTop: "none" }}
        >
          <Text style={{ ...styles.calibrib10 }}>Learning Areas</Text>
        </View>
        <View
          style={{ ...styles.tableStyle, ...styles.head2, borderTop: "none" }}
        >
          <Text style={{ ...styles.calibrib10 }}>Quarter</Text>
          <View
            style={{
              ...styles.container,
              marginBottom: 0,
              borderTop: "1px solid #000",
              height: 12,
            }}
          >
            <View style={{ ...styles.quarter }}>
              <Text style={{ ...styles.calibrib10 }}>1</Text>
            </View>
            <View style={{ ...styles.quarter }}>
              <Text style={{ ...styles.calibrib10 }}>2</Text>
            </View>
            <View style={{ ...styles.quarter }}>
              <Text style={{ ...styles.calibrib10 }}>3</Text>
            </View>
            <View style={{ ...styles.quarter, borderRight: "none" }}>
              <Text style={{ ...styles.calibrib10 }}>4</Text>
            </View>
          </View>
        </View>
        <View
          style={{ ...styles.tableStyle, ...styles.head3, borderTop: "none" }}
        >
          <Text style={{ ...styles.calibrib10 }}>Final</Text>
          <Text style={{ ...styles.calibrib10 }}>Rating</Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head4,
            borderTop: "none",
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib10 }}>Remarks</Text>
        </View>
      </View>

      {subject.map((item, index) => (
        <View
          style={{
            ...styles.container,
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
              justifyContent: "center",
            }}
          >
            <Text
              style={{ ...styles.calibrib10, marginLeft: 2, marginBottom: -5 }}
            >
              {item}
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
                height: 11,
              }}
            >
              <View style={{ ...styles.quarter }}></View>
              <View style={{ ...styles.quarter }}></View>
              <View style={{ ...styles.quarter }}></View>
              <View style={{ ...styles.quarter, borderRight: "none" }}></View>
            </View>
          </View>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              borderTop: "none",
            }}
          ></View>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head4,
              borderTop: "none",
              borderRight: "none",
            }}
          ></View>
        </View>
      ))}

      {mapeh.map((item, index) => (
        <View
          style={{
            ...styles.container,
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
              justifyContent: "center",
            }}
          >
            <Text
              style={{ ...styles.calibrib10, marginLeft: 10, marginBottom: -5 }}
            >
              {item}
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
                height: 11,
              }}
            >
              <View style={{ ...styles.quarter }}></View>
              <View style={{ ...styles.quarter }}></View>
              <View style={{ ...styles.quarter }}></View>
              <View style={{ ...styles.quarter, borderRight: "none" }}></View>
            </View>
          </View>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              borderTop: "none",
            }}
          ></View>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head4,
              borderTop: "none",
              borderRight: "none",
            }}
          ></View>
        </View>
      ))}

      <View
        style={{
          ...styles.container,
          marginBottom: 0,
        }}
      >
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head1,
            borderTop: "none",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ ...styles.calibrib10, marginLeft: 10, marginBottom: -5 }}
          >
            {" "}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            height: 12,
          }}
        >
          <Text style={{ ...styles.calibrib10, marginBottom: -5 }}>
            General Average
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            borderTop: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head4,
            borderTop: "none",
            borderRight: "none",
          }}
        ></View>
      </View>

      <View
        style={{
          ...styles.container,
          height: 5,
          backgroundColor: "#DDD9C4",
        }}
      ></View>

      <View style={{ ...styles.container, height: 11 }}>
        <View
          style={{
            flex: 0.6,
            ...styles.tableStyle,
          }}
        >
          <Text style={{ ...styles.calibrib8, marginBottom: -3 }}>
            Remedial Classes
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            ...styles.tableStyle,
            textAlign: "left",
            paddingLeft: 4,
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib8, marginBottom: -3 }}>
            Conducted from (mm/dd/yyyy)
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            ...styles.tableStyle,
            textAlign: "left",
            borderLeft: "none",
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib8, marginBottom: -3 }}>
            to (mm/dd/yyyy)
          </Text>
        </View>
      </View>

      <View style={{ ...styles.container }}>
        <View style={{ ...styles.tableStyle, flex: 1, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Learning Areas</Text>
        </View>
        <View style={{ ...styles.tableStyle, width: 91, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Final Rating</Text>
        </View>
        <View style={{ ...styles.tableStyle, width: 95, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Remedial Class Mark</Text>
        </View>
        <View style={{ ...styles.tableStyle, width: 95, borderTop: "none" }}>
          <Text style={{ ...styles.calibrib10 }}>Recomputed Final</Text>
          <Text style={{ ...styles.calibrib10 }}>Grade</Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            width: 130,
            borderTop: "none",
            borderRight: "none",
          }}
        >
          <Text style={{ ...styles.calibrib10 }}>Remarks</Text>
        </View>
      </View>

      <View style={{ ...styles.container, height: 11 }}>
        <View
          style={{ ...styles.tableStyle, flex: 1, borderTop: "none" }}
        ></View>
        <View
          style={{ ...styles.tableStyle, width: 91, borderTop: "none" }}
        ></View>
        <View
          style={{ ...styles.tableStyle, width: 95, borderTop: "none" }}
        ></View>
        <View
          style={{ ...styles.tableStyle, width: 95, borderTop: "none" }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 130,
            borderTop: "none",
            borderRight: "none",
          }}
        ></View>
      </View>

      <View style={{ ...styles.container, height: 11 }}>
        <View
          style={{
            ...styles.tableStyle,
            flex: 1,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 91,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 95,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 95,
            borderTop: "none",
            borderBottom: "none",
          }}
        ></View>
        <View
          style={{
            ...styles.tableStyle,
            width: 130,
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",
          }}
        ></View>
      </View>
    </View>
  );
};

const UnderlineCenter = ({ title, flex }) => {
  return (
    <View
      style={{
        flex: flex,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 7,
        marginLeft: 7,
      }}
    >
      <View
        style={{ height: 8, borderBottom: "0.5px solid #000", width: "100%" }}
      ></View>
      <Text style={{ ...styles.calibri10, textAlign: "center", marginTop: 2 }}>
        {title}
      </Text>
    </View>
  );
};

const Certification = () => {
  return (
    <View style={{ border: "1px solid #000", padding: 5 }}>
      <Text
        style={{ ...styles.calibrib10, textAlign: "center", marginBottom: 10 }}
      >
        CERTIFICATION
      </Text>

      <View style={{ ...styles.container }}>
        <View style={{ flex: 1.3 }}>
          <CertificationRow title="I CERTIFY that this is a true record of" />
        </View>
        <View style={{ flex: 0.4 }}>
          <CertificationRow title="with LRN" />
        </View>
        <View style={{ flex: 1.1 }}>
          <CertificationRow title=" and that he/she is eligible for admission to Grade" />
        </View>
      </View>

      <View style={{ ...styles.container, marginTop: 4 }}>
        <View style={{ flex: 1.2 }}>
          <CertificationRow title="Name of School:" />
        </View>
        <View style={{ flex: 0.7 }}>
          <CertificationRow title="School ID:" />
        </View>
        <View style={{ flex: 1.1 }}>
          <CertificationRow title="Last School Year Attended:" />
        </View>
      </View>

      <View style={{ ...styles.container, marginTop: 15 }}>
        <View style={{ ...styles.container, flex: 1 }}>
          <UnderlineCenter flex={0.6} title="Date" />
          <UnderlineCenter
            flex={1.4}
            title="Name of Principal/School Head over Printed Name"
          />
        </View>

        <View
          style={{
            flex: 0.5,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={{ ...styles.calibri10 }}>(Affix School Seal here)</Text>
        </View>
      </View>
    </View>
  );
};

const FormBody = ({ page, data, grade7Data, grade8Data, grade9Data, grade10Data }) => {
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
    <View>
      {page === 1 ? (
        <>
          <View style={{ border: "1.5px solid #000", paddingTop: 2 }}>
            <Scholastic data={grade7Data && grade7Data ? grade7Data[0] : null} />
            <Grade data={grade7Data} />
          </View>
          <View
            style={{
              border: "1.5px solid #000",
              marginTop: 5,
              marginBottom: 5,
              paddingTop: 2,
            }}
          >
            <Scholastic data={grade8Data && grade8Data ? grade8Data[0] : null} />
            {grade8Data ? (
              <Grade data={grade8Data}/>
            ) : (
              <GradeNull />
            )}
            
          </View>
          <Certification />
        </>
      ) : (
        <>
          <View style={{ border: "1.5px solid #000", paddingTop: 2 }}>
            <Scholastic data={grade9Data && grade9Data ? grade9Data[0] : null} />
            {grade9Data ? (
              <Grade data={grade9Data}/>
            ) : (
              <GradeNull />
            )}
          </View>
          <View
            style={{
              border: "1.5px solid #000",
              marginTop: 5,
              marginBottom: 5,
              paddingTop: 2,
            }}
          >
            {/* <Scholastic /> */}
            <Scholastic data={grade10Data && grade10Data ? grade10Data[0] : null} />
            {grade10Data ? (
              <Grade data={grade10Data}/>
            ) : (
              <GradeNull />
            )}
            {/* <Grade /> */}
          </View>
          <Certification />
          <View style={{ ...styles.container }}>
            <Text style={{ ...styles.calibri10, flex: 1 }}>
              (May add Certification box if needed){" "}
            </Text>
            <Text style={{ ...styles.calibrii10, flex: 1, textAlign: "right" }}>
              SFRT Revised 2017
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default FormBody;

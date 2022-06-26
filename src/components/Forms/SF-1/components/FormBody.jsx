import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import roboto from "../fonts/roboto.ttf";
import robotoBold from "../fonts/roboto-bold.ttf";
import FormFooter from "./FormFooter";

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
    width: 15,
  },

  head2: {
    width: 50,
    borderLeft: "1px solid #555",
  },

  head3: {
    width: 100,
  },

  head4: {
    width: 18,
  },

  head5: {
    width: 40,
  },

  head6: {
    width: 23,
  },

  head7: {
    width: 40,
  },

  head8: {
    width: 50,
  },

  head9: {
    width: 40,
  },

  head10: {
    width: 200,
  },

  head11: {
    width: 140,
  },

  head12: {
    width: 140,
  },

  head13: {
    width: 50,
  },

  head14: {
    width: 40,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
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
    padding: 5,
  },

  flexCenter: {
    textAlign: "center",
    justifyContent: "center",
  },
});

const SF1PDF = ({ students, adviser, headInfo }) => {
  const [totalMale, setTotalMale] = useState(0);
  const [totalFemale, setTotalFemale] = useState(0);
  const [combined, setCombined] = useState(0);
  const [male, setMale] = useState([]);
  const [female, setFemale] = useState([]);

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

  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
  ];

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
    setCombined(male + female);
    setMale(maleStudents);
    setFemale(femaleStudents);
  }, [students]);

  function getAge(dateString) {
    // "10/31/"+new Date().getFullYear()
    //maintain - edit the school year as of
    var today = new Date("10/31/2022");
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <>
      {/* table title */}
      <View style={styles.container}>
        {/* LRN */}
        <View style={{ ...styles.tableStyle, ...styles.head2 }}>
          <Text style={styles.headText}>LRN</Text>
        </View>

        {/* name */}
        <View style={{ ...styles.tableStyle, ...styles.head3 }}>
          <Text style={styles.headText}>NAME</Text>
          <Text style={styles.headText}>
            (Last Name, First Name, Middle Name)
          </Text>
        </View>

        {/* sex */}
        <View style={{ ...styles.tableStyle, ...styles.head4 }}>
          <Text style={styles.headText}>Sex</Text>
          <Text style={styles.headText}>(M/F)</Text>
        </View>

        {/* bday */}
        <View style={{ ...styles.tableStyle, ...styles.head5 }}>
          <Text style={styles.headText}>BIRTH DATE</Text>
          <Text style={styles.headText}>(mm/dd/yyyy)</Text>
        </View>

        {/* age */}
        <View style={{ ...styles.tableStyle, ...styles.head6 }}>
          <Text style={styles.headText}>AGE as of October 31</Text>
        </View>

        {/* mother tongue */}
        <View style={{ ...styles.tableStyle, ...styles.head7 }}>
          <Text style={styles.headText}>MOTHER TONGUE</Text>
        </View>

        {/* ip */}
        <View style={{ ...styles.tableStyle, ...styles.head8 }}>
          <Text style={styles.headText}>IP</Text>
          <Text style={styles.headText}>(Ethnic Group)</Text>
        </View>

        {/* religion */}
        <View style={{ ...styles.tableStyle, ...styles.head9 }}>
          <Text style={styles.headText}>RELIGION</Text>
        </View>

        {/* address */}
        <View style={{ ...styles.tableStyle, ...styles.head10 }}>
          <Text
            style={{
              ...styles.headText,
              marginTop: 10,
              borderBottom: "1px solid #555",
              paddingBottom: 5,
            }}
          >
            ADDRESSS
          </Text>
          <View style={styles.container}>
            <View style={{ ...styles.address1, height: 35 }}>
              <Text style={styles.headText}>House #/ Street/ Sitio/ Purok</Text>
            </View>
            <View style={styles.address2}>
              <Text style={styles.headText}>Barangay</Text>
            </View>
            <View style={styles.address3}>
              <Text style={styles.headText}>Municipality/City</Text>
            </View>
            <View style={styles.address4}>
              <Text style={styles.headText}>Province</Text>
            </View>
          </View>
        </View>

        {/* parents */}
        <View style={{ ...styles.tableStyle, ...styles.head11 }}>
          <Text
            style={{
              ...styles.headText,
              marginTop: 10,
              borderBottom: "1px solid #555",
              paddingBottom: 5,
            }}
          >
            PARENTS
          </Text>
          <View style={{ ...styles.container }}>
            <View style={{ ...styles.parents1, paddingTop: 5 }}>
              <Text style={{ ...styles.headText, paddingTop: 7 }}>
                Father's Name (Last Name, First Name, Middle Name)
              </Text>
            </View>
            <View style={{ ...styles.parents2, paddingTop: 5 }}>
              <Text style={{ ...styles.headText, paddingTop: 7 }}>
                Mother's Maiden Name (Last Name, First Name, Middle Name)
              </Text>
            </View>
          </View>
        </View>

        {/* guardian */}
        <View style={{ ...styles.tableStyle, ...styles.head12 }}>
          <Text
            style={{
              ...styles.headText,
              marginTop: 10,
              borderBottom: "1px solid #555",
              paddingBottom: 5,
            }}
          >
            GUARDIAN (If not Parent)
          </Text>
          <View style={styles.container}>
            <View style={{ ...styles.parents1, flex: 1, height: 35 }}>
              <Text style={styles.headText}>Name</Text>
            </View>
            <View style={{ ...styles.parents2, flex: 0.6 }}>
              <Text style={styles.headText}>Relationship</Text>
            </View>
          </View>
        </View>

        {/* contact number of guardian */}
        <View style={{ ...styles.tableStyle, ...styles.head13 }}>
          <Text style={styles.headText}>
            Contact Number of Parent or Guardian
          </Text>
        </View>

        {/* remarks */}
        <View style={{ ...styles.tableStyle, ...styles.head14 }}>
          <Text style={styles.headText}>REMARKS</Text>
        </View>
      </View>

      {/* male */}
      {male?.map((item, index) => (
        <>
          <View style={styles.container} key={index}>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head2,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}> {item.studentLRN} </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head3,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.studentLName.toUpperCase()}, ${item.studentFName.toUpperCase()},
       ${item.studentMName.toUpperCase()} ${item.studentSuffix.toUpperCase()}`}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head4,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.studentGender.toUpperCase().charAt(0)}`}{" "}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head5,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}> {`${item.studentBirthday}`} </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head6,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}> {item.studentAge}</Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head7,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {" "}
                {`${item.studentMotherTongue}`}{" "}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head8,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {" "}
                {`${item.studentEthnicGroup}`}{" "}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head9,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}> {`${item.studentReligion}`} </Text>
            </View>

            <View style={{ ...styles.address1, ...styles.borderBody }}>
              <Text style={styles.headText}>
                {`${item.studentHouseNo.toUpperCase()}`}
              </Text>
            </View>

            <View style={{ ...styles.address2, ...styles.borderBody }}>
              <Text
                style={styles.headText}
              >{`${item.studentBrgy.toUpperCase()}`}</Text>
            </View>
            <View style={{ ...styles.address3, ...styles.borderBody }}>
              <Text
                style={styles.headText}
              >{`${item.studentCity.toUpperCase()}`}</Text>
            </View>
            <View
              style={{
                width: 40,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text
                style={styles.headText}
              >{`${item.studentProvince.toUpperCase()}`}</Text>
            </View>

            <View
              style={{
                width: 70,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.fatherLName.toUpperCase()}, ${item.fatherFName.toUpperCase()}, ${item.fatherMName.toUpperCase()} `}
              </Text>
            </View>
            <View
              style={{
                width: 70,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.motherLName.toUpperCase()}, ${item.motherFName.toUpperCase()}, ${item.motherMName.toUpperCase()} `}
              </Text>
            </View>

            <View
              style={{
                width: 87,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.guardianName.toUpperCase()}`}
              </Text>
            </View>
            <View
              style={{
                width: 53,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.guardianRelationship.toUpperCase()}`}
              </Text>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                ...styles.head13,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.guardianContactNo.toUpperCase()}`}
              </Text>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                ...styles.head14,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.studentRemarks.toUpperCase()}`}
              </Text>
            </View>
          </View>
        </>
      ))}

      <View style={styles.container}>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            textAlign: "right",
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {totalMale}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 10,
            height: 20,
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {" "}
            {`<== TOTAL MALE`}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head4,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head5,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head6,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}> </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head7,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head8,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head9,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.address1, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.address2, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>
        <View style={{ ...styles.address3, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            width: 40,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            width: 70,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>
        <View
          style={{
            width: 70,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>

        <View
          style={{
            width: 87,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>
        <View
          style={{
            width: 53,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head13,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head14,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
      </View>

      {/* female */}
      {female?.map((item, index) => (
        <>
          <View style={styles.container} key={index}>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head2,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}> {item.studentLRN} </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head3,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.studentLName.toUpperCase()}, ${item.studentFName.toUpperCase()},
       ${item.studentMName.toUpperCase()} ${item.studentSuffix.toUpperCase()}`}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head4,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.studentGender.toUpperCase().charAt(0)}`}{" "}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head5,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}> {`${item.studentBirthday}`} </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head6,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>{item.studentAge} </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head7,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {" "}
                {`${item.studentMotherTongue}`}{" "}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head8,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {" "}
                {`${item.studentEthnicGroup}`}{" "}
              </Text>
            </View>
            <View
              style={{
                ...styles.tableStyle,
                ...styles.head9,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}> {`${item.studentReligion}`} </Text>
            </View>

            <View style={{ ...styles.address1, ...styles.borderBody }}>
              <Text style={styles.headText}>
                {`${item.studentHouseNo.toUpperCase()}`}
              </Text>
            </View>

            <View style={{ ...styles.address2, ...styles.borderBody }}>
              <Text
                style={styles.headText}
              >{`${item.studentBrgy.toUpperCase()}`}</Text>
            </View>
            <View style={{ ...styles.address3, ...styles.borderBody }}>
              <Text
                style={styles.headText}
              >{`${item.studentCity.toUpperCase()}`}</Text>
            </View>
            <View
              style={{
                width: 40,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text
                style={styles.headText}
              >{`${item.studentProvince.toUpperCase()}`}</Text>
            </View>

            <View
              style={{
                width: 70,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.fatherLName.toUpperCase()}, ${item.fatherFName.toUpperCase()}, ${item.fatherMName.toUpperCase()} `}
              </Text>
            </View>
            <View
              style={{
                width: 70,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.motherLName.toUpperCase()}, ${item.motherFName.toUpperCase()}, ${item.motherMName.toUpperCase()} `}
              </Text>
            </View>

            <View
              style={{
                width: 87,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.guardianName.toUpperCase()}`}
              </Text>
            </View>
            <View
              style={{
                width: 53,
                ...styles.flexCenter,
                ...styles.borderBody,
              }}
            >
              <Text style={{ ...styles.headText }}>
                {`${item.guardianRelationship.toUpperCase()}`}
              </Text>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                ...styles.head13,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.guardianContactNo.toUpperCase()}`}
              </Text>
            </View>

            <View
              style={{
                ...styles.tableStyle,
                ...styles.head14,
                borderTop: "none",
              }}
            >
              <Text style={styles.headText}>
                {`${item.studentRemarks.toUpperCase()}`}
              </Text>
            </View>
          </View>
        </>
      ))}

      <View style={styles.container}>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            textAlign: "right",
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {totalFemale}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 10,
            height: 20,
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {" "}
            {`<== TOTAL FEMALE`}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head4,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head5,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head6,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}> </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head7,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head8,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head9,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.address1, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.address2, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>
        <View style={{ ...styles.address3, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            width: 40,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            width: 70,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>
        <View
          style={{
            width: 70,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>

        <View
          style={{
            width: 87,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>
        <View
          style={{
            width: 53,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head13,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head14,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
      </View>

      <View style={styles.container}>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head2,
            borderTop: "none",
            textAlign: "right",
            paddingRight: 10,
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {combined}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head3,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 10,
            height: 20,
          }}
        >
          <Text
            style={{
              ...styles.headText,
              fontSize: 8,
              fontFamily: "Roboto Bold",
            }}
          >
            {" "}
            {`<== COMBINED`}
          </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head4,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head5,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head6,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}> </Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head7,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head8,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            ...styles.tableStyle,
            ...styles.head9,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.address1, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>

        <View style={{ ...styles.address2, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>
        <View style={{ ...styles.address3, ...styles.borderBody }}>
          <Text style={styles.headText}></Text>
        </View>
        <View
          style={{
            width: 40,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            width: 70,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>
        <View
          style={{
            width: 70,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>

        <View
          style={{
            width: 87,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>
        <View
          style={{
            width: 53,
            ...styles.flexCenter,
            ...styles.borderBody,
          }}
        >
          <Text style={{ ...styles.headText }}></Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head13,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>

        <View
          style={{
            ...styles.tableStyle,
            ...styles.head14,
            borderTop: "none",
          }}
        >
          <Text style={styles.headText}></Text>
        </View>
      </View>

      <FormFooter
        male={totalMale}
        female={totalFemale}
        adviser={adviser}
        headInfo={headInfo}
      />
    </>
  );
};

export default SF1PDF;

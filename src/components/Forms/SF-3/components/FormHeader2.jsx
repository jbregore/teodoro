import React from "react";
import { Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import FormBody from "./FormBody";
import FormFooter from "./FormFooter";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 60,
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

const SF3PDF = () => {
  const subjects = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Page size="legal" orientation="landscape" style={styles.page}>
      <FormBody />

      <View style={styles.containerrr}>
        <View
          style={{ ...styles.tableStylee, ...styles.head11, borderTop: "none" }}
        >
          <Text style={styles.headTextt}> </Text>
        </View>

        <View
          style={{
            ...styles.tableStylee,
            ...styles.head12,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 10,
          }}
        >
          <Text style={styles.headTextt}>
            {" "}
            TOTAL FOR FEMALE | TOTAL COPIES{" "}
          </Text>
        </View>

        {subjects.map((item, index) => (
          <View
            style={{
              ...styles.tableStylee,
              ...styles.head13,
              borderTop: "none",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{ flex: 1, borderRight: "1px solid #555" }}>
                <Text style={styles.headTextt}> </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.headTextt}> </Text>
              </View>
            </View>
          </View>
        ))}

        <View
          style={{ ...styles.tableStylee, ...styles.head14, borderTop: "none" }}
        >
          <Text style={styles.headTextt}> </Text>
        </View>
      </View>

      <View style={styles.containerrr}>
        <View
          style={{ ...styles.tableStylee, ...styles.head11, borderTop: "none" }}
        >
          <Text style={styles.headTextt}> </Text>
        </View>

        <View
          style={{
            ...styles.tableStylee,
            ...styles.head12,
            borderTop: "none",
            textAlign: "left",
            paddingLeft: 10,
          }}
        >
          <Text style={styles.headTextt}>
            {" "}
            TOTAL LEARNERS | TOTAL COPIES{" "}
          </Text>
        </View>

        {subjects.map((item, index) => (
          <View
            style={{
              ...styles.tableStylee,
              ...styles.head13,
              borderTop: "none",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{ flex: 1, borderRight: "1px solid #555" }}>
                <Text style={styles.headTextt}> </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.headTextt}> </Text>
              </View>
            </View>
          </View>
        ))}

        <View
          style={{ ...styles.tableStylee, ...styles.head14, borderTop: "none" }}
        >
          <Text style={styles.headTextt}> </Text>
        </View>
      </View>

      <FormFooter />
    </Page>
  );
};

export default SF3PDF;

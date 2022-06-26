import React, { useState } from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import roboto from "../fonts/roboto.ttf";
import robotoBold from "../fonts/roboto-bold.ttf";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },

  head1: {
    flex: 1,
    height: 70,
  },

  head2: {
    flex: 1,
    height: 70,
  },
  head3: {
    flex: 0.7,
    height: 70,
  },

  headText: {
    fontSize: 7.5,
    fontFamily: "Roboto Bold",
  },

  headText2: {
    fontSize: 7,
    fontFamily: "Roboto-Flex",
    marginBottom: 3,
  },
});

const SF3PDF = () => {
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

  const profile = JSON.parse(localStorage.getItem("profile"));

  return (
    <>
      <View style={styles.container}>
        <View style={styles.head1}>
          <Text style={styles.headText}>GUIDELINES:</Text>
          <Text style={styles.headText2}>
            1. Title of Books Issued to each learner must be recorded by the
            class adviser.
          </Text>
          <Text style={styles.headText2}>
            2. The Date of Issuance and the Date of Return shall be reflected in
            the form.
          </Text>
          <Text style={styles.headText2}>
            3. The Total Number of Copies issued at BoSY shall be reflected in
            the form.
          </Text>
          <Text style={styles.headText2}>
            4. The Total Number of Copies of Books Returned at the EoSYshall be
            reflected in the form.
          </Text>
          <Text style={styles.headText2}>
            5. All textbooks being used must be included. Additional copies of
            this form may be used if needed.
          </Text>
        </View>

        <View style={styles.head2}>
          <Text style={{ ...styles.headText, marginBottom: 10 }}>
            In case of lost/unreturned books, please provide information with
            the following code:
          </Text>

          <Text style={styles.headText2}>
            A. In Column {" "}
            <Text style={{textDecoration: 'underline'}}>Date Returned,</Text>{" "} codes are: {" "}
            <Text style={styles.headText}>FM</Text>=Force Majeure, {" "}
            <Text style={styles.headText}>TDO</Text>:Transferred/Dropout, {" "}
            <Text style={styles.headText}>NEG</Text>=Negligence
          </Text>
          <Text style={styles.headText2}>
            B. In Column {" "}
            <Text style={{textDecoration: 'underline'}}>Remark/Action Taken,</Text>{" "}
             codes are: 
            <Text style={styles.headText}>LLTR</Text>=Secured Letter{" "}
            from Learner duly signed by parent/guardian (for code FM),{" "}
            <Text style={styles.headText}>TLTR</Text>=Teacher prepared letter/report duly noted by School Head for
            submission to School Property Custodian (for code TDO), {" "}
            <Text style={styles.headText}>PTL</Text>=Paid by
            the Learner (for code NEG). References: DO#23, s.2001, DO#25,
            s.2003, DO#14, 2.2012
          </Text>
        </View>

        <View style={styles.head3}>
          <Text style={{ ...styles.headText, marginBottom: 24 }}>
            Prepared By:
          </Text>
          <View style={{ borderBottom: "1px solid #555",
           paddingRight: 20, paddingLeft: 20,
            textAlign: 'center', width: '80%', display: 'flex',
             alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
          <Text style={{ ...styles.headText, }}>
            {profile.facultyName.toUpperCase()}
          </Text>
          </View>

          <Text style={{...styles.headText2, textAlign: 'center', marginBottom: 8}}>(Signature over printed name)</Text>

          <Text style={{...styles.headText2, textAlign: 'center'}}>Date BoSY:_______________ Date EoSY: ______________</Text>
        </View>
      </View>
    </>
  );
};

export default SF3PDF;

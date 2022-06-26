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

  tableStyle: {
    borderRight: "1px solid #555",
    borderTop: "1px solid #555",
    textAlign: "center",
    justifyContent: "center",
    borderBottom: "1px solid #555",
  },

  headText: {
    fontSize: 7.5,
    fontFamily: "Roboto Bold",
  },
  
  headText2: {
    fontSize: 7,
    fontFamily: "Roboto-Flex",
  },
  
  head1: {
    width: 65,
    borderLeft: "1px solid #555",
    paddingTop: 2,
    paddingBottom: 2,
  },

  head2: {
    width: 25,
    paddingTop: 2,
    paddingBottom: 2,
  },

  head3: {
    width: 156,
    paddingTop: 2,
    paddingBottom: 2,
  },

  head4: {
    width: 40,
    paddingTop: 2,
    paddingBottom: 2,
  },

  head5: {
    width: 50,
    paddingTop: 2,
    paddingBottom: 2,
  },

  head6: {
    width: 200,
    paddingTop: 2,
    paddingBottom: 2,
  },

  headv1: {
    width: 40
  },

  headv2: {
    width: 35
  },

  headv3: {
    width: 35
  },

  headp1: {
    width: 190
  },

  headp2: {
    width: 112
  }
});

const SF1PDF = ({male, female, adviser, headInfo}) => {
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


  return (
    <>
      <Text style={{...styles.headText, fontSize: 9, marginTop: 3, marginLeft: 95}}>
        List and Code Indicators under REMARKS column
      </Text>

        <View style={{ ...styles.container }}>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head1,
              textAlign: "left",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.headText}>Indicator </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head2 }}>
            <Text style={styles.headText}>Code </Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              textAlign: "left",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.headText}> Required Information</Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head1, borderLeft: 'none' }}>
            <Text style={styles.headText}> Indicator </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head5 }}>
            <Text style={styles.headText}> Code</Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head6,
              textAlign: "left",
              paddingLeft: 5,
            }}
          >
            <Text style={styles.headText}> Required Information </Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.headv1,
              borderLeft: '1px solid #555',
              marginLeft: 1
            }}
          >
            <Text style={{...styles.headText2, fontSize: 5}}>REGISTERED </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv2 }}>
            <Text style={{...styles.headText2, fontSize: 8}}>BoSY </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv3 }}>
            <Text style={{...styles.headText2, fontSize: 8}}>EoSY </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp1, textAlign: 'left', paddingLeft: 10,
            border: 'none' }}>
            <Text style={{...styles.headText2, marginTop: -10, fontSize: 8.5}}>Prepared By: </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp2, textAlign: 'left',
            border: 'none' }}>
            <Text style={{...styles.headText2, marginTop: -10, fontSize: 8.5}}>Certified Correct: </Text>
          </View>

        </View>

        <View style={{ ...styles.container }}>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head1,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
              borderBottom: 'none'
            }}
          >
            <Text style={styles.headText}>Transferred Out </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head2, borderTop: 'none',
              borderBottom: 'none' }}>
            <Text style={styles.headText}>T/O </Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
              borderBottom: 'none'
            }}
          >
            <Text style={styles.headText}> Name of Public (P) Private (PR) School & Effecivity Date</Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head1, borderTop: 'none', borderLeft: 'none'
              ,borderBottom: 'none' }}>
            <Text style={styles.headText}> CCT Receipient </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head5, borderTop: 'none',
              borderBottom: 'none' }}>
            <Text style={styles.headText}> CCT</Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head6,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
              borderBottom: 'none'
            }}
          >
            <Text style={styles.headText}> CCT Control/reference number & Effectivity Date </Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.headv1,
              borderLeft: '1px solid #555',
              marginLeft: .5,
              borderTop: 'none',
            }}
          >
            <Text style={{...styles.headText, fontSize: 6.5}}>MALE </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv2, borderTop: 'none', }}>
            <Text style={styles.headText}> {male} </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv3, borderTop: 'none', }}>
            <Text style={styles.headText}> </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp1, textAlign: 'left',
           marginLeft: 10, width: 125, borderTop: 'none', borderRight: 'none',}}>
            <Text style={{...styles.headText, }}></Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp2, textAlign: 'left',
            marginLeft: 55, borderTop: 'none', borderRight: 'none',}}>
            <Text style={{...styles.headText, marginTop: -10, fontSize: 10}}></Text>
          </View>

        </View>

        <View style={{ ...styles.container }}>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head1,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
              borderBottom: 'none'
            }}
          >
            <Text style={styles.headText}>Transferred IN </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head2, borderTop: 'none',
              borderBottom: 'none' }}>
            <Text style={styles.headText}>T/I </Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
              borderBottom: 'none'
            }}
          >
            <Text style={styles.headText}> Name of Public (P) Private (PR) School & Effecivity Date</Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head1, borderTop: 'none', borderLeft: 'none'
              ,borderBottom: 'none' }}>
            <Text style={styles.headText}> Balik Aral </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head5, borderTop: 'none',
              borderBottom: 'none' }}>
            <Text style={styles.headText}> B/A</Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head6,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
              borderBottom: 'none'
            }}
          >
            <Text style={styles.headText}> Name of school last attended & Year </Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.headv1,
              borderLeft: '1px solid #555',
              marginLeft: .5,
              borderTop: 'none',
            }}
          >
            <Text style={{...styles.headText, fontSize: 6.5}}>FEMALE </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv2, borderTop: 'none', }}>
            <Text style={styles.headText}> {female} </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv3, borderTop: 'none', }}>
            <Text style={styles.headText}> </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp1, textAlign: 'center',
           marginLeft: 10, width: 125, border: 'none', marginTop: -10}}>
             <Text style={{...styles.headText, marginTop: -5, marginBottom: 10 }}>{adviser?.toUpperCase()}</Text>
            <Text style={{...styles.headText2,fontSize: 7 }}>(Signature of Adviser over Printed Name)</Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp2, textAlign: 'center',
            marginLeft: 55, border: 'none', marginTop: -10}}>
            <Text style={{...styles.headText, marginTop: -5, marginBottom: 10 }}>{headInfo?.toUpperCase()}</Text>
            <Text style={{...styles.headText2, fontSize: 7}}>(Signature of School Head over Printed Name)</Text>
          </View>

        </View>

        <View style={{ ...styles.container }}>
          <View
            style={{
              ...styles.tableStyle,
              ...styles.head1,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
            }}
          >
            <Text style={styles.headText}>Dropped  </Text>
            <Text style={styles.headText}>Late Enrollment  </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head2, borderTop: 'none',
              }}>
            <Text style={styles.headText}>DRP </Text>
            <Text style={styles.headText}>LE </Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head3,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
            }}
          >
            <Text style={styles.headText}> Reason and Effectivity Date</Text>
            <Text style={styles.headText}> Reason (Enrollment beyond 1st Friday of June)</Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head1, borderTop: 'none', borderLeft: 'none'
              }}>
            <Text style={styles.headText}> Learner With Disability </Text>
            <Text style={styles.headText}> Accelerated </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.head5, borderTop: 'none',
              }}>
            <Text style={styles.headText}> LWD</Text>
            <Text style={styles.headText}> ACL</Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.head6,
              textAlign: "left",
              paddingLeft: 5,
              borderTop: 'none',
            }}
          >
            <Text style={styles.headText}> Specify </Text>
            <Text style={styles.headText}> Specify Level & Effectivity Data</Text>
          </View>

          <View
            style={{
              ...styles.tableStyle,
              ...styles.headv1,
              borderLeft: '1px solid #555',
              marginLeft: .5,
              borderTop: 'none',
            }}
          >
            <Text style={{...styles.headText, fontSize: 6.5}}>TOTAL </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv2, borderTop: 'none', }}>
            <Text style={styles.headText}> {male + female} </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headv3, borderTop: 'none', }}>
            <Text style={styles.headText}> </Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp1, textAlign: 'left',
           marginLeft: 10, width: 125, borderTop: 'none', borderRight: 'none', 
           justifyContent: 'flex-end'}}>
            <Text style={{...styles.headText2, }}>BoSY Date: {"    "}{"    "}{"    "}{"    "} {"    "} {"    "}EoSYDate:</Text>
          </View>

          <View style={{ ...styles.tableStyle, ...styles.headp2, textAlign: 'left',
            marginLeft: 55, borderTop: 'none', borderRight: 'none', justifyContent: 'flex-end'}}>
            <Text style={{...styles.headText2,}}>BoSY Date: {"    "} {"    "}{"    "} {"    "} {"    "}EoSYDate:</Text>
          </View>

        </View>

        
    </>
  );
};

export default SF1PDF;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import Loading from "../../Modals/Loading";
import Alert from "../../Modals/Alert";

// import SF1Pagination from "../SF-1/SF1Pagination";
import SF10Pagination from "./SF10Pagination";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateRemarksStudent, getSF10Student } from "../../../actions/students";
import { getSF1Teacher } from "../../../actions/faculty";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#555",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({
  page,
  filterSchoolYear,
  filterSection,
  filterGrade,
}) {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { studentsSF10, totalStudentsSF10 } = useSelector((state) => state.students);

  const [studentSF1, setStudentSF1] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [countStudSF10, setCountStudSF10] = useState(0);

  useEffect(() => {
    if (studentsSF10) {
    //   setStudentSF1(students);
    //   var resArr = [];
    //   students.forEach(function (item) {
    //     var i = resArr.findIndex((x) => x.studentLRN === item.studentLRN);
    //     if (i <= -1) {
    //       resArr.push({...item});
    //     }
    //   });
      // console.log(studentsSF10);
      setStudentSF1(studentsSF10);
    //   setCountStudSF10(resArr.length)
    }
  }, [studentsSF10]);

  const exportPDF = (item) => {
    // console.log(item.studentLRN);
    dispatch(getSF10Student(item.studentLRN, navigate));
  }

  return (
    <>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student ID </StyledTableCell>
              <StyledTableCell align="left">Student Name</StyledTableCell>
              <StyledTableCell align="left">Grade</StyledTableCell>
              <StyledTableCell align="left">Section</StyledTableCell>
              <StyledTableCell align="left">School Year</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!studentSF1?.length ? (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  No Data
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              <>
                {studentSF1?.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ width: "15%" }}
                    >
                      {item.studentLRN}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ width: "30%" }}>
                      {`${item.studentLName} ${item.studentFName} 
                          ${item.studentMName} ${item.studentSuffix}`}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.studentGrade}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.studentSection}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.studentSchoolYear}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        startIcon={<PrintIcon />}
                        style={{
                          float: "right",
                        }}
                        onClick={() => exportPDF(item)}
                      >
                        Export
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Divider /> */}
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">
          Showing {studentsSF10?.length || 0} out of {totalStudentsSF10 || 0} entries
        </Typography>
        <Stack spacing={2}>
          <SF10Pagination page={page} />
        </Stack>
      </div>
    </>
  );
}

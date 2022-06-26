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

import SF1Pagination from "./SF1Pagination";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateRemarksStudent } from "../../../actions/students";
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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("20182001234", "Romnick Casimiro", "Regular", 24, 4.0),
//   createData("20182005678", "Mary Joy Cisneros", "Regular", 37, 4.3),
//   createData("20182004321", "Romnick Casimiro", "Regular", 24, 6.0),
//   createData("20182008765", "Mary Joy Cisneros", "Regular", 67, 4.3),
//   createData("20182001276", "Kosang Lando", "Regular", 49, 3.9),
//   createData("20182008765", "Mary Joy Cisneros", "Regular", 67, 4.3),
//   createData("20182001276", "Kosang Lando", "Regular", 49, 3.9),
// ];

export default function CustomizedTables({
  page,
  filterSchoolYear,
  filterSection,
  filterGrade,
}) {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    students,
    totalStudents,
  } = useSelector((state) => state.students);

  const [studentSF1, setStudentSF1] = useState([]);
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (students) {
      setStudentSF1(students);
      // console.log(students);
    }
  }, [students]);

  // useEffect(() => {
  //   // setStudentSF1(studentSF1);
  //   console.log("tae")
  // }, [studentSF1]);

  // const exportPDF = () => {
  //   // console.log(studentSF1);
  //   navigate(`/sf1pdf?schoolYear=${filterSchoolYear}&section=${filterSection}&grade=${filterGrade}`);
  // };

  const updateRemarks = (e) => (id) => {
    // console.log(id);
    // console.log(e.target.value);
  };

  const handleChangeRemarks = (event, id) => {
    if (event.target.value === "") {
      dispatch(updateRemarksStudent(id, event.target.value));
    } else {
      const options = {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      };
      let today = new Date()
        .toLocaleDateString("en-US", options)
        .replaceAll("/", "-");
      // console.log(`${event.target.value} DATE:${today}`)
      dispatch(
        updateRemarksStudent(id, `${event.target.value} DATE: ${today}`)
      );
    }
  };

  const exportPDF = () => {
    const formData = {
      studentSchoolYear: filterSchoolYear,
      studentGrade: filterGrade,
      studentSection: filterSection,
    };

    dispatch(getSF1Teacher(formData, navigate));
  };

  return (
    <>
      {/* <Link
            to={`/sf1pdf?schoolYear=${filterSchoolYear}&section=${filterSection}&grade=${filterGrade}`}
            style={{ textDecoration: "none" }}
            target="_blank"
          > */}
      <Button
        variant="contained"
        startIcon={<PrintIcon />}
        style={{ marginTop: 20, float: "right", marginBottom: 15 }}
        onClick={exportPDF}
      >
        Export as PDF
      </Button>
      {/* </Link> */}

      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student ID </StyledTableCell>
              <StyledTableCell align="left">Student Name</StyledTableCell>
              <StyledTableCell align="center">Grade</StyledTableCell>
              <StyledTableCell align="center">Section</StyledTableCell>
              <StyledTableCell align="center">School Year</StyledTableCell>
              <StyledTableCell align="center">Remarks</StyledTableCell>
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
                    <StyledTableCell component="th" scope="row" style={{width: '15%'}}>
                      {item.studentLRN}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ width: "30%" }}>
                      {`${item.studentLName} ${item.studentFName} 
                          ${item.studentMName} ${item.studentSuffix}`}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.studentGrade}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.studentSection}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.studentSchoolYear}
                    </StyledTableCell>
                    <StyledTableCell align="center" style={{ width: "20%" }}>
                      <Select
                        id="demo-simple-select"
                        label="Grade"
                        // onChange={handleFilterGrade}
                        onChange={(e) => handleChangeRemarks(e, item.id)}
                        size="small"
                        style={{ width: "70%" }}
                        // value={item.studentRemarks}
                        value={item.studentRemarks}
                      >
                        <MenuItem value={item.studentRemarks}>
                          {item.studentRemarks}
                        </MenuItem>
                        <MenuItem value="">"Clear"</MenuItem>
                        <MenuItem value="T/O">T/O</MenuItem>
                        <MenuItem value="T/I">T/I</MenuItem>
                        <MenuItem value="DRP">DRP</MenuItem>
                        <MenuItem value="LE">LE</MenuItem>
                        <MenuItem value="CCT">CCT</MenuItem>
                        <MenuItem value="B/A">B/A</MenuItem>
                        <MenuItem value="LWD">LWD</MenuItem>
                        <MenuItem value="ACL">ACL</MenuItem>
                      </Select>
                      {/* <TextField
                            
                            label="Remarks"
                            variant="outlined"
                            size="small"
                            style={{ marginTop: 6 }}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                console.log(remarks)
                                // dispatch(searchStudent(search));
                              }
                            }}
                            onChange={(e) => setRemarks(e.target.value)}
                          /> */}
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
          Showing {students?.length || 0} out of {totalStudents || 0} entries
        </Typography>
        {/* <Typography variant="body2">Export</Typography> */}
        <Stack spacing={2}>
          <SF1Pagination page={page} />
        </Stack>
      </div>
    </>
  );
}

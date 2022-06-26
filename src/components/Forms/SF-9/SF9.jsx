import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useDispatch, useSelector } from "react-redux";
import SF1Pagination from "../SF-1/SF1Pagination";

import GradeModal from "../../Modals/GradeModal/GradeModal";
import {
  getGradesInfo,
  setStudentSF9Info,
  getStudentRanking,
  getQuarterlyReport
} from "../../../actions/grades";
import Loading from "../../Modals/Loading";
import RankingModal from "../../Modals/RankingModal/RankingModal";
import { useNavigate } from "react-router-dom";

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

const SF9 = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { students, totalStudents } = useSelector((state) => state.students);
  const [studentSF9, setStudentSF9] = useState([]);
  const [isOpenEdit, setOpenEdit] = useState(false);
  const [editStudentGrade, setEditStudentGrade] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenRank, setIsOpenRank] = useState(false);
  const [dataRank, setDataRank] = useState([]);
  const [quarter, setQuarter] = useState("1");

  useEffect(() => {
    if (students) {
      setStudentSF9(students);
    }
  }, [students]);

  const editGrade = async (rowData) => {
    setIsLoading(true);
    const isOkay = await dispatch(getGradesInfo(rowData));
    if (isOkay) {
      //   alert("gago")
      setEditStudentGrade(rowData);
      setIsLoading(false);
      setOpenEdit(true);
      //   console.log(isOpenEdit);
      //   console.log(rowData);
    }
    // dispatch(getGradesInfo(rowData));
  };

  const viewGrade = async (rowData) => {
    setIsLoading(true);
    // dispatch(setStudentSF9Info(rowData.studentLRN));
    const isOkay = await dispatch(getGradesInfo(rowData));
    if (isOkay) {
      setIsLoading(false);
      navigate(`/sf9pdf?studentLRN=${rowData.studentLRN}`);
    }
  };

  const viewRanking = async () => {
    setIsLoading(true);
    const formData = {
      quarter: "1",
      facultyGrade: profile.facultyGrade,
      facultySection: profile.facultySection,
      facultySchoolYear: profile.facultySchoolYear,
    };

    dispatch(getStudentRanking(formData));
    setIsOpenRank(true);
    setIsLoading(false);
  };

  const exportPDFQuarter = () => {
    const sendData = {
      facultyGrade: profile.facultyGrade,
      facultySection: profile.facultySection,
      facultySchoolYear: profile.facultySchoolYear,
      quarter: quarter
    }

    // console.log(sendData);
    dispatch(getQuarterlyReport(sendData, navigate));
  }

  return (
    <>
      <Typography>
        (Grades) of {profile && profile.facultyGrade}-
        {profile && profile.facultySection} {" "}
        S.Y {profile && profile.facultySchoolYear}
      </Typography>

      <Grid container rowSpacing={1} style={{ marginTop: 20 }}>
        <Grid item xs={6} style={{display: 'flex', flexDirection: 'row'}}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <InputLabel id="demo-simple-select-label">Quarter : </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Quarter"
              size="small"
              style={{ marginLeft: 10 }}
              onChange={(e) => setQuarter(e.target.value)}
              value={quarter}
            >
              <MenuItem value="1">Quarter 1</MenuItem>
              <MenuItem value="2">Quarter 2</MenuItem>
              <MenuItem value="3">Quarter 3</MenuItem>
              <MenuItem value="4">Quarter 4</MenuItem>
            </Select>
          </div>
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            style={{ float: "right",}}
            onClick={exportPDFQuarter}
          >
            Export as PDF
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            startIcon={<WorkspacePremiumIcon />}
            style={{ float: "right" }}
            onClick={viewRanking}
          >
            Ranking
          </Button>
        </Grid>
      </Grid>

      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student LRN </StyledTableCell>
              <StyledTableCell align="left">Student Name</StyledTableCell>
              <StyledTableCell align="center">Grade</StyledTableCell>
              <StyledTableCell align="center">Section</StyledTableCell>
              <StyledTableCell align="center">School Year</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!studentSF9?.length ? (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  No Data
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              <>
                {studentSF9.map((item, index) => (
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
                    <StyledTableCell align="center">
                      {item.studentGrade}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.studentSection}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.studentSchoolYear}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        style={{
                          marginRight: 5,
                          backgroundColor: "#009900",
                        }}
                        size="small"
                        onClick={() => editGrade(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        style={{ marginRight: 5 }}
                        size="small"
                        startIcon={<PrintIcon />}
                        onClick={() => viewGrade(item)}
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

      {isOpenEdit && (
        <GradeModal
          closeModal={setOpenEdit}
          edit={true}
          data={editStudentGrade}
        />
      )}

      {isOpenRank && (
        <RankingModal closeModal={setIsOpenRank} edit={true} data={dataRank} />
      )}

      {isLoading ? <Loading /> : <></>}
    </>
  );
};

export default SF9;

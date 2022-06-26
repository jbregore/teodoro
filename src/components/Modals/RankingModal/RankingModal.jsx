import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PrintIcon from "@mui/icons-material/Print";

import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addFaculty,
  getAllFaculty,
  updateFaculty,
} from "../../../actions/faculty";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { IconButton, OutlinedInput, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  getStudentRanking,
  getStudentRankingFinal,
} from "../../../actions/grades";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  height: "80vh",
  
  textAlign: "left",
  p: 4,
};

export default function RankingModal({ closeModal, data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { studentRanking } = useSelector((state) => state.grades);
  const [studentRank, setStudentRank] = useState([]);
  const profile = JSON.parse(localStorage.getItem("profile"));
  const [quarter, setQuarter] = useState("1");

  const close = () => {
    closeModal(false);
  };

  const myArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  useEffect(() => {
    if (studentRanking) {
      let sortedDescending = studentRanking?.sort((a, b) => {
        return b.gradeAve - a.gradeAve;
      });
      setStudentRank(sortedDescending);
    }
  }, [studentRanking]);

  
  useEffect(async () => {
    if (quarter === "5") {
      const formData = {
        quarter: "Final",
        facultyGrade: profile.facultyGrade,
        facultySection: profile.facultySection,
        facultySchoolYear: profile.facultySchoolYear,
      };
      dispatch(getStudentRankingFinal(formData));
      // const dataa = await dispatch(getStudentRankingFinal(formData));
      // if (dataa) {
      //   setStudentRank(dataa);
      // } else {
      // }
    } else {
      const formData = {
        quarter: quarter,
        facultyGrade: profile.facultyGrade,
        facultySection: profile.facultySection,
        facultySchoolYear: profile.facultySchoolYear,
      };
      dispatch(getStudentRanking(formData));
      // const dataa = await dispatch(getStudentRanking(formData));
      // if (dataa) {
      //   setStudentRank(dataa);
      // } else {
      // }
    }
  }, [quarter]);


  const exportAsPDF = () => {
    navigate("/rankingpdf");
  }

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            size="small"
            style={{ float: "right", cursor: "pointer" }}
            onClick={close}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ranking
          </Typography>
          <br />

          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  Quarter :{" "}
                </InputLabel>
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
                  <MenuItem value="5">Final</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={6}>
              {/* <Link to="/rankingpdf" style={{ textDecoration: "none" }} target="_blank"> */}
                <Button
                  variant="contained"
                  startIcon={<PrintIcon />}
                  style={{ float: "right", marginBottom: 15 }}
                  onClick={exportAsPDF}
                >
                  Export as PDF
                </Button>
              {/* </Link> */}
            </Grid>
          </Grid>

          <TableContainer
            component={Paper}
            style={{ overflow: "scroll", height: "55vh" }}
          >
            <Table
              stickyHeader
              sx={{ minWidth: "100%" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Rank</StyledTableCell>
                  <StyledTableCell>Student LRN </StyledTableCell>
                  <StyledTableCell align="left">Student Name</StyledTableCell>
                  <StyledTableCell align="center">Grade</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentRank.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ width: 30 }}
                    >
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.studentLRN}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ width: "50%" }}>
                      {" "}
                      {`${item.studentLName} ${item.studentFName} 
                    ${item.studentMName} ${item.studentSuffix}`}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {parseFloat(item.gradeAve).toFixed(3)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}

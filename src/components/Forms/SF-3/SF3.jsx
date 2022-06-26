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
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

import { useDispatch, useSelector } from "react-redux";
import SF1Pagination from "../SF-1/SF1Pagination";
import SF3Pagination from "./SF3Pagination";

import AddBookModal from "../../Modals/AddBookModal/AddBookModal";
import EditBookModal from "../../Modals/AddBookModal/EditBookModal";

import { useLocation, useNavigate } from "react-router-dom";
import {
  getAllStudentsBooks,
  filterAllStudentsBooks,
  getBookHeader
} from "../../../actions/book";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("20182001234", "John Benedict Regore", "Regular", 24, 4.0),
  createData("20182005678", "Vincent De Guzman", "Regular", 37, 4.3),
  createData("20182004321", "Romnick Casimiro", "Regular", 24, 6.0),
  createData("20182008765", "Mary Joy Cisneros", "Regular", 67, 4.3),
  createData("20182001276", "Kosang Lando", "Regular", 49, 3.9),
  createData("20182008765", "Mary Joy Cisneros", "Regular", 67, 4.3),
  createData("20182001276", "Kosang Lando", "Regular", 49, 3.9),
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CustomizedTables({ page }) {
  const query = useQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const profile = JSON.parse(localStorage.getItem("profile"));
  // const { students, totalStudents } = useSelector((state) => state.students);
  const { books, totalStudents } = useSelector((state) => state.book);
  const [studentSF3, setStudentSF3] = useState([]);
  const [isOpenAdd, setOpenAdd] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  const [id, setId] = useState("");
  const [issuedCount, setIssuedCount] = useState([]);
  const [returnCount, setReturnCount] = useState([]);
  const [itemEdit, setItemEdit] = useState([]);

  const sampleLocation = useLocation().search.split("=")[0];
  const pagee = query.get("page") || 1;
  const filterPage = query.get("fpage") || 1;

  useEffect(() => {
    if (books) {
      let count = [];
      let returnCount = [];
      for (let i = 0; i < books.length; i++) {
        let counter = 0;
        let counterReturn = 0;
        if (books[i].filipinoIssued === "" || books[i].filipinoIssued === null) {
        } else {
          counter++;
        }
        if (books[i].englishIssued === ""|| books[i].englishIssued === null) {
        } else {
          counter++;
        }
        if (books[i].mathIssued === ""|| books[i].mathIssued === null) {
        } else {
          counter++;
        }
        if (books[i].scienceIssued === ""|| books[i].scienceIssued === null) {
        } else {
          counter++;
        }
        if (books[i].apIssued === ""|| books[i].apIssued === null) {
        } else {
          counter++;
        }
        if (books[i].espIssued === ""|| books[i].espIssued === null) {
        } else {
          counter++;
        }
        if (books[i].tleIssued === ""|| books[i].tleIssued === null) {
        } else {
          counter++;
        }
        if (books[i].mapehIssued === ""|| books[i].mapehIssued === null) {
        } else {
          counter++;
        }

        //returned
        if (
          books[i].filipinoReturned === "" ||
          books[i].filipinoReturned === "FM" ||
          books[i].filipinoReturned === "TDO" ||
          books[i].filipinoReturned === "NEG" 
          || books[i].filipinoReturned === null
        ) {
        } else {
          counterReturn++;
        }
        if (
          books[i].englishReturned === "" ||
          books[i].englishReturned === "FM" ||
          books[i].englishReturned === "TDO" ||
          books[i].englishReturned === "NEG"
          || books[i].englishReturned === null
        ) {
        } else {
          counterReturn++;
        }
        if (
          books[i].mathReturned === "" ||
          books[i].mathReturned === "FM" ||
          books[i].mathReturned === "TDO" ||
          books[i].mathReturned === "NEG"
          || books[i].mathReturned === null
        ) {
        } else {
          counterReturn++;
        }
        if (books[i].scienceReturned === ""||
        books[i].scienceReturned === "FM" ||
        books[i].scienceReturned === "TDO" ||
        books[i].scienceReturned === "NEG"
        || books[i].scienceReturned === null) {
        } else {
          counterReturn++;
        }
        if (books[i].apReturned === ""||
        books[i].apReturned === "FM" ||
        books[i].apReturned === "TDO" ||
        books[i].apReturned === "NEG"
        || books[i].apReturned === null) {
        } else {
          counterReturn++;
        }
        if (books[i].espReturned === "" ||
        books[i].espReturned === "FM" ||
        books[i].espReturned === "TDO" ||
        books[i].espReturned === "NEG"
        || books[i].espReturned === null) {
        } else {
          counterReturn++;
        }
        if (books[i].tleReturned === ""||
        books[i].tleReturned === "FM" ||
        books[i].tleReturned === "TDO" ||
        books[i].tleReturned === "NEG"
        || books[i].tleReturned === null) {
        } else {
          counterReturn++;
        }
        if (books[i].mapehReturned === ""||
        books[i].mapehReturned === "FM" ||
        books[i].mapehReturned === "TDO" ||
        books[i].mapehReturned === "NEG"
        || books[i].mapehReturned === null) {
        } else {
          counterReturn++;
        }
        count[i] = counter;
        returnCount[i] = counterReturn;
      }
      setStudentSF3(books);
      setIssuedCount(count);
      setReturnCount(returnCount);
      // console.log(books);
    }
  }, [books]);

  const addBook = (item) => {
    // console.log(item.id);
    setId(item.id);
    setOpenAdd(true);
  };

  const editBook = (item) => {
    // console.log(item);
    setItemEdit(item);
    setOpenEdit(true);
  };

  const exportBooks = () => {
    dispatch(getBookHeader(profile.facultyGrade, navigate));
  }

  return (
    <>
      {/* <Button
        variant="contained"
        startIcon={<AddIcon />}
        style={{ float: "right" }}
        onClick={() => setOpen(true)}
      >
        New Entry
      </Button> */}
      {profile && profile.id > 2 ? (
        <Typography>
        (Book Records) of {profile && profile.facultyGrade}-
        {profile && profile.facultySection} {" "}
        S.Y {profile && profile.facultySchoolYear}
      </Typography>
      ) : (<></>)}

      <Button
        variant="contained"
        startIcon={<PrintIcon />}
        style={{ marginTop: 20, float: "right", marginBottom: 15 }}
        onClick={exportBooks}
      >
        Export as PDF
      </Button>

      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student LRN </StyledTableCell>
              <StyledTableCell align="left">Student Name</StyledTableCell>
              <StyledTableCell align="center">Book Issued</StyledTableCell>
              <StyledTableCell align="center">Book Returned</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!studentSF3?.length ? (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  No Data
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              <>
                {studentSF3.map((item, index) => (
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
                      {issuedCount[index]}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {returnCount[index]}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        style={{
                          marginRight: 5,
                          backgroundColor: "#009900",
                        }}
                        size="small"
                        onClick={() => editBook(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        style={{ marginRight: 5 }}
                        size="small"
                        onClick={() => addBook(item)}
                      >
                        Add
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
          Showing {books?.length || 0} out of {totalStudents || 0} entries
        </Typography>
        {/* <Typography variant="body2">Export</Typography> */}
        <Stack spacing={2}>
          <SF3Pagination page={page} />
        </Stack>
      </div>

      {isOpenAdd && (
        <AddBookModal
          closeModal={setOpenAdd}
          id={id}
          // data={editStudentGrade}
        />
      )}

      {isOpenEdit && (
        <EditBookModal
          closeModal={setOpenEdit}
          // id={id}
          data={itemEdit}
        />
      )}
    </>
  );
}

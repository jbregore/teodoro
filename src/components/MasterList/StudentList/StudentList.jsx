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
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import StudentModal from "../../Modals/StudentModal/StudentModal";
import Alert from "../../Modals/Alert";
import Loading from "../../Modals/Loading";

import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, filterStudent } from "../../../actions/students";
import { useNavigate, useLocation } from "react-router-dom";

import StudentPagination from "./StudentPagination";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";

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

export default function CustomizedTables({ page }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(filterPage)

  const {
    students,
    isLoading,
    alert,
    totalStudents,
    numberOfPages,
    alertMessage,
  } = useSelector((state) => state.students);

  const [isOpen, setOpen] = useState(null);
  const [isOpenView, setOpenView] = useState(false);
  const [isOpenEdit, setOpenEdit] = useState(false);
  const [isOpenAlert, setOpenAlert] = useState(false);
  const [studentsSort, setStudentsSort] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [id, setId] = useState({});

  const [viewStudentData, setViewStudentData] = useState([]);
  const [editStudentData, setEditStudentData] = useState([]);
  const [displayStudents, setDisplayStudents] = useState([]);

  const sampleLocation = useLocation().search.split("=")[0];
  const pagee = useLocation().search.split("=")[1] || 1;

  const [isOpenDuplicate, setOpenDuplicate] = useState(false);
  const [dupStudentData, setDupStudentData] = useState([]);

  // const [filterGrade, setFilterGrade] = useState("7");

  useEffect(() => {
    let sortedDescending = students?.sort((a, b) => {
      return b.id - a.id;
    });

    // console.log(sortedDescending);
  }, [students?.length]);

  const handleDeleteStudent = () => {
    // alert(id);
    dispatch(deleteStudent(id, navigate, pagee, sampleLocation));
    setDeleteConfirm(false);
    setOpenAlert(true);
  };

  const handleDeleteConf = (item) => {
    setId(item);
    setDeleteConfirm(true);
  };

  const viewStudent = (rowData) => {
    setOpenView(true);
    setViewStudentData(rowData);
  };

  const editStudent = (rowData) => {
    setOpenEdit(true);
    setEditStudentData(rowData);
  };

  const duplicate = (rowData) => {
    setOpenDuplicate(true);
    setDupStudentData(rowData);
  };

  // if(!students?.length) return "No Posts";

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        style={{ float: "right" }}
        onClick={() => setOpen(true)}
      >
        New Entry
      </Button>
      <br />
      <br />
      {/* <Loading /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student ID </StyledTableCell>
              <StyledTableCell align="left">Student Name</StyledTableCell>
              <StyledTableCell align="center">Grade</StyledTableCell>
              <StyledTableCell align="center">Section</StyledTableCell>
              <StyledTableCell align="center">School Year</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!students?.length ? (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  No Data
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              <>
                {students?.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.studentLRN}
                    </StyledTableCell>
                    <StyledTableCell align="left">
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
                      <IconButton
                        color="primary"
                        aria-label="copy picture"
                        component="span"
                        style={{ marginRight: 5 }}
                        onClick={() => duplicate(item)}
                      >
                        <ContentCopyIcon />
                      </IconButton>
                      {/* <ContentCopyIcon style={{cursor:"pointer",marginRight: 5}}/> */}
                      <Button
                        variant="contained"
                        style={{ marginRight: 5 }}
                        size="small"
                        onClick={() => viewStudent(item)}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          marginRight: 5,
                          backgroundColor: "#009900",
                        }}
                        size="small"
                        onClick={() => editStudent(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        style={{ marginRight: 5 }}
                        size="small"
                        onClick={() => handleDeleteConf(item)}
                      >
                        Delete
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
          Showing {students?.length || 0} out of {totalStudents || 0} entries
        </Typography>
        <Stack spacing={2}>
          <StudentPagination page={page} />
          {/* <Pagination count={numberOfPages} size="small" 
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  onClick={() => alert("tangina mo")}
                />
              )}
              /> */}
        </Stack>
      </div>

      {isOpen && <StudentModal closeModal={setOpen} view={false} />}

      {isOpenView && (
        <StudentModal
          closeModal={setOpenView}
          view={true}
          data={viewStudentData}
        />
      )}

      {isOpenEdit && (
        <StudentModal
          closeModal={setOpenEdit}
          edit={true}
          data={editStudentData}
        />
      )}

      {isOpenDuplicate && (
        <StudentModal
          closeModal={setOpenDuplicate}
          edit={true}
          data={dupStudentData}
          duplicate={true}
        />
      )}

      {/* {isOpen === true ? <StudentModal closeModal={setOpen} /> : 
       isOpen === false ? <Alert title="Student created successfully." closeAlert={setOpenAlert}/> : (<></>) } */}

      <Dialog
        open={deleteConfirm}
        onClose={() => setDeleteConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Student</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this student?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 2, mr: 2 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleDeleteStudent}
          >
            Yes
          </Button>
          <Button
            onClick={() => setDeleteConfirm(false)}
            variant="contained"
            color="error"
            size="small"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* {isOpenAlert && (
            <Alert
              title="Student deleted successfully."
              closeAlert={setOpenAlert}
            />
          )} */}
    </>
  );
}

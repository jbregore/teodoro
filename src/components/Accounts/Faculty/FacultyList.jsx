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
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import FacultyModal from "../../Modals/FacultyModal/FacultyModal";
import FacultyPagination from "./FacultyPagination";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Modals/Loading";
import Alert from "../../Modals/Alert";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteFaculty } from "../../../actions/faculty";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "ENG101",
    "John Benedict T. Regore",
    "jbbbregore099@gmail.com",
    "Blablabla",
    4.0
  ),
  createData("MATH101", "Math", "All", "Blablabla", 4.3),
  createData("FIL101", "Filipino", "All", "Blablabla", 6.0),
  createData("MAPEH101", "Mapeh", "All", "Blablabla", 4.3),
  createData("AP101", "Araling Panlipunan", "All", "Blablabla", 3.9),
];

export default function FacultyList({ page }) {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    faculty,
    isLoading,
    alert,
    totalFaculty,
    numberOfPages,
    alertMessage,
  } = useSelector((state) => state.faculty);

  const sampleLocation = useLocation().search.split("=")[0];
  const pagee = useLocation().search.split("=")[1] || 1;
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [id, setId] = useState("");

  const [isOpenView, setOpenView] = useState(false);
  const [viewFacultyData, setViewFacultyData] = useState([]);

  const [isOpenEdit, setOpenEdit] = useState(false);
  const [editFacultyData, setEditFacultyData] = useState([]);

  const [isOpenDuplicate, setOpenDuplicate] = useState(false);
  const [dupFacultyData, setDupFacultyData] = useState([]);

  useEffect(() => {
    let sortedDescending = faculty?.sort((a, b) => {
      return b.id - a.id;
    });

    // console.log(sortedDescending);
  }, [faculty?.length]);

  const handleDeleteFaculty = () => {
    // alert(id);
    dispatch(deleteFaculty(id, navigate, pagee, sampleLocation));
    setDeleteConfirm(false);
  };

  const handleDeleteConf = (id) => {
    setId(id);
    setDeleteConfirm(true);
  };

  const viewFaculty = (rowData) => {
    setOpenView(true);
    setViewFacultyData(rowData);
  };

  const editFaculty = (rowData) => {
    setOpenEdit(true);
    setEditFacultyData(rowData);
  };

  const duplicate = (rowData) => {
    setOpenDuplicate(true);
    setDupFacultyData(rowData);
  };

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID </StyledTableCell>
              <StyledTableCell align="left" style={{ width: "25%" }}>
                Faculty Name
              </StyledTableCell>
              <StyledTableCell align="right">Grade</StyledTableCell>
              <StyledTableCell align="center">Section</StyledTableCell>
              <StyledTableCell align="right">School Year</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!faculty?.length ? (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  No Data
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              <>
                {faculty?.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.facultyID}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.facultyName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.facultyGrade}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {item.facultySection}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.facultySchoolYear}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.facultyStatus}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        color="primary"
                        aria-label="copy picture"
                        component="span"
                        style={{ marginRight: 5 }}
                        onClick={() => duplicate(item)}
                      >
                        <ContentCopyIcon />
                      </IconButton>
                      <Button
                        variant="contained"
                        style={{ marginRight: 5 }}
                        size="small"
                        onClick={() => viewFaculty(item)}
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
                        onClick={() => editFaculty(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        style={{ marginRight: 5 }}
                        size="small"
                        onClick={() => handleDeleteConf(item.id)}
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
          Showing {faculty?.length || 0} out of {totalFaculty || 0} entries
        </Typography>
        <Stack spacing={2}>
          <FacultyPagination page={page} />
        </Stack>
      </div>

      {isOpen && <FacultyModal closeModal={setOpen} view={false} />}

      {isOpenView && (
        <FacultyModal
          closeModal={setOpenView}
          view={true}
          data={viewFacultyData}
        />
      )}

      {isOpenEdit && (
        <FacultyModal
          closeModal={setOpenEdit}
          edit={true}
          data={editFacultyData}
        />
      )}

      {isOpenDuplicate && (
        <FacultyModal
          closeModal={setOpenDuplicate}
          edit={true}
          data={dupFacultyData}
          duplicate={true}
        />
      )}

      <Dialog
        open={deleteConfirm}
        onClose={() => setDeleteConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Faculty</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this faculty?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 2, mr: 2 }}>
          <Button
            variant="contained"
            size="small"
            onClick={handleDeleteFaculty}
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
    </>
  );
}

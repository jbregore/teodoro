import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateStudentBook } from "../../../actions/book";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  maxHeight: "90vh",
  // overflowX: 'auto',
  textAlign: "left",
  p: 4,
  // paddingBottom: 30,
};

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

export default function SettingsModal({ closeModal, id, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileSample =
    "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png";

  // image upload
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  const { faculty } = useSelector((state) => state.faculty);

  const [isOpen, setOpen] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const profile = JSON.parse(localStorage.getItem("profile"));

  const [subject, setSubject] = useState("scienceIssued");
  const [dateIssued, setDateIssued] = useState("");

  const close = () => {
    closeModal(false);
  };

    // console.log(data);

  const [formData, setFormData] = useState([
    {
      subjectArea: data ? `Filipino ${profile.facultyGrade}` : null,
      issued: data ? data.filipinoIssued : null,
      returned: data ? data.filipinoReturned : null,
    },
    {
      subjectArea: data ? `English ${profile.facultyGrade}` : null,
      issued: data ? data.englishIssued : null,
      returned: data ? data.englishReturned : null,
    },
    {
      subjectArea: data ? `Math ${profile.facultyGrade}` : null,
      issued: data ? data.mathIssued : null,
      returned: data ? data.mathReturned : null,
    },
    {
      subjectArea: data ? `Science ${profile.facultyGrade}` : null,
      issued: data ? data.scienceIssued : null,
      returned: data ? data.scienceReturned : null,
    },
    {
      subjectArea: data ? `AP ${profile.facultyGrade}` : null,
      issued: data ? data.apIssued : null,
      returned: data ? data.apReturned : null,
    },
    {
      subjectArea: data ? `EsP ${profile.facultyGrade}` : null,
      issued: data ? data.espIssued : null,
      returned: data ? data.espReturned : null,
    },
    {
      subjectArea: data ? `TLE ${profile.facultyGrade}` : null,
      issued: data ? data.tleIssued : null,
      returned: data ? data.tleReturned : null,
    },
    {
      subjectArea: data ? `MAPEH ${profile.facultyGrade}` : null,
      issued: data ? data.mapehIssued : null,
      returned: data ? data.mapehReturned : null,
    },
  ]);

  //   const testSave = () => {
  //     console.log(formData);
  //   };
  const handleSubmit = (e) => {
    const sendData = {
        id: data.iid,
        studentLRN: data.studentLRN,
        studentLName: data.studentLName,
        studentFName: data.studentFName,
        studentMName: data.studentMName,
        studentSuffix: data.studentSuffix,

        facultyGrade: profile.facultyGrade,
        facultySection: profile.facultySection,
        facultySchoolYear: profile.facultySchoolYear,

        filipinoIssued: formData[0].issued,
        filipinoReturned: formData[0].returned,

        englishIssued: formData[1].issued,
        englishReturned: formData[1].returned,

        mathIssued: formData[2].issued,
        mathReturned: formData[2].returned,

        scienceIssued: formData[3].issued,
        scienceReturned: formData[3].returned,

        apIssued: formData[4].issued,
        apReturned: formData[4].returned,

        espIssued: formData[5].issued,
        espReturned: formData[5].returned,

        tleIssued: formData[6].issued,
        tleReturned: formData[6].returned,

        mapehIssued: formData[7].issued,
        mapehReturned: formData[7].returned
    }
    // console.log(sendData);
    dispatch(updateStudentBook(sendData));
  };

  const handleDelete = (subjectArea) => {
    setFormData(
      [...formData].map((object) => {
        if (object.subjectArea === subjectArea) {
          return {
            ...object,
            issued: null,
            returned: "",
          };
        } else return object;
      })
    );
  };

  return (
    <div>
      <Modal
        open={isOpen}
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
            Book Records
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
            {`${data.studentLName}, ${data.studentFName}, ${data.studentMName}. ${data.studentSuffix}`}
          </Typography>
          {/* <br /> */}

          <TableContainer component={Paper} style={{ overflow: "scroll", maxHeight: '60vh' }}>
            <Table
              stickyHeader
              sx={{ minWidth: "100%" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Book/s</StyledTableCell>
                  <StyledTableCell>Date Issued</StyledTableCell>
                  <StyledTableCell align="left">Date Returned</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.map((item, index) => (
                  <>
                    {item.issued !== null ? (
                      <StyledTableRow key={index}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          //   style={{ width: 30 }}
                        >
                          {item.subjectArea}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {/* {item.issued} */}
                          <TextField
                            
                            label="Date"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={item.issued}
                            onChange={(e) => {
                              setFormData(
                                [...formData].map((object) => {
                                  if (object.subjectArea === item.subjectArea) {
                                    return {
                                      ...object,
                                      issued: e.target.value,
                                    };
                                  } else return object;
                                })
                              );
                            }}
                          />
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {/* {item.returned} */}
                          <TextField
                            
                            label="Date"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={item.returned}
                            onChange={(e) => {
                              setFormData(
                                [...formData].map((object) => {
                                  if (object.subjectArea === item.subjectArea) {
                                    return {
                                      ...object,
                                      returned: e.target.value,
                                    };
                                  } else return object;
                                })
                              );
                            }}
                            // onChange={(e) => setDateIssued(e.target.value)}
                          />
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ width: 50 }}>
                          <Button
                            variant="contained"
                            color="error"
                            style={{ marginRight: 5 }}
                            size="small"
                            onClick={() => handleDelete(item.subjectArea)}
                          >
                            Delete
                          </Button>
                          {/* {parseFloat(item.gradeAve).toFixed(2)} */}
                        </StyledTableCell>
                      </StyledTableRow>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <br />
          <Box sx={{ flexGrow: 1, textAlign: "right" }}>
            <Button
              variant="contained"
              style={{ marginRight: 5 }}
              size="small"
              onClick={() => setConfirm(true)}
              //   onClick={testSave}
            >
              Save
            </Button>
            <Button onClick={close} variant="contained" color="error" size="small">
              Cancel
            </Button>
          </Box>
          <br />
        </Box>
      </Modal>

      <Dialog
        open={confirm}
        onClose={() => setConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update Book Records</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to update this changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 2, mr: 2 }}>
          <Button variant="contained" size="small" onClick={handleSubmit}>
            Yes
          </Button>
          <Button
            onClick={() => setConfirm(false)}
            variant="contained"
            color="error"
            size="small"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

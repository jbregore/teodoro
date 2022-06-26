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

import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { addBook } from "../../../actions/book";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  minHeight: "30vh",
  textAlign: "center",
  p: 4,
};

export default function SettingsModal({ closeModal, id }) {
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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (formData.password !== formData.confPassword) {
  //       setOpenError(true);
  //       setConfirm(false);
  //     } else {
  //       if (image) {
  //         let uploadData = new FormData();
  //         uploadData.append("submit", fileInputRef.current.files[0]);
  //         const sendData = {
  //           id: profile?.id,
  //           facultyUsername: formData.username,
  //           facultyPassword: formData.password,
  //         };

  //         dispatch(updateFacultySettings(sendData, uploadData));
  //       } else {
  //         const sendData = {
  //           id: profile?.id,
  //           facultyUsername: formData.username,
  //           facultyPassword: formData.password,
  //           facultyPhoto: profile?.facultyPhoto,
  //         };
  //         dispatch(updateFacultySettings(sendData, "sample"));
  //       }

  //       setOpenError(false);
  //       setConfirm(false);
  //       closeModal(false);
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      subject: subject,
      dateIssued: dateIssued,
      id: id
    }
    dispatch(addBook(formData, navigate));
  }

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
            Issue a new book
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
            Book Details
          </Typography>
          <br />

          <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <InputLabel id="demo-simple-select-label" style={{width: '40%'}}>
                  Subject Area :{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Quarter"
                  size="small"
                  style={{ marginLeft: 10, width: "60%", textAlign: 'left' }}
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                >
                  <MenuItem value="scienceIssued">Science {profile.facultyGrade}</MenuItem>
                  <MenuItem value="mathIssued">Math {profile.facultyGrade}</MenuItem>
                  <MenuItem value="apIssued">AP {profile.facultyGrade}</MenuItem>
                  <MenuItem value="espIssued">EsP {profile.facultyGrade}</MenuItem>
                  <MenuItem value="mapehIssued">MAPEH {profile.facultyGrade}</MenuItem>
                  <MenuItem value="englishIssued">English {profile.facultyGrade}</MenuItem>
                  <MenuItem value="filipinoIssued">Filipino {profile.facultyGrade}</MenuItem>
                  <MenuItem value="tleIssued">TLE {profile.facultyGrade}</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>


          <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
            <Grid item xs={12}>
              <TextField
                
                label="Date"
                variant="outlined"
                size="small"
                fullWidth
                value={dateIssued}
                onChange={(e) => setDateIssued(e.target.value)}
              />
            </Grid>
          </Grid>

          <br />
          <Box sx={{ flexGrow: 1, textAlign: "right" }}>
            <Button
              variant="contained"
              style={{ marginRight: 5 }}
              size="small"
              onClick={() => setConfirm(true)}
              // onClick={testSave}
            >
              Save
            </Button>
            <Button onClick={close} variant="contained" color="error" size="small">
            Cancel
            </Button>
          </Box>
        </Box>
      </Modal>

      <Dialog
        open={confirm}
        onClose={() => setConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add Book</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to save this changes?
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

import React, { useState, useEffect, useRef } from "react";
import "./GradeModal.css";
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
import {
  addFaculty,
  getAllFaculty,
  updateFaculty,
} from "../../../actions/faculty";
import { useNavigate, useLocation } from "react-router-dom";

import { IconButton, OutlinedInput, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { updateFacultySettings } from "../../../actions/faculty";

import { updateGrade, clearGrades } from "../../../actions/grades";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  minHeight: "70vh",
  //   textAlign: "center",
  p: 4,
};

export default function GradeModal({ closeModal, data }) {
  const dispatch = useDispatch();
  const profileSample =
    "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png";

  // image upload

  const { grades } = useSelector((state) => state.grades);
  // console.log("tae");
  // console.log(grades);

  const [isOpen, setOpen] = useState(true);
  const [confirm, setConfirm] = useState(false);

  const profile = JSON.parse(localStorage.getItem("profile"));
  const [formData, setFormData] = React.useState({
    gradeQuarter: "1",
    gradeFilipino: grades ? grades[0]?.gradeFilipino : "",
    gradeEnglish: grades ? grades[0]?.gradeEnglish : "",
    gradeMath: grades ? grades[0]?.gradeMath : "",
    gradeScience: grades ? grades[0]?.gradeScience : "",
    gradeAP: grades ? grades[0]?.gradeAP : "",

    gradeEsP: grades ? grades[0]?.gradeEsP : "",
    gradeTLE: grades ? grades[0]?.gradeTLE : "",
    gradeMapeh: grades ? grades[0]?.gradeMapeh : "",
    gradeMusic: grades ? grades[0]?.gradeMusic : "",
    gradeArt: grades ? grades[0]?.gradeArt : "",

    gradePE: grades ? grades[0]?.gradePE : "",
    gradeHealth: grades ? grades[0]?.gradeHealth : "",
    studentLRN: data.studentLRN,
    studentGrade: data.studentGrade,
    studentSection: data.studentSection,
    studentSchoolYear: data.studentSchoolYear,
  });
  const [isOpenError, setOpenError] = useState(false);

  useEffect(() => {
    let mapehAve =
      (Number(formData.gradeMusic) +
        Number(formData.gradeArt) +
        Number(formData.gradePE) +
        Number(formData.gradeHealth)) /
      4;

    setFormData({
      ...formData,
      gradeMapeh: mapehAve,
    });
  }, [formData.gradeMusic]);

  useEffect(() => {
    let mapehAve =
      (Number(formData.gradeMusic) +
        Number(formData.gradeArt) +
        Number(formData.gradePE) +
        Number(formData.gradeHealth)) /
      4;

    setFormData({
      ...formData,
      gradeMapeh: mapehAve,
    });
  }, [formData.gradeArt]);

  useEffect(() => {
    let mapehAve =
      (Number(formData.gradeMusic) +
        Number(formData.gradeArt) +
        Number(formData.gradePE) +
        Number(formData.gradeHealth)) /
      4;

    setFormData({
      ...formData,
      gradeMapeh: mapehAve,
    });
  }, [formData.gradePE]);

  useEffect(() => {
    let mapehAve =
      (Number(formData.gradeMusic) +
        Number(formData.gradeArt) +
        Number(formData.gradePE) +
        Number(formData.gradeHealth)) /
      4;

    setFormData({
      ...formData,
      gradeMapeh: mapehAve,
    });
  }, [formData.gradeHealth]);

  const close = () => {
    closeModal(false);
    // setFormData({});
    dispatch(clearGrades());
  };

  const handleChange = (event) => {
    setFormData({ ...formData, gradeQuarter: event.target.value });
    // console.log(event.target.value - 1);
    setFormData({
      ...formData,
      gradeQuarter: event.target.value,
      gradeFilipino: grades ? grades[event.target.value - 1].gradeFilipino : "",
      gradeEnglish: grades ? grades[event.target.value - 1].gradeEnglish : "",
      gradeMath: grades ? grades[event.target.value - 1].gradeMath : "",
      gradeScience: grades ? grades[event.target.value - 1].gradeScience : "",
      gradeAP: grades ? grades[event.target.value - 1].gradeAP : "",

      gradeEsP: grades ? grades[event.target.value - 1].gradeEsP : "",
      gradeTLE: grades ? grades[event.target.value - 1].gradeTLE : "",
      gradeMapeh: grades ? grades[event.target.value - 1].gradeMapeh : "",
      gradeMusic: grades ? grades[event.target.value - 1].gradeMusic : "",
      gradeArt: grades ? grades[event.target.value - 1].gradeArt : "",

      gradePE: grades ? grades[event.target.value - 1].gradePE : "",
      gradeHealth: grades ? grades[event.target.value - 1].gradeHealth : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(updateGrade(formData));
    closeModal(false);
    setConfirm(false);
  };

  // const handleChangeMapeh = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

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
            Encode Grade for
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
            {`${data.studentLName} ${data.studentFName} 
                          ${data.studentMName} ${data.studentSuffix}`}
          </Typography>
          <br />

          <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
            <Grid item xs={6}>
              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      //   marginRight: 10,
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ width: "25%" }}
                    >
                      Quarter :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      onChange={handleChange}
                      size="small"
                      style={{ marginLeft: 20, width: "75%" }}
                      value={formData.gradeQuarter}
                    >
                      <MenuItem value="1">Quarter 1</MenuItem>
                      <MenuItem value="2">Quarter 2</MenuItem>
                      <MenuItem value="3">Quarter 3</MenuItem>
                      <MenuItem value="4">Quarter 4</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>Filipino : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="Filipino"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeFilipino: e.target.value,
                      })
                    }
                    value={formData.gradeFilipino}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>English : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="English"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeEnglish: e.target.value,
                      })
                    }
                    value={formData.gradeEnglish}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>Mathematics : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="Mathematics"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeMath: e.target.value,
                      })
                    }
                    value={formData.gradeMath}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>Science : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="Science"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="number"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeScience: e.target.value,
                      })
                    }
                    value={formData.gradeScience}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>A.P: </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="A.P"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="number"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeAP: e.target.value,
                      })
                    }
                    value={formData.gradeAP}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>EsP : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="EsP"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeEsP: e.target.value,
                      })
                    }
                    value={formData.gradeEsP}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>T.L.E : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="T.L.E"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeTLE: e.target.value,
                      })
                    }
                    value={formData.gradeTLE}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: 30, paddingTop: 60 }}>
              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>MAPEH : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="MAPEH"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    // onChange={(e) =>
                    //   setFormData({
                    //     ...formData,
                    //     gradeMapeh: e.target.value,
                    //   })
                    // }
                    value={Math.round(formData.gradeMapeh)}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 30,
                  }}
                >
                  <Typography>Music : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="Music"
                    variant="outlined"
                    size="small"
                    name="gradeMusic"
                    type="number"
                    fullWidth
                    // onChange={handleChangeMapeh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeMusic: e.target.value,
                      })
                    }
                    
                    value={formData.gradeMusic}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 30,
                  }}
                >
                  <Typography>Art : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="Art"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="gradeArt"
                    type="number"
                    // onChange={handleChangeMapeh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeArt: e.target.value,
                      })
                    }
                    value={formData.gradeArt}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 30,
                  }}
                >
                  <Typography>P.E : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="P.E"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="gradePE"
                    type="number"
                    // onChange={handleChangeMapeh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradePE: e.target.value,
                      })
                    }
                    value={formData.gradePE}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 30,
                  }}
                >
                  <Typography>Health : </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    
                    label="Health"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="gradeHealth"
                    type="number"
                    // onChange={handleChangeMapeh}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        gradeHealth: e.target.value,
                      })
                    }
                    value={formData.gradeHealth}
                  />
                </Grid>
              </Grid>
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
            <Button onClick={() => closeModal(false)}
            variant="contained" color="error" size="small">
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
        <DialogTitle id="alert-dialog-title">Update changes</DialogTitle>
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

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
import {
  addFaculty,
  getAllFaculty,
  updateFaculty,
  duplicateFaculty,
} from "../../../actions/faculty";
import { useNavigate, useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

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
  maxHeight: "90vh",
  overflowX: 'auto',
  p: 4,
};

const styleV = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  pb: 6,
};

export default function FacultyModal({
  closeModal,
  view,
  edit,
  duplicate,
  data,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uniquePass = uuid().slice(0, 8);
  const profileSample =
    "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png";

  // image upload
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();
  const fileInputRefEdit = useRef();

  const { faculty } = useSelector((state) => state.faculty);

  const [isOpen, setOpen] = useState(true);
  const [isOpenAlert, setOpenAlert] = useState(false);
  const [isOpenV, setOpenV] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const sampleLocation = useLocation().search.split("=")[0];
  const pagee = useLocation().search.split("=")[1] || 1;
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    facultyID: edit ? data?.facultyID : "",
    facultyStatus: edit ? data?.facultyStatus : "teaching",
    facultyName: edit ? data?.facultyName : "",
    facultyAddress: edit ? data?.facultyAddress : "",
    facultyEmail: edit ? data?.facultyEmail : "",
    facultyContactNo: edit ? data?.facultyContactNo : "",
    facultyGender: edit ? data?.facultyGender : "male",
    facultyUsername: edit ? data?.facultyUsername : "",
    facultyPassword: edit ? data?.facultyPassword : uniquePass,
    facultyPhoto: edit ? data?.facultyPhoto : "",
    facultyGrade: edit ? data?.facultyGrade : "7",
    facultySection: edit ? data?.facultySection : "",
    facultySchoolYear: edit ? data?.facultySchoolYear : "",
  });

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  useEffect(() => {
    if(duplicate){
      setFormData({
        ...formData,
        facultyPassword: uniquePass
      })
    }
  }, [duplicate])

  const previewFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleChangeGrade = (event) => {
    setFormData({ ...formData, facultyGrade: event.target.value });
  };

  const handleChangeGender = (event) => {
    setFormData({ ...formData, facultyGender: event.target.value });
  };

  const handleChangeStatus = (event) => {
    setFormData({ ...formData, facultyStatus: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.facultySection) {
      setTooltipIsOpen(true);
      // closeModal(false);
      setConfirm(false);
      return;
    }
    if (edit) {
      if (duplicate) {
        if (image) {
          let uploadData = new FormData();
          uploadData.append("submit", fileInputRef.current.files[0]);
          dispatch(addFaculty(formData, uploadData, navigate));
        } else {
          dispatch(duplicateFaculty(formData, data.facultyPhoto, navigate));
        }
        closeModal(false);
        setConfirm(false);
      } else {
        if (image) {
          let uploadData = new FormData();
          uploadData.append("submit", fileInputRefEdit.current.files[0]);
          dispatch(
            updateFaculty(
              {
                id: data?.id,
                formData,
                image: uploadData,
                pagee,
                sampleLocation,
              },
              navigate
            )
          );
        } else {
          dispatch(
            updateFaculty(
              {
                id: data?.id,
                formData,
                image: "sample",
                pagee,
                sampleLocation,
              },
              navigate
            )
          );
        }
        closeModal(false);
        setConfirm(false);
      }
    } else {
      if (image) {
        let uploadData = new FormData();
        uploadData.append("submit", fileInputRef.current.files[0]);
        dispatch(addFaculty(formData, uploadData, navigate));
      } else {
        dispatch(addFaculty(formData, "sample", navigate));
      }
      closeModal(false);
      setConfirm(false);
    }
  };

  const capitalizeLetter = (name) => {
    const arr = name.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2;
  };

  const testSave = () => {
    //   console.log(image);
  };

  return (
    <div>
      {view ? (
        <>
          <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon
                size="small"
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => closeModal(false)}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {view ? "View Faculty" : "Add new Faculty"}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                Faculty Personal Details
              </Typography>
              <br />

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={3}>
                  <img
                    src={data.facultyPhoto}
                    alt=""
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: -10,
                    }}
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={previewFile}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    label="Faculty ID"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginBottom: 10 }}
                    disabled
                    value={data.facultyID}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data.facultyStatus}
                      label="Teaching"
                      onChange={handleChangeStatus}
                      size="small"
                      style={{ flex: 1 }}
                      disabled
                    >
                      <MenuItem value="teaching">Teaching</MenuItem>
                      <MenuItem value="non-teaching">Non Teaching</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={data.facultyName}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={data.facultyAddress}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={data.facultyEmail}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={6}>
                  <TextField
                    label="Contact No."
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={data.facultyContactNo}
                  />
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ flex: 0.3 }}
                    >
                      Gender :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data.facultyGender}
                      label="Gender"
                      onChange={handleChangeGender}
                      size="small"
                      style={{ marginLeft: 10, flex: 1 }}
                      disabled
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>

              <br />
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                Account Details
              </Typography>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={data.facultyUsername}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={data.facultyPassword}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                style={{
                  marginRight: 5,
                  marginBottom: -15,
                  backgroundColor: "#009900",
                }}
                size="small"
                onClick={() => setOpenV(true)}
              >
                Advisory Class
              </Button>

              <br />
              <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                <Button
                  variant="contained"
                  style={{ marginRight: 5 }}
                  size="small"
                  onClick={() => setConfirm(true)}
                  // onClick={testSave}
                  disabled={view}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  disabled={view}
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Modal>

          {isOpenV ? (
            <Modal
              open={true}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleV}>
                <CloseIcon
                  size="small"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => setOpenV(false)}
                />

                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                  Advisory Class Details
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 15 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ flex: 1 }}
                    >
                      Grade :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data.facultyGrade}
                      disabled
                      label="Gender"
                      onChange={handleChangeGrade}
                      size="small"
                      style={{ marginLeft: 10, flex: 1, width: "100%" }}
                    >
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                    </Select>
                  </div>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="Section"
                      variant="outlined"
                      size="small"
                      fullWidth
                      disabled
                      value={data.facultySection}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="School Year"
                      variant="outlined"
                      size="small"
                      fullWidth
                      disabled
                      value={data.facultySchoolYear}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon
                size="small"
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => closeModal(false)}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {view ? "View Faculty" : "Add new Faculty"}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                Faculty Personal Details
              </Typography>
              <br />

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={3}>
                  <img
                    src={preview || profileSample}
                    alt=""
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: -10,
                    }}
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={previewFile}
                  />

                  <FileUploadIcon
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#efefef",
                      borderRadius: 10,
                      marginLeft: -10,
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      fileInputRef.current.click();
                    }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    label="Faculty ID"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginBottom: 10 }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyID: e.target.value,
                        facultyUsername: e.target.value,
                      })
                    }
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.facultyStatus}
                      label="Teaching"
                      onChange={handleChangeStatus}
                      size="small"
                      style={{ flex: 1 }}
                    >
                      <MenuItem value="teaching">Teaching</MenuItem>
                      <MenuItem value="non-teaching">Non Teaching</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.facultyName}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyAddress: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.facultyAddress}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({ ...formData, facultyEmail: e.target.value })
                    }
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={6}>
                  <TextField
                    label="Contact No."
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyContactNo: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ flex: 0.3 }}
                    >
                      Gender :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.facultyGender}
                      label="Gender"
                      onChange={handleChangeGender}
                      size="small"
                      style={{ marginLeft: 10, flex: 1 }}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>

              <br />
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                Account Details
              </Typography>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={formData.facultyID}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={formData.facultyPassword}
                  />
                </Grid>
              </Grid>

              <Tooltip
                open={tooltipIsOpen}
                onOpen={() => setTooltipIsOpen(true)}
                onClose={() => setTooltipIsOpen(false)}
                title="Please fill this field"
                placement="top"
              >
                <Button
                  variant="contained"
                  style={{
                    marginRight: 5,
                    marginBottom: -15,
                    backgroundColor: "#009900",
                  }}
                  size="small"
                  onClick={() => setOpenV(true)}
                >
                  Advisory Class
                </Button>
              </Tooltip>

              <br />
              <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                <Button
                  variant="contained"
                  style={{ marginRight: 5 }}
                  size="small"
                  onClick={() => setConfirm(true)}
                  // onClick={testSave}
                  disabled={view}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  disabled={view}
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Modal>

          {isOpenV ? (
            <Modal
              open={true}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleV}>
                <CloseIcon
                  size="small"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => setOpenV(false)}
                />

                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                  Advisory Class Details
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 15 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ flex: 1 }}
                    >
                      Grade :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.facultyGrade}
                      label="Gender"
                      onChange={handleChangeGrade}
                      size="small"
                      style={{ marginLeft: 10, flex: 1, width: "100%" }}
                    >
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                    </Select>
                  </div>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="Section"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          facultySection: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.facultySection}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="School Year"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          facultySchoolYear: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          ) : (
            <></>
          )}

          <Dialog
            open={confirm}
            onClose={() => setConfirm(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {duplicate
                ? "Duplicate Faculty"
                : edit
                ? "Update Faculty"
                : "Add new Faculty"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {duplicate
                  ? "Are you sure you want to duplicate this faculty?"
                  : edit
                  ? "Are you sure you want to update this faculty?"
                  : "Are you sure you want to add this faculty?"}
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
        </>
      )}

      {edit && (
        <>
          <Modal
            open={isOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CloseIcon
                size="small"
                style={{ float: "right", cursor: "pointer" }}
                onClick={() => closeModal(false)}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {duplicate ? "Duplicate Faculty" : "Update Faculty"}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                Faculty Personal Details
              </Typography>
              <br />

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={3}>
                  <img
                    src={preview || data.facultyPhoto}
                    alt=""
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginTop: -10,
                    }}
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRefEdit}
                    accept="image/*"
                    onChange={previewFile}
                  />

                  <FileUploadIcon
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#efefef",
                      borderRadius: 10,
                      marginLeft: -10,
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      fileInputRefEdit.current.click();
                    }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    label="Faculty ID"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginBottom: 10 }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyID: e.target.value,
                        facultyUsername: e.target.value,
                      })
                    }
                    value={formData.facultyID}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.facultyStatus}
                      label="Teaching"
                      onChange={handleChangeStatus}
                      size="small"
                      style={{ flex: 1 }}
                    >
                      <MenuItem value="teaching">Teaching</MenuItem>
                      <MenuItem value="non-teaching">Non Teaching</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.facultyName}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyAddress: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.facultyAddress}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({ ...formData, facultyEmail: e.target.value })
                    }
                    value={formData.facultyEmail}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={6}>
                  <TextField
                    label="Contact No."
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facultyContactNo: e.target.value,
                      })
                    }
                    value={formData.facultyContactNo}
                  />
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ flex: 0.3 }}
                    >
                      Gender :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.facultyGender}
                      label="Gender"
                      onChange={handleChangeGender}
                      size="small"
                      style={{ marginLeft: 10, flex: 1 }}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </div>
                </Grid>
              </Grid>

              <br />
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                Account Details
              </Typography>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={formData.facultyID}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disabled
                    value={formData.facultyPassword}
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                style={{
                  marginRight: 5,
                  marginBottom: -15,
                  backgroundColor: "#009900",
                }}
                size="small"
                onClick={() => setOpenV(true)}
              >
                Advisory Class
              </Button>

              <br />
              <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                <Button
                  variant="contained"
                  style={{ marginRight: 5 }}
                  size="small"
                  onClick={() => setConfirm(true)}
                  // onClick={testSave}
                  disabled={view}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  disabled={view}
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Modal>

          {isOpenV ? (
            <Modal
              open={true}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleV}>
                <CloseIcon
                  size="small"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => setOpenV(false)}
                />

                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                  Advisory Class Details
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 15 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <InputLabel
                      id="demo-simple-select-label"
                      style={{ flex: 1 }}
                    >
                      Grade :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.facultyGrade}
                      label="Gender"
                      onChange={handleChangeGrade}
                      size="small"
                      style={{ marginLeft: 10, flex: 1, width: "100%" }}
                    >
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                    </Select>
                  </div>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="Section"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          facultySection: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.facultySection}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="School Year"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          facultySchoolYear: e.target.value,
                        })
                      }
                      value={formData.facultySchoolYear}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

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
} from "../../../actions/faculty";
import { useNavigate, useLocation } from "react-router-dom";

import { IconButton, OutlinedInput, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { updateFacultySettings } from "../../../actions/faculty";

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

export default function SettingsModal({ closeModal }) {
  const dispatch = useDispatch();
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
  const [formData, setFormData] = React.useState({
    username: profile ? profile.facultyUsername : "",
    password: profile ? profile.facultyPassword : "",
    confPassword: profile ? profile.facultyPassword : "",
    showPassword: false,
    showConfPassword: false,
  });
  const [isOpenError, setOpenError] = useState(false);

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

  const previewFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfPassword = () => {
    setFormData({
      ...formData,
      showConfPassword: !formData.showConfPassword,
    });
  };

  const handleMouseDownConfPassword = (event) => {
    event.preventDefault();
  };

  const close = () => {
    closeModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confPassword) {
      setOpenError(true);
      setConfirm(false);
    } else {
      if (image) {
        let uploadData = new FormData();
        uploadData.append("submit", fileInputRef.current.files[0]);
        const sendData = {
          id: profile?.id,
          facultyUsername: formData.username,
          facultyPassword: formData.password,
        };

        dispatch(updateFacultySettings(sendData, uploadData));
      } else {
        const sendData = {
          id: profile?.id,
          facultyUsername: formData.username,
          facultyPassword: formData.password,
          facultyPhoto: profile?.facultyPhoto,
        };
        dispatch(updateFacultySettings(sendData, "sample"));
      }

      setOpenError(false);
      setConfirm(false);
      closeModal(false);
    }
  };

  // console.log(profile);

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
            Settings
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
            Faculty Account Details
          </Typography>
          <br />

          <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
            <Grid item xs={12}>
              <img
                src={preview || profile?.facultyPhoto}
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
          </Grid>

          <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
            <Grid item xs={12}>
              <TextField
                
                label="Username"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  })
                }
                value={formData.username}
                disabled
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                size="small"
                // id="outlined-adornment-password"
                type={formData.showPassword ? "text" : "password"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                value={formData.password}
                // onChange={handleChange("password")}
                InputProps={{
                  endAdornment: (
                    <>
                      <InputAdornment position="end">
                        <IconButton
                          // aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {formData.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    </>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                fullWidth
                size="small"
                type={formData.showConfPassword ? "text" : "password"}
                // onChange={handleChange("confPassword")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confPassword: e.target.value,
                  })
                }
                value={formData.confPassword}
                InputProps={{
                  endAdornment: (
                    <>
                      <InputAdornment position="end">
                        <IconButton
                          // aria-label="toggle password visibility"
                          onClick={handleClickShowConfPassword}
                          onMouseDown={handleMouseDownConfPassword}
                          edge="end"
                        >
                          {formData.showConfPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    </>
                  ),
                }}
              />
            </Grid>
          </Grid>

          {isOpenError ? (
            <Typography
              style={{ backgroundColor: "#ffb3b3", padding: 3, fontSize: 12 }}
            >
              Password didn't match
            </Typography>
          ) : (
            <></>
          )}

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
            <Button onClick={() => closeModal(false)} variant="contained" color="error" size="small">
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

import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Button,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateHead } from "../../../actions/faculty";

const AdminAccount = () => {
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { headInfo } = useSelector((state) => state.faculty);
  // console.log(headInfo);
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    facultyName: headInfo.facultyName,
    facultyPhoto: headInfo.facultyPhoto,
    facultySchoolYear: headInfo.facultySchoolYear
  });
  const [confirm, setConfirm] = useState(false);
  const profileSample =
    "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png";

  //   useEffect(() => {
  //     dispatch(getHeadInfo());
  //   }, [headInfo]);

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

  const handleSubmit = () => {
    if (image) {
      let uploadData = new FormData();
      uploadData.append("submit", fileInputRef.current.files[0]);
      dispatch(updateHead(formData, uploadData, navigate));
    } else {
      dispatch(updateHead(formData, "sample", navigate));
    }
    setConfirm(false);
  };

  const capitalizeLetter = (name) => {
    const arr = name.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" style={{ marginTop: 30 }}>
        School Head
      </Typography>
      <br />
      <div>
        <img
          src={preview || formData.facultyPhoto}
          alt=""
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            objectFit: "cover",
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
      </div>
      <br />

      <TextField
        
        label="Name"
        variant="outlined"
        size="small"
        style={{ width: "40%", marginBottom: 10 }}
        value={formData.facultyName}
        onChange={(e) =>
          setFormData({
            ...formData,
            facultyName: capitalizeLetter(e.target.value),
          })
        }
      />

      <TextField
        
        label="School Year"
        variant="outlined"
        size="small"
        style={{ width: "40%" }}
        value={formData.facultySchoolYear}
        onChange={(e) =>
          setFormData({
            ...formData,
            facultySchoolYear: e.target.value,
          })
        }
      />

      <Box sx={{ flexGrow: 1, textAlign: "right", mt: 2 }}>
        <Button
          variant="contained"
          style={{ marginRight: 5 }}
          size="small"
          onClick={() => setConfirm(true)}
        >
          Save
        </Button>
        <Button variant="contained" color="error" size="small">
          Cancel
        </Button>
      </Box>

      <Dialog
        open={confirm}
        onClose={() => setConfirm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Update School Head</DialogTitle>
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
};

export default AdminAccount;

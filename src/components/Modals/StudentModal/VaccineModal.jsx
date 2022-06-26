import React, {useState} from "react";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  minHeight: "80vh",
  p: 4,
};

export default function StudentModal({ closeModal }) {
  // const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [gender, setGender] = useState("male");
  const [grade, setGrade] = useState("7");
  const [modality, setModality] = useState("modular");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };

  const handleChangeModality = (event) => {
    setModality(event.target.value);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={true}
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
            Vaccine Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
            Student Personal Details
          </Typography>

          <InputLabel id="demo-simple-select-label">Name :</InputLabel>
          <Grid container rowSpacing={1}>
            <Grid item xs={3}>
              <TextField
                
                label="Student LRN"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="First Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                
                label="Middle Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Last Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                
                label="Suffix"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} style={{ marginTop: 2 }}>
            <Grid item xs={2}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <InputLabel id="demo-simple-select-label">Gender : </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={4}>
              <TextField
                
                label="Birth Place"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>

            <Grid item xs={5}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginRight: 10 }}
                >
                  Date of Birth :{" "}
                </InputLabel>
                <TextField
                  
                  label="mm/dd/yy"
                  variant="outlined"
                  size="small"
                />
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            style={{ marginTop: 2, marginBottom: 3 }}
          >
            <Grid item xs={3}>
              <TextField
                
                label="Religion"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Ethnic Group"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Mother Tongue"
                variant="outlined"
                size="small"
                fullWidth
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Nationality"
                variant="outlined"
                size="small"
                fullWidth
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <InputLabel id="demo-simple-select-label" style={{ marginTop: 8 }}>
            Address :
          </InputLabel>
          <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
            <Grid item xs={3}>
              <TextField
                
                label="House# / Street"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Barangay"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="City"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Province"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <InputLabel id="demo-simple-select-label" style={{ marginTop: 8 }}>
            Mother :
          </InputLabel>
          <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
            <Grid item xs={4}>
              <TextField
                
                label="First Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                
                label="Last Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                
                label="Middle Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <InputLabel id="demo-simple-select-label" style={{ marginTop: 8 }}>
            Father :
          </InputLabel>
          <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
            <Grid item xs={4}>
              <TextField
                
                label="First Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                
                label="Last Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                
                label="Middle Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <InputLabel id="demo-simple-select-label" style={{ marginTop: 8 }}>
            Guardian :
          </InputLabel>
          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <TextField
                
                label="Name"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Relationship"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Contact no."
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <InputLabel id="demo-simple-select-label" style={{ marginTop: 8 }}>
            Learning Modality :
          </InputLabel>
          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={modality}
                label="Modality"
                onChange={handleChangeModality}
                size="small"
                style={{ width: "90%" }}
              >
                <MenuItem value="modular">Modular</MenuItem>
                <MenuItem value="f2f">Face to face</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <InputLabel id="demo-simple-select-label">Grade : </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={grade}
                  label="Grade"
                  onChange={handleChangeGrade}
                  size="small"
                  style={{ width: "70%" }}
                >
                  <MenuItem value="7">7</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="9">9</MenuItem>
                  <MenuItem value="10">10</MenuItem>
                </Select>
              </div>

              {/* <TextField
                
                label="Grade Level"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              /> */}
            </Grid>
            <Grid item xs={3}>
              <TextField
                
                label="Section"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <br />
          <Box sx={{ flexGrow: 1, textAlign: "right", paddingRight: 1 }}>
            <Button variant="contained" style={{ marginRight: 5 }} size="small">
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginRight: 5 }}
              size="small"
            >
              Cancel
            </Button>
          </Box>
        </Box>

      </Modal>
    </div>
  );
}

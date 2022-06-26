import * as React from "react";
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
  width: 400,
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  minHeight: 400,
  p: 4,
};

export default function StudentModal({closeModal}) {
  // const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [gender, setGender] = React.useState("male");

  const handleChange = (event) => {
    setGender(event.target.value);
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
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: 10}}>
            Add new Subject
          </Typography>

          <InputLabel id="demo-simple-select-label">Subject :</InputLabel>
          <Grid container rowSpacing={1} style={{ marginTop: 2, marginBottom: 10 }}>
            <Grid item xs={6}>
              <TextField
                
                label="Subject ID"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                
                label="Subject"
                variant="outlined"
                size="small"
                style={{ width: "95%" }}
              />
            </Grid>
          </Grid>

          <InputLabel id="demo-simple-select-label">For :</InputLabel>
          <Grid container rowSpacing={1} style={{ marginTop: 2, marginBottom: 10 }}>
            <Grid item xs={12} style={{marginRight: 9}}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                  size="small"
                  fullWidth
                >
                  <MenuItem value="male">All</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
            </Grid>
          </Grid>

          <InputLabel id="demo-simple-select-label">Description :</InputLabel>
          <Grid
            container
            rowSpacing={1}
            style={{ marginTop: 6, marginBottom: 10, }}
          >
            <Grid item xs={12} style={{marginRight: 9}}>
              <TextField
                
                label=""
                variant="outlined"
                size="small"
                multiline
                rows={8}
                fullWidth
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

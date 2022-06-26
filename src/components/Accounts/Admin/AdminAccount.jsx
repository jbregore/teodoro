import React from "react";
import {
  Grid,
  Button,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AdminAccount = () => {
  const [values, setValues] = React.useState({
    password: "",
    confPassword: "",
    showPassword: false,
    showConfPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfPassword = () => {
    setValues({
      ...values,
      showConfPassword: !values.showConfPassword,
    });
  };

  const handleMouseDownConfPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="https://yt3.ggpht.com/a/AATXAJyxMQD6cRc2rlQQqJxDs2tfBTGhKrtS4vc22A=s900-c-k-c0xffffffff-no-rj-mo"
        alt=""
        style={{ width: 150, height: 150, borderRadius: "50%" }}
      />

      <TextField
        
        label="Username"
        variant="outlined"
        size="small"
      />

      <OutlinedInput
        size="small"
        id="outlined-adornment-password"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />

      <OutlinedInput
        size="small"
        id="outlined-adornment-confirm-password"
        type={values.showConfPassword ? "text" : "password"}
        value={values.confPassword}
        onChange={handleChange("confPassword")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfPassword}
              onMouseDown={handleMouseDownConfPassword}
              edge="end"
            >
              {values.showConfPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Confirm Password"
      />

      {/* <Grid container rowSpacing={1} style={{ marginBottom: 35 }}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            style={{ marginRight: 5 }}
            size="small"
          >
            Save Changes
          </Button>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default AdminAccount;

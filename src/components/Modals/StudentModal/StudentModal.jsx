import React, { useState, useEffect } from "react";
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
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  updateStudent,
  duplicateStudent,
} from "../../../actions/students";
import { useNavigate } from "react-router-dom";

import Alert from "../Alert";

import { getAllStudents } from "../../../actions/students";
import { useLocation } from "react-router-dom";

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
  maxHeight: "90vh",
  overflowX: 'auto',
  p: 4,
};

const styleV = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  pb: 6,
};

const styleE = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  pb: 6,
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function StudentModal({
  closeModal,
  view,
  edit,
  duplicate,
  data,
}) {
  // const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [gender, setGender] = useState("male");
  const [grade, setGrade] = useState("7");
  const [isOpen, setOpen] = useState(true);
  const [isOpenAlert, setOpenAlert] = useState(false);
  const [isOpenV, setOpenV] = useState(false);
  const [isOpenE, setOpenE] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const query = useQuery();
  const page = query.get("page") || 1;
  const sampleLocation = useLocation().search.split("=")[0];
  const pagee = useLocation().search.split("=")[1] || 1;
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    studentLRN: edit ? data?.studentLRN : "",
    studentFName: edit ? data?.studentFName : "",
    studentLName: edit ? data?.studentLName : "",
    studentMName: edit ? data?.studentMName : "",
    studentSuffix: edit ? data?.studentSuffix : "",

    studentGender: edit ? data?.studentGender : "male",
    studentAge: edit ? data?.studentAge : "0",
    studentBirthplace: edit ? data?.studentBirthplace : "",
    studentBirthday: edit ? data?.studentBirthday : "",

    studentReligion: edit ? data?.studentReligion : "",
    studentEthnicGroup: edit ? data?.studentEthnicGroup : "",
    studentMotherTongue: edit ? data?.studentMotherTongue : "",
    studentNationality: edit ? data?.studentNationality : "",

    studentHouseNo: edit ? data?.studentHouseNo : "",
    studentBrgy: edit ? data?.studentBrgy : "",
    studentCity: edit ? data?.studentCity : "",
    studentProvince: edit ? data?.studentProvince : "",

    motherFName: edit ? data?.motherFName : "",
    motherLName: edit ? data?.motherLName : "",
    motherMName: edit ? data?.motherMName : "",

    fatherFName: edit ? data?.fatherFName : "",
    fatherLName: edit ? data?.fatherLName : "",
    fatherMName: edit ? data?.fatherMName : "",

    guardianName: edit ? data?.guardianName : "",
    guardianRelationship: edit ? data?.guardianRelationship : "",
    guardianContactNo: edit ? data?.guardianContactNo : "",

    studentGrade: edit ? data?.studentGrade : "7",
    studentSection: edit ? data?.studentSection : "",
    studentSchoolYear: edit ? data?.studentSchoolYear : "",

    firstDoseBrand: edit ? data?.firstDoseBrand : "",
    firstDoseDate: edit ? data?.firstDoseDate : "",

    secondDoseBrand: edit ? data?.secondDoseBrand : "",
    secondDoseDate: edit ? data?.secondDoseDate : "",

    boosterBrand: edit ? data?.boosterBrand : "",
    boosterDate: edit ? data?.boosterDate : "",

    booster2Brand: edit ? data?.booster2Brand : "",
    booster2Date: edit ? data?.booster2Date : "",

    jhsAverage: edit ? data?.jhsAverage : "",
    jhsCitation: edit ? data?.jhsCitation : "",
    jhsSchool: edit ? data?.jhsSchool : "",
    jhsSchoolID: edit ? data?.jhsSchoolID : "",
    jhsAddress: edit ? data?.jhsAddress : "",
    peptCheck: edit ? (data?.peptRating === "" ? false : true) : false,
    peptRating: edit ? data?.peptRating : "",
    alsCheck: edit ? (data?.alsRating === "" ? false : true) : false,
    alsRating: edit ? data?.alsRating : "",
    othersCheck: edit ? (data?.othersSpecify === "" ? false : true) : false,
    othersSpecify: edit ? data?.othersSpecify : "",
    othersDateAssesment: edit ? data?.othersDateAssesment : "",
    othersTestingCenter: edit ? data?.othersTestingCenter : "",
  });

  // useEffect(() => {
  //   if(!formData.peptCheck){
  //     setFormData({
  //       ...formData,
  //       peptRating: "",
  //     })
  //   }
  // }, [formData.peptCheck]);

  const handleChange = (event) => {
    setGender(event.target.value);
    setFormData({ ...formData, studentGender: event.target.value });
  };

  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
    setFormData({ ...formData, studentGrade: event.target.value });
  };

  function getAge(dateString) {
    // "10/31/"+new Date().getFullYear()
    //maintain - edit the school year as of
    var today = new Date("10/31/2022");
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if(formData.peptCheck === false){
    //   setFormData({
    //     ...formData,
    //     peptRating: ""
    //   })
    //   alert("bahog")
    // }
    // console.log(formData);
    // if (!formData.secondDoseDate) {
    //   setTooltipIsOpen(true);
    //   // closeModal(false);
    //   setConfirm(false);
    //   return;
    // }
    if (edit) {
      //change code when duplicates
      if (duplicate) {
        dispatch(duplicateStudent(formData, navigate));
        closeModal(false);
        setConfirm(false);
      } else {
        dispatch(
          updateStudent(
            { id: data?.id, formData, pagee, sampleLocation },
            navigate
          )
        );
        closeModal(false);
        setConfirm(false);
      }
    } else {
      //loading
      //add to db
      // console.log(formData);
      // console.log(formData);
      dispatch(addStudent(formData, navigate));
      closeModal(false);
      setConfirm(false);
    }
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [edit]);

  const capitalizeLetter = (name) => {
    const arr = name.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2;
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
                {view ? "View Student" : "Add new Student"}
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
                    onChange={(e) =>
                      setFormData({ ...formData, studentLRN: e.target.value })
                    }
                    disabled
                    value={data.studentLRN}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, studentFName: e.target.value })
                    }
                    disabled
                    value={data.studentFName}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, studentLName: e.target.value })
                    }
                    disabled
                    value={data.studentLName}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, studentMName: e.target.value })
                    }
                    disabled
                    value={data.studentMName}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    label="Suffix"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSuffix: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentSuffix}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginTop: 2 }}>
                <Grid item xs={3}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Gender :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      onChange={handleChange}
                      size="small"
                      style={{ marginLeft: 10 }}
                      disabled
                      value={data.studentGender}
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentBirthplace: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentBirthplace}
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentBirthday: e.target.value,
                        })
                      }
                      disabled
                      value={data.studentBirthday}
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentReligion: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentReligion}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Ethnic Group"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentEthnicGroup: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentEthnicGroup}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Mother Tongue"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentMotherTongue: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentMotherTongue}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Nationality"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentNationality: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentNationality}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Address :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={3}>
                  <TextField
                    label="House# / Street"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentHouseNo: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentHouseNo}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Barangay"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, studentBrgy: e.target.value })
                    }
                    disabled
                    value={data.studentBrgy}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="City"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, studentCity: e.target.value })
                    }
                    disabled
                    value={data.studentCity}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Province"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentProvince: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentProvince}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Mother :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={4}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, motherFName: e.target.value })
                    }
                    disabled
                    value={data.motherFName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, motherLName: e.target.value })
                    }
                    disabled
                    value={data.motherLName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, motherMName: e.target.value })
                    }
                    disabled
                    value={data.motherMName}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Father :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={4}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, fatherFName: e.target.value })
                    }
                    disabled
                    value={data.fatherFName}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, fatherLName: e.target.value })
                    }
                    disabled
                    value={data.fatherLName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, fatherMName: e.target.value })
                    }
                    disabled
                    value={data.fatherMName}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Guardian :
              </InputLabel>
              <Grid container rowSpacing={1}>
                <Grid item xs={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({ ...formData, guardianName: e.target.value })
                    }
                    disabled
                    value={data.guardianName}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Relationship"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianRelationship: e.target.value,
                      })
                    }
                    disabled
                    value={data.guardianRelationship}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Contact no."
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianContactNo: e.target.value,
                      })
                    }
                    disabled
                    value={data.guardianContactNo}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginTop: 8 }}>
                <Grid item xs={3}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Grade :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Grade"
                      onChange={handleChangeGrade}
                      size="small"
                      style={{ width: "70%" }}
                      disabled
                      value={data.studentGrade}
                    >
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                    </Select>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Section"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSection: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentSection}
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    label="School Year"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSchoolYear: e.target.value,
                      })
                    }
                    disabled
                    value={data.studentSchoolYear}
                  />
                </Grid>

                {/* <Grid item xs={3}>
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
                    Vaccination status
                  </Button>
                </Grid> */}
              </Grid>

              <div style={{ marginTop: 15 }}>
                <Button
                  variant="contained"
                  style={{
                    marginRight: 5,
                    marginBottom: -15,
                    backgroundColor: "#009900",
                  }}
                  size="small"
                  onClick={() => setOpenE(true)}
                >
                  Enrollment
                </Button>

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
                  Vaccination status
                </Button>
              </div>

              <br />
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
                  Vaccination status
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="First Dose Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstDoseBrand: e.target.value,
                        })
                      }
                      disabled
                      value={data.firstDoseBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstDoseDate: e.target.value,
                        })
                      }
                      disabled
                      value={data.firstDoseDate}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Second Dose Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondDoseBrand: e.target.value,
                        })
                      }
                      disabled
                      value={data.secondDoseBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondDoseDate: e.target.value,
                        })
                      }
                      disabled
                      value={data.secondDoseDate}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Booster Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          boosterBrand: e.target.value,
                        })
                      }
                      disabled
                      value={data.boosterBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          boosterDate: e.target.value,
                        })
                      }
                      disabled
                      value={data.boosterDate}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Second Booster Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          booster2Brand: capitalizeLetter(e.target.value),
                        })
                      }
                      disabled
                      value={data.booster2Brand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          booster2Date: e.target.value,
                        })
                      }
                      disabled
                      value={data.booster2Date}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          ) : (
            <></>
          )}

          {isOpenE ? (
            <Modal
              open={true}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleE}>
                <CloseIcon
                  size="small"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => setOpenE(false)}
                />

                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                  Eligibility for JHS Enrollment
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked disabled />}
                      label="Elementary School Completer"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      label="General Average"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsAverage: e.target.value,
                        })
                      }
                      disabled
                      value={data.jhsAverage}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextField
                      label="Citation (if any)"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsCitation: capitalizeLetter(e.target.value),
                        })
                      }
                      disabled
                      value={data.jhsCitation}
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
                      label="Name of Elementary School"
                      variant="outlined"
                      size="small"
                      style={{ width: "97%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsSchool: capitalizeLetter(e.target.value),
                        })
                      }
                      disabled
                      value={data.jhsSchool}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      label="School ID"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsSchoolID: e.target.value,
                        })
                      }
                      disabled
                      value={data.jhsSchoolID}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextField
                      label="Address of School"
                      variant="outlined"
                      size="small"
                      style={{ width: "96%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsAddress: capitalizeLetter(e.target.value),
                        })
                      }
                      disabled
                      value={data.jhsAddress}
                    />
                  </Grid>
                </Grid>

                <Typography sx={{ mt: 2, mb: 1 }}>Others:</Typography>
                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6} container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={
                              data.peptRating !== "" ? true : false
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                peptCheck: !formData.peptCheck,
                              })
                            }
                            disabled
                          />
                        }
                        label="PEPT Passer"
                      />
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: -20 }}>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        size="small"
                        style={{ width: "95%" }}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            peptRating: e.target.value,
                          })
                        }
                        disabled
                        value={data.peptRating}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={6} container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={
                              data.alsRating !== "" ? true : false
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                alsCheck: !formData.alsCheck,
                              })
                            }
                            disabled
                          />
                        }
                        label="ALS A & E Passer"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        size="small"
                        style={{ width: "90%" }}
                        disabled
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            alsRating: e.target.value,
                          })
                        }
                        value={data.alsRating}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={
                            data.othersSpecify !== "" ? true : false
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              othersCheck: !formData.othersCheck,
                            })
                          }
                          disabled
                        />
                      }
                      label="Others"
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <TextField
                      label="Please specify"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      disabled
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersSpecify: capitalizeLetter(e.target.value),
                        })
                      }
                      value={data.othersSpecify}
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <TextField
                      label="Date of Assesment"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      disabled
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersDateAssesment: e.target.value,
                        })
                      }
                      value={data.othersDateAssesment}
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
                      label="Name and address of testing center"
                      variant="outlined"
                      size="small"
                      style={{ width: "98%" }}
                      disabled
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersTestingCenter: capitalizeLetter(e.target.value),
                        })
                      }
                      value={data.othersTestingCenter}
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
                {view ? "View Student" : "Add new Student"}
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentLRN: capitalizeLetter(e.target.value),
                      })
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentFName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentFName}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentLName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentLName}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentMName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentMName}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    label="Suffix"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSuffix: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentSuffix}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginTop: 2 }}>
                <Grid item xs={3}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Gender :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      label="Gender"
                      onChange={handleChange}
                      size="small"
                      style={{ marginLeft: 10 }}
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentBirthplace: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentBirthplace}
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentBirthday: e.target.value,
                          studentAge: getAge(e.target.value),
                        })
                      }
                      value={formData.studentBirthday}
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentReligion: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentReligion}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Ethnic Group"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentEthnicGroup: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentEthnicGroup}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Mother Tongue"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentMotherTongue: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentMotherTongue}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Nationality"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentNationality: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentNationality}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Address :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={3}>
                  <TextField
                    label="House# / Street"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentHouseNo: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentHouseNo}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Barangay"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentBrgy: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentBrgy}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="City"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentCity: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentCity}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Province"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentProvince: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentProvince}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Mother :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={4}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        motherFName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.motherFName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        motherLName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.motherLName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        motherMName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.motherMName}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Father :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={4}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fatherFName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.fatherFName}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fatherLName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.fatherLName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fatherMName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.fatherMName}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Guardian :
              </InputLabel>
              <Grid container rowSpacing={1}>
                <Grid item xs={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.guardianName}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Relationship"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianRelationship: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.guardianRelationship}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Contact no."
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianContactNo: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginTop: 8 }}>
                <Grid item xs={3}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Grade :{" "}
                    </InputLabel>
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
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Section"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSection: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentSection}
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    label="School Year"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSchoolYear: e.target.value,
                      })
                    }
                  />
                </Grid>

                {/* <Grid item xs={3}>
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
                      Vaccination status
                    </Button>
                  </Tooltip>
                </Grid> */}
              </Grid>

              <div style={{ marginTop: 15 }}>
                <Button
                  variant="contained"
                  style={{
                    marginRight: 5,
                    marginBottom: -15,
                    backgroundColor: "#009900",
                  }}
                  size="small"
                  onClick={() => setOpenE(true)}
                >
                  Enrollment
                </Button>

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
                  Vaccination status
                </Button>
              </div>

              <br />
              <Box sx={{ flexGrow: 1, textAlign: "right", paddingRight: 1 }}>
                <Button
                  variant="contained"
                  style={{ marginRight: 5 }}
                  size="small"
                  onClick={() => setConfirm(true)}
                  disabled={view}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  style={{ marginRight: 5 }}
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
                  Vaccination status
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="First Dose Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstDoseBrand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.firstDoseBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstDoseDate: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Second Dose Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondDoseBrand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.secondDoseBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondDoseDate: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Booster Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          boosterBrand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.boosterBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          boosterDate: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Second Booster Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          booster2Brand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.booster2Brand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          booster2Date: e.target.value,
                        })
                      }
                      value={formData.booster2Date}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          ) : (
            <></>
          )}

          {isOpenE ? (
            <Modal
              open={true}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleE}>
                <CloseIcon
                  size="small"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => setOpenE(false)}
                />

                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                  Eligibility for JHS Enrollment
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked disabled />}
                      label="Elementary School Completer"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      label="General Average"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsAverage: e.target.value,
                        })
                      }
                      value={formData.jhsAverage}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextField
                      label="Citation (if any)"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsCitation: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.jhsCitation}
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
                      label="Name of Elementary School"
                      variant="outlined"
                      size="small"
                      style={{ width: "97%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsSchool: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.jhsSchool}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      label="School ID"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsSchoolID: e.target.value,
                        })
                      }
                      value={formData.jhsSchoolID}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextField
                      label="Address of School"
                      variant="outlined"
                      size="small"
                      style={{ width: "96%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsAddress: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.jhsAddress}
                    />
                  </Grid>
                </Grid>

                <Typography sx={{ mt: 2, mb: 1 }}>Others:</Typography>
                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6} container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={formData.peptCheck}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                peptCheck: !formData.peptCheck,
                                peptRating: !formData.peptCheck
                                  ? formData.peptRating
                                  : "",
                              })
                            }
                          />
                        }
                        label="PEPT Passer"
                      />
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: -20 }}>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        size="small"
                        style={{ width: "95%" }}
                        disabled={!formData.peptCheck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            peptRating: e.target.value,
                          })
                        }
                        value={formData.peptCheck ? formData.peptRating : ""}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={6} container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={formData.alsCheck}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                alsCheck: !formData.alsCheck,
                                alsRating: !formData.alsCheck
                                  ? formData.alsRating
                                  : "",
                              })
                            }
                          />
                        }
                        label="ALS A & E Passer"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        size="small"
                        style={{ width: "90%" }}
                        disabled={!formData.alsCheck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            alsRating: e.target.value,
                          })
                        }
                        value={formData.alsCheck ? formData.alsRating : ""}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={formData.othersCheck}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              othersCheck: !formData.othersCheck,
                              othersSpecify: !formData.othersCheck
                                ? formData.othersSpecify
                                : "",
                              othersDateAssesment: !formData.othersCheck
                                ? formData.othersDateAssesment
                                : "",
                              othersTestingCenter: !formData.othersCheck
                                ? formData.othersTestingCenter
                                : "",
                            })
                          }
                        />
                      }
                      label="Others"
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <TextField
                      label="Please specify"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      disabled={!formData.othersCheck}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersSpecify: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.othersCheck ? formData.othersSpecify : ""}
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <TextField
                      label="Date of Assesment"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      disabled={!formData.othersCheck}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersDateAssesment: e.target.value,
                        })
                      }
                      value={
                        formData.othersCheck ? formData.othersDateAssesment : ""
                      }
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
                      label="Name and address of testing center"
                      variant="outlined"
                      size="small"
                      style={{ width: "98%" }}
                      disabled={!formData.othersCheck}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersTestingCenter: capitalizeLetter(e.target.value),
                        })
                      }
                      value={
                        formData.othersCheck ? formData.othersTestingCenter : ""
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
                ? "Duplicate Student"
                : edit
                ? "Update Student"
                : "Add new Student"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {duplicate
                  ? "Are you sure you want to duplicate this student?"
                  : edit
                  ? "Are you sure you want to update this student?"
                  : "Are you sure you want to add this student?"}
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
                {duplicate ? "Duplicate Student" : "Update Student"}
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
                    onChange={(e) =>
                      setFormData({ ...formData, studentLRN: e.target.value })
                    }
                    value={formData.studentLRN}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentFName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentFName}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentLName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentLName}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentMName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentMName}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    label="Suffix"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSuffix: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentSuffix}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginTop: 2 }}>
                <Grid item xs={3}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Gender :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      onChange={handleChange}
                      size="small"
                      style={{ marginLeft: 10 }}
                      value={formData.studentGender}
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentBirthplace: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentBirthplace}
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
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          studentBirthday: e.target.value,
                          studentAge: getAge(e.target.value),
                        })
                      }
                      value={formData.studentBirthday}
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
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentReligion: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentReligion}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Ethnic Group"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentEthnicGroup: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentEthnicGroup}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Mother Tongue"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentMotherTongue: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentMotherTongue}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Nationality"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentNationality: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentNationality}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Address :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={3}>
                  <TextField
                    label="House# / Street"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentHouseNo: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentHouseNo}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Barangay"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentBrgy: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentBrgy}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="City"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentCity: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentCity}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Province"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentProvince: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentProvince}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Mother :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={4}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        motherFName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.motherFName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        motherLName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.motherLName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        motherMName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.motherMName}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Father :
              </InputLabel>
              <Grid container rowSpacing={1} style={{ marginBottom: 3 }}>
                <Grid item xs={4}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fatherFName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.fatherFName}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fatherLName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.fatherLName}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fatherMName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.fatherMName}
                  />
                </Grid>
              </Grid>

              <InputLabel
                id="demo-simple-select-label"
                style={{ marginTop: 8 }}
              >
                Guardian :
              </InputLabel>
              <Grid container rowSpacing={1}>
                <Grid item xs={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianName: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.guardianName}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Relationship"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianRelationship: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.guardianRelationship}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Contact no."
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guardianContactNo: e.target.value,
                      })
                    }
                    value={formData.guardianContactNo}
                  />
                </Grid>
              </Grid>

              <Grid container rowSpacing={1} style={{ marginTop: 8 }}>
                <Grid item xs={3}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Grade :{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Grade"
                      onChange={handleChangeGrade}
                      size="small"
                      style={{ width: "70%" }}
                      value={formData.studentGrade}
                    >
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="9">9</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                    </Select>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="Section"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSection: capitalizeLetter(e.target.value),
                      })
                    }
                    value={formData.studentSection}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    label="School Year"
                    variant="outlined"
                    size="small"
                    style={{ width: "95%" }}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentSchoolYear: e.target.value,
                      })
                    }
                    value={formData.studentSchoolYear}
                  />
                </Grid>

                {/* <Grid item xs={3}>
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
                    Vaccination status
                  </Button>
                </Grid> */}
              </Grid>

              <div style={{ marginTop: 15 }}>
                <Button
                  variant="contained"
                  style={{
                    marginRight: 5,
                    marginBottom: -15,
                    backgroundColor: "#009900",
                  }}
                  size="small"
                  onClick={() => setOpenE(true)}
                >
                  Enrollment
                </Button>

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
                  Vaccination status
                </Button>
              </div>

              <br />
              <Box sx={{ flexGrow: 1, textAlign: "right", paddingRight: 1 }}>
                <Button
                  variant="contained"
                  style={{ marginRight: 5 }}
                  size="small"
                  onClick={() => setConfirm(true)}
                  disabled={view}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  style={{ marginRight: 5 }}
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
                  Vaccination status
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="First Dose Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstDoseBrand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.firstDoseBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstDoseDate: e.target.value,
                        })
                      }
                      value={formData.firstDoseDate}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Second Dose Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondDoseBrand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.secondDoseBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          secondDoseDate: e.target.value,
                        })
                      }
                      value={formData.secondDoseDate}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Booster Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          boosterBrand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.boosterBrand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          boosterDate: e.target.value,
                        })
                      }
                      value={formData.boosterDate}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Second Booster Brand"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          booster2Brand: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.booster2Brand}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Date"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          booster2Date: e.target.value,
                        })
                      }
                      value={formData.booster2Date}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          ) : (
            <></>
          )}

          {isOpenE ? (
            <Modal
              open={true}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleE}>
                <CloseIcon
                  size="small"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => setOpenE(false)}
                />

                <Typography id="modal-modal-description" sx={{ mt: 2, mb: 1 }}>
                  Eligibility for JHS Enrollment
                </Typography>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked disabled />}
                      label="Elementary School Completer"
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      label="General Average"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsAverage: e.target.value,
                        })
                      }
                      value={formData.jhsAverage}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextField
                      label="Citation (if any)"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsCitation: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.jhsCitation}
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
                      label="Name of Elementary School"
                      variant="outlined"
                      size="small"
                      style={{ width: "97%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsSchool: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.jhsSchool}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={3}>
                    <TextField
                      label="School ID"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsSchoolID: e.target.value,
                        })
                      }
                      value={formData.jhsSchoolID}
                    />
                  </Grid>

                  <Grid item xs={9}>
                    <TextField
                      label="Address of School"
                      variant="outlined"
                      size="small"
                      style={{ width: "96%" }}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          jhsAddress: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.jhsAddress}
                    />
                  </Grid>
                </Grid>

                <Typography sx={{ mt: 2, mb: 1 }}>Others:</Typography>
                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={6} container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={formData.peptCheck}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                peptCheck: !formData.peptCheck,
                                peptRating: !formData.peptCheck
                                  ? formData.peptRating
                                  : "",
                              })
                            }
                          />
                        }
                        label="PEPT Passer"
                      />
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: -20 }}>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        size="small"
                        style={{ width: "95%" }}
                        disabled={!formData.peptCheck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            peptRating: e.target.value,
                          })
                        }
                        value={formData.peptCheck ? formData.peptRating : ""}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={6} container>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked={formData.alsCheck}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                alsCheck: !formData.alsCheck,
                                alsRating: !formData.alsCheck
                                  ? formData.alsRating
                                  : "",
                              })
                            }
                          />
                        }
                        label="ALS A & E Passer"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Rating"
                        variant="outlined"
                        size="small"
                        style={{ width: "90%" }}
                        disabled={!formData.alsCheck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            alsRating: e.target.value,
                          })
                        }
                        value={formData.alsCheck ? formData.alsRating : ""}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  container
                  rowSpacing={1}
                  style={{ marginBottom: 3, marginTop: 8 }}
                >
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={formData.othersCheck}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              othersCheck: !formData.othersCheck,
                              othersSpecify: !formData.othersCheck
                                ? formData.othersSpecify
                                : "",
                              othersDateAssesment: !formData.othersCheck
                                ? formData.othersDateAssesment
                                : "",
                              othersTestingCenter: !formData.othersCheck
                                ? formData.othersTestingCenter
                                : "",
                            })
                          }
                        />
                      }
                      label="Others"
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <TextField
                      label="Please specify"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      disabled={!formData.othersCheck}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersSpecify: capitalizeLetter(e.target.value),
                        })
                      }
                      value={formData.othersCheck ? formData.othersSpecify : ""}
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <TextField
                      label="Date of Assesment"
                      variant="outlined"
                      size="small"
                      style={{ width: "95%" }}
                      disabled={!formData.othersCheck}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersDateAssesment: e.target.value,
                        })
                      }
                      value={
                        formData.othersCheck ? formData.othersDateAssesment : ""
                      }
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
                      label="Name and address of testing center"
                      variant="outlined"
                      size="small"
                      style={{ width: "98%" }}
                      disabled={!formData.othersCheck}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          othersTestingCenter: capitalizeLetter(e.target.value),
                        })
                      }
                      value={
                        formData.othersCheck ? formData.othersTestingCenter : ""
                      }
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

      {/* {isOpenAlert && <Alert title="Student created successfully." closeAlert={setOpenAlert}/>} */}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, CssBaseline, Tab, Tabs, Typography } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import Appbar from "../Appbar";
import SF1 from "./SF-1/SF1";
import SF3 from "./SF-3/SF3";
import SF3Admin from "./SF-3/SF3Admin";
import SF9 from "./SF-9/SF9";
import SF10 from "./SF-10/SF10";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudents,
  filterStudent,
  searchStudentSF10,
} from "../../actions/students";
import Alert from "../Modals/Alert";
import Loading from "../Modals/Loading";
import {
  filterAllStudentsBooks,
  getAllStudentsBooks,
  getBookTitle,
} from "../../actions/book";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Home() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const query = useQuery();
  const dispatch = useDispatch();

  const { students, isLoading, alert, alertMessage } = useSelector(
    (state) => state.students
  );
  const [search, setSearch] = useState("");
  const sampleLocation = useLocation().search.split("=")[0];
  const page = query.get("page") || 1;
  const filterPage = query.get("fpage") || 1;
  const profile = JSON.parse(localStorage.getItem("profile"));
  const [value, setValue] = React.useState(
    profile && profile.id > 2 ? "1" : "2"
  );

  const [formData, setFormData] = useState({
    filterGrade: "7",
    filterSection: "",
    filterSchoolYear: "",
  });

  useEffect(() => {
    if (sampleLocation === "?page" || sampleLocation === "") {
      if (profile.id > 2) {
        const sendData = {
          filterGrade: profile.facultyGrade,
          filterSection: profile.facultySection,
          filterSchoolYear: profile.facultySchoolYear,
        };
        dispatch(filterStudent(sendData, navigate, filterPage, "forms"));
        dispatch(
          filterAllStudentsBooks(sendData, navigate, filterPage, "forms")
        );
        dispatch(getBookTitle());
      } else {
        dispatch(getAllStudents(page));
        dispatch(getAllStudentsBooks(page));
        dispatch(getBookTitle());
      }
    }
  }, [page]);

  useEffect(() => {
    if (sampleLocation === "?fpage") {
      // alert("fpage");
      if (profile.id > 2) {
        const sendData = {
          filterGrade: profile.facultyGrade,
          filterSection: profile.facultySection,
          filterSchoolYear: profile.facultySchoolYear,
        };
        dispatch(filterStudent(sendData, navigate, filterPage, "forms"));
        dispatch(
          filterAllStudentsBooks(sendData, navigate, filterPage, "forms")
        );
        dispatch(getBookTitle());
      } else {
        dispatch(filterStudent(formData, navigate, filterPage, "forms"));
        dispatch(getBookTitle());
      }
    }
    // console.log(page);
  }, [filterPage]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilterGrade = (event) => {
    setFormData({ ...formData, filterGrade: event.target.value });
  };

  const capitalizeLetter = (name) => {
    const arr = name.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2;
  };

  const submitFilter = () => {
    // console.log(formData);
    dispatch(filterStudent(formData, navigate, filterPage, "forms"));
  };

  const cancelFilter = () => {
    navigate("/forms/students?page=1");
    setFormData({
      filterGrade: "7",
      filterSection: "",
      filterSchoolYear: "",
    });
  };

  const closeSearch = () => {
    //dispatch search
    dispatch(getAllStudents(page));
    setSearch("");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Appbar active="masterList" />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {alert ? (
              <>
                <Alert title={alertMessage} />
              </>
            ) : (
              <></>
            )}
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  {profile && profile.id > 2 ? (
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="SF-1 Registration" value="1" />
                      <Tab label="SF-3 Book Records" value="2" />
                      <Tab label="SF-9 Report Card" value="3" />
                    </TabList>
                  ) : (
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      {/* <Tab label="SF-1 Registration" value="1" /> */}
                      <Tab label="SF-3 Book Records" value="2" />
                      <Tab label="SF-10 Form 137" value="4" />
                    </TabList>
                  )}
                </Box>
                <TabPanel value="1">
                  {profile && profile.id > 2 ? (
                    <>
                      <Typography>
                        (Masterlist) Grade {profile.facultyGrade}-
                        {profile.facultySection} S.Y {profile.facultySchoolYear}
                      </Typography>
                    </>
                  ) : (
                    <Grid container rowSpacing={1} style={{ marginBottom: 35 }}>
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
                            onChange={handleFilterGrade}
                            size="small"
                            style={{ width: "70%" }}
                            value={formData.filterGrade}
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
                              filterSection: capitalizeLetter(e.target.value),
                            })
                          }
                          value={formData.filterSection}
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
                              filterSchoolYear: e.target.value,
                            })
                          }
                          value={formData.filterSchoolYear}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        {sampleLocation === "?fpage" ? (
                          <Button
                            variant="contained"
                            style={{
                              marginRight: 5,
                              marginBottom: -15,
                            }}
                            size="small"
                            color="error"
                            onClick={cancelFilter}
                          >
                            Cancel
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            style={{
                              marginRight: 5,
                              marginBottom: -15,
                              backgroundColor: "#009900",
                            }}
                            size="small"
                            onClick={submitFilter}
                          >
                            Filter
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  )}

                  <SF1
                    page={page}
                    filterSchoolYear={
                      profile && profile.id > 2
                        ? profile.facultySchoolYear
                        : formData.filterSchoolYear
                    }
                    filterSection={
                      profile && profile.id > 2
                        ? profile.facultySection
                        : formData.filterSection
                    }
                    filterGrade={
                      profile && profile.id > 2
                        ? profile.facultyGrade
                        : formData.filterGrade
                    }
                  />
                </TabPanel>
                <TabPanel value="2">
                  {profile && profile.id > 2 ? (
                    <SF3 page={page} />
                  ) : (
                    <>
                      <SF3Admin />
                    </>
                  )}
                </TabPanel>
                <TabPanel value="3">
                  <SF9 page={page} />
                </TabPanel>
                <TabPanel value="4">
                  <Typography style={{marginBottom: 10}}>
                    Students Form 137
                  </Typography>

                  <Grid container rowSpacing={1} >
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
                          onChange={handleFilterGrade}
                          size="small"
                          style={{ width: "70%" }}
                          value={formData.filterGrade}
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
                            filterSection: capitalizeLetter(e.target.value),
                          })
                        }
                        value={formData.filterSection}
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
                            filterSchoolYear: e.target.value,
                          })
                        }
                        value={formData.filterSchoolYear}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      {sampleLocation === "?fpage" ? (
                        <Button
                          variant="contained"
                          style={{
                            marginRight: 5,
                            marginBottom: -15,
                          }}
                          size="small"
                          color="error"
                          onClick={cancelFilter}
                        >
                          Cancel
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          style={{
                            marginRight: 5,
                            marginBottom: -15,
                            backgroundColor: "#009900",
                          }}
                          size="small"
                          onClick={submitFilter}
                        >
                          Filter
                        </Button>
                      )}
                    </Grid>
                  </Grid><br/>
                  <TextField
                    label="Search Student LRN"
                    variant="outlined"
                    size="small"
                    style={{ width: "25%" }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        dispatch(searchStudentSF10(search));
                      }
                    }}
                    InputProps={{
                      endAdornment: (
                        <>
                          {!search ? (
                            <InputAdornment position="start">
                              <SearchIcon
                                // onClick={handleSearch}
                                style={{ cursor: "pointer" }}
                              />
                            </InputAdornment>
                          ) : (
                            <InputAdornment position="start">
                              <CloseIcon
                                onClick={closeSearch}
                                style={{ cursor: "pointer" }}
                              />
                            </InputAdornment>
                          )}
                        </>
                      ),
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                  />
                  <br />
                  <SF10
                    page={page}
                    filterSchoolYear={
                      profile && profile.id > 2
                        ? profile.facultySchoolYear
                        : formData.filterSchoolYear
                    }
                    filterSection={
                      profile && profile.id > 2
                        ? profile.facultySection
                        : formData.filterSection
                    }
                    filterGrade={
                      profile && profile.id > 2
                        ? profile.facultyGrade
                        : formData.filterGrade
                    }
                  />
                </TabPanel>
              </TabContext>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

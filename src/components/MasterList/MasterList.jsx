import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, CssBaseline, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";

import Appbar from "../Appbar";
import StudentList from "./StudentList/StudentList";
import SubjectList from "./SubjectList/SubjectList";
import StudentModal from "../Modals/StudentModal/StudentModal";

import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../actions/students";

import { useLocation } from "react-router-dom";
import { filterStudent, searchStudent } from "../../actions/students";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "../Modals/Alert";
import Loading from "../Modals/Loading";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { students, alert, alertMessage, isLoading } = useSelector(
    (state) => state.students
  );

  const sampleLocation = useLocation().search.split("=")[0];
  const pageeee = useLocation().search.split("=")[1];
  const query = useQuery();
  const page = query.get("page") || 1;
  const filterPage = query.get("fpage") || 1;
  const profile = JSON.parse(localStorage.getItem("profile"));

  // console.log(pageeee);

  const [open, setOpen] = useState(false);

  const [value, setValue] = React.useState("1");

  const [formData, setFormData] = useState({
    filterGrade: "7",
    filterSection: "",
    filterSchoolYear: "",
  });
  const [search, setSearch] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (sampleLocation === "?page" || sampleLocation === "") {
      dispatch(getAllStudents(page));
      // setFormData({
      //   filterGrade: "7",
      //   filterSection: "",
      //   filterSchoolYear: "",
      // });
      // console.log("tarub");
    }
    if (profile.id > 2) {
      navigate("/forms");
    }
    // console.log(page);
  }, [page]);

  useEffect(() => {
    if (sampleLocation === "?fpage") {
      // alert("fpage");
      dispatch(filterStudent(formData, navigate, filterPage, "masterlist"));
    }
    if (profile.id > 2) {
      navigate("/forms");
    }
    // console.log(page);
  }, [filterPage]);

  // useEffect(() => {
  //   dispatch(getAllStudents(page));
  //   // console.log(page);
  // }, [students?.length]);

  const handleFilterGrade = (event) => {
    // setFilterGrade(event.target.value);
    setFormData({ ...formData, filterGrade: event.target.value });
  };

  const submitFilter = () => {
    // console.log(formData);
    dispatch(filterStudent(formData, navigate, filterPage, "masterlist"));
  };

  const cancelFilter = () => {
    navigate("/masterlist/students?page=1");
    setFormData({
      filterGrade: "7",
      filterSection: "",
      filterSchoolYear: "",
    });
    setSearch("");
  };

  const closeSearch = () => {
    //dispatch search
    dispatch(getAllStudents(page));
    setSearch("");
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
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Student List" value="1" />
                    {/* <Tab label="Ranking" value="2" /> */}
                  </TabList>
                </Box>
                <TabPanel value="1">
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

                    <Grid item xs={3}>
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
                  <TextField
                    label="Search Student LRN"
                    variant="outlined"
                    size="small"
                    style={{ width: "25%" }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        dispatch(searchStudent(search));
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
                  <StudentList page={page} />
                </TabPanel>
                <TabPanel value="2">{/* <SubjectList /> */}</TabPanel>
              </TabContext>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

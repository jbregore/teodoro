import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, CssBaseline, Tab, Tabs } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

import AdminAccount from "./Admin/AdminAccount";
import FacultyList from "./Faculty/FacultyList";
import SchoolHead from "./Faculty/SchoolHead";

import { useDispatch, useSelector } from "react-redux";
import Appbar from "../Appbar";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAllFaculty,
  filterFaculty,
  searchFaculty,
  getHeadInfo,
  getCurrentHead
} from "../../actions/faculty";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "../Modals/Loading";
import Alert from "../Modals/Alert";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Accounts() {
  const { isLoading, alertMessage, alert } = useSelector((state) => state.faculty);

  const [value, setValue] = useState("1");
  const query = useQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sampleLocation = useLocation().search.split("=")[0];
  const page = query.get("page") || 1;
  const filterPage = query.get("fpage") || 1;
  const profile = JSON.parse(localStorage.getItem("profile"));

  const [formData, setFormData] = useState({
    filterGrade: "7",
    filterSection: "",
    filterSchoolYear: "",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (sampleLocation === "?page" || sampleLocation === "") {
      dispatch(getAllFaculty(page));
      // dispatch(getHeadInfo());
      dispatch(getCurrentHead(profile.facultySchoolYear));
    }
    if(profile.id > 2){
      navigate("/forms");
    }
    // console.log(page);
  }, [page]);

  useEffect(() => {
    if (sampleLocation === "?fpage") {
      // alert("fpage");
      dispatch(filterFaculty(formData, navigate, filterPage, "account"));
      // dispatch(getHeadInfo());
      dispatch(getCurrentHead(profile.facultySchoolYear));
    }
    if(profile.id > 2){
      navigate("/forms");
    }
    // console.log(page);
  }, [filterPage]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilterGrade = (event) => {
    // setFilterGrade(event.target.value);
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
    dispatch(filterFaculty(formData, navigate, filterPage, "account"));
  };

  const cancelFilter = () => {
    navigate("/account/faculty?page=1");
    setFormData({
      filterGrade: "7",
      filterSection: "",
      filterSchoolYear: "",
    });
    setSearch("");
  };

  const closeSearch = () => {
    //dispatch search
    dispatch(getAllFaculty(page));
    setSearch("");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Appbar active="accounts" />

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
                    <Tab label="Faculty List" value="1" />
                    <Tab label="School Head" value="2" />
                    {/* <Tab label="My Account" value="3" /> */}
                  </TabList>
                </Box>
                <TabPanel value="1">
                  {/* <Typography>Faculty Account Management</Typography> */}
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
                    
                    label="Search Faculty ID"
                    variant="outlined"
                    size="small"
                    style={{ width: "25%" }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        dispatch(searchFaculty(search));
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
                  <FacultyList page={page} />
                </TabPanel>
                <TabPanel value="2">
                  <SchoolHead />
                </TabPanel>
                {/* <TabPanel value="3">
                  <AdminAccount />
                </TabPanel> */}
              </TabContext>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

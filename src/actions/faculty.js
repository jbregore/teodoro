import {
  CREATE_FACULTY,
  START_LOADING,
  END_LOADING,
  END_LOADING_START,
  FETCH_ALL_FACULTY,
  DELETE_FACULTY,
  UPDATE_FACULTY,
  FILTER_FACULTY,
  SEARCH_FACULTY,
  GET_SF1_TEACHER,
  GET_HEAD_INFO,
  UPDATE_HEAD,
  LOGIN,
  LOGOUT,
  UPDATE_FACULTY_SETTINGS
} from "../constants/actionTypes";
import * as api from "../api";


// action creators
export const login = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.login(formData);
    // console.log(data);
    if (data.message === "no account found") {
      dispatch({ type: END_LOADING, payload: "No account found" });
      return false;
    } else {
      dispatch({ type: LOGIN, payload: data });
      dispatch({ type: END_LOADING_START });
      return true;
    }
    // dispatch({ type: END_LOADING_START });
  } catch (e) {
    console.log(e);
    dispatch({ type: END_LOADING, payload: "No account found" });
    return false;
  }
}

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    dispatch({ type: LOGOUT });
    dispatch({ type: END_LOADING_START });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export const getAllFaculty = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchFaculty(page);

    //   // console.log(data.currentPage);
    const numberOfPages = data.count.count.total_faculty / 10;
    //   // console.log(numberOfPages);
    const sendData = { data, numberOfPages: Math.ceil(numberOfPages) }
    // console.log(sendData);

    dispatch({ type: FETCH_ALL_FACULTY, payload: sendData });
    dispatch({ type: END_LOADING_START });
  } catch (e) {
    console.log(e);
  }
};

export const addFaculty = (formData, image, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const profileSample =
      "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png";

    if (image === "sample") {
      formData.facultyPhoto = profileSample;
      const { data: response } = await api.createFaculty(formData)
      navigate("/account");
      dispatch({ type: CREATE_FACULTY, payload: response });
    } else {
      const { data: photo } = await api.createFacultyPhoto(image);
      formData.facultyPhoto = photo.url;
      const { data: response } = await api.createFaculty(formData);
      navigate("/account");
      dispatch({ type: CREATE_FACULTY, payload: response });
    }
    dispatch({ type: END_LOADING, payload: "Faculty created successfully" });
    // const { data: photo } = await api.createFacultyPhoto(image);
    //   navigate("/masterlist");
    // console.log(photo.url);
    //   dispatch({ type: CREATE_FACULTY, payload: data });
    //   dispatch({ type: END_LOADING, payload: "Faculty created successfully" });
  } catch (e) {
    console.log(e);
    if (e.response.data === "duplicate") {
      dispatch({ type: END_LOADING, payload: "Invalid. Duplicate Faculty" });
    }
  }
};

export const duplicateFaculty = (formData, image, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    formData.facultyPhoto = image;
    const { data: response } = await api.createFaculty(formData)
    // navigate("/account?fpage=1");
    dispatch({ type: CREATE_FACULTY, payload: response });

    dispatch({ type: END_LOADING, payload: "Faculty created successfully" });
    // getAllFaculty();
    // const { data: photo } = await api.createFacultyPhoto(image);
    //   navigate("/masterlist");
    // console.log(photo.url);
    //   dispatch({ type: CREATE_FACULTY, payload: data });
    //   dispatch({ type: END_LOADING, payload: "Faculty created successfully" });
  } catch (e) {
    console.log(e);
    if (e.response.data === "duplicate") {
      dispatch({ type: END_LOADING, payload: "Invalid. Duplicate Faculty" });
    }
  }
};

export const deleteFaculty = (id, navigate, pagee, sampleLocation) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.deleteFaculty(id);

    if (sampleLocation === "") {
      navigate(`/account`);
    } else {
      navigate(`/account/faculty${sampleLocation}=${pagee}`);
    }
    dispatch({ type: DELETE_FACULTY, payload: data });
    dispatch({ type: END_LOADING, payload: "Faculty deleted successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const updateFaculty = ({ id, formData, image, pagee, sampleLocation }, navigate) => async (dispatch) => {
  try {
    // console.log(image);

    dispatch({ type: START_LOADING });
    const formDataPass = { id: id, ...formData };
    if (image === "sample") {
      const { data: response } = await api.updateFaculty(formDataPass);
      dispatch({ type: UPDATE_FACULTY, payload: response });
    } else {
      const { data: photo } = await api.createFacultyPhoto(image);
      // console.log(photo.url)
      formDataPass.facultyPhoto = photo.url;
      const { data: response } = await api.updateFaculty(formDataPass);
      dispatch({ type: UPDATE_FACULTY, payload: response });
    }
    if (sampleLocation === "") {
      navigate(`/account`);
    } else {
      navigate(`/account/faculty${sampleLocation}=${pagee}`);
    }
    dispatch({ type: END_LOADING, payload: "Faculty updated successfully" });


  } catch (e) {
    console.log(e);
  }
};

export const filterFaculty = (formData, navigate, page, location) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const sendData = { ...formData, page: page };
    // console.log(sendData);

    const { data } = await api.filterFaculty(sendData);
    // console.log(data);
    const isEmpty = Object.keys(data).length === 0;
    if (!isEmpty) {
      const numberOfPages = data.count.count.total_faculty / 10;
      const sendDataa = { data, numberOfPages: Math.ceil(numberOfPages) }
      navigate(`/${location}/faculty?fpage=${page}`);
      dispatch({ type: FILTER_FACULTY, payload: sendDataa });
      dispatch({ type: END_LOADING_START, });
    } else {
      dispatch({ type: END_LOADING, payload: "No Data" });
    }
    // console.log(numberOfPages);

  } catch (e) {
    console.log(e);
  }
}

export const searchFaculty = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.searchFaculty(id);

    // console.log(data);
    dispatch({ type: SEARCH_FACULTY, payload: data });
    dispatch({ type: END_LOADING_START });
  } catch (e) {
    console.log(e);
  }
}

export const getSF1Teacher = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getSF1Teacher(formData);
    // console.log(data[0].facultyName);
    // console.log(formData);
    const link = `/sf1pdf?schoolYear=${formData.studentSchoolYear}&section=${formData.studentSection}&grade=${formData.studentGrade}`;
    navigate(link);
    dispatch({ type: GET_SF1_TEACHER, payload: data[0].facultyName });
    dispatch({ type: END_LOADING_START, });
  } catch (e) {
    console.log(e);
    dispatch({ type: END_LOADING, payload: "Invalid action" });
  }
}

export const getHeadInfo = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getHeadInfo();
    // console.log(data);
    // console.log(data[0].facultyName);
    // console.log(formData);
    dispatch({ type: GET_HEAD_INFO, payload: data[0] });
    dispatch({ type: END_LOADING_START, });
  } catch (e) {
    console.log(e);
  }
}

export const getCurrentHead = (schoolYear) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });

    const { data } = await api.getCurrentHead(schoolYear);
    // console.log(data);
    // console.log(data[0].facultyName);
    // console.log(formData);
    dispatch({ type: GET_HEAD_INFO, payload: data[0] });
    dispatch({ type: END_LOADING_START, });
  } catch (e) {
    console.log(e);
  }
}

export const updateHead = (formData, image, navigate) => async (dispatch) => {
  try {
    // console.log(image);

    dispatch({ type: START_LOADING });
    if (image === "sample") {
      const { data: response } = await api.updateHead(formData);
      // console.log(response);
      dispatch({ type: UPDATE_HEAD, payload: response });
    } else {
      const { data: photo } = await api.createFacultyPhoto(image);
      // console.log(photo.url)
      formData.facultyPhoto = photo.url;
      const { data: response } = await api.updateHead(formData);
      // console.log(response);
      dispatch({ type: UPDATE_HEAD, payload: response });
    }
    // if (sampleLocation === "") {
    //   navigate(`/account`);
    // } else {
    //   navigate(`/account/faculty${sampleLocation}=${pagee}`);
    // }
    dispatch({ type: END_LOADING, payload: "School head updated successfully" });

  } catch (e) {
    console.log(e);
  }
};

export const updateFacultySettings = (formData, image) => async (dispatch) => {
  try {
    // console.log(image);

    dispatch({ type: START_LOADING });
    if (image === "sample") {
      const { data: response } = await api.updateFacultySettings(formData);

      const profile = JSON.parse(localStorage.getItem("profile"));
      profile.facultyPassword = response.facultyPassword;
      profile.facultyPhoto = response.facultyPhoto;
      localStorage.clear();
      localStorage.setItem("profile", JSON.stringify(profile));
      dispatch({ type: UPDATE_FACULTY_SETTINGS, payload: response });
      dispatch({ type: END_LOADING, payload: "Settings updated successfully" });

    } else {
      const { data: photo } = await api.createFacultyPhoto(image);
      // console.log(photo.url)
      formData.facultyPhoto = photo.url;
      const { data: response } = await api.updateFacultySettings(formData);

      const profile = JSON.parse(localStorage.getItem("profile"));
      profile.facultyPassword = response.facultyPassword;
      profile.facultyPhoto = response.facultyPhoto;
      localStorage.clear();
      localStorage.setItem("profile", JSON.stringify(profile));
      dispatch({ type: UPDATE_FACULTY_SETTINGS, payload: response });
      dispatch({ type: END_LOADING, payload: "Settings updated successfully" });
    }
  } catch (e) {
    console.log(e);
    if (e.response.data === "duplicate") {
      dispatch({ type: END_LOADING, payload: "Invalid. Duplicate Username or password" });
    }
  }
};







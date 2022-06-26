import {
  FETCH_ALL_STUDENTS,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  START_LOADING,
  END_LOADING_START,
  END_LOADING,
  CLOSE_ALERT,
  FILTER_STUDENT,
  SEARCH_STUDENT,
  UPDATE_STUDENT_REMARKS,
  GET_SF1_STUDENTS,
  ADD_BOOK,
  FETCH_ALL_STUDENTS_SF10,
  SEARCH_STUDENT_SF10,
  FILTER_STUDENT_SF10,
  GET_SF10_STUDENT
} from "../constants/actionTypes";
import * as api from "../api";

// action creators
export const getAllStudents = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchStudents(page);
    // console.log(data);
    const numberOfPages = data.count.count.total_students / 10;
    const sendData = { data, numberOfPages: Math.ceil(numberOfPages) }

    dispatch({ type: FETCH_ALL_STUDENTS, payload: sendData });
    dispatch({ type: END_LOADING_START });

    // console.log(sendData)

    const { data: data10 } = await api.fetchSF10Students(page);
    const numberOfPages10 = data10.count.count.total_students / 10;
    const sendData10 = { data10, numberOfPages: Math.ceil(numberOfPages10) }

    // console.log(sendData10);
    dispatch({ type: FETCH_ALL_STUDENTS_SF10, payload: sendData10 });


  } catch (e) {
    console.log(e);
    dispatch({ type: END_LOADING_START });
  }
};

export const addStudent = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createStudent(formData);
    navigate("/masterlist");
    // console.log(data);
    if (data === "duplicate") {
      dispatch({ type: END_LOADING, payload: "Invalid. Duplicate values" });
    } else {
      dispatch({ type: CREATE_STUDENT, payload: data });
      dispatch({ type: END_LOADING, payload: "Student created successfully" });
    }
  } catch (e) {
    console.log(e);
    if (e.response.data === "duplicate") {
      dispatch({ type: END_LOADING, payload: "Invalid. Duplicate values" });
    }
  }
};

export const duplicateStudent = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createStudent(formData);
    // navigate("/masterlist?fpage=1");
    // console.log(data);
    if (data === "duplicate") {
      dispatch({ type: END_LOADING, payload: "Invalid. Duplicate values" });
    } else {
      dispatch({ type: CREATE_STUDENT, payload: data });
      dispatch({ type: END_LOADING, payload: "Student created successfully" });
    }
  } catch (e) {
    console.log(e);
    if (e.response.data === "duplicate") {
      dispatch({ type: END_LOADING, payload: "Invalid. Duplicate values" });
    }
  }
};

export const deleteStudent = (id, navigate, pagee, sampleLocation) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.deleteStudent(id);

    if (sampleLocation === "") {
      navigate(`/masterlist`);
    } else {
      navigate(`/masterlist/students${sampleLocation}=${pagee}`);
    }
    // console.log(data);

    dispatch({ type: DELETE_STUDENT, payload: data });
    dispatch({ type: END_LOADING, payload: "Student deleted successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const updateStudent = ({ id, formData, pagee, sampleLocation }, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const formDataPass = { id: id, ...formData };
    const { data } = await api.updateStudent(formDataPass);

    if (sampleLocation === "") {
      navigate(`/masterlist`);
    } else {
      navigate(`/masterlist/students${sampleLocation}=${pagee}`);
    }
    // console.log(data);

    dispatch({ type: UPDATE_STUDENT, payload: data });
    dispatch({ type: END_LOADING, payload: "Student updated successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const closeAlertBox = () => async (dispatch) => {
  try {
    dispatch({ type: CLOSE_ALERT });
  } catch (e) {
    console.log(e);
  }
};

export const filterStudent = (formData, navigate, page, location) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const sendData = { ...formData, page: page };
    // console.log(sendData);

    const { data } = await api.filterStudent(sendData);
    const isEmpty = Object.keys(data).length === 0;
    if (!isEmpty) {
      const numberOfPages = data.count.count.total_students / 10;
      const sendDataa = { data, numberOfPages: Math.ceil(numberOfPages) }
      navigate(`/${location}/students?fpage=${page}`);
      dispatch({ type: FILTER_STUDENT, payload: sendDataa });
      dispatch({ type: END_LOADING_START, });
    } else {
      navigate(`/${location}/students?fpage=1`);
      dispatch({ type: END_LOADING, payload: "No Data" });
    }

    const sendData10 = { ...formData, page: page };
    // console.log(sendData);

    const { data: data10 } = await api.filterStudentSF10(sendData10);
    const isEmpty10 = Object.keys(data10).length === 0;
    if (!isEmpty10) {
      const numberOfPages10 = data10.count.count.total_students / 10;
      const sendDataa10 = { data10, numberOfPages10: Math.ceil(numberOfPages10) };
      // console.log(sendDataa10);
      // navigate(`/${location}/students?fpage=${page}`);
      dispatch({ type: FILTER_STUDENT_SF10, payload: sendDataa10 });
      // dispatch({ type: END_LOADING_START, });
    } else {
      // navigate(`/${location}/students?fpage=1`);
      // dispatch({ type: END_LOADING, payload: "No Data" });
    }


    // // console.log(numberOfPages);

  } catch (e) {
    console.log(e);
  }
}

export const searchStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.searchStudents(id);

    // console.log(data);
    dispatch({ type: SEARCH_STUDENT, payload: data });
    dispatch({ type: END_LOADING_START });
  } catch (e) {
    console.log(e);
  }
}

export const searchStudentSF10 = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.searchStudentSF10(id);

    // console.log(data);
    dispatch({ type: SEARCH_STUDENT_SF10, payload: data });
    dispatch({ type: END_LOADING_START });
  } catch (e) {
    console.log(e);
  }
}

export const updateRemarksStudent = (id, value) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const formDataPass = { id: id, studentRemarks: value };
    const { data } = await api.updateStudentRemarks(formDataPass);

    // navigate(`/masterlist/students${sampleLocation}=${pagee}`);
    // console.log(data);
    // console.log(data);

    dispatch({ type: UPDATE_STUDENT_REMARKS, payload: data });
    dispatch({ type: END_LOADING, payload: "Remarks updated successfully" });
  } catch (e) {
    console.log(e);
  }
}

export const getSF1Students = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getSF1Students(formData);
    const { data: teacherData } = await api.getSF1Teacher(formData);
    const { data: headInfo } = await api.getCurrentHead(formData.studentSchoolYear);
    const payloadData = { data, teacherData: teacherData[0].facultyName, headInfo: headInfo[0].facultyName };
    // console.log(payloadData);
    dispatch({ type: GET_SF1_STUDENTS, payload: payloadData });
    dispatch({ type: END_LOADING_START, });
  } catch (e) {
    console.log(e);
  }
}

export const getSF10Student = (id, navigate) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.getSF10Student(id);
    // console.log(data);
    dispatch({ type: GET_SF10_STUDENT, payload: data });
    dispatch({ type: END_LOADING_START, });
    navigate("/sf10pdf");
  } catch (e) {
    console.log(e);
  }
}

//BOOK
// export const addBook = (formData) => async (dispatch) => {
//   try {
//       // console.log(image);

//       dispatch({ type: START_LOADING });
//       const { data: response } = await api.addBook(formData);
//       console.log(response)
//       dispatch({ type: ADD_BOOK, payload: response });
//       dispatch({ type: END_LOADING, payload: "Book added successfully" });
//   } catch (e) {
//       console.log(e);
//   }
// };
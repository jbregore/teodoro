import {
  START_LOADING,
  END_LOADING,
  END_LOADING_START,
  GET_GRADES,
  UPDATE_GRADE,
  CLEAR_GRADE,
  SET_STUDENT_SF9INFO,
  SET_STUDENT_RANKING,
  SET_STUDENT_QUARTERLY
} from "../constants/actionTypes";
import * as api from "../api";

export const getGradesInfo = (formData) => async (dispatch) => {
  try {
    //   dispatch({ type: START_LOADING });
    const { data } = await api.getGradesInfo(formData);
    // console.log(data[0].facultyName);
    // console.log(data);
    dispatch({ type: GET_GRADES, payload: data });
    //   dispatch({ type: END_LOADING_START });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export const updateGrade = (formData) => async (dispatch) => {
  try {
    // console.log(image);

    dispatch({ type: START_LOADING });
    const { data: response } = await api.updateGrades(formData);
    // console.log(response)
    dispatch({ type: UPDATE_GRADE, payload: response });
    dispatch({ type: END_LOADING, payload: "Grades updated successfully" });

  } catch (e) {
    console.log(e);
  }
};

export const clearGrades = (formData) => async (dispatch) => {
  try {
    // console.log(image);

    dispatch({ type: START_LOADING });
    // const { data: response } = await api.updateGrades(formData);
    // console.log(response)
    dispatch({ type: CLEAR_GRADE });
    dispatch({ type: END_LOADING_START });

  } catch (e) {
    console.log(e);
  }
};

export const setStudentSF9Info = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.searchStudents(id);

    // console.log(data);
    dispatch({ type: SET_STUDENT_SF9INFO, payload: data });
    dispatch({ type: END_LOADING_START });
  } catch (e) {
    console.log(e);
  }
}

export const getStudentRanking = (formData) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.getStudentRanking(formData);
    const sendData = {data, quarter: formData.quarter};
    // console.log(sendData);
    dispatch({ type: SET_STUDENT_RANKING, payload: sendData });
    // dispatch({ type: END_LOADING_START });
    // return data;
  } catch (e) {
    console.log(e);
    // return null;
  }
}

export const getStudentRankingFinal = (formData) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.getStudentRankingFinal(formData);
    console.log(data);
    const sendData = {data, quarter: formData.quarter};
    // console.log(sendData);
    dispatch({ type: SET_STUDENT_RANKING, payload: sendData });
    // dispatch({ type: END_LOADING_START });
    // return data;
  } catch (e) {
    console.log(e);
    // return null;
  }
}

export const getQuarterlyReport = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getQuarterlyReport(formData);
    // console.log(data);
    navigate("/quarterlyreport");
    // const sendData = {data, quarter: formData.quarter};
    // console.log(sendData);
    dispatch({ type: SET_STUDENT_QUARTERLY, payload: data });
    dispatch({ type: END_LOADING_START });
    // return data;
  } catch (e) {
    console.log(e);
    // return null;
  }
}


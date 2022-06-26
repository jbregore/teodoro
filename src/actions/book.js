import {
  START_LOADING,
  END_LOADING,
  END_LOADING_START,
  ADD_BOOK,
  FETCH_ALL_STUDENTS_BOOK,
  FILTER_STUDENT_BOOKS,
  UPDATE_BOOK,
  BOOK_HEADER,
  BOOK_TITLE
} from "../constants/actionTypes";
import * as api from "../api";

export const getAllStudentsBooks = (page) => async (dispatch) => {
  try {
    //   dispatch({ type: START_LOADING });
    const { data } = await api.getAllStudentsBooks(page);
    // console.log(data);
    // console.log("tarub")

    // console.log(data.currentPage);
    const numberOfPages = data.count.count.total_students / 10;
    // console.log(numberOfPages);
    const sendData = { data, numberOfPages: Math.ceil(numberOfPages) }

    dispatch({ type: FETCH_ALL_STUDENTS_BOOK, payload: sendData });
    dispatch({ type: END_LOADING_START });
  } catch (e) {
    console.log(e);
  }
};

export const filterAllStudentsBooks = (formData, navigate, page, location) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const sendData = { ...formData, page: page };
    // console.log(sendData);

    const { data } = await api.filterAllStudentsBooks(sendData);
    const isEmpty = Object.keys(data).length === 0;
    if (!isEmpty) {
      const numberOfPages = data.count.count.total_students / 10;
      const sendDataa = { data, numberOfPages: Math.ceil(numberOfPages) }
      // console.log(sendDataa);
      navigate(`/${location}/students?fpage=${page}`);
      dispatch({ type: FILTER_STUDENT_BOOKS, payload: sendDataa });
      dispatch({ type: END_LOADING_START, });
    } else {
      navigate(`/${location}/students?fpage=1`);
      dispatch({ type: END_LOADING, payload: "No Data" });
    }
    // // console.log(numberOfPages);

  } catch (e) {
    console.log(e);
  }
}

export const addBook = (formData, navigate) => async (dispatch) => {
  try {
    // console.log(image);
    dispatch({ type: START_LOADING });
    const { data: response } = await api.addBook(formData);
    // console.log(response);
    navigate("/forms/students?fpage=1");
    dispatch({ type: ADD_BOOK, payload: response });
    dispatch({ type: END_LOADING, payload: "Book added successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const updateStudentBook = (formData) => async (dispatch) => {
  try {
    // console.log(image);
    dispatch({ type: START_LOADING });
    const { data: response } = await api.updateStudentBook(formData);
    // console.log(response);
    response.iid = formData.id;
    response.studentLRN = formData.studentLRN;
    response.studentLName = formData.studentLName;
    response.studentFName = formData.studentFName;
    response.studentMName = formData.studentMName;
    response.studentSuffix = formData.studentSuffix;

    // navigate("/forms/students?fpage=1");
    dispatch({ type: UPDATE_BOOK, payload: response });
    dispatch({ type: END_LOADING, payload: "Book updated successfully" });
  } catch (e) {
    console.log(e);
  }
}

export const getBookHeader = (grade, navigate) => async (dispatch) => {
  try {
    // console.log(image);
    dispatch({ type: START_LOADING });
    const { data: response } = await api.getBookHeader(grade);
    // console.log(response);

    // navigate("/forms/students?fpage=1");
    navigate("/sf3pdf");

    dispatch({ type: BOOK_HEADER, payload: response });
    dispatch({ type: END_LOADING_START});
  } catch (e) {
    console.log(e);
  }
}

export const getBookTitle = () => async (dispatch) => {

  try {
    // console.log(image);
    dispatch({ type: START_LOADING });
    const { data: response } = await api.getBookTitle();
    // console.log(response);

    dispatch({ type: BOOK_TITLE, payload: response });
    dispatch({ type: END_LOADING_START});
    // navigate("/sf3pdf");
  } catch (e) {
    console.log(e);
  }
}

export const updateBookTitle = (formData) => async (dispatch) => {

  try {
    // console.log(image);
    dispatch({ type: START_LOADING });
    const { data: response } = await api.updateBookTitle(formData);
    // console.log(response);

    dispatch({ type: BOOK_TITLE, payload: response });
    dispatch({ type: END_LOADING, payload: "Book Title updated sucessfully"});
    // navigate("/sf3pdf");
  } catch (e) {
    console.log(e);
  }
}


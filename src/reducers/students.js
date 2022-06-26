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
  FETCH_ALL_STUDENTS_SF10,
  SEARCH_STUDENT_SF10,
  FILTER_STUDENT_SF10,
  GET_SF10_STUDENT,
  LOGOUT
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
  isLoading: false, alertMessage: "",
  alert: false, page: 1, students: []
}, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING_START:
      return { ...state, isLoading: false };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
        alertMessage: action.payload,
        alert: true
      };
    case CLOSE_ALERT:
      return {
        ...state,
        alertMessage: "",
        alert: false
      }
    case LOGOUT: 
    return{
      state
    }
    case FETCH_ALL_STUDENTS:
      // console.log(action.payload.currentPage);
      // console.log(action.payload.numberOfPages);
      return {
        ...state,
        students: action.payload.data.studentData,
        currentPage: action.payload.data.currentPage,
        numberOfPages: action.payload.numberOfPages,
        totalStudents: action.payload.data.count.count.total_students
      };
    case FETCH_ALL_STUDENTS_SF10:
      return {
        ...state,
        studentsSF10: action.payload.data10.studentData,
        currentPageSF10: action.payload.data10.currentPage,
        numberOfPagesSF10: action.payload.numberOfPages,
        totalStudentsSF10: action.payload.data10.count.count.total_students
      };
    case CREATE_STUDENT:
      // Replace 1 array element at index with item 
      // state.students.splice(0,1,item);
      // state.students.splice(-1,1);
      // state.students.shift();
      return {
        ...state,
        students: [...state.students, action.payload],
        totalStudents: Number(state.totalStudents) + 1
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
        totalStudents: Number(state.totalStudents) - 1,
        studentsSF10: state.students.filter((student) => student.id !== action.payload),
        totalStudentsSF10: Number(state.totalStudentsSF10) - 1
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    case FILTER_STUDENT:
      return {
        ...state,
        students: action.payload.data.studentData,
        currentPage: action.payload.data.currentPage,
        numberOfPages: action.payload.numberOfPages,
        totalStudents: action.payload.data.count.count.total_students
      };
    case FILTER_STUDENT_SF10:
      return {
        ...state,
        studentsSF10: action.payload.data10.studentData,
        currentPageSF10: action.payload.data10.currentPage,
        numberOfPagesSF10: action.payload.numberOfPages10,
        totalStudentsSF10: action.payload.data10.count.count.total_students
      };
    case SEARCH_STUDENT:
      return {
        ...state,
        students: action.payload,
        currentPage: 1,
        numberOfPages: 1,
        totalStudents: action.payload.length
      };
    case SEARCH_STUDENT_SF10:
      return {
        ...state,
        studentsSF10: action.payload,
        currentPageSF10: 1,
        numberOfPagesSF10: 1,
        totalStudentsSF10: action.payload.length
      };
    case UPDATE_STUDENT_REMARKS:
      let newStudents = [];
      for (let i = 0; i < state.students.length; i++) {
        // console.log(state.students[i])
        if (state.students[i].id === action.payload.id) {
          state.students[i].studentRemarks = action.payload.studentRemarks;
        }
        newStudents.push(state.students[i]);
      }
      return {
        ...state,
      };
    case GET_SF1_STUDENTS:
      return {
        ...state,
        students: action.payload.data,
        sectionAdviser: action.payload.teacherData,
        headInfo: action.payload.headInfo
      };
    case GET_SF10_STUDENT:
      return {
        ...state,
        studentSF10: action.payload,
        // sectionAdviser: action.payload.teacherData,
        // headInfo: action.payload.headInfo
      };
    default:
      return state;
  }
};

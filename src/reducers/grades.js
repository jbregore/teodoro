import {
  START_LOADING,
  END_LOADING_START,
  END_LOADING,
  CLOSE_ALERT,
  GET_GRADES,
  UPDATE_GRADE,
  CLEAR_GRADE,
  SET_STUDENT_SF9INFO,
  SET_STUDENT_RANKING,
  SET_STUDENT_QUARTERLY,
  LOGOUT
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
  isLoading: false, alertMessage: "",
  alert: false, page: 1, grades: [],
  studentSF9: null, studentRanking: null,
  quarter: "1"
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
      return {
        state
      }
    //   case UPDATE_GRADE: 
    //     return {
    //       ...state,
    //       grades: state.grades.map((grade) =>
    //         student.id === action.payload.id ? action.payload : student
    //       ),
    //     };
    case GET_GRADES:
      return {
        ...state,
        grades: action.payload,
      };
    case CLEAR_GRADE:
      return {
        ...state,
        grades: [],
      };
    case SET_STUDENT_SF9INFO:
      return {
        ...state,
        studentSF9: action.payload
      }
    case SET_STUDENT_RANKING:
      // console.log(action.payload)
      return {
        ...state,
        studentRanking: action.payload.data,
        quarter: action.payload.quarter
      }
    case SET_STUDENT_QUARTERLY:
      return {
        ...state,
        studentQuarterly: action.payload,
      }
    default:
      return state;
  }
};

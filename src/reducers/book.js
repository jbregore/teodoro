import {
  START_LOADING,
  END_LOADING_START,
  END_LOADING,
  CLOSE_ALERT,
  ADD_BOOK,
  FETCH_ALL_STUDENTS_BOOK,
  FILTER_STUDENT_BOOKS,
  UPDATE_BOOK,
  BOOK_HEADER,
  BOOK_TITLE,
  LOGOUT
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
  isLoading: false, alertMessage: "",
  alert: false, page: 1, books: [],
  //  studentSF9: null, studentRanking: null,
  //  quarter: "1"
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
    case FETCH_ALL_STUDENTS_BOOK: {
      return {
        ...state,
        books: action.payload.data.bookData,
        currentPage: action.payload.data.currentPage,
        numberOfPages: action.payload.numberOfPages,
        totalStudents: action.payload.data.count.count.total_students
      };
    }
    case FILTER_STUDENT_BOOKS: {
      // console.log("tangina")
      return {
        ...state,
        books: action.payload.data.bookData,
        currentPage: action.payload.data.currentPage,
        numberOfPages: action.payload.numberOfPages,
        totalStudents: action.payload.data.count.count.total_students
      };
    }
    case ADD_BOOK:
      let subject = action.payload.subject;
      let newStudentsBook = [];
      for (let i = 0; i < state.books.length; i++) {
        // console.log(state.students[i])
        if (state.books[i].id === action.payload.id) {
          if (subject === "filipinoIssued") {
            state.books[i].filipinoIssued = action.payload.dateIssued;
          } else if (subject === "englishIssued") {
            state.books[i].englishIssued = action.payload.dateIssued;
          } else if (subject === "mathIssued") {
            state.books[i].mathIssued = action.payload.dateIssued;
          } else if (subject === "scienceIssued") {
            state.books[i].scienceIssued = action.payload.dateIssued;
          } else if (subject === "apIssued") {
            state.books[i].apIssued = action.payload.dateIssued;
          } else if (subject === "espIssued") {
            state.books[i].espIssued = action.payload.dateIssued;
          } else if (subject === "tleIssued") {
            state.books[i].tleIssued = action.payload.dateIssued;
          } else if (subject === "mapehIssued") {
            state.books[i].mapehIssued = action.payload.dateIssued;
          }
        }
        newStudentsBook.push(state.books[i]);
      }
      return {
        ...state,
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case BOOK_HEADER:
      return {
        ...state,
        sf3StudentsHeader: action.payload
      }
    case BOOK_TITLE: {
      // let sortedDescending = action.payload?.sort((a, b) => {
      //   return b.id - a.id;
      // });
      return {
        ...state,
        bookTitles: action.payload
      }
    }
    default:
      return state;
  }
};

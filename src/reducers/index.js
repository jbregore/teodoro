import { combineReducers } from "redux";

import students from "./students";
import faculty from "./faculty";
import grades from "./grades";
import book from "./book";
// import auth from "./auth";

export default combineReducers({  students,
     faculty, grades, book });
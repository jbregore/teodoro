import axios from "axios";

// "proxy": "https://teodoro-regore.000webhostapp.com/api",
// http://192.168.42.188/teodoro/api
// teodoro.atwebpages.com/api
const API = axios.create({ baseURL: "https://teodoro-regore.000webhostapp.com/api" });

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }
//     return req;
// });

// STUDENTS 
export const fetchStudents = (page) => API.post(`/students/fetch_students.php`, {page: page});
export const fetchSF10Students = (page) => API.post(`/students/fetch_sf10_students.php`, {page: page});
export const createStudent = (formData) => API.post('/students/create_students.php', formData);
export const filterStudent = (formData) => API.post('/students/filter_students.php', formData);
export const filterStudentSF10 = (formData) => API.post('/students/filter_students_sf10.php', formData);
export const deleteStudent = (id) => API.post('/students/delete_student.php', id);
export const updateStudent = (formData) => API.post('/students/update_student.php', formData);
export const searchStudents = (id) => API.post('/students/search_student.php', {id: id});
export const searchStudentSF10 = (id) => API.post('/students/search_student_sf10.php', {id: id});
export const updateStudentRemarks = (formData) => API.post('/students/update_student_remarks.php', formData);
export const getSF1Students = (formData) => API.post('/students/get_students_sf1.php', formData);
export const getSF10Student = (id) => API.post('/students/get_sf10_student.php', {id: id});

// FACULTY 
export const createFacultyPhoto = (image) => API.post('/photo_upload.php', image);
export const createFaculty = (formData) => API.post('/faculty/create_faculty.php', formData);
export const fetchFaculty = (page) => API.post(`/faculty/fetch_faculty.php`, {page: page});
export const deleteFaculty = (id) => API.post('/faculty/delete_faculty.php', {id: id});
export const updateFaculty = (formData) => API.post('/faculty/update_faculty.php', formData);
export const updateFacultySettings = (formData) => API.post('/faculty/update_faculty_settings.php', formData);
export const filterFaculty = (formData) => API.post('/faculty/filter_faculty.php', formData);
export const searchFaculty = (id) => API.post('/faculty/search_faculty.php', {id: id});
export const getSF1Teacher = (formData) => API.post('/faculty/get_faculty_sf1.php', formData);
export const getHeadInfo = () => API.post('/faculty/get_headinfo.php', );
export const getCurrentHead = (headSY) => API.post('/faculty/get_current_head.php', {headSY: headSY} );
export const updateHead = (formData) => API.post('/faculty/update_headinfo.php', formData);
export const login = (formData) => API.post('/faculty/login.php', formData);

//GRADE
export const updateGrades = (formData) => API.post('/grades/update_grades.php', formData);
export const getGradesInfo = (formData) => API.post('/grades/get_grades.php', formData);
export const getStudentRanking = (formData) => API.post('/grades/get_student_ranking.php', formData);
export const getStudentRankingFinal = (formData) => API.post('/grades/get_student_ranking_final.php', formData);
export const getQuarterlyReport = (formData) => API.post('/grades/get_quarterly_report.php', formData);


//BOOK
export const addBook = (formData) => API.post('/books/add_book.php', formData);
export const getAllStudentsBooks = (page) => API.post('/books/fetch_students_book.php', {page: page});
export const filterAllStudentsBooks = (formData) => API.post('/books/filter_students_book.php', formData);
export const updateStudentBook = (formData) => API.post('/books/update_students_book.php', formData);
export const getBookHeader = (grade) => API.post('/books/get_book_header.php', {grade: grade});
export const getBookTitle = () => API.post('/books/get_book_title.php');
export const updateBookTitle = (formData) => API.post('/books/update_book_title.php', formData);








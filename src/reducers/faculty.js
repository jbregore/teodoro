import {
    START_LOADING,
    END_LOADING_START,
    END_LOADING,
    CLOSE_ALERT,
    CREATE_FACULTY,
    FETCH_ALL_FACULTY,
    DELETE_FACULTY,
    UPDATE_FACULTY,
    FILTER_FACULTY,
    SEARCH_FACULTY,
    GET_HEAD_INFO,
    UPDATE_HEAD,
    LOGIN,
    LOGOUT,
    UPDATE_FACULTY_SETTINGS
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {
    isLoading: false,
    alertMessage: "",
    alert: false,
    page: 1,
    faculty: [],
    authData: null
}, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
            return { ...state, authData: action?.payload };
        case LOGOUT:
            localStorage.clear();
            return {
                state
            };
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
        case CREATE_FACULTY:
            return {
                ...state,
                faculty: [...state.faculty, action.payload],
                totalFaculty: Number(state.faculty) + 1
            };
        case FETCH_ALL_FACULTY:
            return {
                ...state,
                faculty: action.payload.data.facultyData,
                currentPage: action.payload.data.currentPage,
                numberOfPages: action.payload.numberOfPages,
                totalFaculty: action.payload.data.count.count.total_faculty
            };
        case DELETE_FACULTY:
            return {
                ...state,
                faculty: state.faculty.filter((fac) => fac.id !== action.payload),
                totalFaculty: Number(state.totalFaculty) - 1
            };
        case UPDATE_FACULTY:
            return {
                ...state,
                faculty: state.faculty.map((fac) =>
                    fac.id === action.payload.id ? action.payload : fac
                ),
            };
        case FILTER_FACULTY:
            return {
                ...state,
                faculty: action.payload.data.facData,
                currentPage: action.payload.data.currentPage,
                numberOfPages: action.payload.numberOfPages,
                totalFaculty: action.payload.data.count.count.total_faculty
            };
        case SEARCH_FACULTY:
            return {
                ...state,
                faculty: action.payload,
                currentPage: 1,
                numberOfPages: 1,
                totalFaculty: action.payload.length
            };
        case GET_HEAD_INFO:
            return {
                ...state,
                headInfo: action.payload,
            };
        case UPDATE_HEAD:
            return {
                ...state,
                headInfo: action.payload
            }
        case UPDATE_FACULTY_SETTINGS:

            return {
                ...state,
            }

        default:
            return state;
    }
};

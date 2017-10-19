import { combineReducers } from 'redux';
import axios from 'axios';

//const initialState = {}

// ACTION TYPES
const GET = 'GET_STUDENTS';
const ADD = 'ADD_STUDENT';
//const EDIT = 'EDIT_STUDENT';

// ACTION CREATORS
const getStudents = (students) => ({ type: GET, students });
const addStudent = (student) => ({type: ADD, student});
//const editStudent = (student) => ({type: EDIT, student});


// THUNK
export const getStudentsThunk = () => dispatch => {
  return axios.get('/api/student')
  .then(students => {
    dispatch(getStudents(students.data));
  });
};

export const addStudentThunk = (info) => dispatch => {
  return axios.post('/api/student/add', info)
  .then(student => {
    dispatch(addStudent(student.data));
  });
};

export const deleteStudentThunk = (id) => dispatch => {
  return axios.delete(`/api/student/${id}`)
  .then( () => {
    axios.get('/api/student')
    .then(students => {
      dispatch(getStudents(students.data));
    });
  });
};

export const updateStudentThunk = (student) => dispatch => {
  return axios.put('/api/student', student)
  .then(() => {
    axios.get('/api/student')
    .then(students => {
      dispatch(getStudents(students.data));
    });
  });
};

// REDUCER
export default function studentReducer(students = [], action) {
  switch (action.type) {
    case GET:
      return action.students;
    case ADD:
      return [...students, action.student];
    default:
      return students;
  }
}

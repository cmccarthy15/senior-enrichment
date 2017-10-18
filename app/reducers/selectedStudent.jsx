import { combineReducers } from 'redux';
import axios from 'axios';

//const initialState = {}

// ACTION TYPES
const FIND = 'FIND_STUDENT';

// ACTION CREATORS
const findStudent = (student) => ({ type: FIND, student });

// THUNK
export const findStudentThunk = (id) => dispatch => {
  return axios.get(`/api/student/${id}`)
  .then(student => {
    console.log('in selected student thunk: ', student);
    dispatch(findStudent(student.data));
  });
};

// REDUCER
export default function studentReducer(student = null, action) {
  switch (action.type) {
    case FIND:
      return action.student;
    default:
      return student;
  }
}

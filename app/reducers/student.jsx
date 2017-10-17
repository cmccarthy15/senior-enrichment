import { combineReducers } from 'redux';
import axios from 'axios';

//const initialState = {}

// ACTION TYPES
const GET = 'GET_STUDENTS';

// ACTION CREATORS
const getStudents = (students) => ({ type: GET, students });

// THUNK
export const getStudentsThunk = () => dispatch => {
  axios.get('/student')
  .then(students => {
    dispatch(getStudents(students));
  });
};

const studentReducer = function(students = [], action) {
  switch (action.type) {
    case GET:
      return action.users;
    default: return students;
  }
};

export default studentReducer;

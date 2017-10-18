import { combineReducers } from 'redux';
import axios from 'axios';

//const initialState = {}

// ACTION TYPES
const FIND = 'FIND_CAMPUS';

// ACTION CREATORS
const findCampus = (campus) => ({ type: FIND, campus });

// THUNK
export const findCampusThunk = (id) => dispatch => {
  axios.get(`/api/campus/${id}`)
  .then(campus => {
    console.log('in campus thunk: ', campus);
    dispatch(findCampus(campus.data));
  });
};

// REDUCER
export default function campusReducer(campus = null, action) {
  switch (action.type) {
    case FIND:
      return action.campus;
    default:
      return campus;
  }
}

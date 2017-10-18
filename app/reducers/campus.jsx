import { combineReducers } from 'redux';
import axios from 'axios';

//const initialState = {}

// ACTION TYPES
const GET = 'GET_CAMPUSES';
const ADD = 'ADD_CAMPUS';
const EDIT = 'EDIT_CAMPUS';
// const DELETE = 'DELETE_CAMPUS';

// ACTION CREATORS
const getCampuses = (campuses) => ({ type: GET, campuses });
const addCampus = (campus) => ({type: ADD, campus});
// const deleteCampus = (campus) => ({type: DELETE, campus});

// THUNK
export const getCampusesThunk = () => dispatch => {
  axios.get('/api/campus')
  .then(campuses => {
    dispatch(getCampuses(campuses.data));
  });
};

export const addCampusThunk = (campus) => dispatch => {
  axios.post('/api/campus/add', campus)
  .then(campus => {
    dispatch(addCampus(campus.data));
  });
};

export const deleteCampusThunk = (id) => dispatch => {
  console.log('in delete campus thunk with id: ', id);
  axios.delete(`/api/campus/${id}`)
  .then(() => {
    axios.get('/api/campus')
    .then(campuses => {
      dispatch(getCampuses(campuses.data));
    });
  });
};

// REDUCER
export default function campusReducer(campuses = [], action) {
  switch (action.type) {
    case GET:
      return action.campuses;
    case ADD:
      return [...campuses, action.campus];
    default:
      return campuses;
  }
}

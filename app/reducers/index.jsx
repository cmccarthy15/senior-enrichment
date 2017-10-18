import { combineReducers } from 'redux';
import students from './student';
import campuses from './campus';
import selectedCampus from './selectedCampus';
import selectedStudent from './selectedStudent';

//const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({students, campuses, selectedCampus, selectedStudent});

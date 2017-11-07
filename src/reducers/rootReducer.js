import {combineReducers} from 'redux';
import peoples from './peopleReducer';

const rootReducer = combineReducers({
  peoples: peoples
});

export default rootReducer;
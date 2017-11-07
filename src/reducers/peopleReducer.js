import initialState from './initialState';
import {FETCH_PEOPLE, RECEIVE_PEOPLE} from '../actions/actionTypes';

export default function peoples(state = initialState.peoples, action) {
  let newState;
  switch (action.type) {
    case FETCH_PEOPLE:
      console.log('FETCH_PEOPLE Action')
      return action;
    case RECEIVE_PEOPLE:
      console.log(action);
      newState = action.peoples.results;
      console.log('RECEIVE_PEOPLE Action')
      return newState;
    default:
      return state;
  }
}
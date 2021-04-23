import { combineReducers } from 'redux';
import turnReducer from './turn';

export default combineReducers({
  turn: turnReducer
});

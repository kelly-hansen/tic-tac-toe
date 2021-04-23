import { combineReducers } from 'redux';
import gameStatusReducer from './gameStatus';

export default combineReducers({
  gameStatus: gameStatusReducer
});

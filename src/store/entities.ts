import { combineReducers } from "redux";
import UserReducer  from './userSlice';

export default combineReducers({
  user: UserReducer,
});
import { combineReducers } from "redux";
import  userReduce  from "./user/slice";

export default combineReducers({
    user: userReduce,
})
import { combineReducers } from "@reduxjs/toolkit";
import recordReducer from "./record/recordSlice";

const rootReducer = combineReducers({
  record: recordReducer
});

export default rootReducer;
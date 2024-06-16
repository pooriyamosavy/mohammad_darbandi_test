import { combineReducers } from "@reduxjs/toolkit";
import { musicApi } from "./api/musicApi";
import { searchSlice } from "./slice/searchSlice";

export const reducers = combineReducers({
  [musicApi.reducerPath]: musicApi.reducer,

  [searchSlice.name]: searchSlice.reducer,
});

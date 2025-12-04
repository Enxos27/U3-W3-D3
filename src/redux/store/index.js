import { configureStore } from "@reduxjs/toolkit";
import FavReducers from "../reducers/FavReducers";
import JobReducers from "../reducers/JobReducers";

const store = configureStore({
  reducer: {
    favorites: FavReducers,
    job: JobReducers,
  },
});

export default store;

import { ADD_JOBS, GET_BOOKS_ERROR } from "../actions";

const initalState = {
  job: [],
  error: "",
};

const JobReducers = (state = initalState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        job: action.payload,
      };
    case GET_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default JobReducers;

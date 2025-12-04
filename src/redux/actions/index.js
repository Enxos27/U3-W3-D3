export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_JOBS = "ADD_JOBS";
export const GET_BOOKS_ERROR = "GET_BOOKS_ERROR";

export const addToFavorites = (agency) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: agency,
  };
};

export const removeFromFavorites = (agency) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: agency,
  };
};

export const addJob = (searchTerm) => {
  const URL = `https://strive-benchmark.herokuapp.com/api/jobs?search=${searchTerm}&limit=20`;
  return (dispatch, getState) => {
    const currentState = getState();
    console.log("currentState", currentState);
    fetch(URL)
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Errore nel recupero libri stock");
        }
      })
      .then((jobs) => {
        dispatch({
          type: ADD_JOBS,
          payload: jobs.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_BOOKS_ERROR,
          payload: JSON.stringify(error, Object.getOwnPropertyNames(error)),
        });
      });
  };
};

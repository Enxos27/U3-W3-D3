import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

const initalState = {
  favorites: [],
};

const FavReducers = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((agency) => {
          return agency !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default FavReducers;

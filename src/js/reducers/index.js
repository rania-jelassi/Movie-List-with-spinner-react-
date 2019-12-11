import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../constants/action-types";
import { movies } from "../../data";

const initialState = {
  tab: movies,
  filtredTab: [],
  minRate: 0,
  loading: true,
  filtredTabByRate: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        tab: [...state.tab, payload]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        tab: state.tab.filter(el => el.id != payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        tab: state.tab.map(el => (el.id == payload.id ? (el = payload) : el))
      };
    default:
      return state;
  }
};
export default rootReducer;

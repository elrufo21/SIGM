import { GET_ANALITICS } from "../../context/types";

export default (state, action) => {
  switch (action.type) {
    case GET_ANALITICS:
      return {
        ...state,
        analitic: action.payload,
      };
    default:
      return state;
  }
};

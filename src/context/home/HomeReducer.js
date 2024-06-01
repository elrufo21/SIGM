import { GET_ANALITICS,TICKET_BY_EMPLOYEE } from "../../context/types";

export default (state, action) => {
  switch (action.type) {
    case GET_ANALITICS:
      return {
        ...state,
        analitic: action.payload,
      };
    case TICKET_BY_EMPLOYEE:
      return {
        ...state,
        ticketsByEmployee: action.payload,
      };
    default:
      return state;
  }
};

import {
  GET_TICKETS,
  GET_TICKET,
  UPDATE_TICKET,
  CREATE_TICKET,
  DELETE_TICKET,
} from "../types";
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: payload,
      };
    case GET_TICKET:
      return {
        ...state,
        selectedTicket: payload,
      };
    case UPDATE_TICKET:
      return {
        ...state,
        tickets: payload,
      };
    case CREATE_TICKET:
      return {
        ...state,
        tickets: payload,
      };
    case DELETE_TICKET:
      return {
        ...state,
        tickets: payload,
      };
    default:
      return state;
  }
};

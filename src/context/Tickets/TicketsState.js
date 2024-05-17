import { useReducer } from "react";
import TicketsContext from "./TicketsContext";
import { ticketsList } from "../../data/data";
import TicketReducer from "./TicketsReducer";

const TicketsState = (props) => {
  const initialState = {
    tickets: [],
    selectedTicket: null,
  };
  const [state, dispatch] = useReducer(TicketReducer, initialState);

  const getTickets = () => {
    console.log(ticketsList);
    dispatch({ type: "GET_TICKETS", payload: ticketsList });
  };
  const createTicket = (ticket) => {
    const newTickets = [...state.tickets, ticket];
    dispatch({ type: "CREATE_TICKET", payload: newTickets });
  };
  return (
    <TicketsContext.Provider
      value={{
        tickets: state.tickets,
        ticket: state.selectedTicket,
        getTickets,
        createTicket,
      }}
    >
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsState;

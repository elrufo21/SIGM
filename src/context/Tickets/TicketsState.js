import { useReducer } from "react";
import TicketsContext from "./TicketsContext";
import { ticketsList } from "../../data/data";
import TicketReducer from "./TicketsReducer";
import { createData, getData } from "../../helpers/helpers";

const TicketsState = (props) => {
  const initialState = {
    tickets: [],
    dataCreateTicket:[],
    selectedTicket: null,
  };
  const [state, dispatch] = useReducer(TicketReducer, initialState);

  const getTickets = async () => {
    const list = await getData("https://sigm-api.onrender.com/api/tickets");
    dispatch({ type: "GET_TICKETS", payload: list });
    console.log(list);
  };
  const getDataCreateTicket = async () => {
    const data = await getData("https://sigm-api.onrender.com/api/sptoem");
    
    dispatch({ type: "GET_DATA_CREATE_TICKET", payload: data });
    console.log(data);
  } 
  const getTicket = async (id) => {
    const ticket = await getData("https://sigm-api.onrender.com/api/ticket/" + id);
    dispatch({ type: "GET_TICKET", payload: ticket });
    console.log(ticket);
  };
  const createTicket = async (ticket) => {
    const newTickets = [...state.tickets, ticket];
    const rs = await createData("https://sigm-api.onrender.com/api/ticket", ticket);
    dispatch({ type: "CREATE_TICKET", payload: newTickets });
    console.log(rs)
  };
  return (
    <TicketsContext.Provider
      value={{
        tickets: state.tickets,
        ticket: state.selectedTicket,
        dataCreateTicket: state.dataCreateTicket,
        getTickets,
        getTicket,
        createTicket,
        getDataCreateTicket,
      }}
    >
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsState;

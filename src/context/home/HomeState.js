import { useReducer } from "react";
import HomeReducer from "./HomeReducer";
import HomeContext from "./HomeContext";
import { getData } from "../../helpers/helpers";

const HomeState = (props) => {
  const initialState = {
    analitic: {},
    ticketsByEmployee: [],
  };

  const [state, dispatch] = useReducer(HomeReducer, initialState);

  const getAnalitics = async () => {
    const list = await getData("https://sigm-api.onrender.com/api/analitic");
    dispatch({ type: "GET_ANALITICS", payload: list });
  };
  const getTicketByEmployee = async (id) => {
    const list = await getData(
      `https://sigm-api.onrender.com/api/employeeTickets/${id}`
    );
    console.log("Empleado")
    console.log(list)
    dispatch({ type: "TICKET_BY_EMPLOYEE", payload: list });
  };

  return (
    <HomeContext.Provider
      value={{
        analitic: state.analitic,
        getAnalitics,
        ticketsByEmployee: state.ticketsByEmployee,
        getTicketByEmployee,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeState;

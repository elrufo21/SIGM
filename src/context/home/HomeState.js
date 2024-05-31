import { useReducer } from "react";
import HomeReducer from "./HomeReducer";
import HomeContext from "./HomeContext";
import { getData } from "../../helpers/helpers";

const HomeState = (props) => {
  const initialState = {
    analitic: {},
  };

  const [state, dispatch] = useReducer(HomeReducer, initialState);

  const getAnalitics = async () => {
    const list = await getData("https://sigm-api.onrender.com/api/analitic");
    dispatch({ type: "GET_ANALITICS", payload: list });
  };

  return (
    <HomeContext.Provider
      value={{
        analitic: state.analitic,
        getAnalitics,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeState;

import { useReducer } from "react";
import AccountReducer from "./AccountReducer";
import AccountContext from "./AccountContext";
import { logginUser } from "../../helpers/helpers";

const AccountState = (props) => {
  const initialState = {
    account: null,
    isLogged: false,
  };

  const [state, dispatch] = useReducer(AccountReducer, initialState);

  const loggin = async (user) => {
    try {
      const data = await logginUser(
        "https://sigm-api.onrender.com/api/login",
        user
      );

      if (data.message === "logged" && data.rows && data.rows.length > 0) {
        dispatch({ type: "SET_LOGGED", payload: true });
        dispatch({ type: "LOGGIN", payload: data.rows[0] });
      } else {
        dispatch({ type: "LOGGIN", payload: null });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      dispatch({ type: "LOGGIN", payload: null });
    }
  };
  
  const logout = () => {
    console.log("Salir")
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AccountContext.Provider
      value={{
        account: state.account,
        isLogged: state.isLogged,
        loggin,
        logout
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountState;

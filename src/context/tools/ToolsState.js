import { useReducer } from "react";
import ToolsContext from "./ToolsContext";
import { ToolsList } from "../../data/data";
import ToolsReducer from "./ToolsReducer";
import { getData } from "../../helpers/helpers";

const ToolsState = (props) => {
  const initialState = {
    tools: [],
    selectedTool: null,
  };
  const [state, dispatch] = useReducer(ToolsReducer, initialState);

  const getTools = async () => {
    const list = await getData("http://192.168.56.1:3000/api/tools");
    dispatch({ type: "GET_TOOLS", payload: list });
  };

  return (
    <ToolsContext.Provider
      value={{ tools: state.tools, tool: state.selectedTool, getTools }}
    >
      {props.children}
    </ToolsContext.Provider>
  );
};

export default ToolsState;

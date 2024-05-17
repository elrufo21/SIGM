import { useReducer } from "react";
import ToolsContext from "./ToolsContext";
import { ToolsList } from "../../data/data";
import ToolsReducer from "./ToolsReducer";

const ToolsState = (props) => {
  const initialState = {
    tools: [],
    selectedTool: null,
  };
  const [state, dispatch] = useReducer(ToolsReducer, initialState);

  const getTools = () => {
    dispatch({ type: "GET_TOOLS", payload: ToolsList });
  }

  return (
    <ToolsContext.Provider
      value={{ tools: state.tools, tool: state.selectedTool, getTools }}
    >
      {props.children}
    </ToolsContext.Provider>
  );
};

export default ToolsState;

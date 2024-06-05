import { useReducer } from "react";
import ToolsContext from "./ToolsContext";
import { ToolsList } from "../../data/data";
import ToolsReducer from "./ToolsReducer";
import { createData, deleteData, getData, updateData } from "../../helpers/helpers";

const ToolsState = (props) => {
  const initialState = {
    tools: [],
    selectedTool: null,
  };
  const [state, dispatch] = useReducer(ToolsReducer, initialState);

  const getTools = async () => {
    const list = await getData("https://sigm-api.onrender.com/api/tools");
    dispatch({ type: "GET_TOOLS", payload: list });
  };
  const getTool = async (id) => {
    const tool = await getData("https://sigm-api.onrender.com/api/tool/" + id);
    dispatch({
      type: "GET_TOOL",
      payload: tool,
    });
  };
  const createTool = async (tool) => {
    const rs = await createData("https://sigm-api.onrender.com/api/tool", tool);
    const newTools = [...state.tools, rs];
    dispatch({ type: "CREATE_TOOL", payload: newTools });
    console.log(rs);
  };
  const updateTool = async (id, updatedData) => {
    const url = "https://sigm-api.onrender.com/api/tool/" + id;

    const rs = await updateData(url, updatedData);
    const updatedTools = state.tools.map((tool) =>
      tool.id === id ? { ...tool, ...updatedData } : tool
    );
    dispatch({ type: "UPDATE_TOOL", payload: updatedTools });
    console.log(rs);
  };
  const deleteTool = async (id) => {
    const url = "https://sigm-api.onrender.com/api/deleteTool/" + id;
    const newTools = state.tools.filter((tool) => tool.id !== id);
    const rs = await deleteData(url);
    dispatch({ type: "DELETE_TOOL", payload: newTools });
    console.log(rs);
  };

  return (
    <ToolsContext.Provider
      value={{
        tools: state.tools,
        tool: state.selectedTool,
        getTools,
        getTool,
        createTool,
        updateTool,
        deleteTool,
      }}
    >
      {props.children}
    </ToolsContext.Provider>
  );
};

export default ToolsState;

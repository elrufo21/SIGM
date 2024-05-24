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
    const newTools = [...state.tools, tool];
    const rs = await createData("https://sigm-api.onrender.com/api/tool", tool);
    dispatch({ type: "CREATE_TOOL", payload: newTools });
    console.log(rs);
  };
  const updateTool = async (id, updatedData) => {
    const url = "https://sigm-api.onrender.com/api/tool/" + id;
    const updatedTools = state.tools.map((tool) =>
      tool.id === id ? { ...tool, ...updatedData } : tool
    );
    const rs = await updateData(url, updatedData);
    dispatch({ type: "UPDATE_TOOL", payload: updatedTools });
    console.log(rs);
  };
  const deleteTool = async (id) => {
    const url = "https://sigm-api.onrender.com/api/tool/" + id;
    const newTools = state.tools.filter((tool) => tool.id !== id);
    const rs = await deleteData(url);
    dispatch({ type: "DELETE_TOOL", payload: newTools });
    console.log(rs);
  };

  return (
    <ToolsContext.Provider
      value={{ tools: state.tools, tool: state.selectedTool, getTools,getTool,createTool,updateTool,deleteTool }}
    >
      {props.children}
    </ToolsContext.Provider>
  );
};

export default ToolsState;

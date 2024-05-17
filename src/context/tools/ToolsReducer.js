import { CREATE_TOOL, DELETE_TOOL, GET_TOOLS, GET_TOOL, UPDATE_TOOL } from "../types";
export default (state, action) => {
  switch (action.type) {
    case GET_TOOLS:
      return {
        ...state,
        tools: action.payload,
      };
    case GET_TOOL :
      return {
        ...state,
        selectedTool: action.payload,
      };
    case UPDATE_TOOL: 
      return {
        ...state,
        tools: action.payload,
      };
    case CREATE_TOOL: 
      return {
        ...state,
        tools: action.payload,
      };
    case DELETE_TOOL: 
      return {
        ...state,
        tools: action.payload,
      };
    default: {
      return state;
    }
  }
};

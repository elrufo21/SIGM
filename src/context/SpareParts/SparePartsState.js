import { useReducer } from "react";
import SparePartsContext from "./SparePartsContext";
import { SparePartsList } from "../../data/data";
import SparePartsReducer from "./SparePartsReducer";

const SparePartState = (props) => {
  const initialState = {
    spareParts: [],
    selectedSparePart: null,
  };
  const [state, dispatch] = useReducer(SparePartsReducer, initialState);

  const getSpareParts = () => {
    console.log(SparePartsList)
    dispatch({ type: "GET_SPARE_PARTS", payload: SparePartsList });
  }

  return (
    <SparePartsContext.Provider
      value={{ spareParts: state.spareParts, sparePart: state.selectedTool, getSpareParts }}
    >
      {props.children}
    </SparePartsContext.Provider>
  );
};

export default SparePartState;

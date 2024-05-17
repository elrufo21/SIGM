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
    console.log(SparePartsList);
    dispatch({ type: "GET_SPARE_PARTS", payload: SparePartsList });
  };
  const createSparePart = (sparePart) => {
    const newSpareParts = [...state.spareParts, sparePart];
    dispatch({ type: "CREATE_SPARE_PARTS", payload: newSpareParts });

  };

  return (
    <SparePartsContext.Provider
      value={{
        spareParts: state.spareParts,
        sparePart: state.selectedTool,
        getSpareParts,
        createSparePart,
      }}
    >
      {props.children}
    </SparePartsContext.Provider>
  );
};

export default SparePartState;

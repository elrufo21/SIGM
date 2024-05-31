import { useReducer } from "react";
import SparePartsContext from "./SparePartsContext";
import { SparePartsList } from "../../data/data";
import SparePartsReducer from "./SparePartsReducer";
import { createData, getData, updateData } from "../../helpers/helpers";

const SparePartState = (props) => {
  const initialState = {
    spareParts: [],
    selectedSparePart: null,
  };
  const [state, dispatch] = useReducer(SparePartsReducer, initialState);

  const getSpareParts = async () => {
    const list = await getData("https://sigm-api.onrender.com/api/spareparts");
    dispatch({ type: "GET_SPARE_PARTS", payload: list });
    console.log(list);
  };
  const getSparePart = async (id) => {
    const sparePart = await getData(
      "https://sigm-api.onrender.com/api/sparepart/" + id
    );
    dispatch({
      type: "GET_SPARE_PART",
      payload: sparePart,
    });
    console.log(sparePart);
  };
  const createSparePart = async (sparePart) => {
    const rs = await createData(
      "https://sigm-api.onrender.com/api/spareparts",
      sparePart
    );
    const newSpareParts = [...state.spareParts, rs];
    console.log(sparePart);
    dispatch({ type: "CREATE_SPARE_PARTS", payload: newSpareParts });
  };
  const updateSparePart = async (id, updatedData) => {
    const rs = await updateData(
      "https://sigm-api.onrender.com/api/sparepart/" + id,
      updatedData
    );
    const updatedSpareParts = state.spareParts.map((sparePart) =>
      sparePart.id === id ? { ...sparePart, ...rs } : sparePart
    );
    dispatch({ type: "UPDATE_SPARE_PARTS", payload: updatedSpareParts });
  };

  return (
    <SparePartsContext.Provider
      value={{
        spareParts: state.spareParts,
        sparePart: state.selectedSparePart,
        getSpareParts,
        createSparePart,
        getSparePart,
        updateSparePart,
      }}
    >
      {props.children}
    </SparePartsContext.Provider>
  );
};

export default SparePartState;

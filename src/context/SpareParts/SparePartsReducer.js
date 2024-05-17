import { GET_SPARE_PARTS, GET_SPARE_PART, UPDATE_SPARE_PARTS,CREATE_SPARE_PARTS,DELETE_SPARE_PARTS } from "../types";

export default (state,action)=>{
    const {payload,type}= action
    switch(type){
        case GET_SPARE_PARTS:
            return {
                ...state,
                spareParts:payload
            }
        case GET_SPARE_PART:
            return {
                ...state,
                selectedSparePart:payload
            }
        case UPDATE_SPARE_PARTS:
            return {
                ...state,
                spareParts:payload
            }
        case CREATE_SPARE_PARTS:
            return {
                ...state,
                spareParts:payload
            }
        case DELETE_SPARE_PARTS:
            return {
                ...state,
                spareParts:payload
            }
        default:
            return state
    }
}
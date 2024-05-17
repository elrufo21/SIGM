import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES,GET_PROFILE,UPDATE_EMPLOYEE } from "../types";

export default (state,action)=>{
    const {payload,type}= action
    switch(type){
        case GET_EMPLOYEES:
            return {
                ...state,
                employees:payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedEmployee:payload
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employees:payload
            }
        case CREATE_EMPLOYEE:
            return {
                ...state,
                employees:payload
            }
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees:payload
            }
        default:
            return state
    }
}
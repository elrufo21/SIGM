import React, { useReducer } from "react";
import EmployeesReducer from "./EmployeesReducer";
import EmployeesContext from "./EmployeesContext";
import { EmployeesList } from "../../data/data";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "../../helpers/helpers";
const EmployeesState = (props) => {
  const initialState = {
    employees: [],
    selectedEmployee: null,
  };

  const [state, dispatch] = useReducer(EmployeesReducer, initialState);
  const getEmployees = async () => {
    try {
      const list = await getData("https://sigm-api.onrender.com/api/employees");
      dispatch({ type: "GET_EMPLOYEES", payload: list });
    } catch (error) {
      console.error("Error al obtener la lista de empleados:", error);
    }
  };
  const getProfile = async (id) => {
    const data = await getData("https://sigm-api.onrender.com/api/employeesTickets/" + id);
    dispatch({
      type: "GET_PROFILE",
      payload: data,
    });
  };
  const updateEmployee = async (id, updatedData) => {
    const url = "https://sigm-api.onrender.com/api/employee/" + id;
    const updatedEmployees = state.employees.map((employee) =>
      employee.id === id ? { ...employee, ...updatedData } : employee
    );
    const rs = await updateData(url, updatedData);
    dispatch({ type: "UPDATE_EMPLOYEE", payload: updatedEmployees });
    console.log(rs);
  };

  const createEmployee = async (employee) => {
    
    const rs = await createData("https://sigm-api.onrender.com/api/employees", employee);
    const newEmployees = [...state.employees, rs];
    dispatch({ type: "CREATE_EMPLOYEE", payload: newEmployees });
    console.log(rs);
  };

  const deleteEmployee = async (id) => {
    const updatedEmployees = state.employees.filter(
      (employee) => employee.id !== id
    );
    const rs = await deleteData("https://sigm-api.onrender.com/api/deleteEmployee/" + id);
    dispatch({ type: "DELETE_EMPLOYEE", payload: updatedEmployees });
    console.log(rs);
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees: state.employees,
        selectedEmployee: state.selectedEmployee,
        getEmployees,
        getProfile,
        updateEmployee,
        createEmployee,
        deleteEmployee,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};
export default EmployeesState;

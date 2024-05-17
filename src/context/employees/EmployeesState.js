import React, { useReducer } from "react";
import EmployeesReducer from "./EmployeesReducer";
import EmployeesContext from "./EmployeesContext";
import { EmployeesList } from "../../data/data";
const EmployeesState = (props) => {
  const initialState = {
    employees: [],
    selectedEmployee: null,
  };

  const [state, dispatch] = useReducer(EmployeesReducer, initialState);
  const getEmployees = () => {
    dispatch({ type: "GET_EMPLOYEES", payload: EmployeesList });
  };
  const getProfile = (id) => {
    dispatch({
      type: "GET_PROFILE",
      payload: state.employees.find((e) => e.id === id),
    });
  };
  const updateEmployee = (id, updatedData) => {
    const updatedEmployees = state.employees.map((employee) =>
      employee.id === id ? { ...employee, ...updatedData } : employee
    );
    dispatch({ type: "UPDATE_EMPLOYEE", payload: updatedEmployees });
  };

  const createEmployee = (employee) => {
    const newEmployees = [...state.employees, employee];
    dispatch({ type: "CREATE_EMPLOYEE", payload: newEmployees });
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = state.employees.filter(
      (employee) => employee.id !== id
    );
    dispatch({ type: "DELETE_EMPLOYEE", payload: updatedEmployees });
  }

  return (
    <EmployeesContext.Provider
      value={{
        employees: state.employees,
        selectedEmployee: state.selectedEmployee,
        getEmployees,
        getProfile,
        updateEmployee,
        createEmployee,
        deleteEmployee
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};
export default EmployeesState;

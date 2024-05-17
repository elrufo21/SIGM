export const getEmployeeById = (id) => {
  return employees.find((employee) => employee.id === id);
};

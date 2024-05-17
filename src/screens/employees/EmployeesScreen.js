import * as React from "react";

import EmployeesContext from "../../context/employees/EmployeesContext";
import CustomDataTable from "../../components/CustomDataTable";

const EmployeesScreen = ({ navigation }) => {
  const { getEmployees, employees, getProfile, deleteEmployee } =
    React.useContext(EmployeesContext);
  React.useEffect(() => {
    getEmployees();
  }, []);
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([4, 8, 12]);
  const [itemsPerPage, setItemsPerPage] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const handleEditEmployee = (id) => {
    getProfile(id);
    navigation.navigate("Actualizar");
  };
  const handleDeleteEmployee = (id) => {
    deleteEmployee(id);
  };
  const handleViewEmployee = (id) => {
    getProfile(id);
    navigation.navigate("Empleado");
  };
  const onItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setPage(0);
  };

  const modifiedEmployees = employees.map((employee) => ({
    ...employee,
    fullName: `${employee.names} ${employee.surnames}`,
  }));
  const titles = [
    { key: "fullName", value: "Name" },
    { key: "phone", value: "Phone" },
    { key: "rol", value: "Role" },
  ];
  const actions = [
    {
      icon: "refresh",
      color: "#2196f3",
      size: 24,
      handleAction: handleEditEmployee,
    },
    {
      icon: "trash",
      color: "red",
      size: 24,
      handleAction: handleDeleteEmployee,
    },
    { icon: "eye", color: "green", size: 24, handleAction: handleViewEmployee },
  ];

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <CustomDataTable
      titles={titles}
      list={modifiedEmployees}
      actions={actions}
      page={page}
      itemsPerPage={itemsPerPage}
      numberOfItemsPerPageList={numberOfItemsPerPageList}
      onPageChange={(page) => setPage(page)}
      onItemsPerPageChange={onItemsPerPageChange}
    />
  );
};
export default EmployeesScreen;

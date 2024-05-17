import * as React from "react";
import { Text, View } from "react-native";
import EmployeesContext from "../../context/employees/EmployeesContext";
const EmployeeScreen = () => {
  const { selectedEmployee } = React.useContext(EmployeesContext);

  return (
    <View>
      {selectedEmployee ? (
        <>
          <Text>{selectedEmployee.names}</Text>
          <Text>{selectedEmployee.surnames}</Text>
          <Text>{selectedEmployee.rol}</Text>
          <Text>{selectedEmployee.phone}</Text>
        </>
      ) : (
        <Text>No hay un usuario seleccionado</Text>
      )}
    </View>
  );
};

export default EmployeeScreen;

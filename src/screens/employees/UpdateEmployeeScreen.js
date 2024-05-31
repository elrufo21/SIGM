import { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import EmployeesContext from "../../context/employees/EmployeesContext";
import FormComponent from "../../components/FormComponent";

const UpdateEmployeeScreen = ({ navigation }) => {
  const { selectedEmployee, updateEmployee, getProfile } =
    useContext(EmployeesContext);
  const [updatedEmployee, setUpdatedEmployee] = useState(
    selectedEmployee || { employee: {} }
  );
  const [selectedValue, setSelectedValue] = useState(
    selectedEmployee ? selectedEmployee.employee.rol : ""
  );

  useEffect(() => {
    if (selectedEmployee) {
      setUpdatedEmployee(selectedEmployee.employee);
      setSelectedValue(selectedEmployee.employee.rol);
    }
  }, [selectedEmployee]);

  const handleUpdate = () => {
    if (selectedEmployee) {
      const updatedData = {
        ...updatedEmployee,
        rol: selectedValue,
      };
      updateEmployee(updatedEmployee.id, updatedData);
      getProfile(updatedEmployee.id);
      console.log(updatedData);
    }
  };

  const fields = [
    {
      name: "names",
      label: "Nombres",
      value: updatedEmployee.names || "",
      type: "text",
      setValue: (text) =>
        setUpdatedEmployee({
          ...updatedEmployee,
          names: text,
        }),
    },
    {
      name: "surnames",
      label: "Apellidos",
      value: updatedEmployee.surnames || "",
      type: "text",
      setValue: (text) =>
        setUpdatedEmployee({
          ...updatedEmployee,
          surnames: text,
        }),
    },
    {
      name: "phone",
      label: "Telefono",
      value: updatedEmployee.phone || "",
      type: "text",
      setValue: (text) =>
        setUpdatedEmployee({
          ...updatedEmployee,
          phone: text,
        }),
    },
    {
      name: "rol",
      label: "Rol",
      value: selectedValue,
      type: "select",
      options: [
        { label: "Mecanico", value: "Mecanico" },
        { label: "Practicante", value: "Practicante" },
        { label: "Limpieza", value: "Limpieza" },
        { label: "Programador", value: "Programador" },
      ],
      setValueSelectInput: (text) => setSelectedValue(text),
      valueSelectInput: selectedValue,
    },
  ];

  return (
    <View style={styles.container}>
      {selectedEmployee ? (
        <Card style={styles.card}>
          <Card.Title title="Actualizar Empleado" />
          <Card.Content>
            <FormComponent fields={fields} />
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={handleUpdate}>
              Actualizar
            </Button>
          </Card.Actions>
        </Card>
      ) : (
        <Text>No hay un usuario seleccionado</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 500,
  },
});
export default UpdateEmployeeScreen;

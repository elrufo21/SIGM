import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
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
    <View>
      {selectedEmployee ? (
        <>
          <FormComponent fields={fields} />
          <Button mode="contained" onPress={handleUpdate}>
            Actualizar
          </Button>
        </>
      ) : (
        <Text>No hay un usuario seleccionado</Text>
      )}
    </View>
  );
};

export default UpdateEmployeeScreen;

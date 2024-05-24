import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import SelectInput from "../../components/SelectImput";
import EmployeesContext from "../../context/employees/EmployeesContext";
import FormComponent from "../../components/FormComponent";

const UpdateEmployeeScreen = ({navigation}) => {
  const { selectedEmployee, updateEmployee,getProfile } = useContext(EmployeesContext);
  const [updatedEmployee, setUpdatedEmployee] = useState(selectedEmployee);
  const [selectedValue, setSelectedValue] = useState("Mecanico");
  
  useEffect(() => {
    setUpdatedEmployee(selectedEmployee);
   
  }, [selectedEmployee]);
  
  const handleUpdate = () => {
    if (selectedEmployee) {
      setUpdatedEmployee({ ...updatedEmployee, rol: selectedValue });
      updateEmployee(updatedEmployee.id, updatedEmployee);
      getProfile(updatedEmployee.id);
    }
  };

  const fields = [
    {
      name: "names",
      label: "Nombres",
      value: updatedEmployee.names,
      type: "text",
      setValue: (text) =>
        setUpdatedEmployee({ ...updatedEmployee, names: text }),
    },
    {
      name: "surnames",
      label: "Apellidos",
      value: updatedEmployee.surnames,
      type: "text",
      setValue: (text) =>
        setUpdatedEmployee({ ...updatedEmployee, surnames: text }),
    },
    {
      name: "phone",
      label: "Telefono",
      value: updatedEmployee.phone,
      type: "text",
      setValue: (text) =>
        setUpdatedEmployee({ ...updatedEmployee, phone: text }),
    },
    {
      name: "rol",
      label: "Rol",
      value: updatedEmployee.rol,
      type: "select",
      options: [
        { label: "Mecanico", value: "1" },
        { label: "Practicante", value: "2" },
        { label: "Limpieza", value: "3" },
        { label: "Programador", value: "4" },
      ],
      setValue: (text) => setUpdatedEmployee({ ...updatedEmployee, rol: text }),
      valueSelectImput: selectedValue,
      setValueSelectInput: (text) => setSelectedValue(text),
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

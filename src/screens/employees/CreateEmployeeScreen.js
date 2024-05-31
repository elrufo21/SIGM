import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import FormComponent from "../../components/FormComponent";
import EmployeesContext from "../../context/employees/EmployeesContext";
const CreateEmployeScreen = ({ navigation, route }) => {
  const { createEmployee, employees } = useContext(EmployeesContext);
  const [data, setData] = useState({});
  /*Valores para el select input */
  //Lo del picker mas adelante ira en un context
  //Al momento de crear un primer empleado no se carga el rol y algunos campos necesarios.

  const [selectedValue, setSelectedValue] = useState("Mecanico");

  /* */

  const buttonHandleClick = async () => {
    const emp = {...data, rol: selectedValue, status: "1", id: employees.length + 1};
  
    console.log(emp);
  
    createEmployee(emp); 
    setData({});
    navigation.navigate("Lista"); 
  };

  const fields = [
    {
      name: "names",
      label: "Nombres",
      value: data.names,
      type: "text",
      setValue: (text) => setData({ ...data, names: text }),
    },
    {
      name: "surnames",
      label: "Apellidos",
      value: data.surnames,
      type: "text",
      setValue: (text) => setData({ ...data, surnames: text }),
    },
    {
      name: "phone",
      label: "Telefono",
      value: data.phone,
      type: "text",
      setValue: (text) => setData({ ...data, phone: text }),
    },
    {
      name: "rol",
      label: "Rol",
      value: selectedValue,
      type: "select",
      options: [
        { label: "Mecanico", value: "Mecanico" },
        { label: "Programador", value: "Programador" },

        { label: "Limpieza", value: "Limpieza" },
        { label: "Practicante", value: "Practicante" },
      ],
      valueSelectInput: selectedValue,
      setValueSelectInput: (text) => setSelectedValue(text),
    },  
  ];
  return (
    <View>
      <FormComponent fields={fields} />
      <Button mode="contained" onPress={buttonHandleClick}>
        Guardar
      </Button>
    </View>
  );
};
export default CreateEmployeScreen;

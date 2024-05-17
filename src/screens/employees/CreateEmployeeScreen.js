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
  //Al momento de crear un primer empleado no se carga el rol y algunos componentes necesarios.

  const [selectedValue, setSelectedValue] = useState("Mecanico");

  /* */

  const buttonHandleClick = () => {
    setData((prevData) => ({
      ...prevData,
      rol: selectedValue,
      status: "1",
      id: employees.length + 1,
    }));
    createEmployee(data);

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
      value: data.rol,
      type: "select",
      options: [
        { label: "Mecanico", value: "1" },
        { label: "Practicante", value: "2" },

        { label: "Limpieza", value: "3" },
        { label: "Programador", value: "4" },
      ],
      setValue: (text) => setData({ ...data, rol: text }),
      valueSelectImput: selectedValue,
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

import { Text } from "react-native";
import FormComponent from "../../components/FormComponent";
import { useContext, useState } from "react";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";
import { Button } from "react-native-paper";

const CreateSparePartScreen = ({navigation}) => {
  const { createSparePart, spareParts } = useContext(SparePartsContext);
  const [selectedValue, setSelectedValue] = useState("Mecanico");
  const [data, setData] = useState({});
  const fields = [
    {
      name: "name",
      label: "Nombre",
      value: data.name,
      type: "text",
      setValue: (text) => setData({ ...data, name: text }),
    },
    {
      name: "stock",
      label: "Stock",
      value: data.stock,
      type: "number",
      setValue: (text) => setData({ ...data, stock: text }),
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
    {
      name: "description",
      label: "Descripcion",
      value: data.description,
      type: "description",
      setValue: (text) => setData({ ...data, description: text }),
      numberOfLines: 3,
      height: 100,
      fontSize: 15,
    },
  ];
  const buttonHandleClick = () => {
    setData((prevData) => ({
      ...prevData,
      id: spareParts.length + 1,
    }));
    createSparePart(data);
    setData({})

    navigation.navigate("Lista");
  };
  return (
    <>
      <Text>CreateSparePart</Text>
      <FormComponent fields={fields} />
      <Button mode="contained" onPress={buttonHandleClick} >Crear</Button>
    </>
  );
};
export default CreateSparePartScreen;

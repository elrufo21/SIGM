import { Text } from "react-native";
import FormComponent from "../../components/FormComponent";
import { useContext, useState } from "react";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";
import { Button } from "react-native-paper";

const CreateSparePartScreen = ({ navigation }) => {
  const { createSparePart, spareParts } = useContext(SparePartsContext);
  const [selectedValue, setSelectedValue] = useState("aceites");
  const [data, setData] = useState({});
  
  const fields = [
    {
      name: "name",
      label: "Nombres",
      value: data.name,
      type: "text",
      setValue: (text) => setData({ ...data, name: text }),
    },
    {
      name: "location",
      label: "Ubicacion",
      value: data.location,
      type: "text",
      setValue: (text) => setData({ ...data, location: text }),
    },
    {
      name: "price",
      label: "Precion por unidad",
      value: data.price,
      type: "number",
      setValue: (text) => setData({ ...data, price: text }),
    },
    {
      name: "stock",
      label: "Stock",
      value: data.stock,
      type: "number",
      setValue: (text) => setData({ ...data, stock: text }),
    },
    
    {
      name: "type",
      label: "Tipo",
      value: selectedValue,
      type: "select",
      options: [
        { label: "Aceites", value: "aceites" },
        { label: "Filtros", value: "filtros" },
        { label: "Frenos", value: "frenos" },
        { label: "Otros", value: "otros" },
      ],
      valueSelectInput: selectedValue,
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
    const newData = { ...data, type: selectedValue };
    newData.price = parseInt(newData.price); // Convertir el precio a un entero
    console.log(newData);
    createSparePart(newData);
    setData({});
    navigation.navigate("Lista");
  };

  return (
    <>
      <Text>CreateSparePart</Text>
      <FormComponent fields={fields} buttonSelect={false} />
      <Button mode="contained" onPress={buttonHandleClick}>
        Crear
      </Button>
    </>
  );
};

export default CreateSparePartScreen;

import { Text, View } from "react-native";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";
import { useContext, useEffect, useState } from "react";
import FormComponent from "../../components/FormComponent";
import { Button } from "react-native-paper";

const UpdateSparePartScreen = () => {
  const { updateSparePart, sparePart } = useContext(SparePartsContext);
  const [selectedValue, setSelectedValue] = useState("aceites");
  const [data, setData] = useState(sparePart);

  useEffect(() => {
    if (sparePart) {
      setData(sparePart);
    }
  }, [sparePart]);

  const buttonHandleClick = () => {
    updateSparePart(sparePart.id,data);
  };
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
      name: "type",
      label: "Tipo",
      value: data.type,
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

  return (
    <View>
      <FormComponent fields={fields} />
      <Button mode="contained" onPress={buttonHandleClick}>
        {" "}
        Actualizar{" "}
      </Button>
    </View>
  );
};

export default UpdateSparePartScreen;

import { Dimensions, Keyboard, Text, View, StyleSheet } from "react-native";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";
import { useContext, useEffect, useState } from "react";
import FormComponent from "../../components/FormComponent";
import { Button, Card, Title } from "react-native-paper";

const UpdateSparePartScreen = () => {
  const { updateSparePart, sparePart } = useContext(SparePartsContext);
  const [selectedValue, setSelectedValue] = useState("aceites");
  const [data, setData] = useState(
    sparePart || {
      name: "",
      stock: 0,
      price: 0,
      type: "aceites",
      location: "",
      description: "",
    }
  );

  useEffect(() => {
    if (sparePart) {
      setData(sparePart);
      setSelectedValue(sparePart.type);
    }
  }, [sparePart]);

  const buttonHandleClick = () => {
    updateSparePart(sparePart.id, { ...data, type: selectedValue });
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
      value: data.stock.toString(),
      keyboardType: "numeric",
      setValue: (text) => setData({ ...data, stock: parseInt(text, 10) }),
    },
    {
      name: "price",
      label: "Precio por unidad",
      value: data.price.toString(),
      keyboardType: "numeric",
      setValue: (text) => setData({ ...data, price: parseFloat(text) }),
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
      setValueSelectInput: (text) => setSelectedValue(text),
    },
    {
      name: "location",
      label: "Ubicación",
      value: data.location,
      type: "text",
      setValue: (text) => setData({ ...data, location: text }),
    },
    {
      name: "description",
      label: "Descripción",
      value: data.description,
      type: "description",
      setValue: (text) => setData({ ...data, description: text }),
      numberOfLines: 3,
      height: 100,
      fontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Actualizar Repuesto" />
        <Card.Content>
          <FormComponent fields={fields} />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={buttonHandleClick}>
            Actualizar
          </Button>
        </Card.Actions>
      </Card>
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
export default UpdateSparePartScreen;

import { useContext, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import ToolsContext from "../../context/tools/ToolsContext";
import FormComponent from "../../components/FormComponent";
import { Button, Card } from "react-native-paper";

const CreateToolScreen = ({ navigation }) => {
  const { createTool } = useContext(ToolsContext);
  const [data, setData] = useState({});
  const fields = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      value: data.name,
      setValue: (text) => setData({ ...data, name: text }),
    },
    {
      name: "type",
      label: "Tipo",
      value: data.type,
      type: "select",
      options: [
        { value: "Manuales", label: "Herramientas Manuales" },
        { value: "Medicion", label: "Herramientas de Medicion" },
        { value: "Medicion", label: "Herramientas de Potencia" },
        {
          value: "Medicion y Sujestion",
          label: "Herramientas de Medicion y Sujestion",
        },
        {
          value: "Soldadura y Soldadores",
          label: "Herramientas de Soldadura y Soldadores",
        },
        {
          value: "Diagnostico y Prueba",
          label: "Herramientas de Diagnostico y Prueba",
        },
        { value: "Otros", label: "Otros" },
      ],
      valueSelectInput: data.type,
      setValueSelectInput: (text) => setData({ ...data, type: text }),
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

  const handleCreate = () => {
    const newData = { ...data, price: parseFloat(data.price), status: "d" };
    console.log(newData);
    createTool(newData);

    navigation.navigate("Lista");
  };
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Crear Repuesto" />
        <Card.Content>
          <FormComponent fields={fields} buttonSelect={false} />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleCreate}>
            Crear
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
export default CreateToolScreen;

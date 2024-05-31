import React, { useContext, useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import ToolsContext from "../../context/tools/ToolsContext";
import FormComponent from "../../components/FormComponent";
import { useNavigation } from "@react-navigation/native";

const UpdateToolsScreen = () => {
  const { tool, updateTool } = useContext(ToolsContext);
  const [updatedTool, setUpdatedTool] = useState({});
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if (tool) {
      setUpdatedTool(tool);
      setLoading(false);
    }
  }, [tool]);

  const fields = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      value: updatedTool.name || "",
      setValue: (text) => setUpdatedTool({ ...updatedTool, name: text }),
    },
    {
      name: "type",
      label: "Tipo",
      type: "select",
      options: [
        { value: "Manuales", label: "Herramientas Manuales" },
        { value: "Medicion", label: "Herramientas de Medicion" },
        { value: "Potencia", label: "Herramientas de Potencia" },
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
      valueSelectInput: updatedTool.type,
      setValueSelectInput: (text) =>
        setUpdatedTool({ ...updatedTool, type: text }),
    },
    {
      name: "location",
      label: "Ubicación",
      type: "text",
      value: updatedTool.location || "",
      setValue: (text) => setUpdatedTool({ ...updatedTool, location: text }),
    },
    {
      name: "price",
      label: "Precio por unidad",
      type: "number",
      value: updatedTool.price || "",
      setValue: (text) => setUpdatedTool({ ...updatedTool, price: text }),
    },
    {
      name: "description",
      label: "Descripción",
      type: "description",
      value: updatedTool.description || "",
      setValue: (text) => setUpdatedTool({ ...updatedTool, description: text }),
      numberOfLines: 3,
      height: 100,
      fontSize: 15,
    },
  ];

  const handleUpdate = () => {
    const newUpdatedTool = {
      ...updatedTool,
      price: parseFloat(updatedTool.price),
    };
    console.log(newUpdatedTool);
    updateTool(tool.id, newUpdatedTool);
    navigation.navigate("Lista");
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <FormComponent fields={fields} />
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleUpdate}>
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
export default UpdateToolsScreen;

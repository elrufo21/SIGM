import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import ToolsContext from "../../context/tools/ToolsContext";
import CustomDataTable from "../../components/CustomDataTable";
import {
  Button,
  Card,
  IconButton,
  Paragraph,
  Portal,
  Title,
} from "react-native-paper";
import CreateToolScreen from "./CreateToolScreen";
import UpdateToolScreen from "./UpdateToolScreen";

const ToolsScreen = ({ navigation }) => {
  const { getTools, tools, getTool, createTool, tool, updateTool, deleteTool } =
    useContext(ToolsContext);
  useEffect(() => {
    getTools();
  }, []);
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);

  const showModalUpdate = () => setVisibleUpdate(true);
  const hideModalUpdate = () => setVisibleUpdate(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleUpdate = async (id) => {
    await getTool(id);

    showModalUpdate();
  };

  const handleDelete = async (id) => {
    console.log(id);
    await deleteTool(id);
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}>
      <Button mode="contained" onPress={showModal}>
        {" "}
        Crear{" "}
      </Button>
      <Portal>
        <CreateToolScreen
          visible={visible}
          hideModal={hideModal}
          createTool={createTool}
        />
      </Portal>
      <Portal>
        <UpdateToolScreen
          visible={visibleUpdate}
          hideModal={hideModalUpdate}
          tool={tool}
          updateTool={updateTool}
        />
      </Portal>
      {tools.map((t) => (
        <Card style={styles.card}>
          <Card.Cover source="" style={styles.cardCover} />
          <Card.Content>
            <Title style={styles.title}>{t.name}</Title>
            <Paragraph style={styles.subtitle}>{t.type}</Paragraph>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Ubicación:</Text>
                <Text style={styles.infoValue}>{t.location}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Precio:</Text>
                <Text style={[styles.infoValue, styles.green]}>
                  S/.{t.price} c/u
                </Text>
              </View>
            </View>
            <Paragraph style={styles.description}>{t.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <IconButton icon="pencil" onPress={() => handleUpdate(t.id)} />
            <IconButton icon="delete" onPress={() => handleDelete(t.id)} />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "#00CC00",
    marginTop: 5,
    marginBottom: 5,
  },
  cardCover: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  infoItem: {
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 14,
    color: "#999999",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 10,
  },
  noToolText: {
    fontSize: 16,
    color: "#666666",
  },
  green: {
    color: "#00CC00",
  },
});
export default ToolsScreen;

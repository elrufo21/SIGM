import { ScrollView, Text, StyleSheet, View } from "react-native";
import CustomDataTable from "../../components/CustomDataTable";
import { useContext, useEffect, useState } from "react";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Paragraph,
  Portal,
  Title,
} from "react-native-paper";
import CreateSparePartScreen from "./CreateSparePartScreen";
import UpdateSparePart from "./UpdateSparePartScreen";

const SparePartsScreen = ({ navigation }) => {
  const {
    getSpareParts,
    spareParts,
    getSparePart,
    createSparePart,
    sparePart,
  } = useContext(SparePartsContext);
  useEffect(() => {
    getSpareParts();
  }, []);
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);

  const showModalUpdate = () => setVisibleUpdate(true);
  const hideModalUpdate = () => setVisibleUpdate(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const handleDelete = (id) => {
    console.log(id);
  };
  const handleView = (id) => {
    navigation.navigate("Ver");
    getSparePart(id);
  };
  const handleUpdate = async (id) => {
    await getSparePart(id);
    showModalUpdate();
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}>
      <Button mode="contained" onPress={() => showModal()}>
        Crear
      </Button>
      <Portal>
        <CreateSparePartScreen
          visible={visible}
          hideModal={hideModal}
          handleCreate={createSparePart}
        />
      </Portal>
      <Portal>
        <UpdateSparePart
          visible={visibleUpdate}
          hideModal={hideModalUpdate}
          handleUpdate={createSparePart}
          sparePart={sparePart}
        />
      </Portal>

      {spareParts.map((sparePart) => (
        <Card style={styles.card}>
          <Card.Cover source={""} style={styles.cardCover} />
          <Card.Content>
            <Title style={styles.title}>{sparePart.name}</Title>
            <Paragraph style={styles.subtitle}>{sparePart.type}</Paragraph>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Stock:</Text>
                <Text style={styles.infoValue}>{sparePart.stock}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Ubicación:</Text>
                <Text style={styles.infoValue}>{sparePart.location}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Precio:</Text>
                <Text style={[styles.infoValue, styles.green]}>
                  S/.{sparePart.price} /u
                </Text>
              </View>
            </View>
            <Paragraph style={styles.description}>
              {sparePart.description}
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <IconButton
              icon="pencil"
              onPress={() => handleUpdate(sparePart.id)}
            />
            <IconButton
              icon="delete"
              onPress={() => handleDelete(sparePart.id)}
            />
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
  noSparePartText: {
    fontSize: 16,
    color: "#666666",
  },
  green: {
    color: "#00CC00",
  },
});
export default SparePartsScreen;

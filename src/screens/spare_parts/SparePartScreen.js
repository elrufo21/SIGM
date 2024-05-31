import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";
import { Card, Title, Paragraph } from "react-native-paper";

const SparePartScreen = () => {
  const { sparePart } = useContext(SparePartsContext);

  return (
    <View style={styles.container}>
      {sparePart ? (
        <Card style={styles.card}>
          <Card.Cover source={{ uri: sparePart.imageUrl }} style={styles.cardCover} />
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
                <Text style={[styles.infoValue,styles.green]}>S/.{sparePart.price} /u</Text>
              </View>
            </View>
            <Paragraph style={styles.description}>{sparePart.description}</Paragraph>
          </Card.Content>
        </Card>
      ) : (
        <Text style={styles.noSparePartText}>No hay un SparePart seleccionado</Text>
      )}
    </View>
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

export default SparePartScreen;
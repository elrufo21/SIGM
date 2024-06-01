import React, { useContext } from "react";
import { StyleSheet, ScrollView,View } from "react-native";
import TicketsContext from "../../context/Tickets/TicketsContext";
import {
  Button,
  Card,
  Divider,
  Title,
  Paragraph,
  Chip,
  Text,
} from "react-native-paper";

const TicketScreen = ({ navigation }) => {
  const { ticket, finishTicket, deleteTicket } = useContext(TicketsContext);

  // Verificar si el ticket no está definido
  if (!ticket) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleFinish = () => {
    finishTicket(ticket.id);
  };
  const handleDelete = () => {
    deleteTicket(ticket.id);
  };
  const handleUpdate = () => {
    navigation.navigate("Actualizar");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={`Ticket: ${ticket.id}`}
          subtitle={ticket.registration_date}
          right={(props) => <Chip style={styles.chip}>S/.{ticket.cost}</Chip>}
        />
        <Divider />
        <Card.Content>
          <Title>{ticket.description}</Title>
          <Paragraph>
            Estado:{" "}
            <Text
              
            >
              {ticket.status === "F"
                ? "Finalizado"
                : ticket.status === "A"
                ? "Activo"
                : ticket.status === "D"
                ? "Eliminado"
                : "Desconocido"}
            </Text>
          </Paragraph>
          <Divider style={styles.divider} />
          <Title>Repuestos</Title>
          {ticket.spare_parts.length > 0 ? (
            ticket.spare_parts.map((spare_part) => (
              <Paragraph key={spare_part.id}>
                {spare_part.quantity} {spare_part.name}
              </Paragraph>
            ))
          ) : (
            <Paragraph>No hay repuestos disponibles</Paragraph>
          )}
          <Divider style={styles.divider} />
          <Title>Herramientas</Title>
          {ticket.tools.length > 0 ? (
            ticket.tools.map((tool) => (
              <Paragraph key={tool.id}>{tool.name}</Paragraph>
            ))
          ) : (
            <Paragraph>No hay herramientas disponibles</Paragraph>
          )}
          <Divider style={styles.divider} />
          <Title>Encargados</Title>
          {ticket.employees.length > 0 ? (
            ticket.employees.map((employee) => (
              <Paragraph key={employee.id}>{employee.name}</Paragraph>
            ))
          ) : (
            <Paragraph>No hay encargados disponibles</Paragraph>
          )}
        </Card.Content>
        <Card.Actions>
          {ticket.status !== "D" && (
            <Button
              mode="contained"
              style={styles.button}
              onPress={handleFinish}
            >
              Finalizar
            </Button>
          )}
          {ticket.status !== "D" && (
            <Button
              mode="contained"
              style={styles.button}
              onPress={handleUpdate}
            >
              Actualizar
            </Button>
          )}
          <Button mode="contained" style={styles.button} onPress={handleDelete}>
            Eliminar
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    elevation: 4,
  },
  chip: {
    backgroundColor: "#05FF00",
    color: "white",
    height: 40,
  },
  statusChip: {
    marginVertical: 8
  },
  finishedChip: {
    backgroundColor: "#05FF00",
    color: "white",
  },
  activeChip: {
    backgroundColor: "red",
    color: "white",
  },
  deletedChip: {
    backgroundColor: "blue",
    color: "white",
  },
  divider: {
    marginVertical: 8,
  },
  button: {
    marginHorizontal: 4,
  },
});

export default TicketScreen;

import React, { useContext } from "react";
import { Text, View } from "react-native";
import TicketsContext from "../../context/Tickets/TicketsContext";
import { Button, Card } from "react-native-paper";

const TicketScreen = ({ navigation }) => {
  const { ticket, finishTicket, tickets, deleteTicket } =
    useContext(TicketsContext);

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
    <View>
      <Card>
        <Card.Title
          title={`Ticket: ${ticket.id}`}
          subtitle={ticket.registration_date}
          subtitleStyle={{ color: "gray" }}
          right={(props) => (
            <Text style={{ color: "green" }}>{`S/.${ticket.cost}`}</Text>
          )}
        />
        <Card.Content>
          <Card>
            <Card.Title title="Detalles" />
            <Card.Content>
              <Text>{ticket.description}</Text>
              <Text>{ticket.status}</Text>
              <Card>
                <Card.Title title="Repuestos" />
                <Card.Content>
                  {ticket.spare_parts.length > 0 ? (
                    ticket.spare_parts.map((spare_part) => (
                      <Text key={spare_part.id}>
                        {spare_part.quantity} {spare_part.name}
                      </Text>
                    ))
                  ) : (
                    <Text>No hay repuestos disponibles</Text>
                  )}
                </Card.Content>
              </Card>
              <Card>
                <Card.Title title="Herramientas" />
                <Card.Content>
                  {ticket.tools.length > 0 ? (
                    ticket.tools.map((tool) => (
                      <Text key={tool.id}>{tool.name}</Text>
                    ))
                  ) : (
                    <Text>No hay herramientas disponibles</Text>
                  )}
                </Card.Content>
              </Card>
              <Card>
                <Card.Title title="Encargados" />
                <Card.Content>
                  {ticket.employees.length > 0 ? (
                    ticket.employees.map((employee) => (
                      <Text key={employee.id}>{employee.name}</Text>        
                    ))
                  ) : (
                    <Text>No hay encargados disponibles</Text>
                  )}
                </Card.Content>
              </Card>
            </Card.Content>
          </Card>
        </Card.Content>
        <Card.Actions>
          {ticket.status != "D" && (
            <Button mode="contained" onPress={handleFinish}>
              Finalizar
            </Button>
          )}
          {
            ticket.status != "D" && (
              <Button mode="contained" onPress={handleUpdate}>
                Actualizar
              </Button>
            )
          }
          <Button mode="contained" onPress={handleDelete}>
            Eliminar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default TicketScreen;

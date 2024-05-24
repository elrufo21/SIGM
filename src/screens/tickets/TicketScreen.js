import React, { useContext } from "react";
import { Text, View, FlatList } from "react-native";
import TicketsContext from "../../context/Tickets/TicketsContext";

const TicketScreen = () => {
  const { ticket } = useContext(TicketsContext);
  console.log('Ticket:', ticket); // Log para verificar si el ticket está llegando

  // Renderiza solo si el ticket está disponible
  if (!ticket) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Ticket Details</Text>
      <Text>Status: {ticket.status}</Text>
      <Text>Description: {ticket.description}</Text>
      <Text>Registration Date: {new Date(ticket.registration_date).toLocaleString()}</Text>

      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Employees:</Text>
      <FlatList
        data={ticket.employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />

      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Spare Parts:</Text>
      <FlatList
        data={ticket.spare_parts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />

      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Tools:</Text>
      <FlatList
        data={ticket.tools}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default TicketScreen;

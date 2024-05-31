import { useContext, useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import TicketsContext from "../../context/Tickets/TicketsContext";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const TicketsScreen = ({ navigation }) => {
  const { getTickets, tickets, getTicket } = useContext(TicketsContext);
  const [dataFilter, setDataFilter] = useState({});
  const [date, setDate] = useState("");
  const [selectdeStatus, setSelectedStatus] = useState("");
  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    setDataFilter(tickets);
  }, [tickets]);
  const handleViewTicket = (id) => {
    console.log(id);
    getTicket(id);
    navigation.navigate("Ticket");
  };
  const filterByDate = (tickets, date) => {
    return tickets.filter((ticket) => ticket.ticket_registration_date === date);
  };
  const filterByTicket = (tickets, ticket) => {
    const id = parseInt(ticket);
    return tickets.filter((t) => t.id === id);
  };
  const filterByStatus = (tickets, status) => {
    return tickets.filter((ticket) => ticket.ticket_status === status);
  };
  const handleFilter = (text, value) => {
    switch (value) {
      case "date":
        if (text == "") {
          setDataFilter(tickets);
        } else {
          setDataFilter(filterByDate(tickets, text));
        }
        break;

      case "ticket":
        if (text == "") {
          setDataFilter(tickets);
        } else {
          setDataFilter(filterByTicket(tickets, text));
        }
        break;
      case "status":
        if (text == "") {
          setDataFilter(tickets);
          setSelectedStatus("");
        } else {
          setSelectedStatus(text);
          setDataFilter(filterByStatus(tickets, text));
        }
        break;
      default:
        break;
    }
  };
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("window").width - 100,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          mode="outlined"
          label="YYY/MM/DD"
          onChangeText={(text) => handleFilter(text, "date")}
          style={{ flex: 2, marginRight: 5,fontSize:12 }}

        />
        <TextInput
          mode="outlined"
          label="Ticket"
          onChangeText={(text) => handleFilter(text, "ticket")}
          style={{ flex: 1, marginRight: 5,fontSize:12 }}
        />
        <Picker
          selectedValue={selectdeStatus}
          onValueChange={(value) => handleFilter(value, "status")}
          style={{ flex: 2 }}
        >
          <Picker.Item label="Todos" value="" />
          <Picker.Item label="Activo" value="A" />
          <Picker.Item label="Finalizado" value="F" />
          <Picker.Item label="Cancelado" value="D" />
        </Picker>
      </View>

      {dataFilter.length > 0 ? (
        <ScrollView>
          {dataFilter.map((ticket) => (
            <Card
              key={ticket.id}
              mode="contained"
              style={{ marginTop: 10, marginBottom: 10, width: 380 }}
            >
              <Card.Title
                title={`Ticket: ${ticket.id}`}
                subtitle={ticket.ticket_registration_date}
                left={(props) => <Avatar.Icon icon="folder" {...props} />}
                right={(props) => (
                  <Button
                    mode="contained"
                    icon={"check"}
                    onPress={() => handleViewTicket(ticket.id)}
                    {...props}
                    style={{ backgroundColor: "green", marginRight: 10 }}
                  >
                    Ver
                  </Button>
                )}
              />
              <Card.Content>
                <Text>{ticket.ticket_description}</Text>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      ) : (
        <View style={{ marginTop: 20 }}>
          <Text>No hay tickets disponibles</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default TicketsScreen;

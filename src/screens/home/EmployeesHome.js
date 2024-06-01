import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import TicketsReducer from "../../context/Tickets/TicketsReducer";
import HomeContext from "../../context/home/HomeContext";
import AccountContext from "../../context/account/AccountContext";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const EmployeesHome = () => {
  const { ticketsByEmployee, getTicketByEmployee } = useContext(HomeContext);
  const { account } = useContext(AccountContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTicketByEmployee(account.id_employee);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loadings...</Text>
      </View>
    );
  }
  return (
    <ScrollView > 
      {ticketsByEmployee.length > 0 ? (
        <>
        <Card>
        <Card.Title
          title={`${ticketsByEmployee[0].employee_names} ${ticketsByEmployee[0].employee_surnames}`}
          left={(props) => <Button icon="account" />}
          subtitle={`${ticketsByEmployee.length} tickets activos`}
        />
      </Card>
      <View>
        <Card>
          <Card.Title title="Tickets activos asignados" />
          <Card.Content style={{backgroundColor: '#0C090D'}}>
            {ticketsByEmployee.map((ticket) => (
              <Card style={{ marginTop: 10, marginBottom: 10 }}>
                <Card.Title
                  title={`Ticket numero: ${ticket.id}`}
                  subtitle={ticket.ticket_registration_date}
                />
                <Card.Content></Card.Content>
                <View style={styles.infoContainer}>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Estado:</Text>
                    <Text style={styles.infoValue}>Activo</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Total:</Text>
                    <Text style={[styles.infoValue, styles.green]}>
                      S/.{ticket.cost}
                    </Text>
                  </View>
                </View>
                <Paragraph style={styles.description}>
                  {ticket.description}
                </Paragraph>
              </Card>
            ))}
          </Card.Content>
        </Card>
      </View></>
      ):(
        <Text>No hay tickets activos</Text>
      )}
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

export default EmployeesHome;

import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import TicketsReducer from "../../context/Tickets/TicketsReducer";
import HomeContext from "../../context/home/HomeContext";
import AccountContext from "../../context/account/AccountContext";
import { Button, Card } from "react-native-paper";

const EmployeesHome = () => {
  const { ticketsByEmployee, getTicketByEmployee } = useContext(HomeContext);
  const { account } = useContext(AccountContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTicketByEmployee(account.id_employee);
    setIsLoading(false);
  }, [account]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>EmployeesHome</Text>
      <Text>{account.id}</Text>
      <Button mode="contained" onPress={() => console.log(ticketsByEmployee)}>
        c
      </Button>
      <View>
        <Card>
          <Card.Title title="Tickets" />
          <Card.Content>
            {ticketsByEmployee.map((ticket) => (
              <Card></Card>
            ))}
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default EmployeesHome;

import * as React from "react";
import { Text, View } from "react-native";
import EmployeesContext from "../../context/employees/EmployeesContext";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card } from "react-native-paper";
const EmployeeScreen = () => {
  const { selectedEmployee } = React.useContext(EmployeesContext);

  return (
    <ScrollView>
      {selectedEmployee ? (
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      ) : (
        <Text>No hay un usuario seleccionado</Text>
      )}
    </ScrollView>
  );
};

export default EmployeeScreen;

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import TicketsContext from "../../context/Tickets/TicketsContext";
import { useContext, useState, useEffect } from "react";
import { Button, Card, TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { getDataById } from "../../helpers/helpers";

const UpdateTicketScreen = () => {
  const {
    ticket,
    finishTicket,
    tickets,
    deleteTicket,
    getDataCreateTicket,
    dataCreateTicket,
  } = useContext(TicketsContext);
  const [loading, setLoading] = useState(true);
  const [ticketData, setTicketData] = useState({
    description: "",
    cost: 0,
    employees: [],
    tools: [],
    spare_parts: [],
  });
  const [data, setData] = useState({
    employees: [],
    tools: [],
    spare_parts: [],
  });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedSparePart, setSelectedSparePart] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await getDataCreateTicket();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (ticket) {
      setTicketData(ticket);
    }
  }, [ticket]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const buttonAddHandleClick = (type) => {
    switch (type) {
      case "employees":
        const s = getDataById(dataCreateTicket.employees, selectedEmployee);
        setData({ ...data, employees: [...data.employees, s] });
        console.log(s);
        break;
      case "spare_parts":
        const d = getDataById(dataCreateTicket.spare_parts, selectedSparePart);
        setData({
          ...data,
          spare_parts: [
            ...data.spare_parts,
            { id: d.id, name: d.name, quantity: quantity },
          ],
        });
        console.log(data);
        break;
      case "tools":
        const dT = getDataById(dataCreateTicket.tools, selectedTool);
        setData({ ...data, tools: [...data.tools, dT] });
        console.log(data);
        break;
      default:
        break;
    }
  };

  // Filtrar empleados para excluir los que ya están en ticket.employees
  const availableEmployees = dataCreateTicket.employees.filter(
    (employee) =>
      !ticket.employees.some(
        (ticketEmployee) => ticketEmployee.name === employee.names
      )
  );

  return (
    <ScrollView>
      <View>
        <Card>
          <Card.Title title={"Empleados"} subtitle={ticket.cost.toString()} />
          <Card.Content>
            {ticket.employees.map((employee, index) => (
              <Text key={index}>
                Empleado numero {index + 1}: {employee.name}
              </Text>
            ))}
            <Card>
              <Card.Title title={"Empleados agregados"} />
              <Card.Content style={{ height: 60 }}>
                <ScrollView>
                  {data.employees.map((employee, index) => (
                    <Text key={index}>
                      {index + 1}: {employee.names}
                    </Text>
                  ))}
                </ScrollView>
              </Card.Content>
            </Card>
          </Card.Content>

          <Card>
            <Card.Title title={"Repuestos"} />
            <Card.Content>
              {ticket.spare_parts.map((spare_part, index) => (
                <Text key={index}>
                  Repuesto numero {index + 1}: {spare_part.name}
                </Text>
              ))}
              <Card>
                <Card.Title title={"Repuestos agregados"} />
                <Card.Content>
                  {data.spare_parts.map((spare_part, index) => (
                    <Text key={index}>
                      {index + 1}: {spare_part.name}
                    </Text>
                  ))}
                </Card.Content>
              </Card>
            </Card.Content>
          </Card>
          <Card>
            <Card.Title title={"Herramientas"} />
            <Card.Content>
              {ticket.tools.map((tool, index) => (
                <Text key={index}>
                  Herramienta numero {index + 1}: {tool.name}
                </Text>
              ))}
              <Card>
                <Card.Title title={"Herramientas agregadas"} />
                <Card.Content>
                  {data.tools.map((tool, index) => (
                    <Text key={index}>
                      {index + 1}: {tool.name}
                    </Text>
                  ))}
                </Card.Content>
              </Card>
            </Card.Content>
          </Card>
        </Card>
      </View>
      <View>
        <View>
          <TextInput
            label={"Precio"}
            value={ticketData.cost.toString()}
            onChange={(e) =>
              setTicketData({ ...ticketData, cost: e.nativeEvent.text })
            }
            keyboardType="numeric"
          />
          <TextInput
            label="Description"
            value={ticketData.description}
            onChangeText={(text) =>
              setTicketData({ ...ticketData, description: text })
            }
            multiline={true}
            numberOfLines={4}
            style={{ height: 120, fontSize: 16 }}
          />
          <View style={styles.row}>
            <View style={styles.containerViewSelectInput}>
              <Picker
                selectedValue={selectedEmployee}
                onValueChange={(id) => setSelectedEmployee(id)}
              >
                {availableEmployees.map((employee, index) => (
                  <Picker.Item
                    key={index}
                    label={employee.names}
                    value={employee.id}
                  />
                ))}
              </Picker>
            </View>
            <Button
              mode="contained"
              onPress={() => buttonAddHandleClick("employees")}
            >
              Agregar
            </Button>
          </View>
          <View style={styles.row}>
            <View style={styles.containerViewSelectInput}>
              <Picker
                selectedValue={selectedTool}
                onValueChange={(id) => setSelectedTool(id)}
              >
                {dataCreateTicket.tools.map((tool, index) => (
                  <Picker.Item key={index} label={tool.name} value={tool.id} />
                ))}
              </Picker>
            </View>
            <Button
              mode="contained"
              onPress={() => buttonAddHandleClick("tools")}
            >
              Agregar
            </Button>
          </View>
          <View style={styles.row}>
            <View style={styles.containerViewSelectInput}>
              <Picker
                selectedValue={selectedSparePart}
                onValueChange={(id) => setSelectedSparePart(id)}
              >
                {dataCreateTicket.spare_parts.map((spare_part, index) => (
                  <Picker.Item
                    key={index}
                    label={spare_part.name}
                    value={spare_part.id}
                  />
                ))}
              </Picker>
            </View>
            <TextInput
              value={quantity}
              onChange={(e) => setQuantity(e.nativeEvent.text)}
            />
            <Button
              mode="contained"
              onPress={() => buttonAddHandleClick("spare_parts")}
            >
              Agregar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containerViewSelectInput: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  selectInput: {
    flex: 1,
  },
  button: {
    marginLeft: 5,
  },
});
export default UpdateTicketScreen;

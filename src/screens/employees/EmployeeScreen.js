import * as React from "react";
import { View } from "react-native";
import EmployeesContext from "../../context/employees/EmployeesContext";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContentE = (props) => <Avatar.Icon icon="account" {...props} />;
const LeftContentT = (props) => <Avatar.Icon icon="folder" {...props} />;
const LeftContentTo = (props) => <Avatar.Icon icon="toolbox" {...props} />;
const LeftContentS = (props) => <Avatar.Icon icon="cog-outline" {...props} />;
const EmployeeScreen = () => {
  const { selectedEmployee } = React.useContext(EmployeesContext);

  return (
    <ScrollView>
      {selectedEmployee ? (
        <Card mode="contained" style={{ marginTop: 10, marginBottom: 10 }}>
          <Card.Title
            title={selectedEmployee.employee.names}
            subtitle={selectedEmployee.employee.phone}
            left={LeftContentE}
          />
          <Card.Content>
            {selectedEmployee.tickets.map((ticket) => (
              <>
                <Card
                  mode="outlined"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  <Card.Title
                    title={`Ticket: ${ticket.id}`}
                    left={LeftContentT}
                  />
                  <Card.Content>
                    <Text>Fecha de Creacion: {ticket.fecha_creacion}</Text>
                    <Text>Estado: {ticket.status}</Text>
                    <Text>Costo: {ticket.cost}</Text>
                    <Card mode="elevated" style={{ marginTop: 10 }}>
                      <Card.Title title="Repuestos" left={LeftContentS} />
                      <Card.Content>
                        {ticket.spare_parts.map((spare_part) => (
                          <>
                            <Text>
                              {spare_part.name + " " + spare_part.quantity}
                            </Text>
                          </>
                        ))}
                      </Card.Content>
                    </Card>
                    <Card mode="elevated" style={{ marginTop: 10 }}>
                      <Card.Title title="Herramientas" left={LeftContentTo} />
                      <Card.Content>
                        {ticket.tools.map((tool) => (
                          <>
                            <Text>{tool.name}</Text>
                          </>
                        ))}
                      </Card.Content>
                    </Card>
                  </Card.Content>
                </Card>
              </>
            ))}
          </Card.Content>
        </Card>
      ) : (
        <Text>No hay un usuario seleccionado</Text>
      )}
    </ScrollView>
  );
};

export default EmployeeScreen;

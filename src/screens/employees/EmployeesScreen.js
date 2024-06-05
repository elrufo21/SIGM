import * as React from "react";

import EmployeesContext from "../../context/employees/EmployeesContext";
import CustomDataTable from "../../components/CustomDataTable";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  PaperProvider,
  Portal,
  Searchbar,
  Text,
} from "react-native-paper";
import { Dimensions, FlatList, View, StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ModalForm from "../../components/ModalForm";
import CreateEmployeScreen from "./CreateEmployeeScreen";
import ModalCreateEmployee from "../../components/ModalEmployeeScreen";
import ModalUpdateEmployee from "./ModalUpdateEmployee";
const EmployeesScreen = ({ navigation }) => {
  const {
    getEmployees,
    employees,
    getProfile,
    deleteEmployee,
    createEmployee,
    selectedEmployee,
    updateEmployee,
  } = React.useContext(EmployeesContext);
  React.useEffect(() => {
    getEmployees();
  }, []);
  const [visible, setVisible] = React.useState(false);
  const [visibleUpdate, setVisibleUpdate] = React.useState(false);

  const showModalUpdate = () => setVisibleUpdate(true);
  const hideModalUpdate = () => setVisibleUpdate(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleEditEmployee = async (id) => {
    await getProfile(id);
    showModalUpdate();
  };
  const handleDeleteEmployee = (id) => {
    Alert.alert(
      "Alerta",
      "¿Estás seguro de eliminar al empleado?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => deleteEmployee(id),
          style: "default",
        },
      ],
      { cancelable: false }
    );
  };
  const handleViewEmployee = async (id) => {
    await getProfile(id);
    navigation.navigate("Empleado");
  };

  return (
    <View style={{ alignItems: "center", flexGrow: 1 }}>
      <Portal>
        <ModalUpdateEmployee
          visible={visibleUpdate}
          hideModal={hideModalUpdate}
          employee={selectedEmployee}
          updateEmployee={updateEmployee}
        />
      </Portal>

      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("window").width - 100,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Button style={{ marginTop: 30 }} onPress={showModal}>
            Crear empleado
          </Button>
          <ScrollView>
            {employees.map((employee) => (
              <Card
                key={employee.id}
                mode="contained"
                style={{
                  marginTop: 5,
                  marginBottom: 5,
                  width: 380,
                  borderColor: employee.status == "1" ? "green" : "yellow",
                  
                  borderWidth: 2,
                }}
              >
                <Card.Title
                  title={employee.names + " " + employee.surnames}
                  subtitle={employee.phone}
                  left={(props) => <Avatar.Icon icon="account" {...props} />}
                  right={(props) => (
                    <View style={styles.buttonContainer}>
                      <IconButton
                        icon="delete"
                        size={20}
                        onPress={() => handleDeleteEmployee(employee.id)}
                        style={styles.button}
                      />
                      <IconButton
                        icon="eye"
                        size={20}
                        onPress={() => handleViewEmployee(employee.id)}
                        style={styles.button}
                      />
                      <IconButton
                        icon="database-edit"
                        size={20}
                        onPress={() => handleEditEmployee(employee.id)}
                        style={styles.button}
                      />
                    </View>
                  )}
                />
              </Card>
            ))}
          </ScrollView>
        </View>
      </View>

      <Portal>
        <ModalCreateEmployee
          visible={visible}
          hideModal={hideModal}
          handleCreate={createEmployee}
        />
      </Portal>
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
  },
  card: {
    marginTop: 10,
    marginBottom: 10,
    width: 380,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 4,
  },
});
export default EmployeesScreen;

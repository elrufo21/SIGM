import * as React from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { DataTable } from "react-native-paper";
import { Provider as PaperProvider, Dialog, Portal } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";


const EmployeesScreen = ({ navigation }) => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([4, 8, 12]);
  const [itemsPerPage, setItemsPerPage] = React.useState(
    numberOfItemsPerPageList[0]
  );
  const getEmployeeById = (id) => {
    return items.find((employee) => employee.id === id);
  };
  const onItemsPerPageChange = (value) => setItemsPerPage(value);

  const [items,SetItems] = React.useState([
    {
      id: 1,
      names: "Ruben",
      surnames: "Vasquez",
      rol: "Developer",
      phone: "987292296",
      status: "0",
    },
    {
      id: 2,
      names: "Dario",
      surnames: "Porras",
      rol: "Tester",
      phone: "987292297",
      status: "1",
    },
    {
      id: 3,
      names: "Russ",
      surnames: "Paucar",
      rol: "UX/UI",
      phone: "987292298",
      status: "1",
    },
    {
      id: 4,
      names: "Mery",
      surnames: "Benites",
      rol: "Developer",
      phone: "987292296",
      status: "0",
    },
    {
      id: 5,
      names: "Jose",
      surnames: "Grimaldo",
      rol: "Mecanico",
      phone: "987212296",
      status: "1",
    },
    {
      id: 7,
      names: "Test",
      surnames: "testing",
      rol: "Mecanico",
      phone: "987292296",
      status: "0",
    },
    {
      id: 7,
      names: "Pedro",
      surnames: "Castillo",
      rol: "Practicante",
      phone: "123456789",
      status: "1",
    },
  ]);
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  const handleEditEmployee = (id) => {
    setVisible(true);
  };
  const handleDeleteEmployee = (id) => {
    const updatedItems = items.filter((employee) => employee.id !== id);
    SetItems(updatedItems);
  };
  const handleViewEmployee = (id) => {
    if (id !== null) {
      const employee = getEmployeeById(id);
      if (employee) {
        navigation.navigate("Empleado", { employee });
      } else {
        console.log("Empleado no encontrado");
      }
    } else {
      console.log("ID de empleado no proporcionado");
    }
  };

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <PaperProvider>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Rol</DataTable.Title>

          <DataTable.Title>Accion</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.names + " " + item.surnames}</DataTable.Cell>
            <DataTable.Cell>{item.rol}</DataTable.Cell>

            <DataTable.Cell>
              {" "}
              <Pressable onPress={() => handleEditEmployee(item.id)}>
                <Ionicons name="refresh" size={24} color="#2196f3" />
              </Pressable>
              <Pressable onPress={() => handleDeleteEmployee(item.id)}>
                <Ionicons name="trash" size={24} color="red" />
              </Pressable>
              <Pressable onPress={() => handleViewEmployee(item.id)}>
                <Ionicons name="eye" size={24} color="green" />
              </Pressable>
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
    </PaperProvider>
  );
};
export default EmployeesScreen;

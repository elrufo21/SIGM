import React, { useContext, useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import {
  ActivityIndicator,
  Button,
  MD2Colors,
  TextInput,
} from "react-native-paper";
import FormComponent from "../../components/FormComponent";
import TicketsContext from "../../context/Tickets/TicketsContext";
import CustomSimpleDataTable from "../../components/CustomSimpleDataTable";
import { Picker } from "@react-native-picker/picker";
import { getDataById } from "../../helpers/helpers";

const CreateTicket = () => {
  const { dataCreateTicket, getDataCreateTicket, createTicket } = useContext(TicketsContext);
  const [formFields, setFormFields] = useState([
    { name: "title", label: "Title", value: "", type: "text" },
    { name: "description", label: "Description", value: "", type: "text" },
  ]);
  const [ticketData, setTicketData] = useState({
    description: "",
    employees: [],
    tools: [],
    spare_parts: [],
  });
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [employeeSelect, setEmployeeSelect] = useState(0);
  const [toolSelect, setToolSelect] = useState(0);
  const [sparePartSelect, setSparePartSelect] = useState(0);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getDataCreateTicket();
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleemChamge = (value) => {
    console.log(value);
    setEmployeeSelect(value);
  };

  useEffect(() => {
    if (dataCreateTicket) {
      const fieldsToAdd = [];

      if (dataCreateTicket.employees) {
        const employeeFieldExists = formFields.some(
          (field) => field.name === "employee"
        );
        if (!employeeFieldExists) {
          fieldsToAdd.push({
            name: "employee",
            label: "Employee",
            value: employeeSelect,
            type: "select",
            options: dataCreateTicket.employees.map((employee) => ({
              label: `${employee.names} ${employee.surnames}`,
              value: employee.id,
            })),
            valueSelectInput: employeeSelect,
            setValueSelectInput: (id) => handleemChamge(id),
          });
        }
      }

      if (dataCreateTicket.tools) {
        const toolsFieldExists = formFields.some(
          (field) => field.name === "tools"
        );
        if (!toolsFieldExists) {
          fieldsToAdd.push({
            name: "tools",
            label: "Tools",
            value: "",
            type: "select",
            options: dataCreateTicket.tools.map((tool) => ({
              label: tool.name,
              value: tool.id,
            })),
          });
        }
      }

      if (dataCreateTicket.spare_parts) {
        const sparePartsFieldExists = formFields.some(
          (field) => field.name === "spare_parts"
        );
        if (!sparePartsFieldExists) {
          fieldsToAdd.push({
            name: "spare_parts",
            label: "Spare Parts",
            value: "",
            type: "select",
            options: dataCreateTicket.spare_parts.map((part) => ({
              label: part.name,
              value: part.id,
            })),
            quantity: true,
          });
        }
      }

      if (fieldsToAdd.length > 0) {
        setFormFields((prevFields) => [...prevFields, ...fieldsToAdd]);
      }
    }
  }, [dataCreateTicket]);

  const handleInputChange = (name, value) => {
    setFormFields((prevFields) =>
      prevFields.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  const buttonHandleClick = () => {
    
    const d = {...ticketData,status:"a"}
    console.log(d)
    createTicket(d);
  };

  if (loading) {
    return (
      <ActivityIndicator
        animating={true}
        color={MD2Colors.red800}
        size={"large"}
      />
    );
  }
  /*const tableData = [
    ["1", "2", "3",""],
    ["a", "b", "c",""],
    ["1", "2", "3",""],
    ["a", "b", "c",""],
  ];*/

  const buttonAddHandleClick = (type) => {
    switch (type) {
      case "employees":
        const d = getDataById(dataCreateTicket.employees, employeeSelect);
        setTicketData((prevData) => ({
          ...prevData,
          employees: [...prevData.employees, d.id],
        }));
        setTableData((prevData) => [
          ...prevData,
          [d.id, d.names + " " + d.surnames, "", ""],
        ]);
        console.log(ticketData);
        break;
      case "tools":
        const dT = getDataById(dataCreateTicket.tools, toolSelect);
        setTicketData((prevData) => ({
          ...prevData,
          tools: [...prevData.tools, dT.id],
        }));
        setTableData((prevData) => [...prevData, [dT.id, dT.name, "", ""]]);
        break;
      case "spareParts":
        const dS = getDataById(dataCreateTicket.spare_parts, sparePartSelect);
        

        setTicketData((prevData) => ({
          ...prevData,
          spare_parts: [...prevData.spare_parts, { id: dS.id, quantity }],
        }));
        setTableData((prevData) => [
          ...prevData,
          [dS.id, dS.name, quantity, ""],
        ]);

        console.log(quantity);
        break;

      default:
        break;
    }
  };

  return (
    <ScrollView>
      <Text>Crear ticket</Text>
      <View>
        <TextInput
          label="Description"
          value={ticketData.description}
          onChangeText={(text) =>
            setTicketData({ ...ticketData, description: text })
          }
          multiline={true}
          numberOfLines={4} // Ajusta el número de líneas visibles
          style={{ height: 120, fontSize: 16 }}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.containerViewSelectInput}>
          <Picker
            onValueChange={(value) => setEmployeeSelect(value)}
            selectedValue={employeeSelect}
          >
            <Picker.Item label="Empleado" value="0" />
            {dataCreateTicket.employees.map((employee) => (
              <Picker.Item
                key={employee.id}
                label={`${employee.names} ${employee.surnames}`}
                value={employee.id}
              />
            ))}
          </Picker>
        </View>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => buttonAddHandleClick("employees")}
        >
          Agregar
        </Button>
      </View>
      <View style={styles.row}>
        <View style={styles.containerViewSelectInput}>
          <Picker
            onValueChange={(value) => setSparePartSelect(value)}
            selectedValue={sparePartSelect}
          >
            <Picker.Item label="Repuestos" value="0" />
            {dataCreateTicket.spare_parts.map((sparePart) => (
              <Picker.Item
                key={sparePart.id}
                label={sparePart.name}
                value={sparePart.id}
              />
            ))}
          </Picker>
        </View>
        <TextInput
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => buttonAddHandleClick("spareParts")}
        >
          Agregar
        </Button>
      </View>
      <View style={styles.row}>
        <View style={styles.containerViewSelectInput}>
          <Picker
            onValueChange={(value) => setToolSelect(value)}
            selectedValue={toolSelect}
          >
            <Picker.Item label="Herramientas" value="0" />
            {dataCreateTicket.tools.map((tool) => (
              <Picker.Item key={tool.id} label={tool.name} value={tool.id} />
            ))}
          </Picker>
        </View>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => buttonAddHandleClick("tools")}
        >
          Agregar
        </Button>
      </View>
      <ScrollView style={{ height: 200 }}>
        <CustomSimpleDataTable tableData={tableData} />
      </ScrollView>
      <Button mode="contained" onPress={(type) => buttonHandleClick(type)}>
        Crear
      </Button>
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

export default CreateTicket;

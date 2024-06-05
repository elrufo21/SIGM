import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  Card,
  TextInput,
} from "react-native-paper";

const ModalUpdateEmployee = ({
  visible,
  hideModal,
  employee,
  updateEmployee,
}) => {
  useEffect(() => {
    if (employee!==null) {
      setData({
        id: employee.employee.id,
        names: employee.employee.names,
        surnames: employee.employee.surnames,
        phone: employee.employee.phone,
        rol: employee.employee.rol,
        status: employee.employee.status,
      });
    }
    console.log(employee);
  }, [employee]);
  const [data, setData] = useState({
    id:"",
    names: "",
    surnames: "",
    phone: "",
    rol: "",
    status: "",
  });
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  };

  const handleClick = () => {
    Alert.alert(
      "Alerta",
      "¿Estás seguro de actualizar la información del empleado?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Si",
          onPress: () => {
            updateEmployee(data.id, data);
            hideModal();
          },
          style: "default",
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}
    >
      <View style={{ width: Dimensions.get("window").width - 100 }}>
        <Card>
          <Card.Title title="Actualizar Empleado"
          left={props => <Button icon="circle-edit-outline" />} />
          <Card.Content>
            <TextInput
              label="Nombre"
              mode="outlined"
              value={data.names}
              onChangeText={(text) => setData({ ...data, names: text })}
            />
            <TextInput
              label="Apellidos"
              mode="outlined"
              value={data.surnames}
              onChangeText={(text) => setData({ ...data, surnames: text })}
            />
            <TextInput
              label="Telefono"
              inputMode="numeric"
              mode="outlined"
              value={data.phone}
              onChangeText={(text) => setData({ ...data, phone: text })}
            />
            <Picker
              onValueChange={(value) => setData({ ...data, rol: value })}
              selectedValue={data.rol}
            >
              <Picker.Item label="Mecanico" value="Mecanico" />
              <Picker.Item label="Practicante" value="Practicante" />
              <Picker.Item label="Limpieza" value="Limpieza" />
            </Picker>
         
          </Card.Content>
          <Card.Actions>
            <Button onPress={hideModal}>
              <Text>Cancelar</Text>
            </Button>
            <Button onPress={() => handleClick()}>
              <Text>Actualizar</Text>
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </Modal>
  );
};

export default ModalUpdateEmployee;

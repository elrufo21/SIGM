import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
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

const ModalCreateEmployee = ({ visible, hideModal, handleCreate }) => {
  const [data, setData] = useState({
    names: "",
    surnames: "",
    phone: "",
    rol: "mecanico",
    status: "1",
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
      "¿Estás seguro de crear al empleado?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Si",
          onPress: () => {
            handleCreate(data);
            setData({
              names: "",
              surnames: "",
              phone: "",
              rol: "mecanico",
              status: "1",
            });
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
          <Card.Title title="Crear Empleado" />
          <Card.Content>
            <TextInput
              label="Nombre"
              mode="outlined"
              value={data.name}
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
              <Text>Crear</Text>
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </Modal>
  );
};

export default ModalCreateEmployee;

import { useState } from "react";
import { Text, StyleSheet, View, Dimensions, Alert } from "react-native";

import { Button, Card, Modal, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const CreateToolScreen = ({ visible, hideModal, createTool }) => {
  const [data, setData] = useState({status:"D"});

  const handleCreate = () => {
    Alert.alert(
      "Alerta",
      "¿Estás seguro de crear repuesto?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Si",
          onPress: () => {
            const newData = { ...data };
            newData.price = parseFloat(data.price);
            console.log(newData);
            createTool(newData);
            setData({});
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
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: Dimensions.get("window").width - 100,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: Dimensions.get("window").width - 100 }}>
          <Card.Title title="Crear Herramienta" />
          <Card.Content>
            <TextInput
              mode="outlined"
              label="Nombre"
              value={data.name}
              onChangeText={(text) => setData({ ...data, name: text })}
            />
            <Picker
              onValueChange={(value) => setData({ ...data, type: value })}
              selectedValue={data.type}
            >
              <Picker.Item
                label="Herramientas Manuales"
                value="Herramientas Manuales"
              />
              <Picker.Item
                label="Herramientas de Medición"
                value="Herramientas de Medición"
              />
              <Picker.Item label=" Corte y Desbaste" value="Corte y Desbaste" />
              <Picker.Item
                label="Herramientas de Sujeción"
                value="Herramientas de Sujeción"
              />
              <Picker.Item
                label="Equipos y Máquinas"
                value="Equipos y Máquinas"
              />
              <Picker.Item
                label="Soldadura y Corte"
                value="Soldadura y Corte"
              />
              <Picker.Item
                label="Electricidad y Electronica"
                value="Electricidad  y Electronica"
              />
              <Picker.Item label="Otros" value="Otros" />
            </Picker>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput
                label="Precio"
                mode="outlined"
                value={data.price}
                onChangeText={(text) => setData({ ...data, price: text })}
                keyboardType="numeric"
                style={{ flex: 1, marginRight: 5 }}
              />
              <TextInput
                label="Ubicacion"
                mode="outlined"
                value={data.location}
                onChangeText={(text) => setData({ ...data, location: text })}
                style={{ flex: 1, marginLeft: 5 }}
              />
            </View>
            <TextInput
              label="Descripcion"
              mode="outlined"
              value={data.description}
              onChangeText={(text) => setData({ ...data, description: text })}
              multiline
              numberOfLines={6}
            />
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={hideModal}>
              Cancelar
            </Button>
            <Button mode="contained" onPress={handleCreate}>
              Crear
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </Modal>
  );
};

export default CreateToolScreen;

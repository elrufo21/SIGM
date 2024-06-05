import { Text, StyleSheet, View, Dimensions, Alert } from "react-native";
import FormComponent from "../../components/FormComponent";
import { useContext, useState } from "react";
import SparePartsContext from "../../context/SpareParts/SparePartsContext";
import {
  Button,
  Card,
  IconButton,
  MD3Colors,
  Modal,
  TextInput,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const CreateSparePartScreen = ({ visible, hideModal, handleCreate }) => {
  const [data, setData] = useState({});

  const handleClick = () => {
    const newData = data;
    newData.price = parseFloat(data.price);
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
            handleCreate(newData);
            setData({
              name: "",
              location: "",
              price: "",
              type: "",
              description: "",
              stock: "",
            });
            console.log(newData);
            hideModal();
          },
          style: "default",
        },
      ],
      { cancelable: false }
    );
  };

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}
    >
      <View style={{ width: Dimensions.get("window").width - 100 }}>
        <Card.Title
          title="Registrar nuevo repuesto"
          subtitle="Complete todos los campos"
          left={(props) => (
            <IconButton
              icon="toolbox"
              iconColor={MD3Colors.primary50}
              size={24}
              onPress={() => console.log("Pressed")}
            />
          )}
        />
        <Card.Content>
          <TextInput
            label="Nombre"
            value={data.name}
            onChangeText={(text) => setData({ ...data, name: text })}
            mode="outlined"
          />
          <TextInput
            label="Ubicacion"
            value={data.location}
            onChangeText={(text) => setData({ ...data, location: text })}
            mode="outlined"
          />
          <Picker
            selectedValue={data.type}
            onValueChange={(value) => setData({ ...data, type: value })}
          >
            <Picker.Item label="Filtros" value="Filtros" />
            <Picker.Item
              label="Aceites y Lubricantes"
              value="Aceites y Lubricantes"
            />
            <Picker.Item label="Frenos" value="Frenos" />
            <Picker.Item
              label="Sistema de Suspensión"
              value="Sistema de Suspensión "
            />
            <Picker.Item label="Sistema de Escape" value="Sistema de Escape" />
            <Picker.Item
              label="Sistema de Enfriamiento"
              value="Sistema de Enfriamiento"
            />
            <Picker.Item label="Sistema Eléctrico" value="Sistema Eléctrico" />
            <Picker.Item
              label="Componentes del Motor"
              value="Componentes del Motor"
            />
            <Picker.Item
              label="Transmisión y Embrague"
              value="Transmisión y Embrague"
            />
            <Picker.Item
              label="Carrocería y Accesorios"
              value="Carrocería y Accesorios"
            />
            <Picker.Item
              label="Neumáticos y Ruedas"
              value="Neumáticos y Ruedas"
            />
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
              label="Stock"
              mode="outlined"
              value={data.stock}
              onChangeText={(text) => setData({ ...data, stock: text })}
              keyboardType="numeric"
              style={{ flex: 1, marginLeft: 5 }}
            />
          </View>

          <TextInput
            label="Descripcion"
            mode="outlined"
            multiline
            value={data.description}
            onChangeText={(text) => setData({ ...data, description: text })}
            keyboardType="default"
            numberOfLines={5}
          />
        </Card.Content>
        <Card.Actions>
          <Button
            onPress={() => {
              handleClick();
            }}
          >
            Crear
          </Button>
        </Card.Actions>
      </View>
    </Modal>
  );
};

export default CreateSparePartScreen;

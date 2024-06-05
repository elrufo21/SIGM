import { Picker } from "@react-native-picker/picker";
import * as React from "react";
import { Dimensions, View } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  PaperProvider,
  Card,
  TextInput,
} from "react-native-paper";

const ModalForm = ({ visible, hideModal }) => {
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  };
  const fieldModal = {
    inputs: [
      { label: "Nombre", placeholder: "Placeholder", mode: "outlined" },
      { label: "Apellidos", placeholder: "Apellidos", mode: "outlined" },
      { label: "DNI", placeholder: "DNI", mode: "outlined" },
      {
        label: "Rol",
        placeholder: "Rol",
        mode: "outlined",
        select: true,
        fields: [
          { value: "Mecanico", label: "Mecanico" },
          {
            value: "Supervisor",
            label: "Supervisor",
          },
        ],
      },
    ],
    title: "Crear Empleado",
    cardTitle: "Formulario",
    buttons: [
      <Button onPress={hideModal}>Cancelar</Button>,
      <Button onPress={hideModal}>Crear</Button>,
    ],
  };

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}
    >
      <View style={{ width: Dimensions.get("window").width - 100 }}>
        <Card>
          <Card.Title title={fieldModal.cardTitle} />
          <Card.Content>
            {fieldModal.inputs.map(
              ({ label, placeholder, mode, select, fields, index }) => (
                <>
                  {select === true ? (
                    <Picker >
                      {fields.map((field) => (
                        <Picker.Item
                          key={field.value}
                          label={field.label}
                          value={field.value}
                        />
                      ))}
                    </Picker>
                  ) : (
                    <TextInput
                      key={index}
                      label={label}
                      placeholder={placeholder}
                      mode={mode}
                      onChangeText={(text) => onchange(text)}
                      
                    />
                  )}
                </>
              )
            )}
          </Card.Content>
          <Card.Actions>
            {fieldModal.buttons.map((button) => button)}
          </Card.Actions>
        </Card>
      </View>
    </Modal>
  );
};

export default ModalForm;

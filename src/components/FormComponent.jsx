import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import SelectInput from "./SelectImput"; // Corregir el nombre del archivo de importación

const FormComponent = ({ fields, buttonSelect }) => {
  return (
    <View style={styles.container}>
      {fields.map(
        ({
          label,
          value,
          setValue,
          name,
          type,
          options,
          valueSelectInput,
          setValueSelectInput,
          handleClickSelect,
          quantity,
        }) => {
          return type === "select" ? (
            buttonSelect ? (
              <View style={styles.row}>
                <SelectInput
                  options={options}
                  state={valueSelectInput}
                  setState={setValueSelectInput}
                />
                {quantity ? <TextInput /> : null}
                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={handleClickSelect}
                >
                  Agregar
                </Button>
              </View>
            ) : (
              <View style={{ marginBottom: 10, marginTop: 10 }}>
                <SelectInput
                  options={options}
                  state={valueSelectInput}
                  setState={setValueSelectInput}
                />
              </View>
            )
          ) : type === "description" ? (
            <View style={{ marginBottom: 10, marginTop: 10 }}>
              <TextInput
                label={label}
                value={value}
                onChangeText={setValue}
                key={name}
                multiline={true}
                numberOfLines={4} // Ajusta el número de líneas visibles
                style={{ height: 120, fontSize: 13,borderRadius: 20 }} // Personaliza el tamaño del TextInput
                mode="outlined"
              />
            </View>
          ) : (
            <View style={{ marginBottom: 10, marginTop: 10 }}>
              <TextInput
                label={label}
                mode="outlined"
                value={value}
                onChangeText={setValue}
                key={name}
                keyboardType={type}
                style={{ fontSize: 15,borderRadius: 20 }}
                
              />
            </View>
          );
        }
      )}
    </View>
  );
};
const styles = StyleSheet.create({
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

export default FormComponent;


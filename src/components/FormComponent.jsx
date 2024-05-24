import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import SelectInput from "./SelectImput"; // Corregir el nombre del archivo de importación

const FormComponent = ({ fields, buttonSelect }) => {
  return (
    <View>
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
              <SelectInput
                options={options}
                state={valueSelectInput}
                setState={setValueSelectInput}
              />
            )
          ) : type === "description" ? (
            <TextInput
              label={label}
              value={value}
              onChangeText={setValue}
              key={name}
              multiline={true}
              numberOfLines={4} // Ajusta el número de líneas visibles
              style={{ height: 120, fontSize: 16 }} // Personaliza el tamaño del TextInput
            />
          ) : (
            <TextInput
              label={label}
              value={value}
              onChangeText={setValue}
              key={name}
              keyboardType={type}
            />
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

import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import SelectInput from './SelectImput'; // Corregir el nombre del archivo de importación

const FormComponent = ({ fields }) => {
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
        }) => {
          return type === 'select' ? (
            <SelectInput
              options={options}
              state={valueSelectInput}
              setState={setValueSelectInput}
            />
          ) : type === 'description' ? (
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
}

export default FormComponent;
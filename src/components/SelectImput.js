import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';

const SelectInput = ({ options, state, setState }) => {
  return (
    <View style={styles.container}>
      <Picker onValueChange={(value) => setState(value)} selectedValue={state}>
        {options.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default SelectInput;

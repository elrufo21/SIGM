import { View } from "react-native";
import { TextInput } from "react-native-paper";
import SelectInput from "./SelectImput";

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
          valueSelectImput,
          setValueSelectInput,
        }) => {
          return type === "select" ? (
            <SelectInput
              options={options}
              state={valueSelectImput}
              setState={setValueSelectInput}
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

export default FormComponent;

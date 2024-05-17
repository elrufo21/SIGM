import { Picker } from "@react-native-picker/picker"

const SelectInput = ({options,state,setState}) => {
    return(
        <Picker onValueChange={(value) => setState(value)} selectedValue={state}>
            {
                options.map((option) => {
                    return <Picker.Item key={option.value} label={option.label} value={option.value} />
                })
            }
        </Picker>
    )
}

export default SelectInput
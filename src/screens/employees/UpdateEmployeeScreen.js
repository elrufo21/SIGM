import { Text, View } from "react-native"
import { Button, TextInput } from "react-native-paper"


const UpdateEmployeeScreen=({route})=>{
    if (!route.params || !route.params.employee || !route.params.SetItems) {
        return (
          <View>
            <Text>Seleccione un empleado.</Text>
          </View>
        );
      }
    const {employee,SetItems,items} = route.params;
   
   
    return(
        <View>
            <Text>Actualizar empleado</Text>
            <TextInput
            value={employee.names}
            />
            <TextInput
            value={employee.surnames}
            />
            <TextInput
            value={employee.rol}
            />
            <TextInput
            value={employee.phone}
            />
            <TextInput
            value={employee.status}
            />
           
            <Button mode="contained" onPress={() => SetItems([])}>
                Actualizar
            </Button>




        </View>
    )
}


export default UpdateEmployeeScreen
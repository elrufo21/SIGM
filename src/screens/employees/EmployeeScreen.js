import * as React from 'react';
import { Text, View } from 'react-native';
const EmployeeScreen = ({ route }) => {
    const data = route.params;


    if (!data || !data.employee) {
        return (
            <View>
                <Text>No se encontraron datos de empleado.</Text>
            </View>
        );
    }


    return (
        <View>
            <Text>{data.employee.names}</Text>
            <Text>{data.employee.surnames}</Text>
            <Text>{data.employee.rol}</Text>
            <Text>{data.employee.phone}</Text>
            <Text>{data.employee.status}</Text>
        </View>
    );
}


export default EmployeeScreen;
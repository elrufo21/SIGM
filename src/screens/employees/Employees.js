import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeesScreen from "./EmployeesScreen";
import CreateEmployeScreen from "./CreateEmployeeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EmployeeScreen from "./EmployeeScreen";
import UpdateEmployeeScreen from "./UpdateEmployeeScreen";
import EmployeesState from "../../context/employees/EmployeesState";

const Tab = createBottomTabNavigator();
const Employees = () => {
  return (
    <EmployeesState>
      <Tab.Navigator
        initialRouteName="Lista"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Lista" component={EmployeesScreen} />
        <Tab.Screen name="Crear" component={CreateEmployeScreen} />
        <Tab.Screen name="Empleado" component={EmployeeScreen} />
        <Tab.Screen name="Actualizar" component={UpdateEmployeeScreen} />
      </Tab.Navigator>
    </EmployeesState>
  );
};
export default Employees;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeesScreen from "./EmployeesScreen";
import CreateEmployeScreen from "./CreateEmployeeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EmployeeScreen from "./EmployeeScreen";

const Tab = createBottomTabNavigator();
const Employees = () => {
  return (
    <Tab.Navigator initialRouteName="Lista" screenOptions={{ headerShown: false }}  >
      <Tab.Screen  name="Lista" component={EmployeesScreen} />
      <Tab.Screen name="Crear" component={CreateEmployeScreen} />
      <Tab.Screen name="Empleado" component={EmployeeScreen} />
    </Tab.Navigator>
  );
};
export default Employees;

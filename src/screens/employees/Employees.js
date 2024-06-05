import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeesScreen from "./EmployeesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EmployeeScreen from "./EmployeeScreen";
import UpdateEmployeeScreen from "./UpdateEmployeeScreen";
import EmployeesState from "../../context/employees/EmployeesState";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Employees = () => {
  return (
    <EmployeesState>
      <Tab.Navigator
        initialRouteName="Lista"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Lista"
          component={EmployeesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Empleado"
          component={EmployeeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="user" size={size} color={color} />
            ),
          }}
        />
     
      </Tab.Navigator>
    </EmployeesState>
  );
};
export default Employees;

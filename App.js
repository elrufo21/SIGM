import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "./src/screens/home/HomeScreen";
import EmployeesScreen from "./src/screens/employees/EmployeesScreen";
import { Ionicons } from "@expo/vector-icons";
import EmployeeScreen from "./src/screens/employees/EmployeeScreen";
import HolaMundo from "./src/screens/home/HolaMundo";
import Employees from "./src/screens/employees/Employees";
import NavigationApp from "./src/Navigation/NavigationApp";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>

       <NavigationApp />

    </NavigationContainer>
  );
}

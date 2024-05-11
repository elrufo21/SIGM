import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SparePartsScreen from "./SparePartsScreen";
import CreateSparePartScreen from "./CreateSparePartScreen";
import SparePartScreen from "./SparePartScreen";
import UpdateSparePartScreen from "./UpdateSparePartScreen";

const Tab = createBottomTabNavigator();
const SpareParts = () => {
  return (
    <Tab.Navigator
      initialRouteName="Lista"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Lista" component={SparePartsScreen} />
      <Tab.Screen name="Crear" component={CreateSparePartScreen} />
      <Tab.Screen name="Empleado" component={SparePartScreen} />
      <Tab.Screen name="Actualizar" component={UpdateSparePartScreen} />
    </Tab.Navigator>
  );
};

export default SpareParts;
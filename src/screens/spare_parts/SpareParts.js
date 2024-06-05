import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SparePartsScreen from "./SparePartsScreen";
import SparePartScreen from "./SparePartScreen";
import SparePartState from "../../context/SpareParts/SparePartsState";

const Tab = createBottomTabNavigator();
const SpareParts = () => {
  return (
    <SparePartState>
      <Tab.Navigator
        initialRouteName="Lista"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Lista" component={SparePartsScreen} />
      </Tab.Navigator>
    </SparePartState>
  );
};

export default SpareParts;

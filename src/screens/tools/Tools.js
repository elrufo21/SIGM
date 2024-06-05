import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ToolsScreen from "./ToolsScreen";
import ToolsState from "../../context/tools/ToolsState";

const Tab = createBottomTabNavigator();
const Tools = () => {
  return (
    <ToolsState>
      <Tab.Navigator>
        <Tab.Screen 
        name="Lista" 
        component={ToolsScreen} 
        
        />
      </Tab.Navigator>
    </ToolsState>
  );
};

export default Tools;

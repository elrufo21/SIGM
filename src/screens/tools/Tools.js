import { Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ToolsScreen from "./ToolsScreen"
import CreateToolScreen from "./CreateToolScreen"
import ToolScreen from "./ToolScreen"
import UpdateToolScreen from "./UpdateToolScreen"

const Tab = createBottomTabNavigator()
const Tools = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Lista" component={ToolsScreen} />
            <Tab.Screen name="Crear" component={CreateToolScreen} />
            <Tab.Screen name="Herramienta" component={ToolScreen} />
            <Tab.Screen name="Actualizar" component={UpdateToolScreen} />
        </Tab.Navigator>
    )
}

export default Tools
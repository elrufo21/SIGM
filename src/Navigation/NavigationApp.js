import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home/HomeScreen";
import Employees from "../screens/employees/Employees";

const Drawer = createDrawerNavigator();
const NavigationApp = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Employees" component={Employees} />
            
        </Drawer.Navigator>
    )
}
export default NavigationApp
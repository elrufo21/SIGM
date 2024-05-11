import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home/HomeScreen";
import Employees from "../screens/employees/Employees";
import SpareParts from "../screens/spare_parts/SpareParts";
import Tools from "../screens/tools/Tools";
import Tickets from "../screens/tickets/Tickets";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();
const NavigationApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerContent={props => <CustomDrawer {...props} />}
      
      screenOptions={{
        drawerActiveBackgroundColor: "#02182B",
        drawerActiveTintColor: "#ffffff",
        drawerInactiveTintColor: "#02182B",
        headerStyle: {
            backgroundColor: "#02182B",

        },
        headerTintColor: "#ffffff",
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Empleados" component={Employees} />
      <Drawer.Screen name="Repuestos" component={SpareParts} />
      <Drawer.Screen name="Herramientas" component={Tools} />
      <Drawer.Screen name="Tickets" component={Tickets} />
    </Drawer.Navigator>
  );
};
export default NavigationApp;

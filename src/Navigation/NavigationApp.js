import { createDrawerNavigator } from "@react-navigation/drawer";
import Employees from "../screens/employees/Employees";
import SpareParts from "../screens/spare_parts/SpareParts";
import Tools from "../screens/tools/Tools";
import Tickets from "../screens/tickets/Tickets";
import CustomDrawer from "./CustomDrawer";
import { useContext, useEffect } from "react";
import AccountContext from "../context/account/AccountContext";
import Home from "../screens/home/Home";

const Drawer = createDrawerNavigator();
const NavigationApp = ({ navigation }) => {
  const { account, isLogged } = useContext(AccountContext);
  useEffect(() => {
    !isLogged && navigation.replace("Login"); 
  }, [isLogged]);
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerContent={(props) => <CustomDrawer {...props} />}
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
      <Drawer.Screen name="Inicio" component={Home} />
      {account.role === "administrador" && (
        <>
          <Drawer.Screen name="Empleados" component={Employees} />
          <Drawer.Screen name="Repuestos" component={SpareParts} />
          <Drawer.Screen name="Herramientas" component={Tools} />
          <Drawer.Screen name="Tickets" component={Tickets} />
        </>
      )}
    </Drawer.Navigator>
  );
};
export default NavigationApp;

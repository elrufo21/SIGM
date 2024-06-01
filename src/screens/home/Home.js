import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import HomeState from "../../context/home/HomeState";
import EmployeesHome from "./EmployeesHome";
import { useContext } from "react";
import AccountContext from "../../context/account/AccountContext";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Home = () => {
  const {account} = useContext(AccountContext)
  return (
    <HomeState>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        {account.role === "administrador" && (
          <Tab.Screen name="Home" component={HomeScreen} />
        )}
        <Tab.Screen name="Perfil" options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}  component={EmployeesHome} />
      </Tab.Navigator>
    </HomeState>
  );
};

export default Home;

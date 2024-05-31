import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import HomeState from "../../context/home/HomeState";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeState>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </HomeState>
  );
};

export default Home;

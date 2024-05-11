import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";

import NavigationApp from "./src/Navigation/NavigationApp";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <NavigationApp />
      </SafeAreaView>
    </NavigationContainer>
  );
}

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NavigationApp from "./src/Navigation/NavigationApp";
import Login from "./src/screens/login/Login";
import NavApp from "./src/Navigation/NavApp";
import AccountState from "./src/context/account/AccountState";

export default function App() {

  return (
    <AccountState>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <NavApp />
        </SafeAreaView>
      </NavigationContainer>
    </AccountState>
  );
}

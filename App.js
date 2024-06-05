import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, ActivityIndicator, View } from "react-native";
import * as Permissions from "expo-permissions";
import NavApp from "./src/Navigation/NavApp";
import AccountState from "./src/context/account/AccountState";
import { Provider } from "react-native-paper";

export default function App() {
  return (
    <AccountState>
      <Provider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <NavApp />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </AccountState>
  );
}

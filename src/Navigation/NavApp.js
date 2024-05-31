import React, { useContext, useEffect, useState } from "react";
import Login from "../screens/login/Login";
import NavigationApp from "./NavigationApp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountContext from "../context/account/AccountContext";


const Stack = createNativeStackNavigator();

const NavApp = () => {
  const { isLogged } = useContext(AccountContext);
  
  return (
    
      <Stack.Navigator initialRouteName={isLogged ? "Main" : "Login"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={NavigationApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
 
  );
};

export default NavApp;

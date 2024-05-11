import React, { useState, useContext } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../Assets/img/background/bgProfile.jpg")}
        style={{ paddingTop: 50, paddingBottom: 30 }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{ borderColor: "#ffffff", borderWidth: 3, borderRadius: 83 }}
          >
            <Image
              source={require("../Assets/img/profile/profile.jpg")}
              style={{ width: 120, height: 120, borderRadius: 80 }}
            />
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center",paddingTop:10 }}>
            <Text style={{fontSize:17, color:"#fff", textAlign:"center"}}>Sistema Integral de Gestion de Mecanica</Text>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={{padding: 20, borderTopWidth:1, borderTopColor:"#cccccc"}}>
        <View style={{flexDirection:"row",alignItems:"center",paddingVertical:15}}>
            <Ionicons name="log-out-outline" size={24} color="black" />
            <Text>Salir</Text>
        </View>
      </View>
    </View>
  );
};
export default CustomDrawer;

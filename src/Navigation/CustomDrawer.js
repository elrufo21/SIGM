import React, { useContext } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import AccountContext from "../context/account/AccountContext";

const CustomDrawer = (props) => {
  const { account, logout } = useContext(AccountContext);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../Assets/img/background/bgProfile.jpg")}
        style={{ paddingTop: 50, paddingBottom: 30 }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              borderColor: "#ffffff",
              borderWidth: 3,
              borderRadius: 83,
              padding: 5,
            }}
          >
            <Image
              source={require("../Assets/img/profile/profile.jpg")}
              style={{ width: 120, height: 120, borderRadius: 60 }}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Text style={{ fontSize: 17, color: "#fff", textAlign: "center" }}>
            Sistema Integral de Gestion de Mecanica
          </Text>
          {account && (
            <Text style={{ fontSize: 15, color: "#fff", textAlign: "center" }}>
              {account.name}
            </Text>
          )}
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: "#cccccc",
        }}
      >
        <TouchableOpacity onPress={logout}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <Ionicons name="log-out-outline" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>Salir</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

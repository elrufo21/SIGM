import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, TextInput } from "react-native-paper";
import AccountContext from "../../context/account/AccountContext";

const Login = ({ navigation }) => {
  const { loggin, isLogged } = useContext(AccountContext);
  const [user, setUser] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLogged) {
      navigation.replace("Main");
    }
  }, [isLogged, navigation]);
  const handleLogin = async (user) => {
    try {
      await loggin(user);
      if (isLogged) {
        navigation.replace("Main");
      } else {
        setError("Error en el inicio de sesión. Verifique sus credenciales.");
      }
    } catch (e) {
      console.error("Error during login: ", e);
      setError("Error en el inicio de sesión. Inténtelo de nuevo.");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ImageBackground
        source={require("../../Assets/img/background/bgProfile.jpg")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      >
        <View style={styles.brandView}>
          <Ionicons name="log-in-outline" size={100} color="#fff" />
          <Text style={styles.brandViewText}>SIGM</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: "#4632a1", fontSize: 34 }}>Bienvenido</Text>
          <View style={{ marginTop: 40 }}>
            <TextInput
              mode="flat"
              label="Usuario"
              style={{ backgroundColor: "transparent" }}
              value={user.userName}
              onChangeText={(text) => setUser({ ...user, userName: text })}
            />
            <TextInput
              mode="flat"
              label="Contraseña"
              value={user.password}
              onChangeText={(text) => setUser({ ...user, password: text })}
              secureTextEntry
              style={{ backgroundColor: "transparent", marginTop: 20 }}
            />
          </View>
          {error ? (
            <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
          ) : null}
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              mode="contained"
              onPress={() => handleLogin(user)}
              style={styles.logButton}
            >
              <Text style={{ color: "#fff" }}>Ingresar</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    bottom: 50,
    backgroundColor: "#fff",
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  logButton: {
    alignSelf: "center",
    backgroundColor: "#4632a1",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
  },
});

export default Login;

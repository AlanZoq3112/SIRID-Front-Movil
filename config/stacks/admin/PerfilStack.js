import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../../modules/admin/home/adapters/screens/Home";
import Login from "../../../modules/auth/adapters/screens/Login";

const Stack = createNativeStackNavigator();

export default function PerfilStack() {
  return (
    <Stack.Navigator
      initialRouteName="profileStack"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#009475" },
        headerShown: false,
      }}>
      <Stack.Screen
        name="profileStack"
        options={{ title: "Perfil" }}
        component={Profile}
      />

      <Stack.Screen
        name="loginStack"
        options={{ title: "Inicio de sesión" }}
        component={Login}
      />
    </Stack.Navigator>
  );
}

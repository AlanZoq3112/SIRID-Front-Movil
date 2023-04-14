import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDocente from "../../../modules/docente/home/adapters/screens/HomeDocente";

const Stack = createNativeStackNavigator();

export default function PerfilDocenteStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#009475" },
        headerShown: false,
      })}>
      <Stack.Screen
        name="homeDocenteStck"
        options={{ title: "Perfil" }}
        component={HomeDocente}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

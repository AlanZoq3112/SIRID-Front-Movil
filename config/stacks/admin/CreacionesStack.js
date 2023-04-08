import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HistorialUsuarios from "../../modules/profile/adapters/screens/HistorialUsuarios";
import HistorialAulas from "../../modules/profile/adapters/screens/HistorialAulas";
import HistorialIncidencias from "../../modules/profile/adapters/screens/HistorialIncidencias";

const Stack = createNativeStackNavigator();

export default function CreacionesStack() {
  return (
    <Stack.Navigator
      initialRouteName="historialUsuarios"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#009475" },
        headerShown: false,
      }}>
      <Stack.Screen
        name="historialUsuarios"
        options={{ title: "Historial Usuarios" }}
        component={HistorialUsuarios}
      />

      <Stack.Screen
        name="historialAulas"
        options={{ title: "Historial Aulas" }}
        component={HistorialAulas}
      />
      <Stack.Screen
        name="historialIncidencias"
        options={{ title: "Historial Incidencias" }}
        component={HistorialIncidencias}
      />
    </Stack.Navigator>
  );
}

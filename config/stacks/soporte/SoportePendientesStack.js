import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SoportePendientes from "../../../modules/soporte/historial/adapters/screens/SoportePendientes";

const Stack = createNativeStackNavigator();

export default function SoportePendientesStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Activas" component={SoportePendientes} />
    </Stack.Navigator>
  );
}


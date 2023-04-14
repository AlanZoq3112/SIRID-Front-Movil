import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DocentePendientes from "../../../modules/docente/historial/adapters/screens/DocentePendientes";

const Stack = createNativeStackNavigator();

export default function DocentePendientesStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Activas" component={DocentePendientes} />
    </Stack.Navigator>
  );
}


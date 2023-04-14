import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SoporteActivas from "../../../modules/soporte/historial/adapters/screens/SoporteActivas";

const Stack = createNativeStackNavigator();

export default function SoporteActivasStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Activas" component={SoporteActivas} />
    </Stack.Navigator>
  );
}


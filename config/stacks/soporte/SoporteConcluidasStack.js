import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SoporteConcluidas from "../../../modules/soporte/historial/adapters/screens/SoporteConcluidas";

const Stack = createNativeStackNavigator();

export default function SoporteConcluidasStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Concluidas" component={SoporteConcluidas} />
    </Stack.Navigator>
  );
}


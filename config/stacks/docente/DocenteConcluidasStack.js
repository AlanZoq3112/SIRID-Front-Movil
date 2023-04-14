import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DocenteConcluidas from "../../../modules/docente/historial/adapters/screens/DocenteConcluidas";

const Stack = createNativeStackNavigator();

export default function DocenteConcluidasStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Concluidas" component={DocenteConcluidas} />
    </Stack.Navigator>
  );
}


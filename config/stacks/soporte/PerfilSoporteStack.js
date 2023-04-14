import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeSoporte from "../../../modules/soporte/home/adaprters/screens/HomeSoporte";

const Stack = createNativeStackNavigator();

export default function PerfilSoporteStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#009475" },
        headerShown: false,
      })}>
      <Stack.Screen
        name="homeSoporteStck"
        options={{ title: "Perfil" }}
        component={HomeSoporte}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

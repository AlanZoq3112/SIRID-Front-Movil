import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilSoporteStack from "../stacks/soporte/PerfilSoporteStack";
import SoporteActivasStack from "../stacks/soporte/SoporteActivasStack";
import SoportePendientesStack from "../stacks/soporte/SoportePendientesStack";
import SoporteConcluidasStack from "../stacks/soporte/SoporteConcluidasStack";

const Tab = createBottomTabNavigator();

export default function NavigationSoporte() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="perfil"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#228B22",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}>
        <Tab.Screen
          name="perfil"
          component={PerfilSoporteStack}
          options={{ title: "Mi Perfil" }}
        />
        <Tab.Screen
          name="soprteActivas"
          component={SoporteActivasStack}
          options={{ title: "Activas" }}
        />
        <Tab.Screen
          name="soportePendientes"
          component={SoportePendientesStack}
          options={{ title: "Pendientes" }}
        />
        <Tab.Screen
          name="soporteConcluidas"
          component={SoporteConcluidasStack}
          options={{ title: "Concluidas" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
 switch (route.name) {
    case "perfil":
      iconName = "account-circle";
      break;
    case "soprteActivas":
      iconName = "clipboard-text-multiple-outline";
      break;
    case "soportePendientes":
      iconName = "clipboard-clock-outline";
      break;
    case "soporteConcluidas":
      iconName = "clipboard-check-multiple-outline";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

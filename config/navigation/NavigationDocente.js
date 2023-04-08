import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilDocenteStack from "../stacks/docente/PerfilDocenteStack";
import DocenteActivasStack from "../stacks/docente/DocenteActivasStack.js";
import DocentePendientesStack from "../stacks/docente/DocentePendientesStack";
import DocenteConcluidasStack from "../stacks/docente/DocenteConcluidasStack";

const Tab = createBottomTabNavigator();

export default function NavigationDocente() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="docenteActivas"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#228B22",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}>
        <Tab.Screen
          name="perfil"
          component={PerfilDocenteStack}
          options={{ title: "Mi Perfil" }}
        />
        <Tab.Screen
          name="docenteActivas"
          component={DocenteActivasStack}
          options={{ title: "Activas" }}
        />
        <Tab.Screen
          name="docentePendientes"
          component={DocentePendientesStack}
          options={{ title: "Pendientes" }}
        />
        <Tab.Screen
          name="docenteConcluidas"
          component={DocenteConcluidasStack}
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
    case "docenteActivas":
      iconName = "clipboard-text-multiple-outline";
      break;
    case "docentePendientes":
      iconName = "clipboard-clock-outline";
      break;
    case "docenteConcluidas":
      iconName = "clipboard-check-multiple-outline";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

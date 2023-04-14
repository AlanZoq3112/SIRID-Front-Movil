import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilStack from "../stacks/admin/PerfilStack";
import InicioStack from "../stacks/admin/InicioStack";
import CreacionesStack from "../stacks/admin/CreacionesStack";
import IncidenciasStatusStack from "../stacks/admin/IncidenciasStatusStack";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function NavigationAdmin() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#228B22",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}>
        <Tab.Screen
          name="Perfil"
          component={PerfilStack}
          options={{ title: "Mi Perfil" }}
        />
        <Tab.Screen
          name="Inicio"
          component={InicioStack}
          options={{ title: "Crear" }}
        />
        <Tab.Screen
          name="Creaciones"
          component={CreacionesStack}
          options={{ title: "Creacion" }}
        />
        <Tab.Screen
					name="Incidencias"
					component={IncidenciasStatusStack}
					options={{ title: "Incidencias" }}
				/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "login":
      iconName = "home";
      break;
    case "create-account":
      iconName = "account-plus";
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

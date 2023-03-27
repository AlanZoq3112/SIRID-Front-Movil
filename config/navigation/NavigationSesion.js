import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilStack from "../stacks/PerfilStack";
import InicioStack from "../stacks/InicioStack";
import Incidencias from "../stacks/IncidenciasStack"
import { Icon } from "react-native-elements";


const Tab = createBottomTabNavigator();

export default function NavigationSesion() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="login"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color }) => screenOptions(route, color),
					tabBarActiveTintColor: "#228B22",
					tabBarInactiveTintColor: "gray",
					headerShown: false,
				})}
			>
				<Tab.Screen
					name="Perfil"
					component={PerfilStack}
					options={{ title: "Mi Perfil" }}
				/>
				<Tab.Screen
					name="Inicio"
					component={InicioStack}
					options={{ title: "Inicio" }}
				/>
				<Tab.Screen
					name="Incidencias"
					component={Incidencias}
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
			iconName = "login";
			break;
		case "create-account":
			iconName = "account-plus";
			break;
		case "Incidencias":
			iconName =""
			break;
	}
	return (
		<Icon type="material-community" name={iconName} size={22} color={color} />
	);
};

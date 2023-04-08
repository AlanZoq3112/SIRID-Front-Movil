import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import CreacionesStack from "../stacks/CreacionesStack";

const Tab = createBottomTabNavigator();

export default function NavigationCreaciones() {
  return (
    <NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color }) => screenOptions(route, color),
					tabBarActiveTintColor: "#228B22",
					tabBarInactiveTintColor: "gray",
					headerShown: false,
				})}
				>
				<Tab.Screen
					name="Creaciones"
					component={CreacionesStack}
					options={{ title: "Creacion" }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
  )
}

const screenOptions = (route, color) => {
	let iconName;
	switch (route.name) {
		case "Creaciones":
			iconName = "login";
			break;
	}
	return (
		<Icon type="material-community" name={iconName} size={22} color={color} />
	  );
	
};
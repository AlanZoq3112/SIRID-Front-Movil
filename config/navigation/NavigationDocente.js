import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Docente from "../../modules/docente/adapters/screens/Docente";
import DocenteActivas from '../../modules/docente/adapters/screens/DocenteActivas';
import DocentePendientes from '../../modules/docente/adapters/screens/DocentePendientes';
import DocenteConcluidas from '../../modules/docente/adapters/screens/DocenteConcluidas';
import Chat from '../../modules/docente/adapters/screens/Chat';

import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();


export default function NavigationDocente() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Activas"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: "#228B22",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name="Activas"
                    component={DocenteActivas}
                    options={{ title: "activas" }}
                />

                <Tab.Screen
                    name="Pendientes"
                    component={DocentePendientes}
                    options={{ title: "pendientes" }}
                />

                <Tab.Screen
                    name="Concluidas"
                    component={DocenteConcluidas}
                    options={{ title: "concluidas" }}
                />

<Tab.Screen
                    name="Chat"
                    component={Chat}
                    options={{ title: "chat" }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
	let iconName;
	switch (route.name) {
		case "Activas":
            // icono de activos
            iconName = "map-marker-check";
			break;
        case "Pendientes":
			iconName = "close";
			break;
        case "Concluidas":
			iconName = "close-outline";
			break;
	}
	return (
		<Icon type="material-community" name={iconName} size={22} color={color} />
	  );
	
};

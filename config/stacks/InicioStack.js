import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../../modules/profile/adapters/screens/Profile";

const Stack = createNativeStackNavigator();

export default function InicioStack() {
	return (
		<Stack.Navigator
		initialRouteName="incidenciasStack"
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen name="profile" component={Inicio} />
		</Stack.Navigator>
	);
}

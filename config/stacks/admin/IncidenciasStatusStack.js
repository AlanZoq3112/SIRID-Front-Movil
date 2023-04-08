
import { StyleSheet } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminActivas from '../../../modules/admin/profile/adapters/screens/historialStatus/AdminActivas';
import AdminConcluidas from '../../../modules/admin/profile/adapters/screens/historialStatus/AdminConcluidas';
import AdminPendientes from '../../../modules/admin/profile/adapters/screens/historialStatus/AdminPendientes';

const Stack = createNativeStackNavigator();

export default function IncidenciasStatusStack() {
  return (
		<Stack.Navigator
		initialRouteName="incidenciasStack"
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen name="adminActivas" component={AdminActivas} />
			<Stack.Screen name="adminPendientes" component={AdminPendientes} />
			<Stack.Screen name="adminConcluidas" component={AdminConcluidas} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({})
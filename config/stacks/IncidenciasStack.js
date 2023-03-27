import UserLoggerd from '../../modules/profile/adapters/screens/UserLoggerd';
import { StyleSheet } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function IncidenciasStack() {
  return (
		<Stack.Navigator
		initialRouteName="incidenciasStack"
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen name="profile" component={UserLoggerd} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({})
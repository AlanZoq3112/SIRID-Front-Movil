import Navigation from "./config/navigation/Navigation";
import NavigationAdmin from './config/navigation/NavigationAdmin'
import React, { useEffect, useState } from "react";
import { app } from "./config/utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { View, div } from "react-native";
import AuthContext from "./kernel/components/authcontext/AuthContext";
import AuthState from "./kernel/components/authcontext/AuthState";
import Login from "./modules/auth/adapters/screens/Login";

export default function App() {
	

	return (
		<AuthState>
			<AuthContext.Consumer>
				{({isAuth}) =>
					isAuth ?
					<RoleRoute />
					:
					<Login/>
				}
			</AuthContext.Consumer>
		</AuthState>
	);
}

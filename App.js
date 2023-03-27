import Navigation from "./config/navigation/Navigation";
import NavigationSesion from "./config/navigation/NavigationSesion";
import React, { useEffect, useState } from "react";
import { app } from "./config/utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { View, div } from "react-native";

export default function App() {
	const auth = getAuth();

	const [user, setUser] = useState(null);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);

	return (
		<React.Fragment>
			{user ? <NavigationSesion /> : <Navigation />}
		</React.Fragment>
	);
}

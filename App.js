import React from "react";
import { AuthProvider } from "./kernel/components/authcontext/AuthContext";
import { LogBox } from "react-native";
import MainStack from "./config/stacks/MainStack";
import { NavigationContainer } from "@react-navigation/native";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
		<MainStack />
      </NavigationContainer>
    </AuthProvider>
  );
}

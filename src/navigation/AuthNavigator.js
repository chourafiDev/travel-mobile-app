import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME, LOGIN, REGISTER, WELCOME } from "../constants/routes";

// Screens
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
      <Stack.Screen
        name={HOME}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

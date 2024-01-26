import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FORGOT_PASSWORD, LOGIN, REGISTER, WELCOME } from "../constants/routes";

// Screens
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPasswordScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
}

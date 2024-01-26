import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME_TAB } from "../constants/routes";

// Screens
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={HOME_TAB}
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

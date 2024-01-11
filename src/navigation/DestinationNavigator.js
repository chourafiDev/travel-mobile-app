import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DESTINATION, HOME } from "../constants/routes";

// Screens
import DestinationScreen from "../screens/app/DestinationScreen";
import HomeScreen from "../screens/app/HomeScreen";

const Stack = createNativeStackNavigator();

export default function DestinationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={DESTINATION} component={DestinationScreen} />
      <Stack.Screen name={HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

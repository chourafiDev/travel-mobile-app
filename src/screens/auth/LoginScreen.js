import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { REGISTER } from "../../constants/routes";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(REGISTER)}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

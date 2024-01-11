import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HOME } from "../../constants/routes";

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(HOME)}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

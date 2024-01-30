import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OutlineButton = ({ label, route, size, type, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`rounded-2xl overflow-hidden border ${
        type == "primary" ? "border-brand" : "border-danger-100"
      }`}
      onPress={onPress}
    >
      <Text
        className={`${
          type == "primary" ? "text-brand" : "text-danger-100"
        } text-center text-[18px] ${size == "lg" ? "py-[10px]" : "py-1"} `}
        style={{ fontFamily: "baiJamjuree-bold" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;

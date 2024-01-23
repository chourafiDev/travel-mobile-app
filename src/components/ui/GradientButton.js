import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const GradientButton = ({ label, icon, route, size, type }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    if (route) {
      navigation.navigate(route);
    } else {
      return;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="rounded-2xl overflow-hidden"
      onPress={handleNavigate}
    >
      <LinearGradient
        colors={
          type == "primary" ? ["#23a892", "#00c3a4"] : ["#ef476f", "#f76587"]
        }
        className="w-full h-full absolute top-0 right-0"
      />
      <Text
        className={`text-white text-center text-[18px] ${
          size == "lg" ? "py-3" : "py-1"
        } `}
        style={{ fontFamily: "baiJamjuree-bold" }}
      >
        {label}
      </Text>
      {icon && (
        <Icon
          name={icon}
          style={{
            fontFamily: "baiJamjuree-bold",
            position: "absolute",
            right: 20,
            bottom: "33%",
          }}
          size={15}
          color="#FBFBFB"
        />
      )}
    </TouchableOpacity>
  );
};

export default GradientButton;

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const GradientButton = ({ label, icon, route }) => {
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
        colors={["#23a892", "#04c7a7"]}
        className="w-full h-full absolute top-0 right-0"
        start={{ x: 0.7, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <Text
        className="text-white text-center text-[18px] py-3"
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

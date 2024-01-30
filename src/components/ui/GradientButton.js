import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

const GradientButton = ({ label, icon, size, type, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`rounded-2xl overflow-hidden border ${
        type == "primary" ? "border-brand" : "border-danger-100"
      } `}
      onPress={onPress}
      disabled={isLoading}
    >
      <LinearGradient
        colors={
          type == "primary" ? ["#23a892", "#00c3a4"] : ["#ef476f", "#f76587"]
        }
        className="w-full h-full absolute top-0 right-0"
      />
      {isLoading ? (
        <View className={size == "lg" ? "py-2" : "py-1"}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        <>
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
        </>
      )}
    </TouchableOpacity>
  );
};

export default GradientButton;

import { View, ImageBackground, Image } from "react-native";
import React from "react";
import { bg2, light } from "../../../utils/assets";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import LoginForm from "../../components/Foms/LoginForm";

export default function LoginScreen({ navigation }) {
  return (
    <View className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      <StatusBar style="light" />

      {/* Header */}
      <View className="">
        {/* Header */}
        <ImageBackground
          source={bg2}
          resizeMode="stretch"
          className="h-72 w-full relative"
        >
          <Image
            source={light}
            className="absolute w-[19%] h-[65%] top-0 left-12"
            resizeMode="stretch"
          />

          <Image
            source={light}
            className="absolute w-[13%] h-[45%] top-0 right-16"
            resizeMode="stretch"
          />

          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white text-4xl absolute bottom-24 left-[41%]"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Login
          </Animated.Text>
        </ImageBackground>
      </View>

      {/* Form */}
      <LoginForm />
    </View>
  );
}

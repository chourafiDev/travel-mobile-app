import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { HOME_TAB, REGISTER } from "../../constants/routes";

const LoginForm = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  return (
    <View className="px-4 mt-16">
      {/* Header */}
      <View className="mb-6">
        <Text
          className="text-dark dark:text-white text-2xl"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Welcome Back,{" "}
          <Text
            className="text-brand"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Login
          </Text>
        </Text>
        <Text
          className="text-dark dark:text-white text-2xl"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          for Continue !
        </Text>
      </View>

      {/* Body */}
      <Animated.View
        entering={FadeInDown.delay(100).duration(1000).springify()}
        className="w-full text-dark border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <TextInput
          placeholder="Email address"
          className="text-dark dark:text-white"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full text-dark border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-10"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <TextInput
          placeholder="Password"
          className="text-dark dark:text-white"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>

      {/* Footer */}
      <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          className="p-3 rounded-2xl bg-brand"
          style={[colorScheme == "light" && shadow.boxShadow]}
          onPress={() => navigation.navigate(HOME_TAB)}
        >
          <Text
            className="text-white text-center text-[17px]"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(500).duration(1000).springify()}
        className="py-3 flex-row items-center gap-3"
      >
        <View className="bg-dark/10 dark:bg-white/10 flex-1 h-[1px]"></View>
        <Text
          className="text-dark/40 dark:text-white/40"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Don't Have Account?
        </Text>
        <View className="bg-dark/10 dark:bg-white/10 flex-1 h-[1px]"></View>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate(REGISTER)}
          className="bg-white border border-brand/80 px-4 py-3 rounded-2xl dark:bg-dark-2"
          style={[
            colorScheme == "light" && shadow.boxShadow,
            { fontFamily: "baiJamjuree-regular" },
          ]}
        >
          <Text
            className="text-brand text-center text-[17px]"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default LoginForm;

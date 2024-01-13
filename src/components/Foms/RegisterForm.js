import { View, Text, TextInput } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LOGIN } from "../../constants/routes";

const RegisterForm = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();

  return (
    <View className="px-4 mt-10">
      {/* Body */}
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <TextInput
          placeholder="Username"
          className="text-dark dark:text-white"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <TextInput
          placeholder="First Name"
          className="text-dark dark:text-white"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <TextInput
          placeholder="Last Name"
          className="text-dark dark:text-white"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
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
        className="w-full border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-8"
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
        >
          <Text
            className="text-white text-center text-[17px]"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            SignUp
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
        className="py-3 flex-row items-center gap-3"
      >
        <View className="bg-dark/10 flex-1 h-[1px]"></View>
        <Text
          className="text-dark/40"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Have Account?
        </Text>
        <View className="bg-dark/10 flex-1 h-[1px]"></View>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate(LOGIN)}
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
            Login
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default RegisterForm;
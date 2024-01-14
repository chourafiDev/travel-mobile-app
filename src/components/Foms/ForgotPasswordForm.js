import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { FORGOT_PASSWORD, HOME_TAB, REGISTER } from "../../constants/routes";
import Icon from "react-native-vector-icons/Feather";

const ForgotPasswordForm = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(true);
  return (
    <View className="px-4 mt-16">
      {/* Header */}
      <View className="mb-10">
        <Text
          className="text-dark dark:text-white text-xl"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Forgot your password?
        </Text>
        <Text
          className="text-dark/50 dark:text-white/50 text-base mt-2"
          style={{ fontFamily: "baiJamjuree-regular" }}
        >
          Enter your email address and we'll email you to reset your password
        </Text>
      </View>

      {/* Body */}
      <Animated.View
        entering={FadeInDown.delay(100).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-8"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="mail"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Email address"
          className="text-dark dark:text-white flex-1 ml-3"
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
            Reset Password
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ForgotPasswordForm;

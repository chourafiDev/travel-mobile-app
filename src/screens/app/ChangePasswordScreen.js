import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../../utils/theme";
import Icon from "react-native-vector-icons/Feather";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradientButton from "../../components/ui/GradientButton";
import { HOME_TAB } from "../../constants/routes";

const ChangePasswordScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top }}
      className="flex-1 bg-[#f8f8fa] dark:bg-dark px-4"
    >
      {/* header */}
      <View className="flex-row items-center mt-3 mb-6">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name="arrow-left"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
          />
        </TouchableOpacity>
        <Text
          className="text-dark dark:text-white text-xl ml-4"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          Change Password
        </Text>
      </View>

      {/* Body */}

      <Animated.View
        entering={FadeInDown.delay(100).duration(1000).springify()}
        className="mt-6 mb-4"
      >
        <Text
          className="text-dark/70 dark:text-white/70 text-base"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Enter your old password to get access to change It.
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="key"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Old Password"
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="lock"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="New Password"
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="lock"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Confirme Password"
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
        className="mt-auto mb-6"
      >
        <GradientButton
          label="Edit"
          icon="edit-2"
          size="lg"
          type="primary"
          route={HOME_TAB}
        />
      </Animated.View>
    </View>
  );
};

export default ChangePasswordScreen;

import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../utils/theme";
import Icon from "react-native-vector-icons/Feather";

const EditProfileInfo = () => {
  const { colorScheme } = useColorScheme();

  return (
    <View className="bg-[#f8f8fa] dark:bg-dark h-full pt-3">
      {/* Body */}
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="mb-3"
      >
        <TextInput
          placeholder="Username"
          className="w-full text-dark dark:text-white border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2"
          style={[
            colorScheme == "light" && shadow.boxShadow,
            { fontFamily: "baiJamjuree-regular" },
          ]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="mb-3"
      >
        <TextInput
          placeholder="First Name"
          className="w-full text-dark dark:text-white border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2"
          style={[
            colorScheme == "light" && shadow.boxShadow,
            { fontFamily: "baiJamjuree-regular" },
          ]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="mb-3"
      >
        <TextInput
          placeholder="Last Name"
          className="w-full text-dark dark:text-white border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2"
          style={[
            colorScheme == "light" && shadow.boxShadow,
            { fontFamily: "baiJamjuree-regular" },
          ]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="mb-3"
      >
        <TextInput
          placeholder="Email address"
          className="w-full text-dark dark:text-white border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2"
          style={[
            colorScheme == "light" && shadow.boxShadow,
            { fontFamily: "baiJamjuree-regular" },
          ]}
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
          className="p-3 rounded-2xl bg-brand mt-3"
        >
          <Text
            className="text-white text-center text-[18px]"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Edit
          </Text>
          <Icon
            name="edit-2"
            style={{
              fontFamily: "baiJamjuree-bold",
              position: "absolute",
              right: 20,
              bottom: "66%",
            }}
            size={15}
            color="#FBFBFB"
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileInfo;

import { View, Text, TouchableOpacity, Image, Switch } from "react-native";
import React, { useState } from "react";
import { user } from "../../../utils/assets";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PROFILE_INFO } from "../../constants/routes";

export default function SettingScreen({ navigation }) {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={{ paddingTop: insets.top }}
      className="flex-1 bg-[#f8f8fa] dark:bg-dark"
    >
      {/* header */}
      <View className="flex-row justify-between items-center px-4 my-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2  w-9 h-9 rounded-lg items-center justify-center"
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
          className="text-dark dark:text-white text-xl"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          Setting
        </Text>
        <View></View>
      </View>

      {/* Edit Image */}
      <View
        className="flex-row items-center justify-between mx-4 border border-dark/5 rounded-xl p-3 bg-white dark:bg-dark-2"
        style={[
          colorScheme == "light" && shadow.boxShadow,
          { fontFamily: "baiJamjuree-regular" },
        ]}
      >
        <View className="flex-row items-center gap-3">
          <Image source={user} className="w-14 h-14 rounded-full" />
          <View>
            <Text
              className="text-lg text-dark dark:text-white"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
            >
              Abdelmonaime Chourafi
            </Text>
            <Text
              className="text-sm text-dark/60 dark:text-white/60"
              style={{
                fontFamily: "baiJamjuree-medium",
              }}
            >
              @chourafi_abdelmonaime
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          className="bg-brand dark:bg-brand w-9 h-9 rounded-lg items-center justify-center"
        >
          <Text
            className="text-dark"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            <Icon
              name="edit-2"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
              size={19}
              color="#fbfbfbfb"
            />
          </Text>
        </TouchableOpacity>
      </View>

      <View className="px-4 mt-4 space-y-3">
        <Animated.View
          entering={FadeInDown.delay(100).duration(1000).springify()}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
            onPress={() => {
              navigation.navigate(PROFILE_INFO);
            }}
          >
            <View className="flex-row items-center">
              <View
                activeOpacity={0.8}
                className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
              >
                <Icon
                  name="user"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </View>
              <Text
                className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Edit your About info
              </Text>
            </View>

            <View>
              <Icon
                name="chevron-right"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <View className="flex-row items-center">
              <View
                activeOpacity={0.8}
                className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
              >
                <Icon
                  name="key"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </View>
              <Text
                className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Change Password
              </Text>
            </View>

            <View activeOpacity={0.8}>
              <Icon
                name="chevron-right"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(300).duration(1000).springify()}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <View className="flex-row items-center">
              <View
                activeOpacity={0.8}
                className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
              >
                <Icon
                  name="shopping-bag"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </View>
              <Text
                className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Booked Destinations
              </Text>
            </View>

            <View>
              <Icon
                name="chevron-right"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          className="w-full flex-row items-center justify-between px-3 py-2 rounded-2xl bg-white dark:bg-dark-2"
          style={[colorScheme == "light" && shadow.boxShadow]}
        >
          <View className="flex-row items-center">
            <View
              activeOpacity={0.8}
              className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
            >
              <Icon
                name="bell"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
            <Text
              className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Notification
            </Text>
          </View>

          <Switch
            trackColor={{ false: "#d9d9d9", true: "#222B45" }}
            thumbColor={isEnabled ? "#23A892" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(500).duration(1000).springify()}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <View className="flex-row items-center">
              <View
                activeOpacity={0.8}
                className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
              >
                <Icon
                  name="credit-card"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </View>
              <Text
                className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Payment Method
              </Text>
            </View>

            <View>
              <Icon
                name="chevron-right"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(600).duration(1000).springify()}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <View className="flex-row items-center">
              <View
                activeOpacity={0.8}
                className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
              >
                <Icon
                  name="shield"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </View>
              <Text
                className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Security
              </Text>
            </View>

            <View>
              <Icon
                name="chevron-right"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(700).duration(1000).springify()}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <View className="flex-row items-center">
              <View
                activeOpacity={0.8}
                className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
              >
                <Icon
                  name="alert-triangle"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </View>
              <Text
                className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Terms & Conditions
              </Text>
            </View>

            <View>
              <Icon
                name="chevron-right"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(800).duration(1000).springify()}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-full flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <View className="flex-row items-center">
              <View
                activeOpacity={0.8}
                className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
              >
                <Icon
                  name="unlock"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </View>
              <Text
                className="text-dark/80 dark:text-white/80 text-[17px] ml-4"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Privacy Policy
              </Text>
            </View>

            <View>
              <Icon
                name="chevron-right"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

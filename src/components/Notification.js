import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../utils/theme";
import { useColorScheme } from "nativewind";
import Icon from "react-native-vector-icons/Feather";

const Notification = ({ notification, index }) => {
  const { colorScheme } = useColorScheme();
  const { icon, date, time, description } = notification;

  return (
    <Animated.View entering={FadeInDown.delay(250 * index)}>
      <TouchableOpacity
        activeOpacity={0.8}
        className="w-full flex-row items-center p-3 rounded-2xl bg-white dark:bg-dark-2"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <View
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name={icon}
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
          />
        </View>

        <View>
          <Text
            className="text-dark dark:text-white text-[16px] ml-4"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            {date} - {time}
          </Text>

          <Text
            className="text-dark/60 dark:text-white/60 text-base ml-4"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notification;

import { View, Text, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";

const Review = ({ user: { name, image, date, review } }) => {
  const { colorScheme } = useColorScheme();

  return (
    <View
      className="bg-white dark:bg-dark-2 rounded-xl p-3 mb-3"
      style={[colorScheme == "light" && shadow.boxShadow]}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-3">
          <Image source={image} className="w-10 h-10 rounded-full" />
          <View>
            <Text
              className="text-dark dark:text-white text-lg"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              {name}
            </Text>
            <Text
              className="text-dark/60 dark:text-white/60 text-sm"
              style={{ fontFamily: "baiJamjuree-regular" }}
            >
              {date}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <Icon
            name="star"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={18}
            color="#23A892"
          />
          <Text
            className="text-dark dark:text-white text-base"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            {review}
          </Text>
        </View>
      </View>

      <Text
        className="text-dark dark:text-white text-[15px] mt-3 leading-6"
        style={{ fontFamily: "baiJamjuree-regular" }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Text>
    </View>
  );
};

export default Review;

import { View, Text, Image } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";

const Review = ({ review }) => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      className="bg-white dark:bg-dark-2 rounded-xl p-3 mb-3"
      style={[colorScheme == "light" && shadow.boxShadow]}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-3">
          <View className="w-14 h-14 rounded-[14px] border border-gray-1 dark:border-dark p-1">
            <Image
              source={{ uri: review.user.imageUrl }}
              className="h-full w-full rounded-[10px]"
            />
          </View>
          <View>
            <Text
              className="text-dark dark:text-white text-base"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              {review.user.firstName} {review.user.lastName}
            </Text>
            <Text
              className="text-dark/60 dark:text-white/60 text-sm"
              style={{ fontFamily: "baiJamjuree-regular" }}
            >
              {moment(review.createdAt).fromNow()}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-x-1">
          <AntDesign name="star" size={20} color="#fca311" />
          <Text
            className="text-dark dark:text-white text-base mt-1"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            {review.rating}
          </Text>
        </View>
      </View>

      <Text
        className="text-dark/50 dark:text-white/50 text-[15px] mt-3 leading-6"
        style={{ fontFamily: "baiJamjuree-regular" }}
      >
        {review.content}
      </Text>
    </View>
  );
};

export default Review;

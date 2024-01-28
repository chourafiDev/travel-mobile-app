import React from "react";
import { View, Image, Text } from "react-native";
import { empty } from "../../utils/assets";

const Empty = () => {
  return (
    <View className="bg-[#f8f8fa] dark:bg-dark flex-1 justify-center items-center">
      <Image source={empty} className="w-16 h-16" />
      <Text
        className="text-dark dark:text-white text-base text-center mt-3"
        style={{ fontFamily: "baiJamjuree-semibold" }}
      >
        No Results Fonud
      </Text>
    </View>
  );
};

export default Empty;

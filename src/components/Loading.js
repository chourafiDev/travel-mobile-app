import { View, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View className="bg-[#f8f8fa] dark:bg-dark flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#23A892" />
    </View>
  );
};

export default Loading;

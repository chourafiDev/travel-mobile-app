import { View, Text, FlatList } from "react-native";
import React from "react";
import Review from "./Review";
import { users } from "../../../utils/data";

const Reviews = () => {
  return (
    <View className="bg-[#f8f8fa] dark:bg-dark h-full">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={({ item, index }) => {
          return <Review user={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Not items found</Text>}
        ListFooterComponent={<View className="h-5"></View>}
      />
      <View className="h-12"></View>
    </View>
  );
};

export default Reviews;

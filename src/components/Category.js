import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { shadow } from "../../utils/theme";

export default function Category({
  category: { title, image },
  selectedCategory,
  handleSelectCategory,
}) {
  return (
    <TouchableOpacity
      className={`rounded-2xl p-1 mr-3 border ${
        selectedCategory === title
          ? "bg-brand/10 border-brand/40"
          : "bg-white border-gray-50"
      }`}
      style={[shadow.boxShadow]}
      activeOpacity={0.8}
      onPress={() => handleSelectCategory(title)}
    >
      <View className="flex-row items-center gap-2 pr-5">
        <Image source={image} className="rounded-xl w-14 h-11" />
        <Text
          className={`${
            selectedCategory === title ? "text-brand" : "text-dark/70"
          }`}
          style={{ fontFamily: "baiJamjuree-semibold" }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

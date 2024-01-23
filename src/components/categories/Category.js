import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Category = ({
  category,
  handleSnapPressOpenEdit,
  handleSnapPressOpenDelete,
}) => {
  return (
    <View className="flex-row justify-between items-center border border-dark/10 dark:border-gray-1/5 px-2 py-3 rounded-xl">
      <View className="flex-row items-center gap-4">
        <Image source={category.image} className="w-12 h-12 rounded-2xl" />

        <Text
          className="text-dark/60 dark:text-white/60 text-base"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          {category.title}
        </Text>
      </View>

      <View className="flex-row gap-1">
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-8 h-8 rounded-xl bg-brand justify-center items-center"
          onPress={handleSnapPressOpenEdit}
        >
          <Icon name="edit-2" size={14} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          className="w-8 h-8 rounded-xl bg-danger-100 justify-center items-center"
          onPress={handleSnapPressOpenDelete}
        >
          <Icon name="trash-2" size={14} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Category;

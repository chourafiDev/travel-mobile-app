import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Destination = ({
  destination,
  handleSnapPressOpenEdit,
  handleSnapPressOpenDelete,
}) => {
  return (
    <View className="flex-row justify-between items-center border border-dark/10 dark:border-gray-1/5 px-2 py-3 rounded-xl">
      <View className="flex-row items-center gap-2 w-40">
        <Image source={destination.image} className="w-12 h-12 rounded-2xl" />

        <View className="space-y-1">
          <Text
            className="text-dark dark:text-white text-base"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            {destination.title}
          </Text>
          <Text
            className="text-dark/50 dark:text-white/50 text-sm"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            $244.99
          </Text>
        </View>
      </View>

      <View className="bg-brand/20 rounded-lg px-2 py-1">
        <Text
          className="text-brand text-[15px]"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Island
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

export default Destination;

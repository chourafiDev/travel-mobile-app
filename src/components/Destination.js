import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { shadow } from "../../utils/theme";

export default function Destination({
  destination: { title, destination, image },
}) {
  return (
    <TouchableOpacity
      className="rounded-2xl px-1 pt-1 pb-3 bg-white mr-3 relative border border-gray-50 w-full"
      style={[shadow.boxShadow]}
      activeOpacity={0.8}
    >
      <TouchableOpacity
        className="absolute top-3 right-3 bg-white/80 backdrop-blur-md w-7 h-7 rounded-full z-10 justify-center items-center"
        style={[shadow.boxShadow]}
      >
        <Icon name="heart" color="#e63946" size={16} />
      </TouchableOpacity>

      <Image source={image} className="rounded-2xl w-full h-32" />
      <Text
        className="text-dark text-base mt-4"
        style={{ fontFamily: "baiJamjuree-semibold" }}
      >
        {title}
      </Text>
      <View className="flex-row gap-1 items-center">
        <Icon
          name="map-pin"
          style={{
            fontFamily: "baiJamjuree-bold",
          }}
          size={12}
          color="#23A892"
        />
        <Text
          className="text-dark/60"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          {destination}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

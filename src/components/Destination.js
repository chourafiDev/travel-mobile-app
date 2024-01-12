import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { shadow } from "../../utils/theme";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { DESTINATION } from "../constants/routes";

export default function Destination({
  destination: { title, destination, image },
}) {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  return (
    <TouchableOpacity
      className="rounded-2xl px-1 pt-1 pb-3 bg-white dark:bg-dark-2 mr-3 relative border border-gray-50 dark:border-dark-2 w-full"
      style={[colorScheme == "light" && shadow.boxShadow]}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate(DESTINATION);
      }}
    >
      <TouchableOpacity
        className="absolute top-3 right-3 bg-white/80 backdrop-blur-md w-7 h-7 rounded-full z-10 justify-center items-center"
        style={[shadow.boxShadow]}
      >
        <Icon name="heart" color="#e63946" size={16} />
      </TouchableOpacity>

      <Image source={image} className="rounded-2xl w-full h-32" />
      <Text
        className="text-dark dark:text-white text-base mt-4"
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
          className="text-dark/60 dark:text-white/60"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          {destination}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

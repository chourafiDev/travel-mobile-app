import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { welcome } from "../../utils/assets";
import Icon from "react-native-vector-icons/Feather";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex justify-end">
      <Image source={welcome} className="w-full h-full absolute" />

      {/* content & gradient */}
      <View className="p-5 pb-10 space-y-8">
        <LinearGradient
          colors={["transparent", "#23A892"]}
          style={{ width: wp(100), height: hp(60) }}
          className="absolute bottom-0"
        />
        <View className="mb-4">
          <Text
            className="text-white font-bold text-5xl -mb-2"
            style={{ fontSize: wp(5), fontFamily: "baiJamjuree-regular" }}
          >
            It's a Big World
          </Text>
          <Text
            className="text-white font-medium -mb-6"
            style={{ fontSize: wp(12), fontFamily: "baiJamjuree-bold" }}
          >
            Out There,
          </Text>
          <Text
            className="text-white font-medium -mb-2"
            style={{ fontSize: wp(12), fontFamily: "baiJamjuree-bold" }}
          >
            Go Explore
          </Text>
          <View className="flex-row gap-2">
            <View className="w-4 h-[5px] bg-brand rounded-full"></View>
            <View className="w-7 h-[5px] bg-brand rounded-full"></View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Home")}
          className="p-3 rounded-lg bg-white"
        >
          <Text
            className="text-brand text-center"
            style={{ fontSize: wp(5.5), fontFamily: "baiJamjuree-bold" }}
          >
            Get Started
          </Text>
          <Icon
            name="arrow-right"
            style={{
              fontSize: wp(5.5),
              fontFamily: "baiJamjuree-bold",
              position: "absolute",
              right: 20,
              bottom: "50%",
            }}
            color="#23A892"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

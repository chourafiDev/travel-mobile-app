import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageView from "react-native-image-viewing";
import { useColorScheme } from "nativewind";
import Icon from "react-native-vector-icons/Feather";
import { categories, destinations } from "../../../utils/data";

// Components
import TopTabBar from "../../components/layout/TopTabBar";
import Overview from "../../components/Overview";
import Reviews from "../../components/Reviews/Reviews";

const Tab = createMaterialTopTabNavigator();

export default function DestinationScreen({ navigation }) {
  const { colorScheme } = useColorScheme();

  const item = destinations[0];

  const images = [
    {
      uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    },
    {
      uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    },
    {
      uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    },
  ];

  const [visible, setIsVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* Modal images */}
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />

      {/* header */}
      <View className="flex-row justify-between items-center px-4 my-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2  w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name="arrow-left"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
          />
        </TouchableOpacity>
        <Text
          className="text-dark text-xl"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(FAVORITES)}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name="heart"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color="#e63946"
          />
        </TouchableOpacity>
      </View>

      {/* Images */}
      <ImageBackground
        source={item.image}
        className="h-72 rounded-3xl justify-end overflow-hidden mx-4"
      >
        <View>
          <LinearGradient
            colors={["transparent", "#222B4599"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0 h-28 w-full"
          />
          <View className="flex-row gap-2 items-center justify-center mb-3">
            <View className="flex-row gap-x-2">
              {categories.slice(0, 3).map(({ image }) => (
                <View
                  key={image}
                  className="border-[3px] border-white/70 rounded-xl overflow-hidden w-14 h-14"
                >
                  <Image source={image} className="w-full h-full" />
                </View>
              ))}
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsVisible(true)}
              className="border-[3px] border-white/70 rounded-xl overflow-hidden w-14 h-14 relative"
            >
              <View className="absolute top-0 left-0 bg-dark-2/60 w-full h-full z-10"></View>
              <Text
                className="text-white text-lg z-10 absolute top-[14px] left-[14px]"
                style={{ fontFamily: "baiJamjuree-bold" }}
              >
                +6
              </Text>
              <Image
                key={item.image}
                source={item.image}
                className="w-full h-full"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Top Tab */}
      <View className="px-4 mt-6 flex-1">
        <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
          <Tab.Screen name="Overview" component={Overview} />
          <Tab.Screen name="Reviews" component={Reviews} />
        </Tab.Navigator>
      </View>

      <View className="absolute w-full bottom-0">
        <LinearGradient
          colors={[
            "transparent",
            colorScheme == "light" ? "#fbfbfbfb" : "#222B45",
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
          className="absolute bottom-0 w-full h-28"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          className="p-3 rounded-2xl bg-brand my-2 mx-4"
        >
          <Text
            className="text-white text-center text-[18px]"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Book Now | $106{" "}
            <Text
              className="text-[14px]"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              per person
            </Text>
          </Text>
          <Icon
            name="credit-card"
            style={{
              fontFamily: "baiJamjuree-bold",
              position: "absolute",
              right: 20,
              bottom: "66%",
            }}
            size={15}
            color="#FBFBFB"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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

// Components
import TopTabBar from "../../components/layout/TopTabBar";
import Overview from "../../components/Overview";
import Reviews from "../../components/Reviews/Reviews";
import GradientButton from "../../components/ui/GradientButton";
import { useGetDestinationQuery } from "../../store/services/destinationsApiSlice";
import Loading from "../../components/Loading";

const Tab = createMaterialTopTabNavigator();

export default function DestinationScreen({ route, navigation }) {
  const { colorScheme } = useColorScheme();
  const { destinationId } = route.params;

  // fetch destination
  const { data: destination, isLoading } =
    useGetDestinationQuery(destinationId);

  const destinationImages = destination?.images?.map((image) => {
    return { uri: image.imageUrl };
  });

  const [visible, setIsVisible] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* Modal images */}
      <ImageView
        images={destinationImages}
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
          className="text-dark dark:text-white text-xl"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          {destination.title}
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
            color="#ef476f"
          />
        </TouchableOpacity>
      </View>

      {/* Images */}
      <ImageBackground
        source={destinationImages[0]}
        className="h-72 rounded-3xl justify-end overflow-hidden mx-4"
      >
        <View>
          <LinearGradient
            colors={["transparent", "#222B4599"]}
            className="absolute bottom-0 h-28 w-full"
          />
          <View className="flex-row gap-2 items-center justify-center mb-3">
            <View className="flex-row gap-x-2">
              {destinationImages.slice(0, 2).map((image) => (
                <View
                  key={image.uri}
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
                +{destinationImages.length - 2}
              </Text>
              <Image source={destinationImages[3]} className="w-full h-full" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Top Tab */}
      <View className="px-4 mt-6 flex-1">
        <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
          <Tab.Screen
            name="Overview"
            children={() => <Overview destination={destination} />}
          />
          <Tab.Screen name="Reviews" component={Reviews} />
        </Tab.Navigator>
      </View>

      <View className="absolute w-full bottom-0">
        <LinearGradient
          colors={[
            "transparent",
            colorScheme == "light" ? "#fbfbfbfb" : "#222B45",
          ]}
          className="absolute bottom-0 w-full h-28"
        />

        <View className="my-2 mx-4">
          <GradientButton
            label={`Book Now | $${destination.price}`}
            icon="credit-card"
            size="lg"
            route=""
            type="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

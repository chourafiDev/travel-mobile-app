import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { FadeInDown } from "react-native-reanimated";
import Icon from "react-native-vector-icons/Feather";
import { shadow } from "../../utils/theme";
import { useColorScheme } from "nativewind";

const Overview = ({ destination }) => {
  const { colorScheme } = useColorScheme();

  const ratings = destination.reviews.map(({ rating }) => rating);

  // Calculate the sum of ratings
  const sumOfRatings = ratings.reduce((total, rating) => total + rating, 0);

  // Calculate the average rating
  const averageRating = sumOfRatings / ratings.length;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="bg-[#f8f8fa] dark:bg-dark"
    >
      <View className="mx-4">
        <View className="flex-row justify-between items-center mb-3 gap-x-4">
          <Animated.View
            entering={FadeInDown.delay(40)}
            className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-gray-1 mr-3 dark:bg-dark w-10 h-10 rounded-xl items-center justify-center"
            >
              <Icon
                name="clock"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={18}
                color="#23A892"
              />
            </TouchableOpacity>
            <View>
              <Text
                className="text-dark/60 dark:text-white/60 text-base"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Duration
              </Text>
              <Text
                className="text-dark dark:text-white text-[17px] -mt-1"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {destination.duration} Days
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(40)}
            className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-gray-1 dark:bg-dark mr-3 w-10 h-10 rounded-xl items-center justify-center"
            >
              <Icon
                name="star"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={18}
                color="#23A892"
              />
            </TouchableOpacity>
            <View>
              <Text
                className="text-dark/60 dark:text-white/60 text-base"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Rating
              </Text>
              <Text
                className="text-dark dark:text-white text-[17px] -mt-1"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {ratings.length > 0 ? averageRating : "_ "}/5
              </Text>
            </View>
          </Animated.View>
        </View>

        <View className="flex-row justify-between items-center gap-x-4">
          <Animated.View
            entering={FadeInDown.delay(60)}
            className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-gray-1 mr-3 dark:bg-dark w-10 h-10 rounded-xl items-center justify-center"
            >
              <Icon
                name="map-pin"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={18}
                color="#23A892"
              />
            </TouchableOpacity>
            <View>
              <Text
                className="text-dark/60 dark:text-white/60 text-base"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Destination
              </Text>
              <Text
                className="text-dark dark:text-white text-[17px] -mt-1"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {destination.destination}
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(60)}
            className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-gray-1 dark:bg-dark mr-3 w-10 h-10 rounded-xl items-center justify-center"
            >
              <Icon
                name="layers"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={18}
                color="#23A892"
              />
            </TouchableOpacity>
            <View>
              <Text
                className="text-dark/60 dark:text-white/60 text-base"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Catgeory
              </Text>
              <Text
                className="text-dark dark:text-white text-[17px] -mt-1"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {destination.category.content}
              </Text>
            </View>
          </Animated.View>
        </View>
      </View>

      <View
        className="mt-6 mx-4 space-y-3 bg-white dark:bg-dark-2 p-3 rounded-2xl"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Animated.Text
          entering={FadeInDown.delay(110)}
          className="text-dark dark:text-white text-xl"
          style={{
            fontFamily: "baiJamjuree-bold",
          }}
        >
          Description
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200)}
          className="text-dark/80 dark:text-white/80 text-[17px] leading-7"
          style={{
            fontFamily: "baiJamjuree-light",
          }}
        >
          {destination.description}
        </Animated.Text>
      </View>

      <View className="h-20"></View>
    </ScrollView>
  );
};

export default Overview;

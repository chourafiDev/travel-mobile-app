import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { destinations } from "../../../utils/data";
import Destination from "../../components/Destination";
import Search from "../../components/Search";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function FavoritesScreen({ navigation }) {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}
      <View className="flex-row justify-between items-center px-4 mt-3 mb-4">
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
          Your Favorites
        </Text>
        <View></View>
      </View>

      {/* Search */}
      <Search withFilter={false} placeHolder="Find your favorites..." />

      <View className="px-4 mt-3 mb-4">
        <Text
          className="text-dark/70 dark:text-white/70 text-base"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          8 Destination are found
        </Text>
      </View>

      {/* Destinations */}
      <FlatList
        className="px-3"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={destinations}
        renderItem={({ item, index }) => {
          return (
            <Animated.View
              entering={FadeInDown.delay(250 * index)}
              className={`flex-1 flex-col mx-1 ${index % 2 != 0 && "mt-6"} ${
                (index + 1) % 2 == 0 && "mt-5"
              }`}
            >
              <Destination key={item.title} destination={item} />
            </Animated.View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Not items found</Text>}
        ListFooterComponent={<View className="h-5"></View>}
      />
    </SafeAreaView>
  );
}

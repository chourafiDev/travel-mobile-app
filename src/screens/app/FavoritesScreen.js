import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { FAVORITES } from "../../constants/routes";
import { destinations } from "../../../utils/data";
import Destination from "../../components/Destination";
import Search from "../../components/Search";

export default function FavoritesScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}
      <View className="flex-row justify-between items-center px-4 mt-3 mb-6">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name="arrow-left"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color="#222B45"
          />
        </TouchableOpacity>
        <Text
          className="text-dark text-xl"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          Favorites
        </Text>
        <View></View>
      </View>

      {/* Search */}
      <Search withFilter={false} placeHolder="Find your favorites..." />

      {/* Destinations */}
      <FlatList
        className="mt-5 px-3"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={destinations}
        renderItem={({ item, index }) => {
          return (
            <View className={`flex-1 flex-col mx-1 `}>
              <Destination key={item.title} destination={item} />
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Not items found</Text>}
        ListFooterComponent={<View className="h-20"></View>}
        ItemSeparatorComponent={<View className="h-3"></View>}
      />
    </SafeAreaView>
  );
}

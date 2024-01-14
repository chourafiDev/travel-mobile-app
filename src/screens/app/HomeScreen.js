import React, { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { bg1, user } from "../../../utils/assets";
import Icon from "react-native-vector-icons/Feather";
import Category from "../../components/Category";
import { categories, destinations } from "../../../utils/data";
import Destination from "../../components/Destination";
import { shadow } from "../../../utils/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../../components/Search";
import { DESTINATIONS } from "../../constants/routes";
import { useColorScheme } from "nativewind";

const HomeScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();

  // select catgeory
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSelectCategory = (item) => {
    if (selectedCategory === item) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(item);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ImageBackground
          source={bg1}
          resizeMode="stretch"
          className="h-40 w-full"
        >
          <View
            className="flex flex-row justify-between items-center px-4 pb-6 pt-8"
            style={[shadow.boxShadow]}
          >
            <View className="flex flex-row gap-3 items-center">
              <View
                onPress={() => {
                  navigation.navigate(PROFILE);
                }}
                className="border-[2px] border-white w-16 h-16 rounded-full overflow-hidden"
                style={[shadow.boxShadow]}
              >
                <Image source={user} className="w-full h-full" />
              </View>
              <View>
                <Text
                  className="text-white/80 text-lg"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  Welcome 👋
                </Text>
                <Text
                  className="text-white text-2xl"
                  style={{ fontFamily: "baiJamjuree-bold" }}
                >
                  @chourafi
                </Text>
              </View>
            </View>
            <TouchableOpacity
              className="w-10 h-10 bg-white dark:bg-dark-2 rounded-full items-center justify-center "
              style={[shadow.boxShadow]}
              onPress={() => navigation.openDrawer()}
            >
              <Icon
                name="menu"
                style={{
                  fontFamily: "baiJamjuree-bold",
                }}
                size={16}
                color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View className="px-4 mt-3 mb-6">
          <Text
            className="text-dark dark:text-white text-[28px] -mb-2"
            style={{ fontFamily: "baiJamjuree-regular" }}
          >
            Explore <Text className="text-brand">Naural</Text>
          </Text>
          <Text
            className="text-dark dark:text-white font-semibold text-[30px]"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Beauty of the Earth.
          </Text>
          <View className="flex-row gap-2 items-center">
            <Icon
              name="map-pin"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
              size={14}
              color="#23A892"
            />
            <Text
              className="text-dark/60 dark:text-white/60"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Marrakech, Morocco
            </Text>
          </View>
        </View>

        {/* Search */}
        <Search withFilter={true} placeHolder="Find the world..." />

        {/* Categories */}
        <View className="px-4 mt-10 space-y-5">
          <View className="flex-row justify-between items-center">
            <Text
              className="text-dark/80 dark:text-white/80 text-[22px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Categories
            </Text>
            <TouchableOpacity className="bg-gray-1 dark:bg-dark-2/70  rounded-lg px-3 py-2">
              <Text
                className="text-dark/80 text-sm dark:text-white/80"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
            }}
          >
            {categories.map((category, i) => {
              return (
                <Category
                  key={i}
                  category={category}
                  selectedCategory={selectedCategory}
                  handleSelectCategory={handleSelectCategory}
                />
              );
            })}
          </ScrollView>
        </View>

        {/* Destinations */}
        <View className="px-4 mt-6 space-y-5">
          <View className="flex-row justify-between items-center">
            <Text
              className="text-dark/80 dark:text-white/80 text-[22px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Top 10 Destinations
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(DESTINATIONS)}
              className="bg-gray-1 dark:bg-dark-2/70 rounded-lg px-3 py-2"
            >
              <Text
                className="text-dark/80 dark:text-white/80 text-sm"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={destinations}
            renderItem={({ item }) => {
              return (
                <View className="flex-1 flex-col pb-4 w-56">
                  <Destination key={item.title} destination={item} />
                </View>
              );
            }}
            ItemSeparatorComponent={<View className="w-3"></View>}
            ListEmptyComponent={<Text>Not items found</Text>}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

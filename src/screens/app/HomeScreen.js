import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Search from "../../components/Search";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import Categories from "../../components/home/Categories";
import Destinations from "../../components/home/Destinations";
import Header from "../../components/home/Header";

const HomeScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();

  // category selected
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <View className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      <StatusBar style={colorScheme == "light" ? "dark" : "light"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header navigation={navigation} />

        {/* Search */}
        <Search withFilter={true} placeHolder="Find the world..." />

        {/* Categories */}
        <Categories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        {/* Destinations */}
        <Destinations />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

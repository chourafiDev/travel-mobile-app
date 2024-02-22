import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useGetCategoriesQuery } from "../../store/services/categoriesApiSlice";
import { ScrollView } from "react-native-gesture-handler";
import Category from "./Category";
import Loading from "../Loading";
import { useNavigation } from "@react-navigation/native";
import { DESTINATIONS } from "../../constants/routes";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const navigation = useNavigation();

  // fetch categories
  const { data: categories, isLoading } = useGetCategoriesQuery();

  // select catgeory
  const handleSelectCategory = (item) => {
    if (selectedCategory === item) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(item);
    }
  };

  return (
    <View className="px-4 mt-10 space-y-5">
      <View className="flex-row justify-between items-center">
        <Text
          className="text-dark/80 dark:text-white/80 text-[22px]"
          style={{ fontFamily: "baiJamjuree-semibold" }}
        >
          Categories
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(DESTINATIONS)}
          className="bg-gray-1 dark:bg-dark-2/70  rounded-lg px-3 py-2"
        >
          <Text
            className="text-dark/80 text-sm dark:text-white/80"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <View className="pb-5">
          <Loading />
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        >
          {categories?.map((category) => {
            return (
              <Category
                key={category?.id}
                category={category}
                selectedCategory={selectedCategory}
                handleSelectCategory={handleSelectCategory}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default Categories;

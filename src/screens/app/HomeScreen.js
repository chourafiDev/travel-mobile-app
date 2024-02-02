import React, { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { bg1, luggage } from "../../../utils/assets";
import Icon from "react-native-vector-icons/Feather";
import { shadow } from "../../../utils/theme";
import Search from "../../components/Search";
import { NOTIFICATION } from "../../constants/routes";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import Categories from "../../components/home/Categories";
import Destinations from "../../components/home/Destinations";

const HomeScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();

  const { user } = useSelector((state) => state.auth);

  // category selected
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <View className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      <StatusBar style={colorScheme == "light" ? "dark" : "light"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ImageBackground
          source={bg1}
          resizeMode="stretch"
          className="h-52 w-full"
        >
          <View
            className="flex flex-row justify-between items-center px-4 pb-6 pt-14"
            style={[shadow.boxShadow]}
          >
            <View className="flex flex-row gap-3 items-center">
              <View
                onPress={() => {
                  navigation.navigate(PROFILE);
                }}
                className="border-[2px] border-white w-14 h-14 rounded-[14px] overflow-hidden"
                style={[shadow.boxShadow]}
              >
                <Image source={{ uri: user.image }} className="w-full h-full" />
              </View>
              <View>
                <Text
                  className="text-white/80 text-lg"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  👋 Welcome
                </Text>
                <Text
                  className="text-white text-2xl"
                  style={{ fontFamily: "baiJamjuree-bold" }}
                >
                  @{user.username}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center gap-1">
              <TouchableOpacity
                className="w-10 h-10 bg-white dark:bg-dark-2 rounded-l-2xl items-center justify-center "
                style={[shadow.boxShadow]}
                onPress={() => navigation.navigate(NOTIFICATION)}
              >
                <Icon
                  name="bell"
                  style={{
                    fontFamily: "baiJamjuree-bold",
                  }}
                  size={16}
                  color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                className="w-10 h-10 bg-white dark:bg-dark-2 rounded-r-2xl items-center justify-center "
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
          </View>
        </ImageBackground>

        <View className="px-4 mt-3 mb-6">
          <View className="-mb-2 flex-row items-end gap-2">
            <Text
              className="text-dark dark:text-white text-[28px]"
              style={{ fontFamily: "baiJamjuree-regular" }}
            >
              Explore <Text className="text-brand">Naural</Text>
            </Text>
            <Image source={luggage} className="w-20 h-8 rounded-xl mb-[10px]" />
          </View>
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

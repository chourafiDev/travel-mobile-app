import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { user } from "../../../utils/assets";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EditProfileInfo from "../../components/Foms/EditProfileInfo";
import EditProfilePassword from "../../components/Foms/EditProfilePassword";
import TopTabBar from "../../components/layout/TopTabBar";

const Tab = createMaterialTopTabNavigator();

export default function SettingScreen({ navigation }) {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}
      <View className="flex-row justify-between items-center px-4 mt-3 mb-6">
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
          Setting
        </Text>
        <View></View>
      </View>

      {/* Edit Image */}
      <View
        className="flex-row items-center justify-between mx-4 border border-dark/5 rounded-xl p-3 bg-white dark:bg-dark-2"
        style={[
          colorScheme == "light" && shadow.boxShadow,
          { fontFamily: "baiJamjuree-regular" },
        ]}
      >
        <View className="flex-row items-center gap-3">
          <Image source={user} className="w-14 h-14 rounded-full" />
          <View>
            <Text
              className="text-lg text-dark dark:text-white"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
            >
              Abdelmonaime Chourafi
            </Text>
            <Text
              className="text-sm text-dark/60 dark:text-white/60"
              style={{
                fontFamily: "baiJamjuree-medium",
              }}
            >
              @chourafi_abdelmonaime
            </Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          className="bg-brand dark:bg-brand w-9 h-9 rounded-lg items-center justify-center"
        >
          <Text
            className="text-dark"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            <Icon
              name="edit-2"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
              size={19}
              color="#fbfbfbfb"
            />
          </Text>
        </TouchableOpacity>
      </View>

      {/* Top Tab */}
      <View className="px-4 mt-10 flex-1">
        <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
          <Tab.Screen name="Edit info" component={EditProfileInfo} />
          <Tab.Screen name="Edit password" component={EditProfilePassword} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

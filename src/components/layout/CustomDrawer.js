import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { bg1, defaultImage } from "../../../utils/assets";
import {
  DESTINATIONS,
  FAVORITES,
  HOME,
  HOME_TAB,
  SETTING,
} from "../../constants/routes";
import Icon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCredentials } from "../../store/features/authSlice";
import { useGetProfileQuery } from "../../store/services/profileApiSlice";

const CustomDrawer = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCredentials());
  };

  // fetch profile info
  const { data: profile } = useGetProfileQuery();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark">
      <ImageBackground
        source={bg1}
        resizeMode="stretch"
        className="h-52 w-full mb-6"
      >
        <View className="px-6 py-4">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SETTING);
            }}
            className="border-[2px] border-white w-16 h-16 rounded-[14px] overflow-hidden"
          >
            <Image
              // source={{ uri: profile?.imageUrl }}
              source={
                profile?.imageUrl ? { uri: profile?.imageUrl } : defaultImage
              }
              className="w-full h-full"
            />
          </TouchableOpacity>

          <View className="mt-3">
            <Text
              className="text-[20px] text-white"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              {profile?.firstName} {profile?.lastName}
            </Text>
            <Text
              className="text-[18px] text-white/80 -mt-1"
              style={{ fontFamily: "baiJamjuree-regular" }}
            >
              @{profile?.username}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View className="flex-1 p-4 w-full">
        <View className="flex-1 space-y-1">
          <TouchableOpacity
            className="flex-row space-x-5 items-center mb-4"
            onPress={() => {
              navigation.navigate(HOME);
            }}
          >
            <Icon
              name="home"
              size={19}
              color={colorScheme == "light" ? "#222B45B2" : "#778da9"}
            />

            <Text
              className="text-dark dark:text-white text-[17px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row space-x-5 items-center mb-4"
            onPress={() => {
              navigation.navigate(DESTINATIONS);
            }}
          >
            <Icon
              name="map"
              size={17}
              color={colorScheme == "light" ? "#222B45B2" : "#778da9"}
            />

            <Text
              className="text-dark dark:text-white text-[17px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Destinations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row space-x-5 items-center mb-4"
            onPress={() => {
              navigation.navigate(FAVORITES);
            }}
          >
            <Icon
              name="heart"
              size={18}
              color={colorScheme == "light" ? "#222B45B2" : "#778da9"}
            />

            <Text
              className="text-dark dark:text-white text-[17px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Favorites
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row space-x-5 items-center mb-4"
            onPress={() => {
              navigation.navigate(SETTING);
            }}
          >
            <Icon
              name="settings"
              size={19}
              color={colorScheme == "light" ? "#222B45B2" : "#778da9"}
            />

            <Text
              className="text-dark dark:text-white text-[17px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Setting
            </Text>
          </TouchableOpacity>

          <View className="pt-4">
            <TouchableOpacity
              activeOpacity={0.8}
              className="border border-gray-1 dark:border-dark-2 flex-row items-center p-3 rounded-2xl bg-white dark:bg-dark-2 shadow-lg shadow-dark/20"
              onPress={toggleColorScheme}
            >
              <Icon
                name={colorScheme == "light" ? "moon" : "sun"}
                size={18}
                color={colorScheme == "light" ? "#222B45B2" : "#778da9"}
              />
              <Text
                className="text-dark dark:text-white text-[16px] ml-3"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {colorScheme == "light" ? "Dark" : "Light"} mode
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="space-y-3 border-t-[1px] border-dark/5 dark:border-white/5 pt-4">
          <TouchableOpacity
            className="flex-row space-x-5 items-center"
            onPress={() => {
              navigation.navigate(HOME_TAB);
            }}
          >
            <Icon
              name="help-circle"
              size={18}
              color={colorScheme == "light" ? "#222B45B2" : "#778da9"}
            />

            <Text
              className="text-dark dark:text-white text-[17px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Help Center
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row space-x-5 items-center"
            onPress={handleLogout}
          >
            <Icon
              name="log-out"
              size={18}
              color={colorScheme == "light" ? "#222B45B2" : "#778da9"}
            />

            <Text
              className="text-dark dark:text-white text-[17px]"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Logout
            </Text>
          </TouchableOpacity>
          <Text
            className="text-dark/40 dark:text-white/40 text-sm pt-4"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            Version 1.0.0 | chourafidev.com
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

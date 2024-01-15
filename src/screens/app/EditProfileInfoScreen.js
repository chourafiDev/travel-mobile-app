import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../../utils/theme";
import Icon from "react-native-vector-icons/Feather";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { user } from "../../../utils/assets";
import { HOME_TAB } from "../../constants/routes";
import GradientButton from "../../components/ui/GradientButton";

const EditProfileInfoScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top }}
      className="flex-1 bg-[#f8f8fa] dark:bg-dark px-4"
    >
      {/* header */}
      <View className="flex-row items-center mt-3 mb-6">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
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
          className="text-dark dark:text-white text-xl ml-4"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          Edit your About info
        </Text>
      </View>

      {/* Edit Image */}
      <View className="mb-8 mt-4">
        <Animated.View
          entering={FadeInDown.delay(60).duration(1000).springify()}
        >
          <Text
            className="text-dark text-lg mb-3"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            Profile Picture
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(100).duration(1000).springify()}
          className="w-full flex-row items-center justify-between border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2"
          style={[colorScheme == "light" && shadow.boxShadow]}
        >
          <View
            style={[colorScheme == "light" && shadow.boxShadow]}
            className="items-center mt-3 mb-2"
          >
            <Image source={user} className="w-20 h-20 rounded-full" />
          </View>
          <TouchableOpacity className="bg-gray-1 dark:bg-dark px-4 py-2 rounded-xl">
            <Text
              className="text-dark/60 dark:text-white/60"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Edit Details */}
      <View>
        <Animated.View
          entering={FadeInDown.delay(180).duration(1000).springify()}
        >
          <Text
            className="text-dark text-lg mb-3"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            Profile Details
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
          className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
          style={[colorScheme == "light" && shadow.boxShadow]}
        >
          <Icon
            name="user"
            size={15}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
          <TextInput
            placeholder="Username"
            className="text-dark dark:text-white flex-1 ml-3"
            style={[{ fontFamily: "baiJamjuree-regular" }]}
            placeholderTextColor={
              colorScheme == "light" ? "#222B4580" : "#ffffff"
            }
          />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(300).duration(1000).springify()}
          className="w-full border flex-row items-center border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
          style={[colorScheme == "light" && shadow.boxShadow]}
        >
          <Icon
            name="user"
            size={15}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
          <TextInput
            placeholder="First Name"
            className="text-dark dark:text-white flex-1 ml-3"
            style={[{ fontFamily: "baiJamjuree-regular" }]}
            placeholderTextColor={
              colorScheme == "light" ? "#222B4580" : "#ffffff"
            }
          />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          className="w-full border flex-row items-center border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
          style={[colorScheme == "light" && shadow.boxShadow]}
        >
          <Icon
            name="user"
            size={15}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
          <TextInput
            placeholder="Last Name"
            className="text-dark dark:text-white flex-1 ml-3"
            style={[{ fontFamily: "baiJamjuree-regular" }]}
            placeholderTextColor={
              colorScheme == "light" ? "#222B4580" : "#ffffff"
            }
          />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(500).duration(1000).springify()}
          className="w-full border flex-row items-center border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
          style={[colorScheme == "light" && shadow.boxShadow]}
        >
          <Icon
            name="mail"
            size={15}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
          <TextInput
            placeholder="Email address"
            className="text-dark dark:text-white flex-1 ml-3"
            style={[{ fontFamily: "baiJamjuree-regular" }]}
            placeholderTextColor={
              colorScheme == "light" ? "#222B4580" : "#ffffff"
            }
          />
        </Animated.View>
      </View>

      {/* Footer */}
      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
        className="mt-auto mb-6"
      >
        <GradientButton label="Edit" icon="edit-2" route={HOME_TAB} />
      </Animated.View>
    </View>
  );
};

export default EditProfileInfoScreen;

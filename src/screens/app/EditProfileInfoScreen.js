import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../../utils/theme";
import Icon from "react-native-vector-icons/Feather";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { defaultImage } from "../../../utils/assets";
import GradientButton from "../../components/ui/GradientButton";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../store/services/profileApiSlice";
import Toast from "react-native-toast-message";
import Loading from "../../components/Loading";
import * as ImagePicker from "expo-image-picker";

const EditProfileInfoScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  // fetch profile info
  const { data: profile, isLoading: isProfileLoad } = useGetProfileQuery();

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imagePrev, setImagePrev] = useState();

  useEffect(() => {
    if (profile) {
      setUsername(profile?.username);
      setFirstName(profile?.firstName);
      setLastName(profile?.lastName);
      setEmail(profile?.email);
      setImagePrev(profile?.imageUrl);
    }
  }, [profile]);

  // Upload Image and Get base64
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    const { uri, base64 } = result.assets[0];

    if (!result.canceled) {
      const dotIndex = uri.lastIndexOf(".");
      const extensionImg = uri.slice(dotIndex + 1).toLowerCase();

      let imageUri = `data:image/${extensionImg};base64,${base64}`;

      setImage(imageUri);
      setImagePrev(imageUri);
    }
  };

  // Edit profile
  const [updateProfile, { isLoading, isSuccess }] = useUpdateProfileMutation();

  const submitUpdateProfile = async () => {
    try {
      const data = {
        username,
        email,
        firstName,
        lastName,
        image,
      };

      await updateProfile(data).unwrap();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: "success",
        text1: "Profile updated successfully",
      });
    }
  }, [isSuccess]);

  if (isProfileLoad) {
    return <Loading />;
  }

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
            <Image
              source={imagePrev ? { uri: imagePrev } : defaultImage}
              className="w-20 h-20 rounded-full"
            />
          </View>
          <TouchableOpacity
            onPress={pickImage}
            className="bg-gray-1 dark:bg-dark px-4 py-2 rounded-xl"
          >
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
            className="text-dark dark:text-white text-lg mb-3"
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
            value={username}
            onChangeText={setUsername}
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
            value={firstName}
            onChangeText={setFirstName}
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
            value={lastName}
            onChangeText={setLastName}
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
            value={email}
            onChangeText={setEmail}
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
        <GradientButton
          label="Edit"
          icon="edit-2"
          type="primary"
          size="lg"
          isLoading={isLoading}
          onPress={submitUpdateProfile}
        />
      </Animated.View>
    </View>
  );
};

export default EditProfileInfoScreen;

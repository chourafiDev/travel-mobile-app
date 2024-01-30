import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import GradientButton from "../../components/ui/GradientButton";
import { roles } from "../../../utils/data";
import { defaultImage } from "../../../utils/assets";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import { useUpdateUserMutation } from "../../store/services/usersApiSlice";

const EditUser = ({ sheetRef, user, handleSnapPressCloseEdit }) => {
  const { colorScheme } = useColorScheme();

  const snapPoints = useMemo(() => ["84%"], []);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  // roles
  const [role, setRole] = useState(user.role);
  const handleSelectRole = (item) => {
    if (role === item) {
      setRole("");
    } else {
      setRole(item);
    }
  };

  // handle image
  const [image, setImage] = useState(null);
  const [imagePrev, setImagePrev] = useState(
    user?.imageUrl ? user?.imageUrl : ""
  );

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

  // handle update user
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);

  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();

  const submitUpdateUser = async () => {
    try {
      const data = {
        username,
        email,
        firstName,
        lastName,
        role,
        image,
      };

      const payload = { id: user.id, data };
      await updateUser(payload).unwrap();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setImage("");
      handleSnapPressCloseEdit();

      Toast.show({
        type: "success",
        text1: "User updated successfully",
      });
    }
  }, [isSuccess]);

  return (
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#222B45",
      }}
    >
      <BottomSheetView>
        <View className="px-4 justify-between h-full pb-2">
          <View className="space-y-5">
            <View>
              <Text
                className="text-dark dark:text-white text-[17px] mb-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Image
              </Text>

              <View className="h-20 w-20 relative">
                <Image
                  source={imagePrev ? { uri: imagePrev } : defaultImage}
                  className="h-full w-full rounded-2xl"
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-brand justify-center items-center"
                  onPress={pickImage}
                >
                  <Icon name="edit-2" size={14} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text
                className="text-dark dark:text-white text-[17px] mb-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Usename
              </Text>

              <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                <Icon
                  name="user"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  placeholder="username"
                  className="text-dark dark:text-white flex-1 ml-3"
                  style={[{ fontFamily: "baiJamjuree-regular" }]}
                  placeholderTextColor={
                    colorScheme == "light" ? "#222B4580" : "#ffffff"
                  }
                />
              </View>
            </View>

            <View>
              <Text
                className="text-dark dark:text-white text-[17px] mb-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                First name
              </Text>

              <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                <Icon
                  name="user"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="first name"
                  value={firstName}
                  onChangeText={setFirstName}
                  className="text-dark dark:text-white flex-1 ml-3"
                  style={[{ fontFamily: "baiJamjuree-regular" }]}
                  placeholderTextColor={
                    colorScheme == "light" ? "#222B4580" : "#ffffff"
                  }
                />
              </View>
            </View>

            <View>
              <Text
                className="text-dark dark:text-white text-[17px] mb-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Last name
              </Text>

              <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                <Icon
                  name="user"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="last name"
                  value={lastName}
                  onChangeText={setLastName}
                  className="text-dark dark:text-white flex-1 ml-3"
                  style={[{ fontFamily: "baiJamjuree-regular" }]}
                  placeholderTextColor={
                    colorScheme == "light" ? "#222B4580" : "#ffffff"
                  }
                />
              </View>
            </View>

            <View>
              <Text
                className="text-dark dark:text-white text-[17px] mb-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Email
              </Text>

              <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                <Icon
                  name="at-sign"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="email"
                  value={email}
                  onChangeText={setEmail}
                  className="text-dark dark:text-white flex-1 ml-3"
                  style={[{ fontFamily: "baiJamjuree-regular" }]}
                  placeholderTextColor={
                    colorScheme == "light" ? "#222B4580" : "#ffffff"
                  }
                />
              </View>
            </View>

            <View>
              <Text
                className="text-dark dark:text-white  text-[17px] mb-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Roles
              </Text>
              <View className="flex-row gap-2 flex-wrap">
                {roles.map(({ key, value }) => (
                  <TouchableOpacity
                    onPress={() => handleSelectRole(key)}
                    activeOpacity={0.6}
                    key={key}
                    className={` text-base px-5 py-[10px] rounded-full border ${
                      role === key
                        ? "bg-brand/10 border-brand/40"
                        : "bg-gray-100 dark:bg-dark-2 border-gray-100 dark:border-gray-1/5"
                    }`}
                  >
                    <Text
                      className={`${
                        role === key ? "text-brand" : "text-gray-400"
                      }`}
                    >
                      {value}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <GradientButton
            label="Edit"
            icon="edit-2"
            type="primary"
            size="lg"
            isLoading={isLoading}
            onPress={submitUpdateUser}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default EditUser;

import React, { useCallback, useEffect, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import GradientButton from "./ui/GradientButton";
import Icon from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import { useUpdateImageProfileMutation } from "../store/services/profileApiSlice";
import Toast from "react-native-toast-message";

const ChangeImage = ({ handleSnapClosePress, sheetRef, setImage, image }) => {
  const { colorScheme } = useColorScheme();

  const snapPoints = useMemo(() => ["48%"], []);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

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
    }
  };

  const [updateImage, { isLoading, isSuccess }] =
    useUpdateImageProfileMutation();

  const submitUpdateImage = async () => {
    try {
      const data = {
        image,
      };

      await updateImage(data).unwrap();
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
      handleSnapClosePress();

      Toast.show({
        type: "success",
        text1: "Image updated successfully",
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
        <View className="px-4 justify-between h-full">
          <View>
            <View className="mt-4 mb-10">
              <Text
                className="text-dark text-center dark:text-white text-xl mb-3"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                Change picture
              </Text>
              <Text
                className="text-dark/40 text-center dark:text-white/40 text-base px-6"
                style={{ fontFamily: "baiJamjuree-regular" }}
              >
                Click on{" "}
                <Text
                  className="text-dark/50 dark:text-white/50"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  "Select Photo"
                </Text>{" "}
                or{" "}
                <Text
                  className="text-dark/50 dark:text-white/50"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  "Take Photo"
                </Text>{" "}
                to change your profile picture
              </Text>
            </View>

            <View className="flex-row gap-2">
              <TouchableOpacity
                onPress={pickImage}
                className="flex-1 justify-center items-center bg-gray-1/30 dark:bg-dark-2/30 border border-gray-1 dark:border-gray-1/10 rounded-lg p-8"
              >
                <Icon
                  name="folder"
                  size={20}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />

                <Text
                  className="text-lg text-dark/60 dark:text-white mt-3"
                  style={{
                    fontFamily: "baiJamjuree-medium",
                  }}
                >
                  Select Photo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 justify-center items-center bg-gray-1/30 dark:bg-dark-2/30 border border-gray-1 dark:border-gray-1/10 rounded-lg p-8">
                <Icon
                  name="camera"
                  size={20}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <Text
                  className="text-lg text-dark/60 dark:text-white mt-3"
                  style={{
                    fontFamily: "baiJamjuree-medium",
                  }}
                >
                  Take Photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-6 mb-4">
            <GradientButton
              label="Apply Edit"
              icon="edit-2"
              type="primary"
              size="lg"
              isLoading={isLoading}
              onPress={submitUpdateImage}
            />
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default ChangeImage;

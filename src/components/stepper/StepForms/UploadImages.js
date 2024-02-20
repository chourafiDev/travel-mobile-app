import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Feather";
import Animated, { FadeInRight } from "react-native-reanimated";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setCurrentStep,
  setFormData,
} from "../../../store/features/stepperSlice";
import Navigation from "../Navigation";

const UploadImages = ({ images }) => {
  const dispatch = useDispatch();
  const { currentStep, formData } = useSelector((state) => state.stepper);

  // handle upload images
  const [imgError, setImgError] = useState("");
  const [imgPreview, setImgPreview] = useState(images);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 1,
      selectionLimit: 5,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      let imageUri = [];
      for (let i = 0; i < result.assets.length; i++) {
        const { uri, base64 } = result.assets[i];

        const dotIndex = uri.lastIndexOf(".");
        const extensionImg = uri.slice(dotIndex + 1).toLowerCase();

        imageUri.push(`data:image/${extensionImg};base64,${base64}`);
      }

      setImgError("");
      dispatch(setFormData({ images: imageUri }));
    }
  };

  const onNext = async () => {
    if (!formData.images && imgPreview.length === 0) {
      return setImgError("you must provide at least 1 image");
    }
    dispatch(setCurrentStep(currentStep + 1));
  };
  return (
    <Animated.View
      entering={FadeInRight.delay(100).duration(500).springify()}
      className="justify-between flex-1"
    >
      <View>
        <View>
          <Text
            className="text-dark dark:text-white text-[17px] mb-4"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            Upload Images
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            className={`rounded-2xl justify-center items-center border h-56 bg-gray-1/50 dark:bg-dark-2 ${
              imgError ? "border-rose-300" : "border-gray-1"
            }`}
            onPress={pickImage}
          >
            <View className="w-16 h-16 bg-brand/10 rounded-full justify-center items-center border border-brand/10">
              <Icon name="upload" color="#23A892" size={29} />
            </View>
            <Text
              className="text-dark/50 dark:text-white text-[18px] mt-4"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Choose images
            </Text>
            <Text
              className="text-dark/30 dark:text-white text-[15px]"
              style={{ fontFamily: "baiJamjuree-regular" }}
            >
              Support files JPG, JPEG & PNG.
            </Text>
            <Text
              className="text-dark/30 dark:text-white text-[15px]"
              style={{ fontFamily: "baiJamjuree-regular" }}
            >
              5 images max to upload
            </Text>
          </TouchableOpacity>
        </View>

        {imgError && (
          <Text
            className="text-rose-500 text-sm mt-1"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            {imgError}
          </Text>
        )}

        <View className="flex-row gap-x-2 mt-6">
          {formData.images
            ? formData.images?.map((image, i) => (
                <Image
                  key={i}
                  source={{ uri: image }}
                  className="h-16 w-16 rounded-2xl"
                />
              ))
            : imgPreview?.map((image, i) => (
                <Image
                  key={i}
                  source={{ uri: image }}
                  className="h-16 w-16 rounded-2xl"
                />
              ))}
        </View>
      </View>

      {/* Stepper navigation */}
      <Navigation onPress={onNext} />
    </Animated.View>
  );
};

export default UploadImages;

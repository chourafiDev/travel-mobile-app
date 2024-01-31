import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import GradientButton from "../ui/GradientButton";
import * as ImagePicker from "expo-image-picker";
import { useGetCategoriesQuery } from "../../store/services/categoriesApiSlice";
import { useCreateDestinationMutation } from "../../store/services/destinationsApiSlice";
import Toast from "react-native-toast-message";

const AddDestination = ({ sheetRef, handleSnapPressCloseAdd }) => {
  const { colorScheme } = useColorScheme();

  const snapPoints = useMemo(() => ["92%"], []);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  // fetch categories
  const { data: categories } = useGetCategoriesQuery();

  // handle select category
  const [category, setCategory] = useState("");
  const handleSelectCategory = (item) => {
    if (category === item) {
      setCategory("");
    } else {
      setCategory(item);
    }
  };

  // handle image
  const [images, setImages] = useState([]);

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

      setImages(imageUri);
    }
  };

  // handle create destination
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [duration, setDuration] = useState(null);

  const [createDestination, { isLoading, isSuccess }] =
    useCreateDestinationMutation();

  const submitDestination = async () => {
    try {
      const data = {
        title,
        description,
        categoryId: Number(category),
        price: Number(price),
        duration: Number(duration),
        images,
      };

      await createDestination(data).unwrap();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setDescription("");
      setPrice("");
      setDuration("");
      setCategory("");
      setImages([]);
      handleSnapPressCloseAdd();

      Toast.show({
        type: "success",
        text1: "Destination created successfully",
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

              <TouchableOpacity
                activeOpacity={0.8}
                className="rounded-2xl flex-row justify-center items-center border border-dark/10 py-3 bg-white dark:bg-dark-2"
                onPress={pickImage}
              >
                <Text
                  className="text-dark/50 dark:text-white text-[17px] mr-3"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  Choose images (5 max)
                </Text>
                <Icon
                  name="plus"
                  size={14}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
              </TouchableOpacity>
            </View>

            <View className="flex-row gap-x-2">
              {images.length > 0 &&
                images.map((image, i) => (
                  <Image
                    key={i}
                    source={{ uri: image }}
                    className="h-16 w-16 rounded-2xl"
                  />
                ))}
            </View>

            <View>
              <Text
                className="text-dark dark:text-white text-[17px] mb-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Title
              </Text>

              <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                <Icon
                  name="map"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="title"
                  value={title}
                  onChangeText={setTitle}
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
                Description
              </Text>

              <View className="w-full flex-row border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                <Icon
                  name="file-text"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="description"
                  value={description}
                  onChangeText={setDescription}
                  className="text-dark dark:text-white flex-1 ml-3"
                  numberOfLines={6}
                  style={[
                    { fontFamily: "baiJamjuree-regular" },
                    {
                      justifyContent: "flex-start",
                      textAlignVertical: "top",
                      height: 150,
                    },
                  ]}
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
                Categeory
              </Text>

              <View className="flex-row gap-2 flex-wrap">
                {categories &&
                  categories.map(({ id, content, imageUrl }) => (
                    <TouchableOpacity
                      onPress={() => handleSelectCategory(id)}
                      activeOpacity={0.6}
                      key={id}
                      className={`flex-row items-center text-base p-1 rounded-xl border ${
                        category === id
                          ? "bg-brand/10 border-brand/40"
                          : "bg-gray-100 dark:bg-dark-2 border-gray-100 dark:border-gray-1/5"
                      }`}
                    >
                      <Image
                        source={{ uri: imageUrl }}
                        className="w-9 h-9 rounded-xl mr-2"
                      />
                      <Text
                        className={`pr-2 ${
                          category === id ? "text-brand" : "text-gray-400"
                        }`}
                        style={{ fontFamily: "baiJamjuree-semibold" }}
                      >
                        {content}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>

            <View className="flex-row gap-x-2">
              <View className="flex-1">
                <Text
                  className="text-dark dark:text-white text-[17px] mb-1"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  Price
                </Text>

                <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                  <Icon
                    name="dollar-sign"
                    size={15}
                    color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                  />

                  <TextInput
                    placeholder="price"
                    value={price}
                    onChangeText={setPrice}
                    className="text-dark dark:text-white flex-1 ml-3"
                    style={[{ fontFamily: "baiJamjuree-regular" }]}
                    keyboardType="numeric"
                    placeholderTextColor={
                      colorScheme == "light" ? "#222B4580" : "#ffffff"
                    }
                  />
                </View>
              </View>

              <View className="flex-1">
                <Text
                  className="text-dark dark:text-white text-[17px] mb-1"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  Duration
                </Text>

                <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                  <Icon
                    name="clock"
                    size={15}
                    color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                  />
                  <TextInput
                    placeholder="duration"
                    value={duration}
                    onChangeText={setDuration}
                    className="text-dark dark:text-white flex-1 ml-3"
                    style={[{ fontFamily: "baiJamjuree-regular" }]}
                    keyboardType="numeric"
                    placeholderTextColor={
                      colorScheme == "light" ? "#222B4580" : "#ffffff"
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <GradientButton
            label="Add"
            icon="plus"
            type="primary"
            size="lg"
            isLoading={isLoading}
            onPress={submitDestination}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default AddDestination;

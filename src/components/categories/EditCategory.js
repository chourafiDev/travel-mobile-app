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
import { useUpdateCatgoryMutation } from "../../store/services/categoriesApiSlice";
import Toast from "react-native-toast-message";

const EditCategory = React.memo(
  ({ sheetRef, category, handleSnapPressCloseEdit }) => {
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

    // handle image
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState(category.imageUrl);

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

    // handle update category
    const [content, setContent] = useState(category.content);

    const [updateCategory, { isLoading, isSuccess }] =
      useUpdateCatgoryMutation();

    const submitUpdateCategory = async () => {
      try {
        const data = {
          content,
          image,
        };

        const payload = { id: category.id, data };
        await updateCategory(payload).unwrap();
      } catch (err) {
        Toast.show({
          type: "error",
          text1: err.data?.message || err.error,
        });
      }
    };

    useEffect(() => {
      if (isSuccess) {
        // setContent("");
        setImage("");
        handleSnapPressCloseEdit();

        Toast.show({
          type: "success",
          text1: "Category updated successfully",
        });
      }
    }, [isSuccess]);

    return (
      <BottomSheetModal
        ref={sheetRef}
        snapPoints={snapPoints}
        keyboardBehavior="fillParent"
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
                    Choose an image
                  </Text>
                  <Icon
                    name="plus"
                    size={14}
                    color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                  />
                </TouchableOpacity>
              </View>

              {imagePrev && (
                <Image
                  source={{ uri: imagePrev }}
                  className="h-20 w-20 rounded-2xl"
                />
              )}

              <View>
                <Text
                  className="text-dark dark:text-white text-[17px] mb-1"
                  style={{ fontFamily: "baiJamjuree-medium" }}
                >
                  Title
                </Text>

                <View className="w-full flex-row items-center border border-dark/10 px-3 py-3 rounded-2xl bg-white dark:bg-dark-2">
                  <Icon
                    name="layers"
                    size={15}
                    color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                  />
                  <TextInput
                    placeholder="title"
                    value={content}
                    onChangeText={setContent}
                    className="text-dark dark:text-white flex-1 ml-3"
                    style={[{ fontFamily: "baiJamjuree-regular" }]}
                    placeholderTextColor={
                      colorScheme == "light" ? "#222B4580" : "#ffffff"
                    }
                  />
                </View>
              </View>
            </View>

            <GradientButton
              label="Edit"
              icon="edit-2"
              type="primary"
              size="lg"
              isLoading={isLoading}
              onPress={submitUpdateCategory}
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default EditCategory;

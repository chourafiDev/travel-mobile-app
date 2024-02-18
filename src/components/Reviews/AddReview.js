import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import GradientButton from "../ui/GradientButton";
import OutlineButton from "../ui/OutlineButton";
import { Rating } from "react-native-ratings";
import { useCreateReviewMutation } from "../../store/services/ReviewsApiSlice";
import Toast from "react-native-toast-message";

const AddReview = ({ sheetRef, handleCloseSnapPress, destinationId }) => {
  const { colorScheme } = useColorScheme();

  const snapPoints = useMemo(() => ["60%"], []);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  //   handle rating
  const [rating, setRating] = useState(0);
  const onFinishRating = (value) => {
    setRating(value);
  };

  // handle create review
  const [content, setContent] = useState(null);

  const [createReview, { isLoading, isSuccess }] = useCreateReviewMutation();

  const submitReview = async () => {
    try {
      const data = {
        content,
        rating,
        destinationId,
      };

      await createReview(data).unwrap();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setContent("");
      setRating(0);
      handleCloseSnapPress();

      Toast.show({
        type: "success",
        text1: "Rating created successfully",
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
      <View className="justify-between h-full pb-4">
        <View className="px-4 space-y-3">
          <View>
            <Text
              className="text-dark dark:text-white text-[17px] mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Content
            </Text>

            <View className="w-full flex-row border border-dark/5 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
              <TextInput
                value={content}
                onChangeText={setContent}
                className="text-dark dark:text-white flex-1"
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

          <View className="border border-dark/5 rounded-2xl">
            <Rating
              type="star"
              ratingTextColor={colorScheme == "dark" ? "#ffffff" : "#222B45"}
              startingValue={0}
              jumpValue={0.1}
              fractions={1}
              showRating
              onFinishRating={onFinishRating}
              tintColor={colorScheme == "dark" ? "#1A2138" : "#edf2fb"}
              style={{
                backgroundColor: colorScheme == "dark" ? "#1A2138" : "#ffffff",
                borderRadius: 14,
                paddingVertical: 18,
              }}
            />
          </View>
        </View>

        <View className="mt-3 px-4 flex-row gap-3">
          <View className="flex-1">
            <GradientButton
              label="Apply"
              icon="plus"
              type="primary"
              size="lg"
              onPress={submitReview}
              isLoading={isLoading}
            />
          </View>
          <View className="flex-1">
            <OutlineButton
              label="Cancel"
              type="primary"
              size="lg"
              onPress={handleCloseSnapPress}
            />
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default AddReview;

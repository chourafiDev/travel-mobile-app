import React, { useCallback, useEffect, useMemo } from "react";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import { Image, Text, View } from "react-native";
import GradientButton from "../ui/GradientButton";
import { alert } from "../../../utils/assets";
import OutlineButton from "../ui/OutlineButton";
import { useDeleteDestinationMutation } from "../../store/services/destinationsApiSlice";
import Toast from "react-native-toast-message";

const DeleteDestination = ({
  destinationId,
  sheetRef,
  handleSnapPressCloseDelete,
}) => {
  const { colorScheme } = useColorScheme();

  const snapPoints = useMemo(() => ["35%"], []);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  // handle delete category
  const [deleteDestination, { isLoading, isSuccess }] =
    useDeleteDestinationMutation();

  const submitDeleteDestination = async () => {
    try {
      await deleteDestination(destinationId).unwrap();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      handleSnapPressCloseDelete();

      Toast.show({
        type: "success",
        text1: "Destination deleted successfully",
      });
    }
  }, [isSuccess]);

  return (
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={snapPoints}
      initialSnapIndex={0}
      shouldMeasureContentHeight={true}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#222B45",
      }}
    >
      <BottomSheetView>
        <View className="px-4 h-full pb-2">
          <Image source={alert} className="w-16 h-16 mx-auto" />
          <Text
            className="text-dark dark:text-white text-2xl text-center my-4"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Are you sure?
          </Text>
          <Text
            className="text-dark/60 dark:text-white/60 text-lg text-center"
            style={{ fontFamily: "baiJamjuree-regular" }}
          >
            This action will delete this destination.
          </Text>
          <Text
            className="text-dark/60 dark:text-white/60 text-lg text-center"
            style={{ fontFamily: "baiJamjuree-regular" }}
          >
            You won't be able to revert this!
          </Text>

          <View className="flex-row gap-3 mt-5">
            <View className="flex-1">
              <GradientButton
                label="Yes, delete it"
                type="danger"
                size="lg"
                isLoading={isLoading}
                onPress={submitDeleteDestination}
              />
            </View>
            <View className="flex-1">
              <OutlineButton
                label="Cancel"
                type="danger"
                size="lg"
                onPress={handleSnapPressCloseDelete}
              />
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default DeleteDestination;

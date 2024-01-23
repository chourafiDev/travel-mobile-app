import React, { useCallback, useMemo } from "react";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import { Image, Text, View } from "react-native";
import GradientButton from "../../components/ui/GradientButton";
import { redAlert } from "../../../utils/assets";
import OutlineButton from "../ui/OutlineButton";

const DeleteUser = ({ sheetRef, handleSnapPressCloseDelete }) => {
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
          <Image source={redAlert} className="w-16 h-16 mx-auto" />
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
            This action will delete this user.
          </Text>
          <Text
            className="text-dark/60 dark:text-white/60 text-lg text-center"
            style={{ fontFamily: "baiJamjuree-regular" }}
          >
            You won't be able to revert this!
          </Text>

          <View className="flex-row gap-3 mt-5">
            <View className="flex-1">
              <GradientButton label="Yes, delete it" type="danger" size="lg" />
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

export default DeleteUser;
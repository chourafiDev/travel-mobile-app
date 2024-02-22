import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { View, Text } from "react-native";
import GradientButton from "../ui/GradientButton";
import { useColorScheme } from "nativewind";

const BookingDetails = ({ sheetRefDetails }) => {
  const { colorScheme } = useColorScheme();
  const snapPoints = useMemo(() => ["80%"], []);

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
      ref={sheetRefDetails}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#222B45",
      }}
    >
      <View className="justify-between h-full pb-4">
        <View className="px-4">
          <Text
            className="text-dark dark:text-white text-xl mb-4"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            Destinations Details
          </Text>
        </View>

        <View className="mt-3 px-4">
          <GradientButton
            label="Get Your Ticket"
            icon="download"
            type="primary"
            size="lg"
            // onPress={handleFilterDestinations}
            // isLoading={false}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BookingDetails;

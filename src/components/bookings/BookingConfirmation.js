import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { View, Text } from "react-native";
import GradientButton from "../ui/GradientButton";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { BOOKINGS } from "../../constants/routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BookingConfirmation = ({
  sheetRef,
  destination,
  handleSnapPressClose,
}) => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["40%"], []);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  const onPress = () => {
    navigation.navigate(BOOKINGS);
    handleSnapPressClose();
  };

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
      <View className="justify-between h-full pb-4 pt-10">
        <View className="items-center">
          <MaterialCommunityIcons name="map-check" size={60} color="#23A892" />
        </View>
        <View className="px-16">
          <Text
            className="text-dark dark:text-white text-xl mb-4 text-center"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            Thanks for your booking
          </Text>
          <Text
            className="text-dark/60 dark:text-white text-base mb-4 text-center"
            style={{ fontFamily: "baiJamjuree-regular" }}
          >
            You will receive an email about your booking details. Enjoy this
            wonderful destination to{" "}
            <Text
              className="text-dark/80 dark:text-white/60"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              {destination}.
            </Text>
          </Text>
        </View>
        <View className="mt-3 px-4">
          <GradientButton
            label="See your bookings"
            icon="eye"
            type="primary"
            size="lg"
            onPress={onPress}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BookingConfirmation;

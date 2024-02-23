import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import GradientButton from "../ui/GradientButton";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { bgPattern, whiteLogo } from "../../../utils/assets";

const BookingTicket = ({ sheetRefTicket, booking }) => {
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
      ref={sheetRefTicket}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#222B45",
      }}
    >
      {/* [#f8f8fa] */}
      <View className="justify-between h-full pb-4">
        <Animated.View
          entering={FadeInDown.delay(40)}
          className="bg-white dark:bg-dark justify-center items-center flex-1"
        >
          <ImageBackground source={bgPattern}>
            <View className="bg-brand/20 w-[250px] h-[450px] relative">
              <View className="w-full h-[330px]">
                <View className="absolute right-2 -top-2 w-[233px] flex-row items-center justify-between">
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                </View>

                <View className="justify-center items-center h-full">
                  <Image
                    source={whiteLogo}
                    className="w-20 h-20"
                    resizeMode="contain"
                  />

                  <View className="mt-6">
                    <Text
                      className="text-white text-2xl text-center"
                      style={{ fontFamily: "baiJamjuree-semibold" }}
                    >
                      {booking.destination.title}
                    </Text>

                    <View className="flex-row justify-between items-center w-48 mt-4">
                      <View>
                        <Text
                          className="text-white/80 text-base"
                          style={{ fontFamily: "baiJamjuree-medium" }}
                        >
                          To:
                        </Text>
                        <Text
                          className="text-white text-xl"
                          style={{ fontFamily: "baiJamjuree-semibold" }}
                        >
                          {booking.destination.destination}
                        </Text>
                      </View>
                      <View>
                        <Text
                          className="text-white/80 text-base text"
                          style={{ fontFamily: "baiJamjuree-medium" }}
                        >
                          Duration:
                        </Text>
                        <Text
                          className="text-white text-xl text"
                          style={{ fontFamily: "baiJamjuree-semibold" }}
                        >
                          {booking.destination.duration}{" "}
                          {booking.destination.duration > 1 ? "Days" : "Day"}
                        </Text>
                      </View>
                    </View>

                    <View className="border-t border-white/60 pt-4 mt-6">
                      <Text
                        className="text-white/80 text-base text-center"
                        style={{ fontFamily: "baiJamjuree-medium" }}
                      >
                        Total price
                      </Text>
                      <Text
                        className="text-white text-2xl text-center"
                        style={{ fontFamily: "baiJamjuree-semibold" }}
                      >
                        ${booking.destination.price}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="w-full h-[100px] flex-1 border-t-2 border-white border-dashed">
                <View className="absolute right-2 -bottom-2 w-[233px] flex-row items-center justify-between">
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                  <View className="w-4 h-4 rounded-full bg-white"></View>
                </View>

                <View className="bg-transparent border border-white/80 rounded-md my-auto w-48 h-16 mx-auto justify-center items-center">
                  <Text
                    className="text-white text-[26px] text-center"
                    style={{ fontFamily: "baiJamjuree-semibold" }}
                  >
                    NO {booking.number}
                  </Text>
                </View>
              </View>

              <View className="absolute min-h-min bottom-[100px] w-[280px] -translate-x-[15px] flex-row justify-between items-center">
                <View className="w-9 h-9 rounded-full bg-white"></View>
                <View className="w-9 h-9 rounded-full bg-white"></View>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>

        <View className="mt-3 px-4">
          <GradientButton
            label="Download Ticket"
            icon="download"
            type="primary"
            size="lg"
            // onPress={handleFilterDestinations}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BookingTicket;

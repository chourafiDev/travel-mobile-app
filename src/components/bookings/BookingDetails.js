import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import GradientButton from "../ui/GradientButton";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../../utils/theme";
import Icon from "react-native-vector-icons/Feather";

const BookingDetails = ({
  sheetRefDetails,
  handleSnapPressCloseDetails,
  handleSnapPressOpenTicket,
  booking,
}) => {
  const { colorScheme } = useColorScheme();
  const snapPoints = useMemo(() => ["85%"], []);

  const ratings = booking.destination.reviews.map(({ rating }) => rating);

  // Calculate the sum of ratings
  const sumOfRatings = ratings.reduce((total, rating) => total + rating, 0);

  // Calculate the average rating
  const averageRating = sumOfRatings / ratings.length;

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
    handleSnapPressCloseDetails();
    handleSnapPressOpenTicket();
  };

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
        <View className="space-y-4">
          <View className="mx-4">
            <Text
              className="text-dark/80 dark:text-white text-base mb-2"
              style={{
                fontFamily: "baiJamjuree-semibold",
              }}
            >
              Destination Photos
            </Text>
            <View className="flex-row items-center gap-x-2">
              {booking.destination.images.map(({ imageUrl }, i) => (
                <Animated.View
                  key={imageUrl}
                  entering={FadeInDown.delay(100 * i)}
                  className="bg-white dark:bg-dark-2 p-1 rounded-2xl"
                  style={[colorScheme == "light" && shadow.boxShadow]}
                >
                  <Image
                    source={{ uri: imageUrl }}
                    className="w-16 h-16 rounded-2xl"
                  />
                </Animated.View>
              ))}
            </View>
          </View>

          <View className="mx-4">
            <View className="flex-row justify-between items-center mb-3 gap-x-4">
              <Animated.View
                entering={FadeInDown.delay(40)}
                className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
                style={[colorScheme == "light" && shadow.boxShadow]}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-gray-1 mr-3 dark:bg-dark w-10 h-10 rounded-xl items-center justify-center"
                >
                  <Icon
                    name="clock"
                    style={{
                      fontFamily: "baiJamjuree-bold",
                    }}
                    size={18}
                    color="#23A892"
                  />
                </TouchableOpacity>
                <View>
                  <Text
                    className="text-dark/60 dark:text-white/60 text-base"
                    style={{ fontFamily: "baiJamjuree-medium" }}
                  >
                    Duration
                  </Text>
                  <Text
                    className="text-dark dark:text-white text-[17px] -mt-1"
                    style={{ fontFamily: "baiJamjuree-semibold" }}
                  >
                    {booking.destination.duration} Days
                  </Text>
                </View>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(40)}
                className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
                style={[colorScheme == "light" && shadow.boxShadow]}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-gray-1 dark:bg-dark mr-3 w-10 h-10 rounded-xl items-center justify-center"
                >
                  <Icon
                    name="star"
                    style={{
                      fontFamily: "baiJamjuree-bold",
                    }}
                    size={18}
                    color="#23A892"
                  />
                </TouchableOpacity>
                <View>
                  <Text
                    className="text-dark/60 dark:text-white/60 text-base"
                    style={{ fontFamily: "baiJamjuree-medium" }}
                  >
                    Rating
                  </Text>
                  <Text
                    className="text-dark dark:text-white text-[17px] -mt-1"
                    style={{ fontFamily: "baiJamjuree-semibold" }}
                  >
                    {ratings.length > 0 ? averageRating : "_ "}/5
                  </Text>
                </View>
              </Animated.View>
            </View>

            <View className="flex-row justify-between items-center gap-x-4">
              <Animated.View
                entering={FadeInDown.delay(60)}
                className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
                style={[colorScheme == "light" && shadow.boxShadow]}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-gray-1 mr-3 dark:bg-dark w-10 h-10 rounded-xl items-center justify-center"
                >
                  <Icon
                    name="map-pin"
                    style={{
                      fontFamily: "baiJamjuree-bold",
                    }}
                    size={18}
                    color="#23A892"
                  />
                </TouchableOpacity>
                <View>
                  <Text
                    className="text-dark/60 dark:text-white/60 text-base"
                    style={{ fontFamily: "baiJamjuree-medium" }}
                  >
                    Destination
                  </Text>
                  <Text
                    className="text-dark dark:text-white text-[17px] -mt-1"
                    style={{ fontFamily: "baiJamjuree-semibold" }}
                  >
                    {booking.destination.destination}
                  </Text>
                </View>
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(60)}
                className="flex-row flex-1 items-center bg-white dark:bg-dark-2 p-2 rounded-2xl"
                style={[colorScheme == "light" && shadow.boxShadow]}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="bg-gray-1 dark:bg-dark mr-3 w-10 h-10 rounded-xl items-center justify-center"
                >
                  <Icon
                    name="layers"
                    style={{
                      fontFamily: "baiJamjuree-bold",
                    }}
                    size={18}
                    color="#23A892"
                  />
                </TouchableOpacity>
                <View>
                  <Text
                    className="text-dark/60 dark:text-white/60 text-base"
                    style={{ fontFamily: "baiJamjuree-medium" }}
                  >
                    Catgeory
                  </Text>
                  <Text
                    className="text-dark dark:text-white text-[17px] -mt-1"
                    style={{ fontFamily: "baiJamjuree-semibold" }}
                  >
                    {booking.destination.category.content}
                  </Text>
                </View>
              </Animated.View>
            </View>
          </View>

          <View
            className="mt-6 mx-4 space-y-3 bg-white dark:bg-dark-2 p-3 rounded-2xl"
            style={[colorScheme == "light" && shadow.boxShadow]}
          >
            <Animated.Text
              entering={FadeInDown.delay(110)}
              className="text-dark/80 dark:text-white text-base mb-2"
              style={{
                fontFamily: "baiJamjuree-semibold",
              }}
            >
              Description
            </Animated.Text>
            <Animated.Text
              entering={FadeInDown.delay(200)}
              className="text-dark/80 dark:text-white/80 text-[17px] leading-7"
              style={{
                fontFamily: "baiJamjuree-light",
              }}
            >
              {booking.destination.description}
            </Animated.Text>
          </View>
        </View>

        <View className="mt-3 px-4">
          <GradientButton
            label="Get Your Ticket"
            icon="download"
            type="primary"
            size="lg"
            onPress={onPress}
          />
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BookingDetails;

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

// Redux slices
import {
  useBookingCheckOutMutation,
  useCreateBookingMutation,
} from "../../store/services/bookingApiSlice";
import {
  useFavoriteMutation,
  useGetFavoritesQuery,
  useUnfavoriteMutation,
} from "../../store/services/favoritesApiSlice";

// Libraries
import { useColorScheme } from "nativewind";
import Icon from "react-native-vector-icons/Feather";
import Toast from "react-native-toast-message";
import { LinearGradient } from "expo-linear-gradient";
import ImageView from "react-native-image-viewing";
import { useStripe } from "@stripe/stripe-react-native";

// Components
import TopTabBar from "../../components/layout/TopTabBar";
import Overview from "../../components/Overview";
import Reviews from "../../components/Reviews/Reviews";
import GradientButton from "../../components/ui/GradientButton";
import { useGetDestinationQuery } from "../../store/services/destinationsApiSlice";
import Loading from "../../components/Loading";
import BookingConfirmation from "../../components/bookings/BookingConfirmation";

import { emptyHeart, fullHeart } from "../../../utils/assets";
import { shadow } from "../../../utils/theme";

const Tab = createMaterialTopTabNavigator();

export default function DestinationScreen({ route, navigation }) {
  const { colorScheme } = useColorScheme();
  const { destinationId } = route.params;

  // fetch favorites destinations
  const { data: favorites } = useGetFavoritesQuery();

  // check if destination favorite
  const isFavorite = favorites.some(
    (item) => item.destinationId === destinationId
  );

  // fetch destination
  const { data: destination, isLoading } =
    useGetDestinationQuery(destinationId);

  const destinationImages = destination?.images?.map((image) => {
    return { uri: image.imageUrl };
  });

  const [visible, setIsVisible] = useState(false);

  // handle favorite and unfavorite destination
  const [
    favorite,
    { isLoading: isFavoriteLoading, isSuccess: isFavoriteSuccess },
  ] = useFavoriteMutation();
  const [
    unfavorite,
    { isLoading: isUnfavoriteLoading, isSuccess: isUnfavoriteSuccess },
  ] = useUnfavoriteMutation();

  const submitFavoriteOrUnfavorite = async () => {
    try {
      if (destination.isFavorite) {
        await unfavorite(destinationId).unwrap();
      } else {
        await favorite({ destinationId: Number(destinationId) }).unwrap();
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isFavoriteSuccess) {
      Toast.show({
        type: "success",
        text1: "Destination Favorited Successfully",
      });
    }

    if (isUnfavoriteSuccess) {
      Toast.show({
        type: "success",
        text1: "Destination Unfavorited Successfully",
      });
    }
  }, [isFavoriteSuccess, isUnfavoriteSuccess]);

  // handle booking checkout and create new booking in DB
  const [bookingCheckOut, { isLoading: isBookingLoading }] =
    useBookingCheckOutMutation();

  const [createBooking, { isSuccess: isAddBookingSuccess }] =
    useCreateBookingMutation();

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const submitBookingCheckout = async () => {
    // create payment intent
    const data = {
      price: destination.price,
    };

    const response = await bookingCheckOut(data).unwrap();

    if (response.error) {
      Toast.show({
        type: "error",
        text1: "Something went wrong",
      });
      return;
    }

    // initiale the payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: "Journey waypoints",
      paymentIntentClientSecret: response.paymentIntent,
    });

    if (initResponse.error) {
      Toast.show({
        type: "error",
        text1: "Something went wrong",
      });
      return;
    }

    // present the payment sheet
    const paymentResponse = await presentPaymentSheet();

    if (paymentResponse.error) {
      Toast.show({
        type: "info",
        text1: `${paymentResponse.error.message}`,
      });
      return;
    }

    // if payment ok -> create booking
    const payload = {
      amountPaid: destination.price,
      destinationId: destination.id,
    };

    await createBooking(payload).unwrap();
  };

  // handle open modal booking confiration
  const sheetRef = useRef(null);
  const handleSnapPressOpen = () => {
    sheetRef.current?.present();
  };
  const handleSnapPressClose = () => {
    sheetRef.current?.close();
  };

  useEffect(() => {
    if (isAddBookingSuccess) {
      handleSnapPressOpen();
    }
  }, [isAddBookingSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* Modal images */}
      <ImageView
        images={destinationImages}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />

      {/* header */}
      <View className="flex-row justify-between items-center px-4 my-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2  w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name="arrow-left"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
          />
        </TouchableOpacity>
        <Text
          className="text-dark dark:text-white text-xl"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          {destination.title}
        </Text>
        <TouchableOpacity
          style={[shadow.boxShadow]}
          onPress={submitFavoriteOrUnfavorite}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
        >
          {isFavoriteLoading || isUnfavoriteLoading ? (
            <ActivityIndicator size="small" color="#ef476f" />
          ) : (
            <Image
              source={isFavorite ? fullHeart : emptyHeart}
              className="w-4 h-4"
            />
          )}
        </TouchableOpacity>
      </View>

      {/* Images */}
      <ImageBackground
        source={destinationImages[0]}
        className="h-72 rounded-3xl justify-end overflow-hidden mx-4"
      >
        <View>
          <LinearGradient
            colors={["transparent", "#222B4599"]}
            className="absolute bottom-0 h-28 w-full"
          />
          <View className="flex-row gap-2 items-center justify-center mb-3">
            <View className="flex-row gap-x-2">
              {destinationImages.slice(1, 3).map((image) => (
                <View
                  key={image.uri}
                  className="border-[3px] border-white/70 rounded-xl overflow-hidden w-14 h-14"
                >
                  <Image source={image} className="w-full h-full" />
                </View>
              ))}
            </View>
            {destinationImages.length > 3 && (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setIsVisible(true)}
                className="border-[3px] border-white/70 rounded-xl overflow-hidden w-14 h-14 relative"
              >
                <View className="absolute top-0 left-0 bg-dark-2/60 w-full h-full z-10"></View>
                <Text
                  className="text-white text-lg z-10 absolute top-[14px] left-[14px]"
                  style={{ fontFamily: "baiJamjuree-bold" }}
                >
                  +{destinationImages.length - 3}
                </Text>
                <Image
                  source={destinationImages[3]}
                  className="w-full h-full"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>

      {/* Top Tab */}
      <View className="mt-6 flex-1">
        <Tab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
          <Tab.Screen
            name="Overview"
            children={() => <Overview destination={destination} />}
          />
          <Tab.Screen
            name="Reviews"
            children={() => <Reviews destinationId={destination.id} />}
          />
        </Tab.Navigator>
      </View>

      {/* Button booking */}
      <View className="absolute w-full bottom-0">
        <LinearGradient
          colors={[
            "transparent",
            colorScheme == "light" ? "#fbfbfbfb" : "#222B45",
          ]}
          className="absolute bottom-0 w-full h-28"
        />

        <View className="my-2 mx-4">
          <GradientButton
            label={`Book Now | $${destination.price}`}
            icon="credit-card"
            size="lg"
            type="primary"
            isLoading={isBookingLoading}
            onPress={submitBookingCheckout}
          />
        </View>
      </View>

      {/* Modal Booking Confirmation */}
      <BookingConfirmation
        sheetRef={sheetRef}
        destination={destination.title}
        handleSnapPressClose={handleSnapPressClose}
      />
    </SafeAreaView>
  );
}

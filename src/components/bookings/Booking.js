import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import BookingDetails from "./BookingDetails";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import BookingTicket from "./BookingTicket";

const Booking = ({ booking }) => {
  const { colorScheme } = useColorScheme();

  // Open modal add booking details and ticket
  const sheetRefDetails = useRef(null);
  const handleSnapPressOpenDetails = () => {
    sheetRefDetails.current?.present();
  };
  const handleSnapPressCloseDetails = () => {
    sheetRefDetails.current?.close();
  };

  const sheetRefTicket = useRef(null);
  const handleSnapPressOpenTicket = () => {
    sheetRefTicket.current?.present();
  };
  const handleSnapPressCloseTicket = () => {
    sheetRefTicket.current?.close();
  };

  return (
    <>
      <View
        className="mx-3 flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <View className="flex-1 mr-6">
          <View className="flex-row items-center gap-x-3">
            <Text
              className="text-dark dark:text-white/60 text-lg"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              #{booking.number}
            </Text>
            <View className="h-3 w-[1px] bg-dark/20"></View>
            <Text
              className="text-dark dark:text-white/60 text-lg"
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ fontFamily: "baiJamjuree-semibold", flexShrink: 1 }}
            >
              {booking.destination.title}
            </Text>
          </View>

          <View className="flex-row items-center gap-x-2 mt-2">
            <Text
              className="text-dark/60 dark:text-white text-sm"
              style={{ fontFamily: "baiJamjuree-regular" }}
            >
              Got it at: {moment(booking.createdAt).format("MMM D")} -{" "}
              {moment(booking.createdAt).format("h:mm A")}
            </Text>
            <View className="flex-row items-center gap-x-1">
              <Feather name="arrow-right" size={11} color="#222B45" />
              <Text
                className="text-dark/60 dark:text-white text-sm"
                style={{ fontFamily: "baiJamjuree-regular" }}
              >
                {booking.destination.destination}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center gap-x-2">
          <TouchableOpacity
            onPress={handleSnapPressOpenDetails}
            className="bg-gray-1 dark:bg-dark w-9 h-9 rounded-lg items-center justify-center"
          >
            <Feather name="eye" size={18} color="#23A892" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSnapPressOpenTicket}
            className="bg-gray-1 dark:bg-dark w-9 h-9 rounded-lg items-center justify-center"
          >
            <Feather name="download" size={18} color="#f4a261" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal Booking Details */}
      <BookingDetails
        sheetRefDetails={sheetRefDetails}
        handleSnapPressCloseDetails={handleSnapPressCloseDetails}
        handleSnapPressOpenTicket={handleSnapPressOpenTicket}
        booking={booking}
      />

      {/* Modal Booking Details */}
      <BookingTicket sheetRefTicket={sheetRefTicket} booking={booking} />
    </>
  );
};

export default Booking;

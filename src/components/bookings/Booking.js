import { View, Text, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import BookingDetails from "./BookingDetails";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";
import { Feather } from "@expo/vector-icons";
import moment from "moment";

const Booking = ({ booking }) => {
  const { colorScheme } = useColorScheme();

  // Open modal add booking details
  const sheetRefDetails = useRef(null);
  const handleSnapPressOpenDetails = () => {
    sheetRefDetails.current?.present();
  };
  const handleSnapPressCloseDetails = () => {
    sheetRefDetails.current?.close();
  };

  return (
    <>
      <View
        className="mx-3 flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <View>
          <View className="flex-row justify-between items-center gap-x-3">
            <Text
              className="text-dark dark:text-white/60 text-lg"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              #{booking.number}
            </Text>
            <View className="h-3 w-[1px] bg-dark/20"></View>
            <Text
              className="text-dark dark:text-white/60 text-lg"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              {booking.destination.title}
            </Text>
          </View>

          <Text
            className="text-dark/60 dark:text-white text-sm mt-2"
            style={{ fontFamily: "baiJamjuree-regular" }}
          >
            Got it at: {moment(booking.createdAt).format("MMM D")} -{" "}
            {moment(booking.createdAt).format("h:mm A")}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleSnapPressOpenDetails}
          className="bg-gray-1 dark:bg-dark-2  w-9 h-9 rounded-lg items-center justify-center"
        >
          <Feather name="eye" size={18} color="#23A892" />
        </TouchableOpacity>
      </View>

      {/* Modal Add Category */}
      <BookingDetails sheetRefDetails={sheetRefDetails} />
    </>
  );
};

export default Booking;

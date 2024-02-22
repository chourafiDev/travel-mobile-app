import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import { useGetBookingsQuery } from "../../store/services/bookingApiSlice";
import Booking from "../../components/bookings/Booking";
import { shadow } from "../../../utils/theme";

export default function BookingsScreen({ navigation }) {
  const { colorScheme } = useColorScheme();

  // fetch categories
  const { data: bookings, isLoading } = useGetBookingsQuery();

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}

      <View
        className="mx-3 mt-3 p-3 space-y-3 rounded-2xl bg-white dark:bg-dark-2"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <View className="flex-row justify-between items-center">
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
            Bookings
          </Text>
          <View></View>
        </View>

        <View className="flex-row gap-1">
          <Text
            className="text-brand text-lg"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            {bookings && bookings.length}
          </Text>
          <Text
            className="text-dark/70 dark:text-white text-lg"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            Destinations Booked
          </Text>
        </View>
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          className="mt-6"
          showsVerticalScrollIndicator={false}
          data={bookings}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                key={item.id}
                entering={FadeInDown.delay(250 * index)}
              >
                <Booking booking={item} />
              </Animated.View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={<Empty />}
          ListFooterComponent={<View className="h-3"></View>}
          ItemSeparatorComponent={<View className="h-3"></View>}
        />
      )}
    </SafeAreaView>
  );
}

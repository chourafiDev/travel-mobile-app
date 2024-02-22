import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { DESTINATIONS } from "../../constants/routes";
import Destination from "../Destination";
import { useGetTopDestinationsQuery } from "../../store/services/destinationsApiSlice";
import Empty from "../Empty";
import Loading from "../Loading";
import { useNavigation } from "@react-navigation/native";

const Destinations = () => {
  const navigation = useNavigation();

  // fetch destinations
  const { data: destinations, isLoading } = useGetTopDestinationsQuery();

  return (
    <View className="px-4 mt-6 space-y-5">
      <View className="flex-row justify-between items-center">
        <Text
          className="text-dark/80 dark:text-white/80 text-[22px]"
          style={{ fontFamily: "baiJamjuree-semibold" }}
        >
          Top 10 Destinations
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(DESTINATIONS)}
          className="bg-gray-1 dark:bg-dark-2/70 rounded-lg px-3 py-2"
        >
          <Text
            className="text-dark/80 dark:text-white/80 text-sm"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <View className="h-20">
          <Loading />
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          data={destinations}
          renderItem={({ item }) => {
            return (
              <View className="flex-1 flex-col pb-4 w-56">
                <Destination key={item.title} destination={item} />
              </View>
            );
          }}
          ItemSeparatorComponent={<View className="w-3"></View>}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <View className="justify-center items-center h-28 w-full">
              <Empty />
            </View>
          }
        />
      )}
    </View>
  );
};

export default Destinations;

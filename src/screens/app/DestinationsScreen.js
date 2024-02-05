import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { FAVORITES } from "../../constants/routes";
import Search from "../../components/Search";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useGetDestinationsQuery } from "../../store/services/destinationsApiSlice";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import Destination from "../../components/Destination";

export default function DestinationsScreen({ navigation }) {
  const { colorScheme } = useColorScheme();

  // fetch destinations
  const { data: destinations, isLoading } = useGetDestinationsQuery();

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}
      <View className="flex-row justify-between items-center px-4 mt-3 mb-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
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
          Explore
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(FAVORITES)}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name="heart"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color="#e63946"
          />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <Search withFilter={true} placeHolder="Find the world..." />

      <View className="px-4 mt-3 mb-4">
        <Text
          className="text-dark/70 dark:text-white/70 text-base"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          {destinations.length} Destination are found
        </Text>
      </View>

      {/* Destinations */}
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          className="px-3"
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={destinations}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                entering={FadeInDown.delay(250 * index)}
                style={styles.listContainer}
                className={`mx-1 ${index % 2 != 0 && "mt-6"} ${
                  (index + 1) % 2 == 0 && "mt-5"
                }`}
              >
                <Destination key={item.title} destination={item} />
              </Animated.View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <View className="justify-center items-center h-28 w-full">
              <Empty />
            </View>
          }
          ListFooterComponent={<View className="h-5"></View>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: Dimensions.get("window").width / 2 - 20,
  },
});

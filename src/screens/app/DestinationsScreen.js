import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { FAVORITES } from "../../constants/routes";
import Search from "../../components/Search";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useGetDestinationsWithFilterQuery } from "../../store/services/destinationsApiSlice";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import Destination from "../../components/Destination";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { shadow } from "../../../utils/theme";
import { setFilterQuery } from "../../store/features/filterDestinationsSlice";
import { useDispatch } from "react-redux";

export default function DestinationsScreen({ navigation }) {
  const { colorScheme } = useColorScheme();
  const dispatch = useDispatch();

  const { filterQuery } = useSelector((state) => state.filterDestinations);

  // fetch destinations
  const {
    data: destinations,
    isLoading,
    refetch,
  } = useGetDestinationsWithFilterQuery(filterQuery);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}
      <View className="flex-row justify-between items-center px-4 mt-3 mb-2">
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

      <View className="px-4 pt-4 flex-row flex-wrap gap-2">
        {filterQuery.category && (
          <TouchableOpacity
            className="px-2 py-1 bg-[#ffffff] rounded-full flex-row items-center gap-x-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
            onPress={() =>
              dispatch(setFilterQuery({ ...filterQuery, category: "" }))
            }
          >
            <View className="mr-2">
              <Text
                className="text-dark/40 dark:text-white/40 text-xs"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Category
              </Text>
              <Text
                className="text-dark/70 dark:text-white/70 text-sm"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {filterQuery.category}
              </Text>
            </View>
            <Ionicons name="close" size={15} color="#415a77" />
          </TouchableOpacity>
        )}

        {filterQuery.destination && (
          <TouchableOpacity
            className="px-2 py-1 bg-[#ffffff] rounded-full flex-row items-center gap-x-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
            onPress={() =>
              dispatch(setFilterQuery({ ...filterQuery, destination: "" }))
            }
          >
            <View className="mr-2">
              <Text
                className="text-dark/40 dark:text-white/40 text-xs"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Destination
              </Text>
              <Text
                className="text-dark/70 dark:text-white/70 text-sm"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {filterQuery.destination}
              </Text>
            </View>
            <Ionicons name="close" size={15} color="#415a77" />
          </TouchableOpacity>
        )}

        {filterQuery.duration && (
          <TouchableOpacity
            className="px-2 py-1 bg-[#ffffff] rounded-full flex-row items-center gap-x-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
            onPress={() =>
              dispatch(setFilterQuery({ ...filterQuery, duration: "" }))
            }
          >
            <View className="mr-2">
              <Text
                className="text-dark/40 dark:text-white/40 text-xs"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Duration
              </Text>
              <Text
                className="text-dark/70 dark:text-white/70 text-sm"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                {filterQuery.duration}{" "}
                {filterQuery.duration > 1 ? "days tour" : "day tour"}
              </Text>
            </View>
            <Ionicons name="close" size={15} color="#415a77" />
          </TouchableOpacity>
        )}

        {filterQuery.maxPrice && (
          <TouchableOpacity
            className="px-2 py-1 bg-[#ffffff] rounded-full flex-row items-center gap-x-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
            onPress={() =>
              dispatch(setFilterQuery({ ...filterQuery, maxPrice: "" }))
            }
          >
            <View className="mr-2">
              <Text
                className="text-dark/40 dark:text-white/40 text-xs"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Max price
              </Text>
              <Text
                className="text-dark/70 dark:text-white/70 text-sm"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                ${filterQuery.maxPrice}
              </Text>
            </View>
            <Ionicons name="close" size={15} color="#415a77" />
          </TouchableOpacity>
        )}

        {filterQuery.minPrice && (
          <TouchableOpacity
            className="px-2 py-1 bg-[#ffffff] rounded-full flex-row items-center gap-x-2"
            style={[colorScheme == "light" && shadow.boxShadow]}
            onPress={() =>
              dispatch(setFilterQuery({ ...filterQuery, minPrice: "" }))
            }
          >
            <View className="mr-2">
              <Text
                className="text-dark/40 dark:text-white/40 text-xs"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                Min price
              </Text>
              <Text
                className="text-dark/70 dark:text-white/70 text-sm"
                style={{ fontFamily: "baiJamjuree-semibold" }}
              >
                ${filterQuery.minPrice}
              </Text>
            </View>
            <Ionicons name="close" size={15} color="#415a77" />
          </TouchableOpacity>
        )}
      </View>

      <View className="px-4 mt-3 mb-4">
        <Text
          className="text-dark/70 dark:text-white/70 text-base"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          {destinations?.length} Destination are found
        </Text>
      </View>

      {/* Destinations */}
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          className="px-3"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
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
          ListEmptyComponent={<Empty />}
          ListFooterComponent={<View className="h-5"></View>}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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

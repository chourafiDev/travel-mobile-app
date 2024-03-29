import React, { useRef } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useGetAllDestinationsQuery } from "../../store/services/destinationsApiSlice";
import Destination from "../../components/destinations/Destination";
import AddDestination from "../../components/destinations/AddDestination";
import Empty from "../../components/Empty";
import Loading from "../../components/Loading";

export default function ManageDestinationsScreen({ navigation }) {
  const { colorScheme } = useColorScheme();

  // fetch destinations
  const { data: destinations, isLoading } = useGetAllDestinationsQuery();

  // Open modal add destination
  const sheetRefAdd = useRef(null);
  const handleSnapPressOpenAdd = () => {
    sheetRefAdd.current?.present();
  };
  const handleSnapPressCloseAdd = () => {
    sheetRefAdd.current?.close();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}
      <View
        className="mx-3 mt-3 p-3 space-y-4 rounded-2xl bg-white dark:bg-dark-2"
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
            Destinations
          </Text>
          <View></View>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row gap-1">
            <Text
              className="text-brand text-xl"
              style={{ fontFamily: "baiJamjuree-bold" }}
            >
              {destinations && destinations.length}
            </Text>
            <Text
              className="text-dark dark:text-white text-xl"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Destinations
            </Text>
          </View>
          <TouchableOpacity
            className="bg-brand dark:bg-dark-2/60 rounded-2xl w-20 overflow-hidden"
            style={[colorScheme == "light" && shadow.boxShadow]}
            activeOpacity={0.8}
            onPress={handleSnapPressOpenAdd}
          >
            <LinearGradient
              colors={["#23a892", "#00c3a4"]}
              className="w-full h-full absolute top-0 right-0"
            />
            <View className="flex-row items-center justify-center gap-x-2 py-2">
              <Text
                className="text-white text-base"
                style={{ fontFamily: "baiJamjuree-bold" }}
              >
                Add
              </Text>
              <Icon name="plus" size={15} color="#FBFBFB" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          className="mt-6"
          showsVerticalScrollIndicator={false}
          data={destinations}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                key={item.id}
                entering={FadeInDown.delay(250 * index)}
              >
                <Destination destination={item} />
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

      {/* Modal Add Destination */}
      <AddDestination
        sheetRef={sheetRefAdd}
        handleSnapPressCloseAdd={handleSnapPressCloseAdd}
      />
    </SafeAreaView>
  );
}

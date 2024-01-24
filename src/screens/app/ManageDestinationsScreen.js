import React, { useRef } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { shadow } from "../../../utils/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AddDestination from "../../components/destinations/AddDestination";
import EditDestination from "../../components/destinations/EditDestination";
import DeleteDestination from "../../components/destinations/DeleteDestination";
import { destinations } from "../../../utils/data";
import Animated, { FadeInDown } from "react-native-reanimated";
import Destination from "../../components/destinations/Destination";

export default function ManageDestinationsScreen({ navigation }) {
  const { colorScheme } = useColorScheme();

  // Open modal add destination
  const sheetRefAdd = useRef(null);
  const handleSnapPressOpenAdd = () => {
    sheetRefAdd.current?.present();
  };
  const handleSnapPressCloseAdd = () => {
    sheetRefAdd.current?.close();
  };

  // Open modal add destination
  const sheetRefEdit = useRef(null);
  const handleSnapPressOpenEdit = () => {
    sheetRefEdit.current?.present();
  };
  const handleSnapPressCloseEdit = () => {
    sheetRefEdit.current?.close();
  };

  // Open modal add destination
  const sheetRefDelete = useRef(null);
  const handleSnapPressOpenDelete = () => {
    sheetRefDelete.current?.present();
  };
  const handleSnapPressCloseDelete = () => {
    sheetRefDelete.current?.close();
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
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
          Destinations
        </Text>
        <View></View>
      </View>

      <View className="px-4 flex-row items-center justify-between">
        <View className="flex-row gap-1">
          <Text
            className="text-brand text-xl"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            10
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

      <FlatList
        className="px-3 mt-6"
        showsVerticalScrollIndicator={false}
        data={destinations}
        renderItem={({ item, index }) => {
          return (
            <Animated.View entering={FadeInDown.delay(250 * index)}>
              <Destination
                key={item.id}
                destination={item}
                handleSnapPressOpenEdit={handleSnapPressOpenEdit}
                handleSnapPressOpenDelete={handleSnapPressOpenDelete}
              />
            </Animated.View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Not items found</Text>}
        ListFooterComponent={<View className="h-3"></View>}
        ItemSeparatorComponent={<View className="h-3"></View>}
      />

      {/* Modal Add Destination */}
      <AddDestination
        sheetRef={sheetRefAdd}
        handleSnapPressCloseAdd={handleSnapPressCloseAdd}
      />

      {/* Modal Edit Destination */}
      <EditDestination
        sheetRef={sheetRefEdit}
        handleSnapPressCloseEdit={handleSnapPressCloseEdit}
      />

      {/* Modal Dlete Destination */}
      <DeleteDestination
        sheetRef={sheetRefDelete}
        handleSnapPressCloseDelete={handleSnapPressCloseDelete}
      />
    </SafeAreaView>
  );
}
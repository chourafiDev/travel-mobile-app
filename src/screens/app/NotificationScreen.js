import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { notification } from "../../../utils/data";
import Notification from "../../components/Notification";

const NotificationScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-[#f8f8fa] dark:bg-dark">
      {/* header */}
      <View className="flex-row justify-between items-center px-4 mt-3 mb-4">
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
          Notification
        </Text>
        <View></View>
      </View>

      {/* Notification */}
      <FlatList
        className="px-3"
        showsVerticalScrollIndicator={false}
        data={notification}
        renderItem={({ item, index }) => {
          return <Notification key={index} index={index} notification={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Not items found</Text>}
        ItemSeparatorComponent={<View className="h-3"></View>}
        ListFooterComponent={<View className="h-4"></View>}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

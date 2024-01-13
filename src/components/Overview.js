import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

const Overview = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="bg-[#f8f8fa] dark:bg-dark"
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            className="bg-gray-1 dark:bg-dark-2 w-10 h-10 rounded-xl items-center justify-center"
          >
            <Icon
              name="clock"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
              size={18}
              color="#23A892"
            />
          </TouchableOpacity>
          <View>
            <Text
              className="text-dark/60 dark:text-white/60 text-base"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Duration
            </Text>
            <Text
              className="text-dark dark:text-white text-[18px] -mt-1"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              2 Days
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            className="bg-gray-1 dark:bg-dark-2  w-10 h-10 rounded-xl items-center justify-center"
          >
            <Icon
              name="star"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
              size={18}
              color="#23A892"
            />
          </TouchableOpacity>
          <View>
            <Text
              className="text-dark/60 dark:text-white/60 text-base"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Rating
            </Text>
            <Text
              className="text-dark dark:text-white text-[18px] -mt-1"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              4.2 out of 5
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-6 space-y-3">
        <Text
          className="text-dark dark:text-white text-xl"
          style={{
            fontFamily: "baiJamjuree-bold",
          }}
        >
          Description
        </Text>
        <Text
          className="text-dark/80 dark:text-white/80 text-[17px] leading-7"
          style={{
            fontFamily: "baiJamjuree-light",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </Text>
      </View>

      <View className="h-20"></View>
    </ScrollView>
  );
};

export default Overview;

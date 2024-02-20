import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import GradientButton from "../../ui/GradientButton";
import Animated, { FadeIn } from "react-native-reanimated";
import { DESTINATIONS } from "../../../constants/routes";
import { useNavigation } from "@react-navigation/native";

const Complete = ({ handleSnapPressClose }) => {
  const navigation = useNavigation();

  const onPress = () => {
    handleSnapPressClose();
    navigation.navigate(DESTINATIONS);
  };
  return (
    <View className="flex-1 justify-center">
      <View className="border border-brand/10 p-4 rounded-2xl">
        <Animated.View
          entering={FadeIn.delay(100).duration(500).springify()}
          className="items-center mb-6"
        >
          <Icon name="check-circle" color="#23A892" size={40} />
        </Animated.View>

        <Text
          className="text-dark text-xl mb-3 text-center"
          style={{ fontFamily: "baiJamjuree-semibold" }}
        >
          Destination Successfully Completed
        </Text>
        <Text
          className="text-dark/50 mb-10 text-center leading-6"
          style={{ fontFamily: "baiJamjuree-regular" }}
        >
          Your destination has been successfully completed. You can check It by
          clicking on the button below!
        </Text>
        <GradientButton
          label="All Destinations"
          icon="map"
          size="lg"
          type="primary"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default Complete;

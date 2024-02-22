import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";
import Animated, { FadeIn } from "react-native-reanimated";
import Icon from "react-native-vector-icons/Feather";
import { steps } from "../../../../utils/data";

const Step = ({ name, id }) => {
  const { currentStep } = useSelector((state) => state.stepper);
  return (
    <View key={id} className="space-y-1 relative flex-1 ml-3">
      <View
        className={`border-[1.5px] w-9 h-9 rounded-full justify-center items-center bg-white dark:bg-dark-2 ${
          currentStep == id
            ? "border-brand"
            : currentStep > id
            ? "bg-brand border-brand"
            : "border-dark/10"
        }`}
      >
        {currentStep > id ? (
          <Animated.View
            entering={FadeIn.delay(200).duration(1000).springify()}
          >
            <Icon name="check" color="#ffffff" size={16} />
          </Animated.View>
        ) : (
          <Animated.Text
            entering={FadeIn.delay(200).duration(1000).springify()}
            className={
              currentStep == id
                ? "text-brand/80"
                : "text-dark/60 dark:text-white/60"
            }
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            0{id}
          </Animated.Text>
        )}
      </View>
      <Text
        className="text-dark/80 dark:text-white/80 text-[14px]"
        style={{ fontFamily: "baiJamjuree-medium" }}
      >
        {name}
      </Text>
      {steps.length != id && (
        <View className="absolute -top-4 -right-0">
          <Svg
            width={22}
            height={90}
            viewBox="0 0 22 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <Path
              d="M0 -2L20 40L0 82"
              vectorEffect="non-scaling-stroke"
              stroke="rgba(34, 43, 69, 0.05)"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      )}
    </View>
  );
};

export default Step;

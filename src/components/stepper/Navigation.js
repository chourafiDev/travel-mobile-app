import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/features/stepperSlice";
import { useSelector } from "react-redux";

const Navigation = ({ onPress, isLoading }) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.stepper);

  const prev = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  return (
    <View className="flex-row justify-end gap-x-3 mt-8">
      {/* previous */}
      <TouchableOpacity
        activeOpacity={0.6}
        className={`border border-brand w-10 h-10 justify-center items-center rounded-xl ${
          currentStep == 1 && "opacity-30"
        }`}
        disabled={currentStep == 1}
        onPress={prev}
      >
        <Icon name="chevron-left" color="#23A892" size={16} />
      </TouchableOpacity>

      {/* Next */}
      {currentStep == 3 ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          className={`rounded-xl items-center w-24 ${
            isLoading ? "bg-brand/80" : "bg-brand"
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <View className="my-auto">
              <ActivityIndicator size="small" color="#ffffff" />
            </View>
          ) : (
            <Text
              className="text-white text-base my-auto"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              Confirm
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.6}
          className={`bg-brand w-10 h-10 justify-center items-center rounded-xl`}
          onPress={onPress}
        >
          <Icon name="chevron-right" color="#ffffff" size={16} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Navigation;

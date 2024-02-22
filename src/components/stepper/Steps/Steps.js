import React from "react";
import { View } from "react-native";
import { steps } from "../../../../utils/data";
import Step from "./Step";

const Steps = () => {
  return (
    <View className="flex-row justify-between bg-gray-1/50 dark:bg-dark-2/50 my-4 relative border border-dark/5 p-2 rounded-xl overflow-hidden mb-10">
      {steps.map(({ id, name }) => (
        <Step key={id} name={name} id={id} />
      ))}
    </View>
  );
};

export default Steps;

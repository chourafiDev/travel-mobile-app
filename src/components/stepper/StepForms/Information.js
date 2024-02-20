import React from "react";
import { View } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import {
  setCurrentStep,
  setFormData,
} from "../../../store/features/stepperSlice";
import { useForm } from "react-hook-form";
import TextInputWithIcon from "../../ui/TextInputWithIcon";

const Information = ({ title, destination, description }) => {
  const dispatch = useDispatch();
  const { currentStep, formData } = useSelector((state) => state.stepper);

  // handle form
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: formData.title ? formData.title : title,
      destination: formData.destination ? formData.destination : destination,
      description: formData.description ? formData.description : description,
    },
  });

  const onNext = async (data) => {
    dispatch(setFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
  };

  return (
    <Animated.View
      entering={FadeInRight.delay(100).duration(500).springify()}
      className="justify-between flex-1"
    >
      <View className="space-y-4">
        <View>
          <TextInputWithIcon
            label="Title"
            name="title"
            placeholder="title"
            icon="map"
            numberOfLines={1}
            control={control}
            rules={{ required: "title is required" }}
          />
        </View>

        <View>
          <TextInputWithIcon
            label="Description"
            name="description"
            placeholder="description"
            icon="file-text"
            numberOfLines={9}
            control={control}
            rules={{ required: "description is required" }}
            extraStyle={{
              justifyContent: "flex-start",
              textAlignVertical: "top",
              height: 180,
            }}
          />
        </View>

        <View>
          <TextInputWithIcon
            label="Destination"
            name="destination"
            placeholder="destination"
            icon="map-pin"
            numberOfLines={1}
            control={control}
            rules={{ required: "destination is required" }}
          />
        </View>
      </View>

      {/* Stepper navigation */}
      <Navigation onPress={handleSubmit(onNext)} />
    </Animated.View>
  );
};

export default Information;

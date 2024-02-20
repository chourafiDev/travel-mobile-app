import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
import { useGetCategoriesQuery } from "../../../store/services/categoriesApiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  clearStepperValues,
  setCurrentStep,
} from "../../../store/features/stepperSlice";
import Navigation from "../Navigation";
import { useForm } from "react-hook-form";
import TextInputWithIcon from "../../ui/TextInputWithIcon";
import {
  useCreateDestinationMutation,
  useUpdateDestinationMutation,
} from "../../../store/services/destinationsApiSlice";
import Toast from "react-native-toast-message";

const ExtraInformation = ({
  destinationId,
  price,
  duration,
  category,
  type,
}) => {
  const dispatch = useDispatch();
  const { currentStep, formData } = useSelector((state) => state.stepper);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      price: formData.price ? formData.price : price.toString(),
      duration: formData.duration ? formData.duration : duration.toString(),
    },
  });

  // fetch categories
  const { data: categories } = useGetCategoriesQuery();

  // handle select category
  const [categoryError, setCategoryError] = useState("");
  const [categoryId, setCategoryId] = useState(
    formData.categoryId ? formData.categoryId : category
  );

  const handleSelectCategory = (item) => {
    if (categoryId === item) {
      setCategoryId("");
    } else {
      setCategoryId(item);
    }
  };

  // handle create/update destination
  const [
    createDestination,
    { isLoading: isAddLoading, isSuccess: isAddSuccess },
  ] = useCreateDestinationMutation();

  const [
    updateDestination,
    { isLoading: isUpdateLoading, isSuccess: isUpdateSuccess },
  ] = useUpdateDestinationMutation();

  const onNext = async (data) => {
    if (!categoryId) {
      return setCategoryError("Category is required");
    }

    try {
      const body = {
        title: formData.title,
        description: formData.description,
        destination: formData.destination,
        images: formData.images,
        categoryId: Number(categoryId),
        price: Number(data.price),
        duration: Number(data.duration),
      };

      if (type == "update") {
        const payload = { id: destinationId, body };
        await updateDestination(payload).unwrap();
      } else {
        await createDestination(body).unwrap();
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isAddSuccess || isUpdateSuccess) {
      dispatch(clearStepperValues());
      dispatch(setCurrentStep(currentStep + 1));
    }
  }, [isAddSuccess, isUpdateSuccess]);

  return (
    <Animated.View
      entering={FadeInRight.delay(100).duration(500).springify()}
      className="justify-between flex-1"
    >
      <View className="space-y-5">
        <View>
          <Text
            className="text-dark dark:text-white text-[17px] mb-1"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            Categeories
          </Text>

          <View className="flex-row gap-2 flex-wrap">
            {categories &&
              categories.map(({ id, content, imageUrl }) => (
                <TouchableOpacity
                  onPress={() => handleSelectCategory(id)}
                  activeOpacity={0.6}
                  key={id}
                  className={`flex-row items-center text-base p-1 rounded-xl border ${
                    categoryId === id
                      ? "bg-brand/10 border-brand/40"
                      : "bg-gray-100 dark:bg-dark-2 border-gray-100 dark:border-gray-1/5"
                  }`}
                >
                  <Image
                    source={{ uri: imageUrl }}
                    className="w-9 h-9 rounded-xl mr-2"
                  />
                  <Text
                    className={`pr-2 ${
                      categoryId === id ? "text-brand" : "text-gray-400"
                    }`}
                    style={{ fontFamily: "baiJamjuree-semibold" }}
                  >
                    {content}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>

          {categoryError && (
            <Text
              className="text-rose-500 text-sm mt-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              {categoryError}
            </Text>
          )}
        </View>

        <View className="flex-row gap-x-2">
          <View className="flex-1">
            <TextInputWithIcon
              label="Price"
              name="price"
              placeholder="price"
              icon="dollar-sign"
              numberOfLines={1}
              keyboardType="numeric"
              control={control}
              rules={{ required: "price is required" }}
            />
          </View>

          <View className="flex-1">
            <TextInputWithIcon
              label="Duration"
              name="duration"
              placeholder="duration"
              icon="clock"
              numberOfLines={1}
              keyboardType="numeric"
              control={control}
              rules={{ required: "duration is required" }}
            />
          </View>
        </View>
      </View>

      {/* Stepper navigation */}
      <Navigation
        onPress={handleSubmit(onNext)}
        isLoading={isAddLoading || isUpdateLoading}
      />
    </Animated.View>
  );
};

export default ExtraInformation;

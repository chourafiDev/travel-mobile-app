import React, { useCallback, useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import DropDown from "./ui/DropDown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useColorScheme } from "nativewind";
import Icon from "react-native-vector-icons/Feather";
import GradientButton from "./ui/GradientButton";
import { useGetCategoriesQuery } from "../store/services/categoriesApiSlice";

const Filter = ({ sheetRef }) => {
  const { colorScheme } = useColorScheme();

  const snapPoints = useMemo(() => ["92%"], []);

  // fetch categories
  const { data: categories } = useGetCategoriesQuery();

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  // catgeory
  const [category, setCategory] = useState("");
  const handleSelectCategory = (item) => {
    if (category === item) {
      setCategory("");
    } else {
      setCategory(item);
    }
  };

  //duration
  const [openDuration, setOpenDuration] = useState(false);
  const [duration, setDuration] = useState(null);
  const [durations, setDurations] = useState([
    { label: "Any", value: "any" },
    { label: "1 Day Tour", value: "1 Day Tour" },
    { label: "2-4 Days Tour", value: "2-4 Days Tour" },
    { label: "5-7 Days Tour", value: "5-7 Days Tour" },
    { label: "7+ Days Tour", value: "7+ Days Tour" },
  ]);

  //activity
  const [openActivity, setOpenActivity] = useState(false);
  const [activity, setActivity] = useState(null);
  const [activities, setActivities] = useState([
    { label: "Any", value: "any" },
    { label: "Outdoor Activity", value: "outdoor Activity" },
    { label: "Nature and Wildlife", value: "Extreme" },
    { label: "Bungee Jump", value: "Bungee Jump" },
    { label: "Hiking", value: "7+ Days Tour" },
    { label: "Mountain Trekking", value: "Mountain Trekking" },
    { label: "Skydiving", value: "Skydiving" },
    { label: "Water Rafting", value: "Water Rafting" },
    { label: "In The Air", value: "In The Air" },
    { label: "Zoos & Wildlife Parks", value: "Zoos & Wildlife Parks" },
    { label: "Outdoor Parks", value: "Outdoor Parks" },
    { label: "Motor Sports", value: "Motor Sports" },
    { label: "History and Culture", value: "History and Culture" },
  ]);

  //date
  const [startDate, setStartDate] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toogleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toogleDatePicker();
        setStartDate(currentDate.toDateString());
      }
    } else {
      toogleDatePicker();
    }
  };

  // price
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  return (
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#222B45",
      }}
    >
      <BottomSheetView>
        <View className="px-4">
          <Text
            className="text-dark dark:text-white text-xl mb-4"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            Destinations Filter
          </Text>

          <View>
            <Text
              className="text-dark dark:text-white text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Location
            </Text>

            <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
              <Icon
                name="map-pin"
                size={15}
                color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
              />
              <TextInput
                placeholder="Find the world..."
                className="text-dark dark:text-white flex-1 ml-3"
                style={[{ fontFamily: "baiJamjuree-regular" }]}
                placeholderTextColor={
                  colorScheme == "light" ? "#222B4580" : "#ffffff"
                }
              />
            </View>
          </View>

          <View className="mt-5">
            <Text
              className="text-dark dark:text-white  text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Category
            </Text>
            <View className="flex-row gap-2 flex-wrap">
              {categories.map(({ id, content }) => (
                <TouchableOpacity
                  onPress={() => handleSelectCategory(content)}
                  activeOpacity={0.6}
                  key={id}
                  className={` text-base px-5 py-[10px] rounded-full border ${
                    category === content
                      ? "bg-brand/10 border-brand/40"
                      : "bg-gray-100 dark:bg-dark-2 border-gray-100 dark:border-gray-1/5"
                  }`}
                >
                  <Text
                    className={`${
                      category === content ? "text-brand" : "text-gray-400"
                    }`}
                  >
                    {content}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mt-5">
            <Text
              className="text-dark dark:text-white text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Duration
            </Text>
            <DropDown
              open={openDuration}
              value={duration}
              items={durations}
              setOpen={setOpenDuration}
              setValue={setDuration}
              setItems={setDurations}
            />
          </View>

          <View className="mt-5">
            <Text
              className="text-dark dark:text-white text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Activity
            </Text>
            <DropDown
              open={openActivity}
              value={activity}
              items={activities}
              setOpen={setOpenActivity}
              setValue={setActivity}
              setItems={setActivities}
              zIndex={1000}
            />
          </View>

          <View className="mt-5">
            <Text
              className="text-dark dark:text-white text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Date
            </Text>

            <Pressable onPress={toogleDatePicker}>
              <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
                <Icon
                  name="calendar"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="Date"
                  editable={false}
                  value={startDate}
                  onChangeText={setStartDate}
                  onPressIn={toogleDatePicker}
                  className="text-dark dark:text-white flex-1 ml-3"
                  style={[{ fontFamily: "baiJamjuree-regular" }]}
                  placeholderTextColor={
                    colorScheme == "light" ? "#222B4580" : "#ffffff"
                  }
                />
              </View>
            </Pressable>

            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChangeDate}
                minimumDate={new Date()}
              />
            )}
          </View>

          <View className="mt-5">
            <Text
              className="text-dark dark:text-white text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Price
            </Text>
            <View className="flex-row gap-3">
              <View className="flex-1 flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2 mb-3">
                <Icon
                  name="dollar-sign"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="Min"
                  onChangeText={setMinPrice}
                  value={minPrice}
                  className="text-dark dark:text-white flex-1 ml-3"
                  style={[{ fontFamily: "baiJamjuree-regular" }]}
                  keyboardType="numeric"
                  placeholderTextColor={
                    colorScheme == "light" ? "#222B4580" : "#ffffff"
                  }
                />
              </View>
              <View className="flex-1 flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2 mb-3">
                <Icon
                  name="dollar-sign"
                  size={15}
                  color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
                />
                <TextInput
                  placeholder="Max"
                  onChangeText={setMaxPrice}
                  value={maxPrice}
                  className="text-dark dark:text-white flex-1 ml-3"
                  style={[{ fontFamily: "baiJamjuree-regular" }]}
                  keyboardType="numeric"
                  placeholderTextColor={
                    colorScheme == "light" ? "#222B4580" : "#ffffff"
                  }
                />
              </View>
            </View>
          </View>

          <View className="mt-3">
            <GradientButton
              label="Apply Filter"
              icon="filter"
              type="primary"
              size="lg"
            />
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default Filter;

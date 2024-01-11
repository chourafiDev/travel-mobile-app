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
import { categories } from "../../utils/data";
import Icon from "react-native-vector-icons/Feather";
import DropDown from "./ui/DropDown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { shadow } from "../../utils/theme";
export default function Filter({ sheetRef }) {
  const snapPoints = useMemo(() => ["90%"], []);

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

  // const formatDate = (rawDate) => {
  //   let date = new Date(rawDate);

  //   let year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();

  //   month = month < 10 ? `0${month}` : month;
  //   day = day < 10 ? `0${day}` : day;

  //   return `${day}-${month}-${year}`;
  // };

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
    >
      <BottomSheetView>
        <View className="px-4">
          <Text
            className="text-dark text-xl mb-4"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            Destinations Filter
          </Text>

          <View>
            <Text
              className="text-dark text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Location
            </Text>
            <TextInput
              placeholder="Find the world..."
              style={{ fontFamily: "baiJamjuree-regular" }}
              className="w-full text-dark border border-dark/10 p-2 rounded-lg"
            />
          </View>

          <View className="mt-5">
            <Text
              className="text-dark text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Category
            </Text>
            <View className="flex-row gap-2 flex-wrap">
              {categories.map(({ title }) => (
                <TouchableOpacity
                  onPress={() => handleSelectCategory(title)}
                  activeOpacity={0.6}
                  key={title}
                  className={` text-base px-5 py-[10px] rounded-full border ${
                    category === title
                      ? "bg-brand/10 border-brand/40"
                      : "bg-gray-100 border-gray-100"
                  }`}
                >
                  <Text
                    className={`${
                      category === title ? "text-brand" : "text-gray-400"
                    }`}
                  >
                    {title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="mt-5">
            <Text
              className="text-dark text-lg mb-1"
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
              className="text-dark text-lg mb-1"
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
              className="text-dark text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Date
            </Text>

            <Pressable onPress={toogleDatePicker}>
              <TextInput
                className="w-full text-dark border border-dark/10 p-2 rounded-lg"
                placeholder="Date"
                editable={false}
                value={startDate}
                onChangeText={setStartDate}
                onPressIn={toogleDatePicker}
              />
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
              className="text-dark text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Price
            </Text>
            <View className="flex-row gap-3">
              <TextInput
                onChangeText={setMinPrice}
                className="flex-1 text-dark border border-dark/10 p-2 rounded-lg"
                value={minPrice}
                placeholder="Min"
                keyboardType="numeric"
              />
              <TextInput
                onChangeText={setMaxPrice}
                className="flex-1 text-dark border border-dark/10 p-2 rounded-lg"
                value={maxPrice}
                placeholder="Max"
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="p-3 rounded-lg bg-brand mt-3"
          >
            <Text
              className="text-white text-center text-[18px]"
              style={{ fontFamily: "baiJamjuree-bold" }}
            >
              Apply Filter
            </Text>
            <Icon
              name="filter"
              style={{
                fontFamily: "baiJamjuree-bold",
                position: "absolute",
                right: 20,
                bottom: "66%",
              }}
              size={15}
              color="#FBFBFB"
            />
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}

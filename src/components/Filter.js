import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  // Pressable,
} from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import DropDown from "./ui/DropDown";
import { useColorScheme } from "nativewind";
import Icon from "react-native-vector-icons/Feather";
import GradientButton from "./ui/GradientButton";
import { useGetCategoriesQuery } from "../store/services/categoriesApiSlice";
import { durations as durationsList } from "../../utils/data";
import { useDispatch } from "react-redux";
import {
  clearFilterQuery,
  setFilterQuery,
} from "../store/features/filterDestinationsSlice";
import OutlineButton from "../components/ui/OutlineButton";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { DESTINATIONS } from "../constants/routes";

// import DateTimePicker from "@react-native-community/datetimepicker";

const Filter = ({ sheetRef, handleCloseSnapPress }) => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();
  const dispatch = useDispatch();

  const snapPoints = useMemo(() => ["84%"], []);

  const { filterQuery } = useSelector((state) => state.filterDestinations);

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

  const [search, setSearch] = useState("");
  const [destination, setDestination] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
  const [duration, setDuration] = useState("");
  const [durations, setDurations] = useState(durationsList);

  useEffect(() => {
    setSearch(filterQuery?.search);
    setDestination(filterQuery?.destination);
    setCategory(filterQuery?.category);
    setDuration(filterQuery?.duration ? filterQuery?.duration.toString() : "");
    setMinPrice(filterQuery?.minPrice ? filterQuery?.minPrice : "");
    setMaxPrice(filterQuery?.maxPrice ? filterQuery?.maxPrice : "");
  }, [filterQuery]);

  //date
  // const [startDate, setStartDate] = useState("");
  // const [date, setDate] = useState(new Date());
  // const [showPicker, setShowPicker] = useState(false);

  // const toogleDatePicker = () => {
  //   setShowPicker(!showPicker);
  // };

  // const onChangeDate = ({ type }, selectedDate) => {
  //   if (type == "set") {
  //     const currentDate = selectedDate;
  //     setDate(currentDate);

  //     if (Platform.OS === "android") {
  //       toogleDatePicker();
  //       setStartDate(currentDate.toDateString());
  //     }
  //   } else {
  //     toogleDatePicker();
  //   }
  // };

  // handle filter and clear filters
  const handleFilterDestinations = () => {
    navigation.navigate(DESTINATIONS);

    const filtersData = {
      search,
      destination,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      duration: Number(duration),
      category,
    };

    dispatch(setFilterQuery(filtersData));

    handleCloseSnapPress();
  };

  const handleClearFilters = () => {
    dispatch(clearFilterQuery());
    setSearch("");
    setDestination("");
    setMinPrice(0);
    setMaxPrice(0);
    setCategory("");
    setDuration("");

    handleCloseSnapPress();
  };

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
      <View className="justify-between h-full pb-4">
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
              Search
            </Text>

            <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
              <Icon
                name="map"
                size={15}
                color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
              />
              <TextInput
                placeholder="Enter a keyword"
                onChangeText={setSearch}
                value={search}
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
              className="text-dark dark:text-white text-lg mb-1"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              Destination
            </Text>

            <View className="w-full flex-row items-center border border-dark/10 px-3 py-2 rounded-2xl bg-white dark:bg-dark-2">
              <Icon
                name="map-pin"
                size={15}
                color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
              />
              <TextInput
                placeholder="Enter a destination"
                onChangeText={setDestination}
                value={destination}
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
              {categories &&
                categories?.map(({ id, content }) => (
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

          {/* <View className="mt-5">
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
          </View> */}

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
                  value={minPrice.toString()}
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
                  value={maxPrice.toString()}
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
        </View>

        <View className="mt-3 px-4 flex-row gap-3">
          <View className="flex-1">
            <GradientButton
              label="Apply"
              icon="filter"
              type="primary"
              size="lg"
              onPress={handleFilterDestinations}
              isLoading={false}
            />
          </View>
          <View className="flex-1">
            <OutlineButton
              label="Clear"
              type="primary"
              size="lg"
              onPress={handleClearFilters}
            />
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default Filter;

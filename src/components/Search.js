import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { shadow } from "../../utils/theme";
import Filter from "./Filter";
import { useColorScheme } from "nativewind";
import { filter } from "../../utils/assets";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFilterQuery } from "../store/features/filterDestinationsSlice";
import { DESTINATIONS } from "../constants/routes";
import { useNavigation } from "@react-navigation/native";

const Search = ({ withFilter, placeHolder }) => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();
  const dispatch = useDispatch();

  // Open/Close modal bottom
  const sheetRef = useRef(null);

  const handleOpenSnapPress = () => {
    sheetRef.current?.present();
  };
  const handleCloseSnapPress = () => {
    sheetRef.current?.close();
  };

  // handle search
  const { filterQuery } = useSelector((state) => state.filterDestinations);
  const [search, setSearch] = useState(filterQuery?.search || "");

  useEffect(() => {
    setSearch(filterQuery?.search);
  }, [filterQuery]);

  const handleSearch = () => {
    navigation.navigate(DESTINATIONS);

    const filtersData = { search };
    dispatch(setFilterQuery(filtersData));
  };

  return (
    <>
      <View className="px-4 flex-row items-center gap-2">
        <View
          className="bg-white dark:bg-dark-2 rounded-2xl flex-row items-center gap-x-1 flex-1"
          style={[colorScheme == "light" && shadow.boxShadow]}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleSearch}
            className="bg-gray-1 dark:bg-dark w-11 h-11 rounded-2xl items-center justify-center mr-2"
          >
            <Icon
              name="search"
              style={{
                fontFamily: "baiJamjuree-bold",
              }}
              size={16}
              color="#23A892"
            />
          </TouchableOpacity>
          <TextInput
            placeholder={placeHolder}
            value={search}
            onChangeText={setSearch}
            style={{ fontFamily: "baiJamjuree-regular" }}
            className="w-full text-dark dark:text-white py-[12px]"
            placeholderTextColor={
              colorScheme == "light" ? "#222B45" : "#ffffff"
            }
          />
        </View>
        {withFilter && (
          <TouchableOpacity
            className="bg-brand dark:bg-dark-2/60 justify-center items-center w-12 h-12 rounded-2xl overflow-hidden"
            style={[colorScheme == "light" && shadow.boxShadow]}
            onPress={handleOpenSnapPress}
          >
            <LinearGradient
              colors={["#23a892", "#00c3a4"]}
              className="w-full h-full absolute top-0 right-0"
            />
            <Image source={filter} className="w-6 h-6" />
          </TouchableOpacity>
        )}
      </View>

      {/* Modal filter */}
      <Filter sheetRef={sheetRef} handleCloseSnapPress={handleCloseSnapPress} />
    </>
  );
};

export default Search;

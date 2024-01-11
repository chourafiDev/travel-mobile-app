import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Icon from "react-native-vector-icons/Feather";
import { shadow } from "../../utils/theme";
import Filter from "./Filter";

const Search = ({ withFilter, placeHolder }) => {
  // Open modal bottom
  const sheetRef = useRef(null);

  const handleSnapPress = () => {
    sheetRef.current?.present();
  };

  return (
    <>
      <View className="px-4 flex-row items-center gap-2">
        <View
          className="bg-white rounded-2xl flex-row items-center gap-x-1 flex-1"
          style={[shadow.boxShadow]}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-gray-1 w-11 h-11 rounded-2xl items-center justify-center mr-2"
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
            style={{ fontFamily: "baiJamjuree-regular" }}
            className="w-full text-dark py-[12px]"
          />
        </View>
        {withFilter && (
          <TouchableOpacity
            className="bg-brand justify-center items-center w-12 h-12 rounded-2xl"
            style={[shadow.boxShadow]}
            onPress={handleSnapPress}
          >
            <Icon
              name="sliders"
              style={{
                fontFamily: "baiJamjuree-bold",
                transform: [{ rotate: "90deg" }],
              }}
              size={14}
              color="#FBFBFB"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Modal filter */}
      <Filter sheetRef={sheetRef} />
    </>
  );
};

export default Search;

import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import EditDestination from "./EditDestination";
import DeleteDestination from "./DeleteDestination";
import ImageView from "react-native-image-viewing";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";

const Destination = ({ destination }) => {
  const { colorScheme } = useColorScheme();

  const [visible, setIsVisible] = useState(false);
  const destinationImages = destination.images.map((image) => {
    return { uri: image.imageUrl };
  });

  // Open modal edit destination
  const sheetRefEdit = useRef(null);
  const handleSnapPressOpenEdit = () => {
    sheetRefEdit.current?.present();
  };
  const handleSnapPressCloseEdit = () => {
    sheetRefEdit.current?.close();
  };

  // Open modal delete destination
  const sheetRefDelete = useRef(null);
  const handleSnapPressOpenDelete = () => {
    sheetRefDelete.current?.present();
  };
  const handleSnapPressCloseDelete = () => {
    sheetRefDelete.current?.close();
  };

  return (
    <>
      <View
        className="mx-3 flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        {/* Modal images */}
        <ImageView
          images={destinationImages}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />

        <View className="flex-row items-center gap-2 w-40">
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            className="w-12 h-12 rounded-2xl overflow-hidden relative"
          >
            <View className="absolute top-0 left-0 bg-dark-2/60 w-full h-full z-10"></View>
            <Text
              className="text-white text-lg z-10 absolute top-[14px] left-[14px]"
              style={{ fontFamily: "baiJamjuree-bold" }}
            >
              + {destinationImages.length}
            </Text>
            <Image
              source={{ uri: destinationImages[0]?.uri }}
              className="w-full h-full"
            />
          </TouchableOpacity>

          <View className="space-y-1">
            <Text
              className="text-dark dark:text-white text-base"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              {destination.title}
            </Text>
            <Text
              className="text-dark/50 dark:text-white/50 text-sm"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              ${destination.price}
            </Text>
          </View>
        </View>

        <View className="bg-brand/10 rounded-lg px-2 py-1">
          <Text
            className="text-brand text-[15px]"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            {destination.category.content}
          </Text>
        </View>

        <View className="flex-row gap-1">
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-gray-1 dark:bg-dark-2  w-9 h-9 rounded-lg items-center justify-center"
            onPress={handleSnapPressOpenEdit}
          >
            <Icon name="edit-2" size={14} color="#23A892" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-gray-1 dark:bg-dark-2  w-9 h-9 rounded-lg items-center justify-center"
            onPress={handleSnapPressOpenDelete}
          >
            <Icon name="trash-2" size={14} color="#ef476f" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal Edit Destination */}
      <EditDestination
        sheetRef={sheetRefEdit}
        handleSnapPressCloseEdit={handleSnapPressCloseEdit}
        destination={destination}
      />

      {/* Modal Dlete Destination */}
      <DeleteDestination
        sheetRef={sheetRefDelete}
        handleSnapPressCloseDelete={handleSnapPressCloseDelete}
        destinationId={destination.id}
      />
    </>
  );
};

export default Destination;

import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import EditDestination from "./EditDestination";
import DeleteDestination from "./DeleteDestination";
import ImageView from "react-native-image-viewing";

const Destination = ({ destination }) => {
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
      <View className="flex-row justify-between items-center border border-dark/10 dark:border-gray-1/5 px-2 py-3 rounded-xl">
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

        <View className="bg-brand/20 rounded-lg px-2 py-1">
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
            className="w-8 h-8 rounded-xl bg-brand justify-center items-center"
            onPress={handleSnapPressOpenEdit}
          >
            <Icon name="edit-2" size={14} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-8 h-8 rounded-xl bg-danger-100 justify-center items-center"
            onPress={handleSnapPressOpenDelete}
          >
            <Icon name="trash-2" size={14} color="#ffffff" />
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

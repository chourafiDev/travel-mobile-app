import React, { memo, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";

const Category = memo(({ category }) => {
  const { colorScheme } = useColorScheme();

  // Open modal add category
  const sheetRefEdit = useRef(null);
  const handleSnapPressOpenEdit = () => {
    sheetRefEdit.current?.present();
  };
  const handleSnapPressCloseEdit = () => {
    sheetRefEdit.current?.close();
  };

  // Open modal add category
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
        <View className="flex-row items-center gap-4">
          <Image
            source={{ uri: category?.imageUrl }}
            className="w-12 h-12 rounded-2xl"
          />

          <Text
            className="text-dark/60 dark:text-white/60 text-base"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            {category?.content}
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

      {/* Modal Edit Category */}
      <EditCategory
        sheetRef={sheetRefEdit}
        handleSnapPressCloseEdit={handleSnapPressCloseEdit}
        category={category}
      />

      {/* Modal Dlete Category */}
      <DeleteCategory
        sheetRef={sheetRefDelete}
        handleSnapPressCloseDelete={handleSnapPressCloseDelete}
        categoryId={category.id}
      />
    </>
  );
});

export default Category;

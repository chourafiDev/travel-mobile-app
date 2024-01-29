import React, { memo, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

const Category = memo(({ category }) => {
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
      <View className="flex-row justify-between items-center border border-dark/10 dark:border-gray-1/5 px-2 py-3 rounded-xl">
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

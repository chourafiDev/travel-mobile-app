import React, { memo, useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { defaultImage } from "../../../utils/assets";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

const User = ({ user }) => {
  // Open modal edit user
  const sheetRefEdit = useRef(null);
  const handleSnapPressOpenEdit = useCallback(() => {
    sheetRefEdit.current?.present();
  }, []);
  const handleSnapPressCloseEdit = useCallback(() => {
    sheetRefEdit.current?.close();
  }, []);

  // Open modal delete user
  const sheetRefDelete = useRef(null);
  const handleSnapPressOpenDelete = useCallback(() => {
    sheetRefDelete.current?.present();
  }, []);
  const handleSnapPressCloseDelete = useCallback(() => {
    sheetRefDelete.current?.close();
  }, []);
  return (
    <>
      <View className="flex-row justify-between items-center border border-dark/10 dark:border-gray-1/5 px-2 py-3 rounded-xl">
        <View className="flex-row items-center gap-2 w-48">
          <Image
            source={user.imageUrl ? { uri: user.imageUrl } : defaultImage}
            className="w-12 h-12 rounded-2xl"
          />

          <View>
            <Text
              className="text-dark dark:text-white text-base"
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              {user.username}
            </Text>
            <Text
              className="text-dark/60 dark:text-white/60 text-base"
              style={{ fontFamily: "baiJamjuree-medium" }}
            >
              {user.firstName} {user.lastName}
            </Text>
          </View>
        </View>

        <View className="bg-brand/20 rounded-lg px-2 py-1">
          <Text
            className="text-brand text-[15px]"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            {user.role}
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

      {/* Modal Edit User */}
      <EditUser
        sheetRef={sheetRefEdit}
        handleSnapPressCloseEdit={handleSnapPressCloseEdit}
        user={user}
      />

      {/* Modal Dlete User */}
      <DeleteUser
        sheetRef={sheetRefDelete}
        handleSnapPressCloseDelete={handleSnapPressCloseDelete}
        userId={user.id}
      />
    </>
  );
};

export default User;

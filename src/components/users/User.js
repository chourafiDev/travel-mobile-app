import React, { useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { defaultImage } from "../../../utils/assets";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";

const User = ({ user }) => {
  const { colorScheme } = useColorScheme();

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
      <View
        className="mx-3 flex-row items-center justify-between p-3 rounded-2xl bg-white dark:bg-dark-2"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
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

        <View className="bg-brand/10 rounded-lg px-2 py-1">
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

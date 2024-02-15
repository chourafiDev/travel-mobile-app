import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../../utils/theme";
import Icon from "react-native-vector-icons/Feather";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradientButton from "../../components/ui/GradientButton";
import { useChangePasswordMutation } from "../../store/services/profileApiSlice";
import Toast from "react-native-toast-message";

const ChangePasswordScreen = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const insets = useSafeAreaInsets();

  const [showOldPassword, setShowOldPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [changePassword, { isLoading, isSuccess }] =
    useChangePasswordMutation();

  const submitChangePassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        Toast.show({
          type: "error",
          text1: "password must match with confirm password",
        });
      } else {
        const data = {
          oldPassword,
          newPassword,
        };

        await changePassword(data).unwrap();
      }
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.data?.message || err.error,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: "success",
        text1: "Password updated successfully",
      });
    }
  }, [isSuccess]);

  return (
    <View
      style={{ paddingTop: insets.top }}
      className="flex-1 bg-[#f8f8fa] dark:bg-dark px-4"
    >
      {/* header */}
      <View className="flex-row items-center mt-3 mb-6">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          className="bg-gray-1 dark:bg-dark-2 w-9 h-9 rounded-lg items-center justify-center"
        >
          <Icon
            name="arrow-left"
            style={{
              fontFamily: "baiJamjuree-bold",
            }}
            size={16}
            color={colorScheme == "light" ? "#222B45" : "#fbfbfbfb"}
          />
        </TouchableOpacity>
        <Text
          className="text-dark dark:text-white text-xl ml-4"
          style={{ fontFamily: "baiJamjuree-bold" }}
        >
          Change Password
        </Text>
      </View>

      {/* Body */}

      <Animated.View
        entering={FadeInDown.delay(100).duration(1000).springify()}
        className="mt-6 mb-4"
      >
        <Text
          className="text-dark/70 dark:text-white/70 text-base"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Enter your old password to get access to change It.
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="key"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Old Password"
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={showOldPassword}
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />

        <TouchableOpacity onPress={() => setShowOldPassword(!showOldPassword)}>
          <Icon
            name={showOldPassword ? "eye-off" : "eye"}
            size={15}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="lock"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={showNewPassword}
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />

        <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
          <Icon
            name={showNewPassword ? "eye-off" : "eye"}
            size={15}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="lock"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Confirme Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={showConfirmPassword}
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />

        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Icon
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={15}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
        className="mt-auto mb-6"
      >
        <GradientButton
          label="Edit"
          icon="edit-2"
          type="primary"
          size="lg"
          isLoading={isLoading}
          onPress={submitChangePassword}
        />
      </Animated.View>
    </View>
  );
};

export default ChangePasswordScreen;

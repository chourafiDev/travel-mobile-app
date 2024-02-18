import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LOGIN } from "../../constants/routes";
import Icon from "react-native-vector-icons/Feather";
import GradientButton from "../ui/GradientButton";
import OutlineButton from "../ui/OutlineButton";
import Toast from "react-native-toast-message";
import { useRegisterMutation } from "../../store/services/authApiSlice";

const RegisterForm = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  // handle register
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [register, { isLoading, isSuccess }] = useRegisterMutation();

  const handleSubmitRegsiter = async () => {
    if (!username || !firstName || !lastName || !email || !password) {
      Toast.show({
        type: "error",
        text1: "All fields are required",
      });
    } else {
      try {
        const payload = { username, firstName, lastName, email, password };
        await register(payload).unwrap();
      } catch (err) {
        Toast.show({
          type: "error",
          text1: err.data?.message || err.error,
        });
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setUsername("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      navigation.navigate(LOGIN);

      Toast.show({
        type: "success",
        text1: "Register success",
      });
    }
  }, [isSuccess]);

  return (
    <View className="px-4 mt-4">
      {/* Header */}
      <View className="mb-4">
        <Text
          className="text-dark dark:text-white text-[18px]"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Fill your details to <Text className="text-brand">Sign Up</Text>
        </Text>
      </View>

      {/* Body */}
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="user"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full border flex-row items-center border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="user"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full border flex-row items-center border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="user"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.duration(1000).springify()}
        className="w-full border flex-row items-center border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-3"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="mail"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          className="text-dark dark:text-white flex-1 ml-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full border flex-row items-center border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2 mb-8"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="lock"
          size={15}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={showPassword}
          value={password}
          onChangeText={setPassword}
          className="text-dark dark:text-white flex-1 mx-3"
          style={[{ fontFamily: "baiJamjuree-regular" }]}
          placeholderTextColor={
            colorScheme == "light" ? "#222B4580" : "#ffffff"
          }
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            size={17}
            color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
      >
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
        >
          <GradientButton
            label="Sign Up"
            icon=""
            size="lg"
            type="primary"
            onPress={handleSubmitRegsiter}
            isLoading={isLoading}
          />
        </Animated.View>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
        className="py-3 flex-row items-center gap-3"
      >
        <View className="bg-dark/10 dark:bg-white/10 flex-1 h-[1px]"></View>
        <Text
          className="text-dark/40 dark:text-white/40"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Have Account?
        </Text>
        <View className="bg-dark/10 dark:bg-white/10 flex-1 h-[1px]"></View>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
      >
        <OutlineButton label="Login" type="primary" size="lg" />
      </Animated.View>
    </View>
  );
};

export default RegisterForm;

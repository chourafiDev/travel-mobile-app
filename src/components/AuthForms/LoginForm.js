import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import { FORGOT_PASSWORD, HOME_TAB, REGISTER } from "../../constants/routes";
import Icon from "react-native-vector-icons/Feather";
import GradientButton from "../ui/GradientButton";
import { useLoginMutation } from "../../store/services/authApiSlice";
import Toast from "react-native-toast-message";
import { setCredentials } from "../../store/features/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(true);

  // handle login
  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async () => {
    if (!username || !password) {
      Toast.show({
        type: "error",
        text1: "Username and password are required",
      });
    } else {
      try {
        const payload = { username, password };

        const res = await login(payload).unwrap();
        dispatch(setCredentials({ ...res }));
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
      setPassword("");

      Toast.show({
        type: "success",
        text1: "Login success",
      });
    }
  }, [isSuccess]);

  return (
    <View className="px-4 mt-16">
      {/* Header */}
      <View className="mb-10">
        <Text
          className="text-dark dark:text-white text-2xl"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Welcome Back,{" "}
          <Text
            className="text-brand"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Login
          </Text>
        </Text>
        <Text
          className="text-dark dark:text-white text-2xl mt-1"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          for Continue !
        </Text>
      </View>

      {/* Body */}
      <Animated.View
        entering={FadeInDown.delay(100).duration(1000).springify()}
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
        entering={FadeInDown.delay(200).duration(1000).springify()}
        className="w-full flex-row items-center border border-dark/10 px-4 py-3 rounded-2xl bg-white dark:bg-dark-2"
        style={[colorScheme == "light" && shadow.boxShadow]}
      >
        <Icon
          name="lock"
          size={17}
          color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
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

      <Animated.View
        entering={FadeInDown.delay(300).duration(1000).springify()}
      >
        <TouchableOpacity
          className="mb-10 mt-2 items-end"
          onPress={() => navigation.navigate(FORGOT_PASSWORD)}
        >
          <Text
            className="text-dark/80 dark:text-white/80"
            style={{ fontFamily: "baiJamjuree-semibold" }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <Animated.View
        entering={FadeInDown.delay(400).duration(1000).springify()}
      >
        <GradientButton
          label="Login"
          icon=""
          size="lg"
          type="primary"
          onPress={handleSubmitLogin}
          isLoading={isLoading}
        />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(500).duration(1000).springify()}
        className="py-3 flex-row items-center gap-3"
      >
        <View className="bg-dark/10 dark:bg-white/10 flex-1 h-[1px]"></View>
        <Text
          className="text-dark/40 dark:text-white/40"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          Don't Have Account?
        </Text>
        <View className="bg-dark/10 dark:bg-white/10 flex-1 h-[1px]"></View>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.delay(600).duration(1000).springify()}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate(REGISTER)}
          className="bg-white border border-brand/80 px-4 py-3 rounded-2xl dark:bg-dark-2"
          style={[
            colorScheme == "light" && shadow.boxShadow,
            { fontFamily: "baiJamjuree-regular" },
          ]}
        >
          <Text
            className="text-brand text-center text-[17px]"
            style={{ fontFamily: "baiJamjuree-medium" }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default LoginForm;

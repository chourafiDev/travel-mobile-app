import React from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Controller } from "react-hook-form";
import { useColorScheme } from "nativewind";

const TextInputWithIcon = ({
  label,
  control,
  name,
  placeholder,
  icon,
  numberOfLines,
  rules,
  extraStyle,
  keyboardType,
}) => {
  const { colorScheme } = useColorScheme();
  return (
    <View>
      <Text
        className="text-dark dark:text-white text-[17px] mb-1"
        style={{ fontFamily: "baiJamjuree-medium" }}
      >
        {label}
      </Text>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View
              className={`w-full flex-row border ${
                error ? "border-rose-300" : "border-dark/10"
              }  px-3 py-2 rounded-2xl bg-white dark:bg-dark-2 ${
                numberOfLines > 1 ? "items-start" : "items-center"
              }`}
            >
              <Icon
                name={icon}
                size={15}
                color={colorScheme == "light" ? "#222B4580" : "#ffffff"}
              />
              <TextInput
                placeholder={placeholder}
                numberOfLines={numberOfLines}
                keyboardType={keyboardType || "default"}
                className="text-dark dark:text-white flex-1 ml-3"
                style={[{ fontFamily: "baiJamjuree-regular" }, extraStyle]}
                placeholderTextColor={
                  colorScheme == "light" ? "#222B4580" : "#ffffff"
                }
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>

            {error && (
              <Text
                className="text-rose-500 text-sm mt-1"
                style={{ fontFamily: "baiJamjuree-medium" }}
              >
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default TextInputWithIcon;

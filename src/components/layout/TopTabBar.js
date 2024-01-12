import { Text, TouchableOpacity, View } from "react-native";

export default function TopTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View className="flex-row bg-[#EEF0F7] rounded-full mb-4">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: isFocused ? "#fbfbfb" : "#EEF0F7",
              borderRadius: 30,
              margin: 4,
              marginVertical: 4,
              paddingVertical: 11,
            }}
          >
            <Text
              className={` text-center ${
                isFocused ? "text-dark" : "text-dark/70"
              }`}
              style={{ fontFamily: "baiJamjuree-semibold" }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

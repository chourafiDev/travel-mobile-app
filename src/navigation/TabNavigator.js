import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DESTINATIONS, FAVORITES, HOME, SETTING } from "../constants/routes";
import { View } from "react-native";
import { useColorScheme } from "nativewind";

import IconFeather from "react-native-vector-icons/Feather";
import IconFoundation from "react-native-vector-icons/Foundation";

// Screens
import HomeScreen from "../screens/app/HomeScreen";
import DestinationsScreen from "../screens/app/DestinationsScreen";
import FavoritesScreen from "../screens/app/FavoritesScreen";
import SettingScreen from "../screens/app/SettingScreen";
import { LinearGradient } from "expo-linear-gradient";
import { shadow } from "../../utils/theme";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { colorScheme } = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: "absolute",
          // bottom: 10,
          // marginHorizontal: 15,
          // borderRadius: 10,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          height: 65,
          borderWidth: 0,
          borderColor: colorScheme == "light" ? "#ffffff" : "#1A2138",
          backgroundColor: colorScheme == "light" ? "#ffffff" : "#1A2138",

          // shadow
          shadowColor: "#cad2c5",
          shadowOffset: {
            width: 6,
            height: 6,
          },
          shadowOpacity: 0.5,
          shadowRadius: 10,

          elevation: 10,
        },
      }}
    >
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 18,
              }}
            >
              <IconFeather
                name="home"
                size={20}
                color={
                  focused
                    ? "#23A892"
                    : colorScheme == "light"
                    ? "#222B45"
                    : "#FBFBFB"
                }
              ></IconFeather>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={DESTINATIONS}
        component={DestinationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 18,
              }}
            >
              <IconFeather
                name="map"
                size={20}
                color={
                  focused
                    ? "#23A892"
                    : colorScheme == "light"
                    ? "#222B45"
                    : "#FBFBFB"
                }
              ></IconFeather>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="globe"
        component={DestinationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={[colorScheme == "light" && shadow.boxShadow]}
              className="rounded-full overflow-hidden w-[66px] h-[66px] mb-12 border-4 border-white justify-center items-center"
            >
              <LinearGradient
                colors={["#23a892", "#00dbb7"]}
                className="w-full h-full absolute top-0 right-0"
                start={{ x: 0.7, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              />
              <IconFeather
                name="globe"
                size={23}
                color={focused ? "#23A892" : "#FBFBFB"}
              ></IconFeather>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={FAVORITES}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 18,
              }}
            >
              <IconFeather
                name="heart"
                size={20}
                color={
                  focused
                    ? "#23A892"
                    : colorScheme == "light"
                    ? "#222B45"
                    : "#FBFBFB"
                }
              ></IconFeather>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SETTING}
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 18,
              }}
            >
              <IconFeather
                name="settings"
                size={20}
                color={
                  focused
                    ? "#23A892"
                    : colorScheme == "light"
                    ? "#222B45"
                    : "#FBFBFB"
                }
              ></IconFeather>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

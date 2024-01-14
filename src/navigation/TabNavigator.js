import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DESTINATIONS, FAVORITES, HOME, SETTING } from "../constants/routes";
import Icon from "react-native-vector-icons/Feather";
import { useRef } from "react";
import { View } from "react-native";
import { Animated, Dimensions } from "react-native";
import { useColorScheme } from "nativewind";

// Screens
import HomeScreen from "../screens/app/HomeScreen";
import DestinationsScreen from "../screens/app/DestinationsScreen";
import FavoritesScreen from "../screens/app/FavoritesScreen";
import SettingScreen from "../screens/app/SettingScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { colorScheme } = useColorScheme();

  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <>
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
                <Icon
                  name="home"
                  size={20}
                  color={focused ? "#23A892" : "#FBFBFB"}
                ></Icon>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
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
                <Icon
                  name="map"
                  size={20}
                  color={focused ? "#23A892" : "#FBFBFB"}
                ></Icon>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.57,
                useNativeDriver: true,
              }).start();
            },
          })}
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
                <Icon
                  name="heart"
                  size={20}
                  color={focused ? "#23A892" : "#FBFBFB"}
                ></Icon>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.12,
                useNativeDriver: true,
              }).start();
            },
          })}
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
                <Icon
                  name="settings"
                  size={20}
                  color={focused ? "#23A892" : "#FBFBFB"}
                ></Icon>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4.7,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>

      <Animated.View
        className="absolute bg-brand h-[2px] bottom-[64px] left-[28px] rounded-full"
        style={{
          width: getWidth() - 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

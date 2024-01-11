import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import {
  FAVORITES_DRAWER,
  HOME_TAB,
  PROFILE_DRAWER,
} from "../constants/routes";

import CustomDrawer from "../components/layout.js/CustomDrawer";
// Screens
import FavoritesScreen from "../screens/app/FavoritesScreen";
import ProfileScreen from "../screens/app/ProfileScreen";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#23A892",
        drawerActiveTintColor: "#FBFBFB",
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name={HOME_TAB}
        component={TabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={FAVORITES_DRAWER}
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={PROFILE_DRAWER}
        component={ProfileScreen}
        options={{
          title: "Profile",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

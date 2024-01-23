import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import {
  CATEGORIES,
  CHANGE_PASSWORD,
  DESTINATION,
  HOME_DRAWER,
  MANAGE_DESTINATIONS,
  NOTIFICATION,
  PROFILE_INFO,
  USERS,
} from "../constants/routes";

import CustomDrawer from "../components/layout/CustomDrawer";

// Screens
import TabNavigator from "./TabNavigator";
import DestinationScreen from "../screens/app/DestinationScreen";
import EditProfileInfoScreen from "../screens/app/EditProfileInfoScreen";
import ChangePasswordScreen from "../screens/app/ChangePasswordScreen";
import NotificationScreen from "../screens/app/NotificationScreen";
import UsersScreen from "../screens/app/UsersScreen";
import CategoriesScreen from "../screens/app/CategoriesScreen";
import ManageDestinationsScreen from "../screens/app/ManageDestinationsScreen";

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
        name={HOME_DRAWER}
        component={TabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={DESTINATION}
        component={DestinationScreen}
        options={{
          title: "Destination",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={PROFILE_INFO}
        component={EditProfileInfoScreen}
        options={{
          title: "Profile info",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={CHANGE_PASSWORD}
        component={ChangePasswordScreen}
        options={{
          title: "Change password",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={NOTIFICATION}
        component={NotificationScreen}
        options={{
          title: "Notification",
          drawerIcon: ({ color }) => (
            <Icon name="home-sharp" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={USERS}
        component={UsersScreen}
        options={{
          title: "Users",
          drawerIcon: ({ color }) => (
            <Icon name="user" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={CATEGORIES}
        component={CategoriesScreen}
        options={{
          title: "Categories",
          drawerIcon: ({ color }) => (
            <Icon name="layers" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={MANAGE_DESTINATIONS}
        component={ManageDestinationsScreen}
        options={{
          title: "Manage Destinations",
          drawerIcon: ({ color }) => (
            <Icon name="columns" size={20} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

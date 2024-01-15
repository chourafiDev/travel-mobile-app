import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { DESTINATION, HOME_TAB, PROFILE_INFO } from "../constants/routes";

import CustomDrawer from "../components/layout/CustomDrawer";

// Screens
import TabNavigator from "./TabNavigator";
import DestinationScreen from "../screens/app/DestinationScreen";
import EditProfileInfoScreen from "../screens/app/EditProfileInfoScreen";

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
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAuthData } from "../store/features/authSlice";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FORGOT_PASSWORD,
  HOME_TAB,
  LOGIN,
  REGISTER,
  WELCOME,
} from "../constants/routes";
import DrawerNavigator from "./DrawerNavigator";
import LoginScreen from "../screens/auth/LoginScreen";
import Loading from "../components/Loading";
import WelcomeScreen from "../screens/WelcomeScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const dispatch = useDispatch();
  const { status, isSignedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchAuthData());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSignedIn ? (
            <Stack.Screen
              name={HOME_TAB}
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen name={WELCOME} component={WelcomeScreen} />
              <Stack.Screen name={LOGIN} component={LoginScreen} />
              <Stack.Screen
                name={FORGOT_PASSWORD}
                component={ForgotPasswordScreen}
              />
              <Stack.Screen name={REGISTER} component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;

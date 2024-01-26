import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import AppStackNavigator from "./AppStackNavigator";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAuthData } from "../store/features/authSlice";
import { useEffect } from "react";

const AppNavigation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchAuthData());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        {user ? <AppStackNavigator /> : <AuthStackNavigator />}
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;

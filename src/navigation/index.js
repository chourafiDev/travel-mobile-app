import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <AuthNavigator />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;

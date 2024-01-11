import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

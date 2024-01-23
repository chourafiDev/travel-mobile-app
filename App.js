import AppNavigation from "./src/navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "baiJamjuree-extralight": require("./assets/fonts/BaiJamjuree-ExtraLight.ttf"),
    "baiJamjuree-light": require("./assets/fonts/BaiJamjuree-Light.ttf"),
    "baiJamjuree-regular": require("./assets/fonts/BaiJamjuree-Regular.ttf"),
    "baiJamjuree-medium": require("./assets/fonts/BaiJamjuree-Medium.ttf"),
    "baiJamjuree-semibold": require("./assets/fonts/BaiJamjuree-SemiBold.ttf"),
    "baiJamjuree-bold": require("./assets/fonts/BaiJamjuree-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <GestureHandlerRootView className="flex-1">
      <AppNavigation />
    </GestureHandlerRootView>
  );
}

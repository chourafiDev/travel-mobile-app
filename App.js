import AppNavigation from "./src/navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/store";
import Toast from "react-native-toast-message";
import { StripeProvider } from "@stripe/stripe-react-native";

const STRIPE_PUBLICH_KEY = process.env.EXPO_PUBLIC_STRIPE_PUBLICH_KEY;

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
    <Provider store={store}>
      <GestureHandlerRootView className="flex-1">
        <StripeProvider publishableKey={STRIPE_PUBLICH_KEY}>
          <AppNavigation />
        </StripeProvider>
        <Toast />
      </GestureHandlerRootView>
    </Provider>
  );
}

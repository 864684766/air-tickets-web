import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
export const useLoadFont = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);
  SplashScreen.preventAutoHideAsync();

  const loadFonts = async () => {
    await Font.loadAsync(
      "antoutline",
      require("@ant-design/icons-react-native/fonts/antoutline.ttf")
    );
    await Font.loadAsync(
      "antfill",
      require("@ant-design/icons-react-native/fonts/antfill.ttf")
    );
    setIsReady(true);
  };

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);
  return isReady;
};

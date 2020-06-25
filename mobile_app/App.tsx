import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./src/store/index";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Routes } from "./src/routes";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import firebase from "firebase";
import { firebaseConfig } from "./config";
import * as SplashScreen from "expo-splash-screen";
firebase.initializeApp(firebaseConfig);

export default function App(): JSX.Element {
  const [isReady, setReady] = useState(false);
  const getFonts = () => {
    return Font.loadAsync({
      NMedium: require("./assets/fonts/NotoSansKR-Medium.otf"),
      NBold: require("./assets/fonts/NotoSansKR-Bold.otf"),
      NRegular: require("./assets/fonts/NotoSansKR-Regular.otf"),
    });
  };
  useEffect(() => {
    async function asyncTasks() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
      await loadResourcesAsync();
      setReady(true);
    }

    asyncTasks();
  }, []);
  async function loadResourcesAsync() {
    await Promise.all([
      // Asset.loadAsync([
      //   require("./assets/images/logo.png"), // Load your resources here (if any)
      // ]),
      Font.loadAsync({
        NMedium: require("./assets/fonts/NotoSansKR-Medium.otf"),
        NBold: require("./assets/fonts/NotoSansKR-Bold.otf"),
        NRegular: require("./assets/fonts/NotoSansKR-Regular.otf"),
      }),
    ]);
    await SplashScreen.hideAsync();
  }
  // if (isReady) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApplicationProvider>
  );
  // } else {
  // return <AppLoading startAsync={getFonts} onFinish={() => setReady(true)} />;
  // }
}

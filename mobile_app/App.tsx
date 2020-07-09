import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./src/store/index";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Routes } from "./src/routes";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import firebase from "firebase";
import { firebaseConfig } from "./config";
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

  if (isReady) {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ApplicationProvider>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setReady(true)} />;
  }
}

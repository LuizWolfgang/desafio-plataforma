import "react-native-gesture-handler";

import React from "react";
import { ActivityIndicator, StatusBar, View, Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}

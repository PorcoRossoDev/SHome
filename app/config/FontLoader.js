import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () =>
  Font.loadAsync({
    'montserrat-regular': require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'montserrat-medium': require('../../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'montserrat-bold': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  });

export default function FontLoader({ children }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <>{children}</>;
}












// 
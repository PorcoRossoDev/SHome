// ⚡️ Luôn import 2 dòng này đầu tiên
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  useFonts
} from '@expo-google-fonts/nunito';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useState } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './app/navigation/AppNavigator';
import './global.css';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    'SF-Pro-Display-Regular': require('./assets/fonts/SF-Pro-Display/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-Medium': require('./assets/fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display/SF-Pro-Display-Bold.otf'),
  });

  // Lấy Screen hiện tại
  const navigationRef = useNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState('Home');
  const getActiveRouteName = (state) => {
    if (!state) return null;
    const route = state.routes[state.index];
    if (route.state) {
      return getActiveRouteName(route.state);
    }
    return route.name;
  };

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            {/* <StatusBar
              translucent={false}
              backgroundColor={'transparent'}
              barStyle={'light-content'}
            /> */}
            <SafeAreaView edges={currentRoute === 'Home' ? ['bottom'] : ['bottom', 'top']} style={{ flex: 1, backgroundColor: '#fff' }}>
              <NavigationContainer
                ref={navigationRef}
                onStateChange={(state) => {
                  const routeName = getActiveRouteName(state);
                  setCurrentRoute(routeName);
                }}
              >
                <AppNavigation />
              </NavigationContainer>
            </SafeAreaView>
          </SafeAreaProvider>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

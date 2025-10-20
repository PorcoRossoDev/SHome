// ⚡️ Luôn import 2 dòng này đầu tiên
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './app/navigation/AppNavigator';
import './global.css';



export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            <StatusBar
              translucent={false}
              backgroundColor={'#0089FF'}
              barStyle={'light-content'}
            />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
              <NavigationContainer>
                <AppNavigation />
              </NavigationContainer>
            </SafeAreaView>
          </SafeAreaProvider>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

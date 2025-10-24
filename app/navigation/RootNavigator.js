import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import LoginScreen from '../screens/login/LoginScreen';
import AppNavigation from './AppNavigator';

export default function RootNavigator() {
    const Stack = createStackNavigator();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isLoggedIn ? (
                <Stack.Screen name="Login">
                    {(props) => <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />}
                </Stack.Screen>
            ) : (
                <Stack.Screen name="Main" component={AppNavigation} />
            )}
        </Stack.Navigator>
    );
}

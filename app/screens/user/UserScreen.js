import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserOverviewStack } from './stack';

const Stack = createNativeStackNavigator();
const UserScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="UserOverviewStack"
        component={UserOverviewStack}
        options={{ title: 'Khách hàng', headerBackVisible: false, }}
      />
    </Stack.Navigator>
  );
};

export default UserScreen;

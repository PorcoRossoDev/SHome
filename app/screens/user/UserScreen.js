import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderOrderCancelled from '../../../components/order/HeaderOrderCancelled';
import { UserListStack, UserOverviewStack, UserPenddingStack } from './stack';

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
        options={{ title: 'Khách hàng', headerBackVisible: false, navigation:navigation }}
      />
      <Stack.Screen
        name="UserListStack"
        component={UserListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Khách hàng'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="UserPenddingStack"
        component={UserPenddingStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Khách hàng cần xử lý'} navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default UserScreen;

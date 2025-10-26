import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrtherSettingStack } from './stack';

const Stack = createNativeStackNavigator();
const OrtherScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="OrtherSettingStack"
        component={OrtherSettingStack}
        options={{ title: 'Cài đặt', headerBackVisible: false, }}
      />
      {/* <Stack.Screen
        name="OrderListStack"
        component={OrderListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Danh sách đơn hàng'} navigation={navigation} />,
        })}
      /> */}
    </Stack.Navigator>
  );
}

export default OrtherScreen
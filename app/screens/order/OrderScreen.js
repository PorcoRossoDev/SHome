import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderOrderCancelled from '../../../components/order/HeaderOrderCancelled';
import { OrderAddStack, OrderFilterStack, OrderListStack, OrderOverviewStack, OrderPenddingStack } from './stack';

const Stack = createNativeStackNavigator();
const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="OrderOverviewStack"
        component={OrderOverviewStack}
        options={{ title: 'Đơn hàng', headerBackVisible: false, }}
      />
      <Stack.Screen
        name="OrderListStack"
        component={OrderListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Danh sách đơn hàng'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="OrderCancelledStack"
        component={OrderListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Đơn hàng huỷ'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="OrderSuccessStack"
        component={OrderListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Đơn hàng hoàn thành'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="OrderPaymentSuccessStack"
        component={OrderListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Đã thanh toán'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="UnpaidOrdersStack"
        component={OrderListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Chưa thanh toán'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="OrderPenddingStack"
        component={OrderPenddingStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Đơn hàng cần xử lý'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="OrderFilterStack"
        component={OrderFilterStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Bộ lọc'} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="OrderAddStack"
        component={OrderAddStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled title={'Tạo đơn hàng'} navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default OrderScreen;

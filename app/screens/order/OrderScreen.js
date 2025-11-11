import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import * as HeroOutline from "react-native-heroicons/outline";
import HeaderOrderCancelled from '../../../components/order/HeaderOrder';
import { OrderAddStack, OrderFilterStack, OrderListStack, OrderOverviewStack, OrderPenddingStack } from './stack';

const Stack = createNativeStackNavigator();
const OrderScreen = () => {
  const navigation = useNavigation();
  const [layoutOrderPendding, setlayoutOrderPendding] = useState(false)
  const [layoutOrder, setlayoutOrder] = useState(false)

  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="OrderOverviewStack"
        component={OrderOverviewStack}
        options={ ({navigation}) => ({ 
          title: 'Tạo sản phẩm', 
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="">
              <HeroOutline.ArrowLeftIcon size={20} color="#000" />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen
        name="OrderListStack"
        component={OrderListStack}
        options={({navigation, route}) => ({
          header: () => <HeaderOrderCancelled 
            title={'Danh sách đơn hàng'} 
            layoutOrder={route.params?.layoutOrder ?? false}
              onToggleLayout={() => {
                const current = route.params?.layoutOrder ?? false
                navigation.setParams({ layoutOrder: !current })
              }}
            navigation={navigation} />,
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
          header: () => <HeaderOrderCancelled 
            title={'Đơn hàng cần xử lý'} 
            layoutOrderPendding={route.params?.layoutOrderPendding ?? false}
              onToggleLayout={() => {
                const current = route.params?.layoutOrderPendding ?? false
                navigation.setParams({ layoutOrderPendding: !current })
              }}
            navigation={navigation} />,
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

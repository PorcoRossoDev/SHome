import { ScrollView, Text, View } from 'react-native';
import OrderItem from '../../../../components/order/OrderItem';


const OrderListStack = ({ navigation }) => {
  return (
    <ScrollView>
      <View className='px-4'>
        <View className='mt-6'>
          <Text className='text-gray-500 text-f15 font-sfregular'>2.207 đơn hàng</Text>
          <View className='mt-4'>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderListStack;

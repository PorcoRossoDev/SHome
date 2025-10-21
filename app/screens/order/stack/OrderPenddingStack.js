import { ScrollView, Text, View } from 'react-native';
import OrderItemPendding from '../../../../components/order/OrderItemPendding';

const OrderPenddingStack = () => {
    return (
        <ScrollView className='px-4 bg-white'>
            <View className='mt-6'>
                <Text className='text-gray-500 text-f14'>2.207 đơn hàng</Text>
                <View className='mt-4'>
                    <OrderItemPendding />
                    <OrderItemPendding />
                    <OrderItemPendding />
                    <OrderItemPendding />
                    <OrderItemPendding />
                    <OrderItemPendding />
                    <OrderItemPendding />
                    <OrderItemPendding />
                    <OrderItemPendding />
                </View>
            </View>
        </ScrollView>
    )
}

export default OrderPenddingStack